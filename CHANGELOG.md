# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/) and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## Unreleased

## [2.0.3](https://github.com/torchbox/stylelint-config-torchbox/compare/v2.0.2...v2.0.3) (2023-08-17)

### Bug fixes

Disables the following rules introduced in Stylelint 14 & related package updates, to make it simpler for projects to upgrade to Stylelint 14:

- [`declaration-block-no-redundant-longhand-properties`](https://stylelint.io/user-guide/rules/declaration-block-no-redundant-longhand-properties/)
- [`selector-id-pattern`](https://stylelint.io/user-guide/rules/selector-id-pattern/)
- [`shorthand-property-no-redundant-values`](https://stylelint.io/user-guide/rules/shorthand-property-no-redundant-values/)

## [2.0.2](https://github.com/torchbox/stylelint-config-torchbox/compare/v2.0.1...v2.0.2) (2023-08-17)

### Bug fixes

Disables the following rules introduced in Stylelint 14 & related package updates, to make it simpler for projects to upgrade to Stylelint 14:

- [`keyframes-name-pattern`](https://stylelint.io/user-guide/rules/keyframes-name-pattern/): `^(a-za-z0-9*)(-a-z0-9+)*$, message: Expected keyframe name to be kebab-case`
- [`alpha-value-notation`](https://stylelint.io/user-guide/rules/alpha-value-notation/): `percentage, exceptProperties: opacity`
- [`color-function-notation`](https://stylelint.io/user-guide/rules/color-function-notation/): `modern`
- [`custom-media-pattern`](https://stylelint.io/user-guide/rules/custom-media-pattern/): `^(a-za-z0-9*)(-a-z0-9+)*$, message: Expected custom media query name to be kebab-case`
- [`custom-property-pattern`](https://stylelint.io/user-guide/rules/custom-property-pattern/): `^(a-za-z0-9*)(-a-z0-9+)*$, message: Expected custom property name to be kebab-case`

## [2.0.1](https://github.com/torchbox/stylelint-config-torchbox/compare/v2.0.0...v2.0.1) (2023-08-17)

### Bug fixes

- Add explicit support for Sass/SCSS syntax

## [2.0.0](https://github.com/torchbox/stylelint-config-torchbox/compare/v1.1.1...v2.0.0) (2023-08-17)

### Features

- Update stylelint to v14 for compatibility with PostCSS v8 ([#13](https://github.com/torchbox/stylelint-config-torchbox/pull/13)).
- Update all config dependencies to their latest releases, compatible with stylelint v14 ([#13](https://github.com/torchbox/stylelint-config-torchbox/pull/13)).
- Remove `stylelint-a11y`, which is no longer maintained and does not support stylelint v14. `no-text-align-justify` has been replaced with `declaration-property-value-disallowed-list` ([#13](https://github.com/torchbox/stylelint-config-torchbox/pull/13)).
- Stop enforcing `function-calc-no-invalid`, which has been removed from stylelint ([#13](https://github.com/torchbox/stylelint-config-torchbox/pull/13))
- Change enforced rules from stylelint-config-standard and stylelint-config-prettier.

### BREAKING CHANGES

The configuration now mandates stylelint v14, doesn’t use `stylelint-a11y`, and follows changes in enforced rules from `stylelint-config-standard` and `stylelint-config-prettier`.

No longer enforced (all formatting related):

- [`at-rule-name-space-after`](https://stylelint.io/user-guide/rules/at-rule-name-space-after/)
- [`declaration-bang-space-after`](https://stylelint.io/user-guide/rules/declaration-bang-space-after/)
- [`declaration-bang-space-before`](https://stylelint.io/user-guide/rules/declaration-bang-space-before/)
- [`media-feature-colon-space-after`](https://stylelint.io/user-guide/rules/media-feature-colon-space-after/)
- [`media-feature-colon-space-before`](https://stylelint.io/user-guide/rules/media-feature-colon-space-before/)
- [`media-feature-parentheses-space-inside`](https://stylelint.io/user-guide/rules/media-feature-parentheses-space-inside/)
- [`selector-attribute-brackets-space-inside`](https://stylelint.io/user-guide/rules/selector-attribute-brackets-space-inside/)
- [`selector-attribute-operator-space-after`](https://stylelint.io/user-guide/rules/selector-attribute-operator-space-after/)
- [`selector-attribute-operator-space-before`](https://stylelint.io/user-guide/rules/selector-attribute-operator-space-before/)
- [`selector-pseudo-class-parentheses-space-inside`](https://stylelint.io/user-guide/rules/selector-pseudo-class-parentheses-space-inside/)

No longer enforced (from `stylelint-a11y`):

- `a11y/no-obsolete-attribute`
- `a11y/no-obsolete-element`
- `a11y/no-outline-none`

Newly enforced rules:

- [`alpha-value-notation`](https://stylelint.io/user-guide/rules/alpha-value-notation/): `percentage, exceptProperties: opacity`
- [`color-function-notation`](https://stylelint.io/user-guide/rules/color-function-notation/): `modern`
- [`custom-media-pattern`](https://stylelint.io/user-guide/rules/custom-media-pattern/): `^(a-za-z0-9*)(-a-z0-9+)*$, message: Expected custom media query name to be kebab-case`
- [`custom-property-pattern`](https://stylelint.io/user-guide/rules/custom-property-pattern/): `^(a-za-z0-9*)(-a-z0-9+)*$, message: Expected custom property name to be kebab-case`
- [`declaration-block-no-redundant-longhand-properties`](https://stylelint.io/user-guide/rules/declaration-block-no-redundant-longhand-properties/)
- [`font-family-name-quotes`](https://stylelint.io/user-guide/rules/font-family-name-quotes/): `always-where-recommended`
- [`function-url-quotes`](https://stylelint.io/user-guide/rules/function-url-quotes/): `always`
- [`hue-degree-notation`](https://stylelint.io/user-guide/rules/hue-degree-notation/): `angle`
- [`keyframes-name-pattern`](https://stylelint.io/user-guide/rules/keyframes-name-pattern/): `^(a-za-z0-9*)(-a-z0-9+)*$, message: Expected keyframe name to be kebab-case`
- [`no-irregular-whitespace`](https://stylelint.io/user-guide/rules/no-irregular-whitespace/)
- [`number-max-precision`](https://stylelint.io/user-guide/rules/number-max-precision/): `4`
- [`rule-empty-line-before`](https://stylelint.io/user-guide/rules/rule-empty-line-before/): `always-multi-line, except: first-nested, ignore: after-comment`
- [`selector-id-pattern`](https://stylelint.io/user-guide/rules/selector-id-pattern/): `^(a-za-z0-9*)(-a-z0-9+)*$, message: Expected id selector to be kebab-case`
- [`shorthand-property-no-redundant-values`](https://stylelint.io/user-guide/rules/shorthand-property-no-redundant-values/)
- [`custom-property-no-missing-var-function`](https://stylelint.io/user-guide/rules/custom-property-no-missing-var-function/)
- [`declaration-block-no-duplicate-custom-properties`](https://stylelint.io/user-guide/rules/declaration-block-no-duplicate-custom-properties/)

## [1.1.1](https://github.com/torchbox/stylelint-config-torchbox/compare/v1.1.0...v1.1.1) (2023-05-11)

### Bug fixes

- Ignore system colors with `declaration-strict-value`, and unset keyword.

## [1.1.0](https://github.com/torchbox/stylelint-config-torchbox/compare/v1.0.0...v1.1.0) (2022-06-25)

### Features

- Add new at-rule-no-unknown rules for tailwind ([#21](https://github.com/torchbox/stylelint-config-torchbox/pull/21)).

## [1.0.0](https://github.com/torchbox/stylelint-config-torchbox/compare/v0.5.0...v1.0.0) (2020-11-10)

### Features

- Update stylelint to v13 ([#9](https://github.com/torchbox/stylelint-config-torchbox/pull/9)).
- Update all config dependencies to their latest releases, compatible with stylelint v13 ([#9](https://github.com/torchbox/stylelint-config-torchbox/pull/9)).
- Enforce [`value-keyword-case`](https://stylelint.io/user-guide/rules/value-keyword-case/) from stylelint v13 ([#9](https://github.com/torchbox/stylelint-config-torchbox/pull/9)).
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
