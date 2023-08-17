# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/) and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## Unreleased

## [3.0.0](https://github.com/torchbox/stylelint-config-torchbox/compare/v2.0.1...v3.0.0) (2023-08-17)

### Features

- Update stylelint to v15.
- Update all config dependencies to their latest releases, compatible with stylelint v15.
- Remove dependency on `stylelint-config-prettier`, which is no longer needed with stylelint v15.
- Change enforced rules from `stylelint-config-standard`, including 10 new rules (see list below).

### BREAKING CHANGES

The configuration now mandates stylelint v15, and no longer uses `stylelint-config-prettier`. Stylelint has stopped enforcing formatting-related rules, which are no longer relevant with the majority of projects now using Prettier for formatting. See Stylelint’s official [Migrating to 15.0.0](https://stylelint.io/migration-guide/to-15) documentation.

The configuration also switches from `stylelint-config-standard` to `stylelint-config-standard-scss`, which more correctly disables CSS-only rules and replaces them with SCSS-aware rules.

Newly enforced rules:

- [`import-notation`](https://stylelint.io/user-guide/rules/import-notation/)
  - Specify string or URL notation for @import rules.
  - Set to: `string`
- [`keyframe-block-no-duplicate-selectors`](https://stylelint.io/user-guide/rules/keyframe-block-no-duplicate-selectors/)
  - Disallow duplicate selectors within keyframe blocks.
  - Set to: `true`
- [`keyframe-selector-notation`](https://stylelint.io/user-guide/rules/keyframe-selector-notation/)
  - Specify keyword or percentage notation for keyframe selectors.
  - Set to: `percentage-unless-within-keyword-only-block`
- [`selector-anb-no-unmatchable`](https://stylelint.io/user-guide/rules/selector-anb-no-unmatchable/)
  - Disallow unmatchable An+B selectors.
  - Set to: `true`
- [`selector-attribute-quotes`](https://stylelint.io/user-guide/rules/selector-attribute-quotes/)
  - Require or disallow quotes for attribute values.
  - Set to: `always`
- [`scss/at-if-no-null`](https://github.com/stylelint-scss/stylelint-scss/blob/master/src/rules/at-if-no-null/README.md)
  - Check for equality to null is unnecessarily explicit since null is falsey in Sass.
  - Set to: `true`
- [`scss/at-import-no-partial-leading-underscore`](https://github.com/stylelint-scss/stylelint-scss/blob/master/src/rules/at-import-no-partial-leading-underscore/README.md)
  - Disallow leading underscore in partial names in @import.
  - Set to: `true`
- [`scss/at-import-partial-extension`](https://github.com/stylelint-scss/stylelint-scss/blob/master/src/rules/at-import-partial-extension/README.md)
  - Require or disallow extension in @import commands.
  - Set to: `never`
- [`scss/declaration-nested-properties-no-divided-groups`](https://github.com/stylelint-scss/stylelint-scss/blob/master/src/rules/declaration-nested-properties-no-divided-groups/README.md)
  - Disallow nested properties of the same "namespace" be divided into multiple groups.
  - Set to: `true`
- [`scss/no-duplicate-mixins`](https://github.com/stylelint-scss/stylelint-scss/blob/master/src/rules/no-duplicate-mixins/README.md)
  - Disallow duplicate mixins within a stylesheet.
  - Set to: `true`

New rules which have been explicitly disabled:

- [`annotation-no-unknown`](https://stylelint.io/user-guide/rules/annotation-no-unknown/)
  - Disallow unknown annotations.
  - Set to: disabled (rather than `true`)
- [`selector-not-notation`](https://stylelint.io/user-guide/rules/selector-not-notation/)
  - Specify simple or complex notation for :not() pseudo-class selectors.
  - Set to: disabled (rather than `complex`, syntax from Selectors Level 4)
- [`media-feature-range-notation`](https://stylelint.io/user-guide/rules/media-feature-range-notation/)
  - Specify context or prefix notation for media feature ranges.
  - Set to: disabled (rather than `context`, syntax from Media Queries Level 4)
- [`at-rule-empty-line-before`](https://stylelint.io/user-guide/rules/at-rule-empty-line-before/)
  - Require or disallow an empty line before at-rules.
  - Set to: disabled (rather than `always except first-nested, blockless-after-blockless; ignore after-comment; ignoreAtRules else`)
- [`scss/at-extend-no-missing-placeholder`](https://github.com/stylelint-scss/stylelint-scss/blob/master/src/rules/at-extend-no-missing-placeholder/README.md)
  - Disallow at-extends (@extend) with missing placeholders.
  - Set to: disabled (rather than `true`)
- [`scss/at-function-pattern`](https://github.com/stylelint-scss/stylelint-scss/blob/master/src/rules/at-function-pattern/README.md)
  - Specify a pattern for Sass/SCSS-like function names.
  - Set to: disabled (rather than "kebab-case")
- [`scss/dollar-variable-pattern`](https://github.com/stylelint-scss/stylelint-scss/blob/master/src/rules/dollar-variable-pattern/README.md)
  - Specify a pattern for Sass-like variables.
  - Set to: disabled (rather than "kebab-case")
- [`scss/dollar-variable-empty-line-before`](https://github.com/stylelint-scss/stylelint-scss/blob/master/src/rules/dollar-variable-empty-line-before/README.md)
  - Require an empty line or disallow empty lines before $-variable declarations.
  - Set to: disabled (rather than `true`)
- [`scss/double-slash-comment-empty-line-before`](https://github.com/stylelint-scss/stylelint-scss/blob/master/src/rules/double-slash-comment-empty-line-before/README.md)
  - Require or disallow an empty line before //-comments.
  - Set to: disabled (rather than `true`)
- [`scss/no-global-function-names`](https://github.com/stylelint-scss/stylelint-scss/blob/master/src/rules/no-global-function-names/README.md)
  - Disallows the use of global function names, as these global functions are now located inside built-in Sass modules.
  - Set to: disabled (rather than `true`)

Rules which have been replaced by a Sass-specific equivalent:

- `comment-no-empty` (replaced with `scss/comment-no-empty`)
- `function-no-unknown` (replaced with `scss/function-no-unknown`)

New formatting rules which are enforced:

- [`scss/at-if-closing-brace-newline-after`](https://github.com/stylelint-scss/stylelint-scss/blob/master/src/rules/at-if-closing-brace-newline-after/README.md): always-last-in-chain
- [`scss/at-if-closing-brace-space-after`](https://github.com/stylelint-scss/stylelint-scss/blob/master/src/rules/at-if-closing-brace-space-after/README.md): always-intermediate
- [`scss/at-else-closing-brace-newline-after`](https://github.com/stylelint-scss/stylelint-scss/blob/master/src/rules/at-else-closing-brace-newline-after/README.md): always-last-in-chain
- [`scss/at-else-closing-brace-space-after`](https://github.com/stylelint-scss/stylelint-scss/blob/master/src/rules/at-else-closing-brace-space-after/README.md): always-intermediate
- [`scss/at-else-empty-line-before`](https://github.com/stylelint-scss/stylelint-scss/blob/master/src/rules/at-else-empty-line-before/README.md): never
- [`scss/at-else-if-parentheses-space-before`](https://github.com/stylelint-scss/stylelint-scss/blob/master/src/rules/at-else-if-parentheses-space-before/README.md): always
- [`scss/at-function-parentheses-space-before`](https://github.com/stylelint-scss/stylelint-scss/blob/master/src/rules/at-function-parentheses-space-before/README.md): never
- [`scss/at-mixin-parentheses-space-before`](https://github.com/stylelint-scss/stylelint-scss/blob/master/src/rules/at-mixin-parentheses-space-before/README.md): never
- [`scss/at-rule-conditional-no-parentheses`](https://github.com/stylelint-scss/stylelint-scss/blob/master/src/rules/at-rule-conditional-no-parentheses/README.md): true
- [`scss/dollar-variable-colon-space-after`](https://github.com/stylelint-scss/stylelint-scss/blob/master/src/rules/dollar-variable-colon-space-after/README.md): always
- [`scss/dollar-variable-colon-space-before`](https://github.com/stylelint-scss/stylelint-scss/blob/master/src/rules/dollar-variable-colon-space-before/README.md): never
- [`scss/double-slash-comment-whitespace-inside`](https://github.com/stylelint-scss/stylelint-scss/blob/master/src/rules/double-slash-comment-whitespace-inside/README.md): always
- [`scss/function-quote-no-quoted-strings-inside`](https://github.com/stylelint-scss/stylelint-scss/blob/master/src/rules/function-quote-no-quoted-strings-inside/README.md): true
- [`scss/function-unquote-no-unquoted-strings-inside`](https://github.com/stylelint-scss/stylelint-scss/blob/master/src/rules/function-unquote-no-unquoted-strings-inside/README.md): true
- [`scss/operator-no-newline-after`](https://github.com/stylelint-scss/stylelint-scss/blob/master/src/rules/operator-no-newline-after/README.md): true
- [`scss/operator-no-newline-before`](https://github.com/stylelint-scss/stylelint-scss/blob/master/src/rules/operator-no-newline-before/README.md): true
- [`scss/operator-no-unspaced`](https://github.com/stylelint-scss/stylelint-scss/blob/master/src/rules/operator-no-unspaced/README.md): true

Formatting rules which are no longer enforced:

- [`number-leading-zero`](https://stylelint.io/user-guide/rules/number-leading-zero/)
- [`at-rule-empty-line-before`](https://stylelint.io/user-guide/rules/at-rule-empty-line-before/)
- [`at-rule-name-case`](https://stylelint.io/user-guide/rules/at-rule-name-case/)
- [`at-rule-name-newline-after`](https://stylelint.io/user-guide/rules/at-rule-name-newline-after/)
- [`at-rule-name-space-after`](https://stylelint.io/user-guide/rules/at-rule-name-space-after/)
- [`at-rule-semicolon-newline-after`](https://stylelint.io/user-guide/rules/at-rule-semicolon-newline-after/)
- [`at-rule-semicolon-space-before`](https://stylelint.io/user-guide/rules/at-rule-semicolon-space-before/)
- [`block-opening-brace-newline-after`](https://stylelint.io/user-guide/rules/block-opening-brace-newline-after/)
- [`block-opening-brace-newline-before`](https://stylelint.io/user-guide/rules/block-opening-brace-newline-before/)
- [`block-opening-brace-space-after`](https://stylelint.io/user-guide/rules/block-opening-brace-space-after/)
- [`block-opening-brace-space-before`](https://stylelint.io/user-guide/rules/block-opening-brace-space-before/)
- [`block-closing-brace-empty-line-before`](https://stylelint.io/user-guide/rules/block-closing-brace-empty-line-before/)
- [`block-closing-brace-newline-after`](https://stylelint.io/user-guide/rules/block-closing-brace-newline-after/)
- [`block-closing-brace-newline-before`](https://stylelint.io/user-guide/rules/block-closing-brace-newline-before/)
- [`block-closing-brace-space-after`](https://stylelint.io/user-guide/rules/block-closing-brace-space-after/)
- [`block-closing-brace-space-before`](https://stylelint.io/user-guide/rules/block-closing-brace-space-before/)
- [`color-hex-case`](https://stylelint.io/user-guide/rules/color-hex-case/)
- [`declaration-bang-space-after`](https://stylelint.io/user-guide/rules/declaration-bang-space-after/)
- [`declaration-bang-space-before`](https://stylelint.io/user-guide/rules/declaration-bang-space-before/)
- [`declaration-block-semicolon-newline-after`](https://stylelint.io/user-guide/rules/declaration-block-semicolon-newline-after/)
- [`declaration-block-semicolon-newline-before`](https://stylelint.io/user-guide/rules/declaration-block-semicolon-newline-before/)
- [`declaration-block-semicolon-space-after`](https://stylelint.io/user-guide/rules/declaration-block-semicolon-space-after/)
- [`declaration-block-semicolon-space-before`](https://stylelint.io/user-guide/rules/declaration-block-semicolon-space-before/)
- [`declaration-block-trailing-semicolon`](https://stylelint.io/user-guide/rules/declaration-block-trailing-semicolon/)
- [`declaration-colon-newline-after`](https://stylelint.io/user-guide/rules/declaration-colon-newline-after/)
- [`declaration-colon-space-after`](https://stylelint.io/user-guide/rules/declaration-colon-space-after/)
- [`declaration-colon-space-before`](https://stylelint.io/user-guide/rules/declaration-colon-space-before/)
- [`function-comma-newline-after`](https://stylelint.io/user-guide/rules/function-comma-newline-after/)
- [`function-comma-newline-before`](https://stylelint.io/user-guide/rules/function-comma-newline-before/)
- [`function-comma-space-after`](https://stylelint.io/user-guide/rules/function-comma-space-after/)
- [`function-comma-space-before`](https://stylelint.io/user-guide/rules/function-comma-space-before/)
- [`function-max-empty-lines`](https://stylelint.io/user-guide/rules/function-max-empty-lines/)
- [`function-whitespace-after`](https://stylelint.io/user-guide/rules/function-whitespace-after/)
- [`indentation`](https://stylelint.io/user-guide/rules/indentation/)
- [`linebreaks`](https://stylelint.io/user-guide/rules/linebreaks/)
- [`max-empty-lines`](https://stylelint.io/user-guide/rules/max-empty-lines/)
- [`max-line-length`](https://stylelint.io/user-guide/rules/max-line-length/)
- [`media-feature-colon-space-after`](https://stylelint.io/user-guide/rules/media-feature-colon-space-after/)
- [`media-feature-colon-space-before`](https://stylelint.io/user-guide/rules/media-feature-colon-space-before/)
- [`media-feature-name-case`](https://stylelint.io/user-guide/rules/media-feature-name-case/)
- [`media-feature-parentheses-space-inside`](https://stylelint.io/user-guide/rules/media-feature-parentheses-space-inside/)
- [`media-feature-range-operator-space-after`](https://stylelint.io/user-guide/rules/media-feature-range-operator-space-after/)
- [`media-feature-range-operator-space-before`](https://stylelint.io/user-guide/rules/media-feature-range-operator-space-before/)
- [`media-query-list-comma-newline-after`](https://stylelint.io/user-guide/rules/media-query-list-comma-newline-after/)
- [`media-query-list-comma-newline-before`](https://stylelint.io/user-guide/rules/media-query-list-comma-newline-before/)
- [`media-query-list-comma-space-after`](https://stylelint.io/user-guide/rules/media-query-list-comma-space-after/)
- [`media-query-list-comma-space-before`](https://stylelint.io/user-guide/rules/media-query-list-comma-space-before/)
- [`no-empty-first-line`](https://stylelint.io/user-guide/rules/no-empty-first-line/)
- [`no-eol-whitespace`](https://stylelint.io/user-guide/rules/no-eol-whitespace/)
- [`no-extra-semicolons`](https://stylelint.io/user-guide/rules/no-extra-semicolons/)
- [`no-missing-end-of-source-newline`](https://stylelint.io/user-guide/rules/no-missing-end-of-source-newline/)
- [`number-no-trailing-zeros`](https://stylelint.io/user-guide/rules/number-no-trailing-zeros/)
- [`property-case`](https://stylelint.io/user-guide/rules/property-case/)
- [`selector-attribute-brackets-space-inside`](https://stylelint.io/user-guide/rules/selector-attribute-brackets-space-inside/)
- [`selector-attribute-operator-space-after`](https://stylelint.io/user-guide/rules/selector-attribute-operator-space-after/)
- [`selector-attribute-operator-space-before`](https://stylelint.io/user-guide/rules/selector-attribute-operator-space-before/)
- [`selector-attribute-quotes`](https://stylelint.io/user-guide/rules/selector-attribute-quotes/)
- [`selector-combinator-space-after`](https://stylelint.io/user-guide/rules/selector-combinator-space-after/)
- [`selector-combinator-space-before`](https://stylelint.io/user-guide/rules/selector-combinator-space-before/)
- [`selector-descendant-combinator-no-non-space`](https://stylelint.io/user-guide/rules/selector-descendant-combinator-no-non-space/)
- [`selector-list-comma-newline-after`](https://stylelint.io/user-guide/rules/selector-list-comma-newline-after/)
- [`selector-list-comma-newline-before`](https://stylelint.io/user-guide/rules/selector-list-comma-newline-before/)
- [`selector-list-comma-space-after`](https://stylelint.io/user-guide/rules/selector-list-comma-space-after/)
- [`selector-list-comma-space-before`](https://stylelint.io/user-guide/rules/selector-list-comma-space-before/)
- [`selector-max-empty-lines`](https://stylelint.io/user-guide/rules/selector-max-empty-lines/)
- [`selector-pseudo-class-parentheses-space-inside`](https://stylelint.io/user-guide/rules/selector-pseudo-class-parentheses-space-inside/)
- [`selector-pseudo-element-case`](https://stylelint.io/user-guide/rules/selector-pseudo-element-case/)
- [`selector-pseudo-class-case`](https://stylelint.io/user-guide/rules/selector-pseudo-class-case/)
- [`string-quotes`](https://stylelint.io/user-guide/rules/string-quotes/)
- [`unicode-bom`](https://stylelint.io/user-guide/rules/unicode-bom/)
- [`unit-case`](https://stylelint.io/user-guide/rules/unit-case/)
- [`value-list-comma-newline-after`](https://stylelint.io/user-guide/rules/value-list-comma-newline-after/)
- [`value-list-comma-newline-before`](https://stylelint.io/user-guide/rules/value-list-comma-newline-before/)
- [`value-list-comma-space-after`](https://stylelint.io/user-guide/rules/value-list-comma-space-after/)
- [`value-list-comma-space-before`](https://stylelint.io/user-guide/rules/value-list-comma-space-before/)
- [`value-list-max-empty-lines`](https://stylelint.io/user-guide/rules/value-list-max-empty-lines/)

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
- Stop enforcing [`scss/media-feature-value-dollar-variable`](https://github.com/stylelint-scss/stylelint-scss#readme): `always`

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
