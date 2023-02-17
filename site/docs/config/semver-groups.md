---
id: semver-groups
title: semverGroups
---

Allow some packages to have different semver range rules to the rest of your
monorepo. Each dependency can only belong to one semver group, the first rule
which matches a given dependency and package will apply.

## Example use cases

1: Every dependency of `@myrepo/library` should have a semver range of `~`,
regardless of what the rest of the monorepo uses:

```json
{
  "semverGroups": [
    {
      "range": "~",
      "dependencies": ["**"],
      "packages": ["@myrepo/library"]
    }
  ]
}
```

2: Every dependency of `@myrepo/library` whose name matches `@alpha/**` should
have a semver range of `^`, regardless of what the rest of that package or the
rest of the monorepo uses:

```json
{
  "semverGroups": [
    {
      "range": "^",
      "dependencies": ["@alpha/**"],
      "packages": ["@myrepo/library"]
    }
  ]
}
```

3: Every dependency in the monorepo whose name matches `@alpha/**` should have a
semver range of `~`, regardless of what the rest of the monorepo uses:

```json
{
  "semverGroups": [
    {
      "range": "~",
      "dependencies": ["@alpha/**"],
      "packages": ["**"]
    }
  ]
}
```

3: Production dependencies should have fixed version numbers, but development
and peer dependencies can be broader.

```json
{
  "semverGroups": [
    {
      "range": "",
      "dependencyTypes": [
        "dependencies",
        "resolutions",
        "overrides",
        "pnpmOverrides",
        "workspace"
      ],
      "dependencies": ["**"],
      "packages": ["**"]
    },
    {
      "range": "~",
      "dependencyTypes": ["devDependencies"],
      "dependencies": ["**"],
      "packages": ["**"]
    },
    {
      "range": "^",
      "dependencyTypes": ["peerDependencies"],
      "dependencies": ["**"],
      "packages": ["**"]
    }
  ]
}
```

## `semverGroup.range`

Which of the [Supported Ranges](./semver-range.md#supported-ranges) this group
should use.

## `semverGroup.dependencies`

Works the same as
[`versionGroup.dependencies`](./version-groups.md#dependencies).

## `semverGroup.isIgnored`

Works the same as [`versionGroup.isIgnored`](./version-groups.md#isignored).

## `semverGroup.packages`

Works the same as [`versionGroup.packages`](./version-groups.md#packages).

## `semverGroup.dependencyTypes`

Works the same as
[`versionGroup.dependencyTypes`](./version-groups.md#dependencytypes).