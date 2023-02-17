---
id: filter
title: filter
---

A string which will be passed to `new RegExp()` to match against package names
that should be included.

:::danger

`filter` was originally intended as a convenience to be used from the command
line to filter the output of `syncpack list`, **it is not recommended to add
this to your config file to manage your project more generally**.

Instead use [`versionGroups`](./version-groups.md) and/or
[`semverGroups`](./semver-groups.md).

:::