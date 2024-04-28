#![allow(dead_code)]
#![allow(unused_variables)]

use colored::*;
use itertools::Itertools;
use log::debug;
use regex::Regex;
use std::{collections::HashMap, fs, io, path};

use crate::{config::Rcfile, semver_group::SemverGroup, version_group::VersionGroup};

mod cli;
mod config;
mod dependency_type;
mod format;
mod group_selector;
mod instance;
mod package_json;
mod semver_group;
mod semver_ranges;
mod specifier;
mod version_group;
mod versions;

enum Subcommand {
  List,
  Lint,
  Fix,
}

// - [ ] when fixing, write to fixed_specifier_type/fixed_specifier on instance
fn main() -> io::Result<()> {
  env_logger::init();

  let subcommand = match cli::create().get_matches().subcommand() {
    Some(("list", matches)) => (Subcommand::List, None),
    Some(("lint", matches)) => (Subcommand::Lint, Some(cli::get_enabled_steps(matches))),
    Some(("fix", matches)) => (Subcommand::Fix, Some(cli::get_enabled_steps(matches))),
    _ => {
      debug!("@TODO: output --help when command is not recognised");
      std::process::exit(1);
    }
  };

  let cwd = std::env::current_dir()?;
  let rcfile = config::get();

  debug!("rcfile: {:#?}", &rcfile);

  let dependency_types = Rcfile::get_enabled_dependency_types(&rcfile);
  let sources = rcfile.get_sources(&cwd);
  let semver_groups = SemverGroup::from_rcfile(&rcfile);
  let mut packages = get_packages(sources, &cwd);
  let mut version_groups = VersionGroup::from_rcfile(&rcfile);
  let mut instances = get_instances(&packages, &dependency_types, &rcfile.get_filter());

  // assign every instance to the first group it matches
  instances.iter_mut().for_each(|instance| {
    semver_groups
      .iter()
      .any(|group| group.add_instance_if_eligible(instance));
    version_groups
      .iter_mut()
      .any(|group| group.add_instance_if_eligible(instance));
  });

  let is_valid: bool = match subcommand {
    (Subcommand::List, _) => {
      version_groups.iter().for_each(|group| {
        match group {
          VersionGroup::Banned(group) => {}
          VersionGroup::Ignored(group) => {}
          VersionGroup::Pinned(group) => {}
          VersionGroup::SameRange(group) => {}
          VersionGroup::SnappedTo(group) => {}
          VersionGroup::Standard(group) => {
            print_group_header(&group.selector.label);
            group
              .instances_by_name
              .iter()
              .for_each(|(name, instance_group)| {
                // right align the count of instances
                let count = format!("{: >4}x", instance_group.all.len()).dimmed();
                if has_mismatches(instance_group) {
                  println!("  {} {}", count, name.red());
                  instance_group.unique_specifiers.iter().for_each(|actual| {
                    if instance_group.is_mismatch(actual) {
                      print_version_mismatch(instance_group, actual);
                    }
                  });
                } else {
                  print_version_match(instance_group, count, name);
                };
              })
          }
        };
      });
      true
    }
    (Subcommand::Lint, some_enabled) => {
      let enabled = some_enabled.unwrap();
      let format_valid = !enabled.format || format::lint_all(&cwd, &rcfile, &mut packages);
      println!("format: {}", format_valid);
      let ranges_valid = !enabled.ranges || semver_ranges::lint_all(&cwd, &rcfile, &mut packages);
      println!("semver ranges: {}", ranges_valid);
      let versions_valid = !enabled.versions || versions::lint_all(&cwd, &rcfile, &mut packages);
      println!("versions: {}", versions_valid);
      format_valid && ranges_valid && versions_valid
    }
    (Subcommand::Fix, some_enabled) => {
      let enabled = some_enabled.unwrap();
      let format_valid = !enabled.format || format::fix_all(&cwd, &rcfile, &mut packages);
      println!("format: {}", format_valid);
      let ranges_valid = !enabled.ranges || semver_ranges::fix_all(&cwd, &rcfile, &mut packages);
      println!("semver ranges: {}", ranges_valid);
      let versions_valid = !enabled.versions || versions::fix_all(&cwd, &rcfile, &mut packages);
      println!("versions: {}", versions_valid);
      format_valid && ranges_valid && versions_valid
    }
  };

  if is_valid {
    std::process::exit(0);
  } else {
    std::process::exit(1);
  }
}

fn print_group_header(label: &String) {
  let print_width = 80;
  let header = format!("= {} ", label);
  let divider = if header.len() < print_width {
    "=".repeat(print_width - header.len())
  } else {
    "".to_string()
  };
  let full_header = format!("{}{}", header, divider);
  println!("{}", full_header.blue());
}

fn print_version_match(
  instance_group: &version_group::InstanceGroup<'_>,
  count: ColoredString,
  name: &String,
) {
  let version = &instance_group.unique_specifiers.iter().join(" ");
  println!("  {} {} {}", count, name, &version.dimmed());
}

fn print_version_mismatch(instance_group: &version_group::InstanceGroup<'_>, actual: &String) {
  let icon = "✘".red();
  let arrow = "→".dimmed();
  let expected = instance_group.preferred_version.as_ref().unwrap();
  println!(
    "        {} {} {} {}",
    icon,
    actual.red(),
    arrow,
    expected.green()
  );
}

fn has_mismatches(instance_group: &version_group::InstanceGroup<'_>) -> bool {
  instance_group.unique_specifiers.len() > (1 as usize)
}

fn get_packages(
  mut sources: Vec<path::PathBuf>,
  cwd: &path::PathBuf,
) -> Vec<package_json::PackageJson> {
  sources
    .iter_mut()
    .filter_map(|file_path| read_file(&cwd, &file_path).ok())
    .collect()
}

fn get_instances<'a>(
  packages: &'a Vec<package_json::PackageJson>,
  dependency_types: &'a HashMap<String, dependency_type::DependencyType>,
  filter: &Regex,
) -> Vec<instance::Instance<'a>> {
  packages
    .iter()
    .flat_map(|package| package.get_instances(&dependency_types, &filter))
    .collect()
}

/// Read and parse a package.json file
fn read_file<P: AsRef<path::Path>>(
  cwd: &std::path::PathBuf,
  file_path: &P,
) -> io::Result<package_json::PackageJson> {
  let json = fs::read_to_string(file_path)?;
  let contents: serde_json::Value = serde_json::from_str(&json)?;

  Ok(package_json::PackageJson {
    file_path: file_path.as_ref().to_path_buf(),
    json,
    contents,
  })
}

fn create_error(message: &str) -> io::Error {
  io::Error::new(io::ErrorKind::Other, message)
}
