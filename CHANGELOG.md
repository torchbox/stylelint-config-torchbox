# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/) and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## Unreleased

## [1.1.0](https://github.com/torchbox/stylelint-config-torchbox/compare/v1.0.0...v1.1.0) (2022-06-25)

## Features

- Add new at-rule-no-unknown rules for tailwind ([#21](https://github.com/torchbox/stylelint-config-torchbox/pull/21))

## [1.0.0](https://github.com/torchbox/stylelint-config-torchbox/compare/v0.5.0...v1.0.0) (2020-11-10)

### Features

- Update stylelint to v13 ([#9](https://github.com/torchbox/stylelint-config-torchbox/pull/9))
- Update all config dependencies to their latest releases, compatible with stylelint v13 ([#9](https://github.com/torchbox/stylelint-config-torchbox/pull/9))
- Enforce [`value-keyword-case`](https://stylelint.io/user-guide/rules/value-keyword-case/) from stylelint v13 ([#9](https://github.com/torchbox/stylelint-config-torchbox/pull/9))
- Rename all deprecated stylelint rules to their newer alternatives.
- The config’s README documentation now links directly to rules’ documentation for plugins.

### BREAKING CHANGES

The configuration now mandates stylelint v13, and additionally enforces [`value-keyword-case`](https://stylelint.io/user-guide/rules/value-keyword-case/).

### Upgrading to v1.0.0

Here are recommended steps:

```bash
# 1. Install the new versions.
npm install --save-dev stylelint@13 stylelint-config-torchbox@^1.0.0
# 2. Attempt to auto-fix any new issue picked up by Stylelint.
npm run lint:css -- --fix
npm run format
# 3. Check if there are remaining issues
npm run lint:css
```

If there are remaining issues, consider a gradual approach: whether you want to update the code, or disable the corresponding rules. This can be done either in the Stylelint configuration, or via [`stylelint-disable` configuration comments](https://stylelint.io/user-guide/ignore-code/). Get the rules reporting issues with: `npm run lint:js -- --formatter tap | grep ruleId | cut -d ':' -f 2 | cut -c 2- | sort | uniq`. For projects strapped for time, disabling all new rules listed above may be a reasonable tradeoff.

## [0.5.0](https://github.com/torchbox/stylelint-config-torchbox/compare/v0.4.0...v0.5.0) (2019-10-10)

### Features

- Stop enforcing `a11y/content-property-no-static-value`, which feels too restrictive for projects already following best practices.

### Bug fixes

- Fix `scale-unlimited/declaration-strict-value` being applied twice to `background-color` declarations.

### Upgrading to v0.5.0

Projects considering this release should [skip straight to v1.0.0](#upgrading-to-v100).

## [0.4.0](https://github.com/torchbox/stylelint-config-torchbox/compare/v0.3.0...v0.4.0) (2019-10-08)

### Features

- Enforce accessibility-related rules with [stylelint-a11y](https://github.com/YozhikM/stylelint-a11y) ([#2](https://github.com/torchbox/stylelint-config-torchbox/issues/2), [#3](https://github.com/torchbox/stylelint-config-torchbox/pull/3)).
- Enforce usage of variables for colors with [stylelint-declaration-strict-value](https://github.com/AndyOGo/stylelint-declaration-strict-value) ([#2](https://github.com/torchbox/stylelint-config-torchbox/issues/2), [#4](https://github.com/torchbox/stylelint-config-torchbox/pull/4)).
- Enforce "hyphenated BEM" nomenclature for class names with `selector-class-pattern` ([#1](https://github.com/torchbox/stylelint-config-torchbox/issues/1), [#5](https://github.com/torchbox/stylelint-config-torchbox/pull/5)).
- Enforce "hyphenated lowercase" nomenclature for mixins with `scss/at-mixin-pattern` ([#1](https://github.com/torchbox/stylelint-config-torchbox/issues/1), [#5](https://github.com/torchbox/stylelint-config-torchbox/pull/5)).

### BREAKING CHANGES

- Most if not all of the rules changes in this release are breaking changes. Expect breakage on every minor release until the config reaches v1.0.0.

### Upgrading to v0.4.0

Projects considering this release should [skip straight to v1.0.0](#upgrading-to-v100).

## [0.3.0](https://github.com/torchbox/stylelint-config-torchbox/compare/v0.2.0...v0.3.0) (2019-09-23)

### Features

- Stop enforcing order of rules and at-rules in declarations.

### BREAKING CHANGES

- Most if not all of the rules changes in this release are breaking changes. Expect breakage on every minor release until the config reaches v1.0.0.

### Upgrading to v0.3.0

Projects considering this release should [skip straight to v1.0.0](#upgrading-to-v100).

## [0.2.0](https://github.com/torchbox/stylelint-config-torchbox/compare/v0.1.0...v0.2.0) (2019-09-23)

### Features

- Enforce ordering of declaration blocks with [stylelint-order](https://github.com/hudochenkov/stylelint-order).
- Allow using more usage of types in selectors with [selector-max-type](https://stylelint.io/user-guide/rules/selector-max-type) options.
- Enforce `number-leading-zero`: always
- Stop enforcing [`scss/media-feature-value-dollar-variable`](https://github.com/kristerkari/stylelint-scss#readme): `always`

### BREAKING CHANGES

- Most if not all of the rules changes in this release are breaking changes. Expect breakage on every minor release until the config reaches v1.0.0.

### Upgrading to v0.2.0

Projects considering this release should [skip straight to v1.0.0](#upgrading-to-v100).

## [0.1.0](https://github.com/torchbox/stylelint-config-torchbox/releases/tag/v0.1.0) (2019-08-30)

First release

## [x.y.z](https://github.com/torchbox/stylelint-config-torchbox/compare/va.b.c...vx.y.z) (YYYY-MM-DD)

### Bug Fixes

### Features

### BREAKING CHANGES
