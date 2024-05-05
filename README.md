# syncpack

<p align="center">
  <img src="https://jamiemason.github.io/syncpack/logo.svg" width="200" height="179" alt="">
  <br>Consistent dependency versions in large JavaScript Monorepos.
  <br><a href="https://jamiemason.github.io/syncpack">https://jamiemason.github.io/syncpack</a>
</p>

## Rust

A work in progress implementation of Syncpack in Rust. It is not ready for public use and is hardcoded to operate on files in the `fixtures/` directory.

## Develop

```shell
git clone https://github.com/JamieMason/syncpack.git -b rust/main syncpack-rust
cd syncpack-rust
```

## Run (Development)

There are 2 commands, `lint` and `fix`.

```shell
cargo run -- lint
cargo run -- fix
```

Both will check formatting, semver ranges, and version mismatches by default. They can both be filtered with `--format`, `--ranges`, and `--versions`.

## Build and Run (Production)

```shell
cargo build --release
target/release/syncpack lint
target/release/syncpack fix
```
