# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some Oxlint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the Oxlint configuration

If you are developing a production application, we recommend enabling type-aware lint rules by installing `oxlint-tsgolint` and editing `.oxlintrc.json`:

```json
{
  "$schema": "./node_modules/oxlint/configuration_schema.json",
  "plugins": ["react", "typescript", "oxc"],
  "options": {
    "typeAware": true
  },
  "rules": {
    "react/rules-of-hooks": "error",
    "react/only-export-components": ["warn", { "allowConstantExport": true }]
  }
}
```

See the [Oxlint rules documentation](https://oxc.rs/docs/guide/usage/linter/rules) for the full list of rules and categories.

## 👥 Contributors

<!-- CONTRIBUTORS:START (auto-generated — do not edit by hand) -->
| | Contributor | GitHub | Lines added | Commits |
| :---: | :--- | :--- | ---: | ---: |
|  | **sudipabiswas** | — | 6,218 | **5** |
| <img src="https://github.com/MusfiqurTuhin.png?size=48" width="34" height="34" alt="" /> | **MusfiqurTuhin** | [@MusfiqurTuhin](https://github.com/MusfiqurTuhin) | 149 | **1** |
| | | **Total** | **6,367** | **6** |
<!-- CONTRIBUTORS:END -->

<sub>Auto-updated on every push to `main` by [`.github/workflows/contributors.yml`](.github/workflows/contributors.yml) — commits + lines-added per author via `git shortlog` / `git log --numstat` (identities in [`.mailmap`](.mailmap); merges & lockfiles excluded).</sub>
