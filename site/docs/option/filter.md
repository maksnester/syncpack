---
id: filter
title: --filter
---

A string which will be passed to `new RegExp()` to match against package names
that should be included. This is useful alongside [`syncpack list`](../list.md)
to check the status of a subset of dependencies throughout your monorepo.

```
syncpack list --filter react
```