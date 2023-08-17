# [stylelint-config-torchbox](https://www.npmjs.com/package/stylelint-config-torchbox) [<img src="https://raw.githubusercontent.com/torchbox/stylelint-config-torchbox/main/.github/stylelint-logo.svg?sanitize=true" alt="Stylelint" width="90" height="90" align="right">](https://stylelint.io)

[![stylelint-config-torchbox on npm](https://img.shields.io/npm/v/stylelint-config-torchbox.svg)](https://www.npmjs.com/package/stylelint-config-torchbox) [![Build status](https://github.com/torchbox/stylelint-config-torchbox/workflows/CI/badge.svg)](https://github.com/torchbox/stylelint-config-torchbox/actions)

> Shareable stylelint config for CSS and SCSS, following Torchbox’s code style.

## Usage

Install stylelint, and the config:

```sh
npm install --save-dev stylelint@13 stylelint-config-torchbox@1.0.0
```

Then [configure stylelint to use this config](https://stylelint.io/user-guide/configuration/#extends). As a `stylelint.config.js` in the root of your project:

```js
module.exports = {
  // See https://github.com/torchbox/stylelint-config-torchbox for rules.
  extends: 'stylelint-config-torchbox',
};
```

### Tips

#### Linting setup for ongoing projects

Review our [CHANGELOG](https://github.com/torchbox/stylelint-config-torchbox/blob/main/CHANGELOG.md) for guidance on how to upgrade a project’s linting to a specific version.

More generally, when retrofitting stricter linting onto an existing project, consider [a gradual approach to linting strictness](https://thib.me/upgrading-to-stricter-eslint-config), so you can start using linting without having to change significant portions of the project’s code. Here is an example, disabling commonly hard-to-retrofit rules:

```js
// Rules which we ideally would want to enforce but are reporting too many issues currently.
const legacyRules = {
  'max-nesting-depth': null,
  'selector-max-specificity': null,
};

module.exports = {
  // See https://github.com/torchbox/stylelint-config-torchbox for rules.
  extends: 'stylelint-config-torchbox',
  rules: {
    ...legacyRules,
  },
};
```

#### Common CLI flags

We recommend the following `run` script to add to your `package.json`:

```json
"lint:css": "stylelint --report-needless-disables 'src/sass' 'src/vue'"
```

- Use [`--report-needless-disables`](https://stylelint.io/user-guide/node-api/#reportneedlessdisables) flag to ensure you do not use more `stylelint-disable` comments than needed.
- Target specific folders so Stylelint doesn’t attempt to lint e.g. JS or HTML files.

#### `.stylelintignore`

Stylelint supports ignore patterns in a `.stylelintignore` file, however we tend not to use this since we lint all files within a given folder.

### Prettier

This config is [Prettier](https://prettier.io/)-compatible, there isn’t anything extra needed.

### Tailwind

This config should work with [Tailwind](https://tailwindcss.com/) with no adjustments needed. Please submit an issue if that’s not the case.

### pre-commit

Here is a sample setup with our recommended configuration for the [pre-commit](https://pre-commit.com/) pre-commit hook framework:

```yaml
default_language_version:
  node: system
repos:
  - repo: https://github.com/thibaudcolas/pre-commit-stylelint
    rev: v13.13.1
    hooks:
      - id: stylelint
        files: \.(scss|vue)$
        additional_dependencies:
          - stylelint@13.13.1
          - stylelint-config-torchbox@1.0.0
```

### Vue

Stylelint supports Vue, and our configuration is usable in `.vue` single-file components with no changes. Do make sure linting is configured to check `.vue` files:

- Wherever `stylelint` is manually invoked, make sure to point it both at stylesheets, and Vue components: `stylelint --report-needless-disables './src/sass' './src/vue_components'`.
- With [`stylelint-webpack-plugin`](https://webpack.js.org/plugins/stylelint-webpack-plugin/), use `extensions: ['scss', 'vue'],`.
- With [`pre-commit`](https://github.com/awebdeveloper/pre-commit-stylelint), use `files: \.(scss|vue)$`.

### Related tools

To get the most out of this config, it is assumed that projects have the following tools set up:

- [Prettier](https://prettier.io/) for automated formatting of stylesheets.
- [Browserslist](https://github.com/browserslist/browserslist) and [autoprefixer](https://github.com/postcss/autoprefixer).

## What’s included

> See [`config.js`](./config.js) for the config definition. This package depends on:
>
> - [`stylelint-scss`](https://github.com/kristerkari/stylelint-scss)
> - [`stylelint-order`](https://github.com/hudochenkov/stylelint-order)
> - [`stylelint-declaration-strict-value`](https://github.com/AndyOGo/stylelint-declaration-strict-value)
> - [`stylelint-config-standard`](https://github.com/stylelint/stylelint-config-standard)
> - [`stylelint-config-prettier`](https://github.com/prettier/stylelint-config-prettier)

<!-- Generated with: npm run build:docs -->

### Rules

#### Custom rules

- [`color-named`](https://stylelint.io/user-guide/rules/color-named/): `never`
- [`number-leading-zero`](https://stylelint.io/user-guide/rules/number-leading-zero/): `always`
- [`declaration-block-no-shorthand-property-overrides`](https://stylelint.io/user-guide/rules/declaration-block-no-shorthand-property-overrides/)
- [`declaration-no-important`](https://stylelint.io/user-guide/rules/declaration-no-important/)
- [`selector-max-id`](https://stylelint.io/user-guide/rules/selector-max-id/): `0`
- [`selector-max-type`](https://stylelint.io/user-guide/rules/selector-max-type/): `2, ignore: child, compounded, next-sibling`
- [`selector-class-pattern`](https://stylelint.io/user-guide/rules/selector-class-pattern/): `, resolveNestedSelectors: true`
- [`max-nesting-depth`](https://stylelint.io/user-guide/rules/max-nesting-depth/): `4`
- [`selector-max-specificity`](https://stylelint.io/user-guide/rules/selector-max-specificity/): `0,4,0`
- [`value-no-vendor-prefix`](https://stylelint.io/user-guide/rules/value-no-vendor-prefix/)
- [`property-no-vendor-prefix`](https://stylelint.io/user-guide/rules/property-no-vendor-prefix/)
- [`selector-no-vendor-prefix`](https://stylelint.io/user-guide/rules/selector-no-vendor-prefix/)
- [`media-feature-name-no-vendor-prefix`](https://stylelint.io/user-guide/rules/media-feature-name-no-vendor-prefix/)
- [`at-rule-no-vendor-prefix`](https://stylelint.io/user-guide/rules/at-rule-no-vendor-prefix/)
- [`declaration-property-value-disallowed-list`](https://stylelint.io/user-guide/rules/declaration-property-value-disallowed-list/): `text-align: justify`
- [`scss/at-rule-no-unknown`](https://github.com/kristerkari/stylelint-scss/blob/master/src/rules/at-rule-no-unknown/README.md): `true, ignoreAtRules: tailwind, apply, variants, responsive, screen, layer`
- [`scss/declaration-nested-properties`](https://github.com/kristerkari/stylelint-scss/blob/master/src/rules/declaration-nested-properties/README.md): `never`
- [`scss/selector-no-redundant-nesting-selector`](https://github.com/kristerkari/stylelint-scss/blob/master/src/rules/selector-no-redundant-nesting-selector/README.md)
- [`scss/percent-placeholder-pattern`](https://github.com/kristerkari/stylelint-scss/blob/master/src/rules/percent-placeholder-pattern/README.md): `^do-not-use-placeholders$`
- [`scss/dollar-variable-no-missing-interpolation`](https://github.com/kristerkari/stylelint-scss/blob/master/src/rules/dollar-variable-no-missing-interpolation/README.md)
- [`scss/at-mixin-argumentless-call-parentheses`](https://github.com/kristerkari/stylelint-scss/blob/master/src/rules/at-mixin-argumentless-call-parentheses/README.md): `always`
- [`scss/at-mixin-pattern`](https://github.com/kristerkari/stylelint-scss/blob/master/src/rules/at-mixin-pattern/README.md): ``
- [`order/order`](https://github.com/hudochenkov/stylelint-order/blob/master/rules/order/README.md): `dollar-variables, custom-properties, type: at-rule, hasBlock: false, declarations`
- [`scale-unlimited/declaration-strict-value`](https://github.com/AndyOGo/stylelint-declaration-strict-value): `color, fill, stroke, /-color/, ignoreKeywords: currentColor, inherit, transparent, initial, none, unset, Canvas, CanvasText, LinkText, VisitedText, ActiveText, ButtonFace, ButtonText, ButtonBorder, Field, FieldText, Highlight, HighlightText, SelectedItem, SelectedItemText, Mark, MarkText, GrayText, AccentColor, AccentColorText`

#### Rules of `stylelint-config-standard`

- [`alpha-value-notation`](https://stylelint.io/user-guide/rules/alpha-value-notation/): `percentage, exceptProperties: opacity`
- [`color-function-notation`](https://stylelint.io/user-guide/rules/color-function-notation/): `modern`
- [`color-hex-length`](https://stylelint.io/user-guide/rules/color-hex-length/): `short`
- [`comment-empty-line-before`](https://stylelint.io/user-guide/rules/comment-empty-line-before/): `always, except: first-nested, ignore: stylelint-commands`
- [`comment-whitespace-inside`](https://stylelint.io/user-guide/rules/comment-whitespace-inside/): `always`
- [`custom-property-empty-line-before`](https://stylelint.io/user-guide/rules/custom-property-empty-line-before/): `always, except: after-custom-property, first-nested, ignore: after-comment, inside-single-line-block`
- [`custom-media-pattern`](https://stylelint.io/user-guide/rules/custom-media-pattern/): `^(a-za-z0-9*)(-a-z0-9+)*$, message: Expected custom media query name to be kebab-case`
- [`custom-property-pattern`](https://stylelint.io/user-guide/rules/custom-property-pattern/): `^(a-za-z0-9*)(-a-z0-9+)*$, message: Expected custom property name to be kebab-case`
- [`declaration-block-single-line-max-declarations`](https://stylelint.io/user-guide/rules/declaration-block-single-line-max-declarations/): `1`
- [`declaration-block-no-redundant-longhand-properties`](https://stylelint.io/user-guide/rules/declaration-block-no-redundant-longhand-properties/)
- [`font-family-name-quotes`](https://stylelint.io/user-guide/rules/font-family-name-quotes/): `always-where-recommended`
- [`function-name-case`](https://stylelint.io/user-guide/rules/function-name-case/): `lower`
- [`function-url-quotes`](https://stylelint.io/user-guide/rules/function-url-quotes/): `always`
- [`function-whitespace-after`](https://stylelint.io/user-guide/rules/function-whitespace-after/): `always`
- [`hue-degree-notation`](https://stylelint.io/user-guide/rules/hue-degree-notation/): `angle`
- [`keyframes-name-pattern`](https://stylelint.io/user-guide/rules/keyframes-name-pattern/): `^(a-za-z0-9*)(-a-z0-9+)*$, message: Expected keyframe name to be kebab-case`
- [`length-zero-no-unit`](https://stylelint.io/user-guide/rules/length-zero-no-unit/)
- [`media-feature-range-operator-space-after`](https://stylelint.io/user-guide/rules/media-feature-range-operator-space-after/): `always`
- [`media-feature-range-operator-space-before`](https://stylelint.io/user-guide/rules/media-feature-range-operator-space-before/): `always`
- [`no-irregular-whitespace`](https://stylelint.io/user-guide/rules/no-irregular-whitespace/)
- [`number-max-precision`](https://stylelint.io/user-guide/rules/number-max-precision/): `4`
- [`rule-empty-line-before`](https://stylelint.io/user-guide/rules/rule-empty-line-before/): `always-multi-line, except: first-nested, ignore: after-comment`
- [`selector-id-pattern`](https://stylelint.io/user-guide/rules/selector-id-pattern/): `^(a-za-z0-9*)(-a-z0-9+)*$, message: Expected id selector to be kebab-case`
- [`selector-pseudo-element-colon-notation`](https://stylelint.io/user-guide/rules/selector-pseudo-element-colon-notation/): `double`
- [`selector-type-case`](https://stylelint.io/user-guide/rules/selector-type-case/): `lower`
- [`shorthand-property-no-redundant-values`](https://stylelint.io/user-guide/rules/shorthand-property-no-redundant-values/)
- [`value-keyword-case`](https://stylelint.io/user-guide/rules/value-keyword-case/): `lower`
- [`block-no-empty`](https://stylelint.io/user-guide/rules/block-no-empty/)
- [`color-no-invalid-hex`](https://stylelint.io/user-guide/rules/color-no-invalid-hex/)
- [`comment-no-empty`](https://stylelint.io/user-guide/rules/comment-no-empty/)
- [`custom-property-no-missing-var-function`](https://stylelint.io/user-guide/rules/custom-property-no-missing-var-function/)
- [`declaration-block-no-duplicate-custom-properties`](https://stylelint.io/user-guide/rules/declaration-block-no-duplicate-custom-properties/)
- [`declaration-block-no-duplicate-properties`](https://stylelint.io/user-guide/rules/declaration-block-no-duplicate-properties/): `true, ignore: consecutive-duplicates-with-different-values`
- [`font-family-no-duplicate-names`](https://stylelint.io/user-guide/rules/font-family-no-duplicate-names/)
- [`font-family-no-missing-generic-family-keyword`](https://stylelint.io/user-guide/rules/font-family-no-missing-generic-family-keyword/)
- [`function-calc-no-unspaced-operator`](https://stylelint.io/user-guide/rules/function-calc-no-unspaced-operator/)
- [`function-linear-gradient-no-nonstandard-direction`](https://stylelint.io/user-guide/rules/function-linear-gradient-no-nonstandard-direction/)
- [`keyframe-declaration-no-important`](https://stylelint.io/user-guide/rules/keyframe-declaration-no-important/)
- [`media-feature-name-no-unknown`](https://stylelint.io/user-guide/rules/media-feature-name-no-unknown/)
- [`named-grid-areas-no-invalid`](https://stylelint.io/user-guide/rules/named-grid-areas-no-invalid/)
- [`no-duplicate-at-import-rules`](https://stylelint.io/user-guide/rules/no-duplicate-at-import-rules/)
- [`no-duplicate-selectors`](https://stylelint.io/user-guide/rules/no-duplicate-selectors/)
- [`no-empty-source`](https://stylelint.io/user-guide/rules/no-empty-source/)
- [`no-invalid-double-slash-comments`](https://stylelint.io/user-guide/rules/no-invalid-double-slash-comments/)
- [`no-invalid-position-at-import-rule`](https://stylelint.io/user-guide/rules/no-invalid-position-at-import-rule/)
- [`property-no-unknown`](https://stylelint.io/user-guide/rules/property-no-unknown/)
- [`selector-pseudo-class-no-unknown`](https://stylelint.io/user-guide/rules/selector-pseudo-class-no-unknown/)
- [`selector-pseudo-element-no-unknown`](https://stylelint.io/user-guide/rules/selector-pseudo-element-no-unknown/)
- [`selector-type-no-unknown`](https://stylelint.io/user-guide/rules/selector-type-no-unknown/): `true, ignore: custom-elements`
- [`string-no-newline`](https://stylelint.io/user-guide/rules/string-no-newline/)
- [`unit-no-unknown`](https://stylelint.io/user-guide/rules/unit-no-unknown/)

#### Disabled rules

> Rules that are turned off on purpose.

<details>

- [`declaration-empty-line-before`](https://stylelint.io/user-guide/rules/declaration-empty-line-before/)
- [`no-descending-specificity`](https://stylelint.io/user-guide/rules/no-descending-specificity/)
- [`at-rule-no-unknown`](https://stylelint.io/user-guide/rules/at-rule-no-unknown/)
- [`at-rule-empty-line-before`](https://stylelint.io/user-guide/rules/at-rule-empty-line-before/)
- [`at-rule-name-case`](https://stylelint.io/user-guide/rules/at-rule-name-case/)
- [`at-rule-name-space-after`](https://stylelint.io/user-guide/rules/at-rule-name-space-after/)
- [`at-rule-semicolon-newline-after`](https://stylelint.io/user-guide/rules/at-rule-semicolon-newline-after/)
- [`block-closing-brace-empty-line-before`](https://stylelint.io/user-guide/rules/block-closing-brace-empty-line-before/)
- [`block-closing-brace-newline-after`](https://stylelint.io/user-guide/rules/block-closing-brace-newline-after/)
- [`block-closing-brace-newline-before`](https://stylelint.io/user-guide/rules/block-closing-brace-newline-before/)
- [`block-closing-brace-space-before`](https://stylelint.io/user-guide/rules/block-closing-brace-space-before/)
- [`block-opening-brace-newline-after`](https://stylelint.io/user-guide/rules/block-opening-brace-newline-after/)
- [`block-opening-brace-space-after`](https://stylelint.io/user-guide/rules/block-opening-brace-space-after/)
- [`block-opening-brace-space-before`](https://stylelint.io/user-guide/rules/block-opening-brace-space-before/)
- [`color-hex-case`](https://stylelint.io/user-guide/rules/color-hex-case/)
- [`declaration-bang-space-after`](https://stylelint.io/user-guide/rules/declaration-bang-space-after/)
- [`declaration-bang-space-before`](https://stylelint.io/user-guide/rules/declaration-bang-space-before/)
- [`declaration-block-semicolon-newline-after`](https://stylelint.io/user-guide/rules/declaration-block-semicolon-newline-after/)
- [`declaration-block-semicolon-space-after`](https://stylelint.io/user-guide/rules/declaration-block-semicolon-space-after/)
- [`declaration-block-semicolon-space-before`](https://stylelint.io/user-guide/rules/declaration-block-semicolon-space-before/)
- [`declaration-block-trailing-semicolon`](https://stylelint.io/user-guide/rules/declaration-block-trailing-semicolon/)
- [`declaration-colon-newline-after`](https://stylelint.io/user-guide/rules/declaration-colon-newline-after/)
- [`declaration-colon-space-after`](https://stylelint.io/user-guide/rules/declaration-colon-space-after/)
- [`declaration-colon-space-before`](https://stylelint.io/user-guide/rules/declaration-colon-space-before/)
- [`function-comma-newline-after`](https://stylelint.io/user-guide/rules/function-comma-newline-after/)
- [`function-comma-space-after`](https://stylelint.io/user-guide/rules/function-comma-space-after/)
- [`function-comma-space-before`](https://stylelint.io/user-guide/rules/function-comma-space-before/)
- [`function-max-empty-lines`](https://stylelint.io/user-guide/rules/function-max-empty-lines/)
- [`function-parentheses-newline-inside`](https://stylelint.io/user-guide/rules/function-parentheses-newline-inside/)
- [`function-parentheses-space-inside`](https://stylelint.io/user-guide/rules/function-parentheses-space-inside/)
- [`indentation`](https://stylelint.io/user-guide/rules/indentation/)
- [`max-empty-lines`](https://stylelint.io/user-guide/rules/max-empty-lines/)
- [`max-line-length`](https://stylelint.io/user-guide/rules/max-line-length/)
- [`media-feature-colon-space-after`](https://stylelint.io/user-guide/rules/media-feature-colon-space-after/)
- [`media-feature-colon-space-before`](https://stylelint.io/user-guide/rules/media-feature-colon-space-before/)
- [`media-feature-name-case`](https://stylelint.io/user-guide/rules/media-feature-name-case/)
- [`media-feature-parentheses-space-inside`](https://stylelint.io/user-guide/rules/media-feature-parentheses-space-inside/)
- [`media-query-list-comma-newline-after`](https://stylelint.io/user-guide/rules/media-query-list-comma-newline-after/)
- [`media-query-list-comma-space-after`](https://stylelint.io/user-guide/rules/media-query-list-comma-space-after/)
- [`media-query-list-comma-space-before`](https://stylelint.io/user-guide/rules/media-query-list-comma-space-before/)
- [`no-empty-first-line`](https://stylelint.io/user-guide/rules/no-empty-first-line/)
- [`no-eol-whitespace`](https://stylelint.io/user-guide/rules/no-eol-whitespace/)
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
- [`selector-list-comma-space-before`](https://stylelint.io/user-guide/rules/selector-list-comma-space-before/)
- [`selector-max-empty-lines`](https://stylelint.io/user-guide/rules/selector-max-empty-lines/)
- [`selector-pseudo-class-case`](https://stylelint.io/user-guide/rules/selector-pseudo-class-case/)
- [`selector-pseudo-class-parentheses-space-inside`](https://stylelint.io/user-guide/rules/selector-pseudo-class-parentheses-space-inside/)
- [`selector-pseudo-element-case`](https://stylelint.io/user-guide/rules/selector-pseudo-element-case/)
- [`string-quotes`](https://stylelint.io/user-guide/rules/string-quotes/)
- [`unit-case`](https://stylelint.io/user-guide/rules/unit-case/)
- [`value-list-comma-newline-after`](https://stylelint.io/user-guide/rules/value-list-comma-newline-after/)
- [`value-list-comma-space-after`](https://stylelint.io/user-guide/rules/value-list-comma-space-after/)
- [`value-list-comma-space-before`](https://stylelint.io/user-guide/rules/value-list-comma-space-before/)
- [`value-list-max-empty-lines`](https://stylelint.io/user-guide/rules/value-list-max-empty-lines/)
- [`no-extra-semicolons`](https://stylelint.io/user-guide/rules/no-extra-semicolons/)
- [`linebreaks`](https://stylelint.io/user-guide/rules/linebreaks/)
- [`at-rule-name-newline-after`](https://stylelint.io/user-guide/rules/at-rule-name-newline-after/)
- [`at-rule-semicolon-space-before`](https://stylelint.io/user-guide/rules/at-rule-semicolon-space-before/)
- [`block-closing-brace-space-after`](https://stylelint.io/user-guide/rules/block-closing-brace-space-after/)
- [`block-opening-brace-newline-before`](https://stylelint.io/user-guide/rules/block-opening-brace-newline-before/)
- [`declaration-block-semicolon-newline-before`](https://stylelint.io/user-guide/rules/declaration-block-semicolon-newline-before/)
- [`function-comma-newline-before`](https://stylelint.io/user-guide/rules/function-comma-newline-before/)
- [`media-query-list-comma-newline-before`](https://stylelint.io/user-guide/rules/media-query-list-comma-newline-before/)
- [`selector-list-comma-newline-before`](https://stylelint.io/user-guide/rules/selector-list-comma-newline-before/)
- [`selector-list-comma-space-after`](https://stylelint.io/user-guide/rules/selector-list-comma-space-after/)
- [`unicode-bom`](https://stylelint.io/user-guide/rules/unicode-bom/)
- [`value-list-comma-newline-before`](https://stylelint.io/user-guide/rules/value-list-comma-newline-before/)

</details>

#### Unused rules

> Rules that are not configured.

<details>

- [`comment-word-disallowed-list`](https://stylelint.io/user-guide/rules/comment-word-disallowed-list/)
- [`custom-media-pattern`](https://stylelint.io/user-guide/rules/custom-media-pattern/)
- [`custom-property-pattern`](https://stylelint.io/user-guide/rules/custom-property-pattern/)
- [`declaration-block-no-redundant-longhand-properties`](https://stylelint.io/user-guide/rules/declaration-block-no-redundant-longhand-properties/)
- [`declaration-property-unit-disallowed-list`](https://stylelint.io/user-guide/rules/declaration-property-unit-disallowed-list/)
- [`declaration-property-unit-allowed-list`](https://stylelint.io/user-guide/rules/declaration-property-unit-allowed-list/)
- [`declaration-property-value-allowed-list`](https://stylelint.io/user-guide/rules/declaration-property-value-allowed-list/)
- [`font-family-name-quotes`](https://stylelint.io/user-guide/rules/font-family-name-quotes/)
- [`font-weight-notation`](https://stylelint.io/user-guide/rules/font-weight-notation/)
- [`function-disallowed-list`](https://stylelint.io/user-guide/rules/function-disallowed-list/)
- [`function-url-no-scheme-relative`](https://stylelint.io/user-guide/rules/function-url-no-scheme-relative/)
- [`function-url-quotes`](https://stylelint.io/user-guide/rules/function-url-quotes/)
- [`function-url-scheme-disallowed-list`](https://stylelint.io/user-guide/rules/function-url-scheme-disallowed-list/)
- [`function-url-scheme-allowed-list`](https://stylelint.io/user-guide/rules/function-url-scheme-allowed-list/)
- [`function-allowed-list`](https://stylelint.io/user-guide/rules/function-allowed-list/)
- [`keyframes-name-pattern`](https://stylelint.io/user-guide/rules/keyframes-name-pattern/)
- [`linebreaks`](https://stylelint.io/user-guide/rules/linebreaks/)
- [`media-feature-name-disallowed-list`](https://stylelint.io/user-guide/rules/media-feature-name-disallowed-list/)
- [`media-feature-name-value-allowed-list`](https://stylelint.io/user-guide/rules/media-feature-name-value-allowed-list/)
- [`media-feature-name-allowed-list`](https://stylelint.io/user-guide/rules/media-feature-name-allowed-list/)
- [`no-empty-first-line`](https://stylelint.io/user-guide/rules/no-empty-first-line/)
- [`no-unknown-animations`](https://stylelint.io/user-guide/rules/no-unknown-animations/)
- [`number-max-precision`](https://stylelint.io/user-guide/rules/number-max-precision/)
- [`property-disallowed-list`](https://stylelint.io/user-guide/rules/property-disallowed-list/)
- [`property-allowed-list`](https://stylelint.io/user-guide/rules/property-allowed-list/)
- [`scss/partial-no-import`](https://github.com/kristerkari/stylelint-scss/blob/master/src/rules/partial-no-import/README.md)
- [`scss/selector-nest-combinators`](https://github.com/kristerkari/stylelint-scss/blob/master/src/rules/selector-nest-combinators/README.md)
- [`selector-attribute-operator-disallowed-list`](https://stylelint.io/user-guide/rules/selector-attribute-operator-disallowed-list/)
- [`selector-attribute-operator-allowed-list`](https://stylelint.io/user-guide/rules/selector-attribute-operator-allowed-list/)
- [`selector-combinator-disallowed-list`](https://stylelint.io/user-guide/rules/selector-combinator-disallowed-list/)
- [`selector-combinator-allowed-list`](https://stylelint.io/user-guide/rules/selector-combinator-allowed-list/)
- [`selector-max-attribute`](https://stylelint.io/user-guide/rules/selector-max-attribute/)
- [`selector-max-class`](https://stylelint.io/user-guide/rules/selector-max-class/)
- [`selector-max-combinators`](https://stylelint.io/user-guide/rules/selector-max-combinators/)
- [`selector-max-compound-selectors`](https://stylelint.io/user-guide/rules/selector-max-compound-selectors/)
- [`selector-max-pseudo-class`](https://stylelint.io/user-guide/rules/selector-max-pseudo-class/)
- [`selector-max-universal`](https://stylelint.io/user-guide/rules/selector-max-universal/)
- [`selector-nested-pattern`](https://stylelint.io/user-guide/rules/selector-nested-pattern/)
- [`selector-pseudo-class-disallowed-list`](https://stylelint.io/user-guide/rules/selector-pseudo-class-disallowed-list/)
- [`selector-pseudo-class-allowed-list`](https://stylelint.io/user-guide/rules/selector-pseudo-class-allowed-list/)
- [`selector-pseudo-element-disallowed-list`](https://stylelint.io/user-guide/rules/selector-pseudo-element-disallowed-list/)
- [`selector-pseudo-element-allowed-list`](https://stylelint.io/user-guide/rules/selector-pseudo-element-allowed-list/)
- [`time-min-milliseconds`](https://stylelint.io/user-guide/rules/time-min-milliseconds/)
- [`unit-disallowed-list`](https://stylelint.io/user-guide/rules/unit-disallowed-list/)
- [`unit-allowed-list`](https://stylelint.io/user-guide/rules/unit-allowed-list/)
- [`value-keyword-case`](https://stylelint.io/user-guide/rules/value-keyword-case/)
- [`scss/dollar-variable-pattern`](https://github.com/kristerkari/stylelint-scss/blob/master/src/rules/dollar-variable-pattern/README.md)
- [`scss/at-function-pattern`](https://github.com/kristerkari/stylelint-scss/blob/master/src/rules/at-function-pattern/README.md)
- [`scss/at-import-partial-extension-blacklist`](https://github.com/kristerkari/stylelint-scss/blob/master/src/rules/at-import-partial-extension-blacklist/README.md)
- [`scss/at-import-partial-extension-whitelist`](https://github.com/kristerkari/stylelint-scss/blob/master/src/rules/at-import-partial-extension-whitelist/README.md)
- [`scss/dollar-variable-default`](https://github.com/kristerkari/stylelint-scss/blob/master/src/rules/dollar-variable-default/README.md)
- [`scss/no-dollar-variables`](https://github.com/kristerkari/stylelint-scss/blob/master/src/rules/no-dollar-variables/README.md)
- [`order/properties-alphabetical-order`](https://github.com/hudochenkov/stylelint-order/blob/master/rules/properties-alphabetical-order/README.md)
- [`at-rule-disallowed-list`](https://stylelint.io/user-guide/rules/at-rule-disallowed-list/)
- [`at-rule-property-required-list`](https://stylelint.io/user-guide/rules/at-rule-property-required-list/)
- [`at-rule-allowed-list`](https://stylelint.io/user-guide/rules/at-rule-allowed-list/)
- [`color-no-hex`](https://stylelint.io/user-guide/rules/color-no-hex/)
- [`selector-id-pattern`](https://stylelint.io/user-guide/rules/selector-id-pattern/)
- [`scss/at-else-closing-brace-newline-after`](https://github.com/kristerkari/stylelint-scss/blob/master/src/rules/at-else-closing-brace-newline-after/README.md)
- [`scss/at-else-closing-brace-space-after`](https://github.com/kristerkari/stylelint-scss/blob/master/src/rules/at-else-closing-brace-space-after/README.md)
- [`scss/at-else-empty-line-before`](https://github.com/kristerkari/stylelint-scss/blob/master/src/rules/at-else-empty-line-before/README.md)
- [`scss/at-else-if-parentheses-space-before`](https://github.com/kristerkari/stylelint-scss/blob/master/src/rules/at-else-if-parentheses-space-before/README.md)
- [`scss/at-extend-no-missing-placeholder`](https://github.com/kristerkari/stylelint-scss/blob/master/src/rules/at-extend-no-missing-placeholder/README.md)
- [`scss/at-function-parentheses-space-before`](https://github.com/kristerkari/stylelint-scss/blob/master/src/rules/at-function-parentheses-space-before/README.md)
- [`scss/at-if-closing-brace-newline-after`](https://github.com/kristerkari/stylelint-scss/blob/master/src/rules/at-if-closing-brace-newline-after/README.md)
- [`scss/at-if-closing-brace-space-after`](https://github.com/kristerkari/stylelint-scss/blob/master/src/rules/at-if-closing-brace-space-after/README.md)
- [`scss/at-import-no-partial-leading-underscore`](https://github.com/kristerkari/stylelint-scss/blob/master/src/rules/at-import-no-partial-leading-underscore/README.md)
- [`scss/at-mixin-parentheses-space-before`](https://github.com/kristerkari/stylelint-scss/blob/master/src/rules/at-mixin-parentheses-space-before/README.md)
- [`scss/declaration-nested-properties-no-divided-groups`](https://github.com/kristerkari/stylelint-scss/blob/master/src/rules/declaration-nested-properties-no-divided-groups/README.md)
- [`scss/dollar-variable-colon-newline-after`](https://github.com/kristerkari/stylelint-scss/blob/master/src/rules/dollar-variable-colon-newline-after/README.md)
- [`scss/dollar-variable-colon-space-after`](https://github.com/kristerkari/stylelint-scss/blob/master/src/rules/dollar-variable-colon-space-after/README.md)
- [`scss/dollar-variable-colon-space-before`](https://github.com/kristerkari/stylelint-scss/blob/master/src/rules/dollar-variable-colon-space-before/README.md)
- [`scss/dollar-variable-empty-line-before`](https://github.com/kristerkari/stylelint-scss/blob/master/src/rules/dollar-variable-empty-line-before/README.md)
- [`scss/double-slash-comment-empty-line-before`](https://github.com/kristerkari/stylelint-scss/blob/master/src/rules/double-slash-comment-empty-line-before/README.md)
- [`scss/double-slash-comment-inline`](https://github.com/kristerkari/stylelint-scss/blob/master/src/rules/double-slash-comment-inline/README.md)
- [`scss/double-slash-comment-whitespace-inside`](https://github.com/kristerkari/stylelint-scss/blob/master/src/rules/double-slash-comment-whitespace-inside/README.md)
- [`scss/operator-no-newline-after`](https://github.com/kristerkari/stylelint-scss/blob/master/src/rules/operator-no-newline-after/README.md)
- [`scss/operator-no-newline-before`](https://github.com/kristerkari/stylelint-scss/blob/master/src/rules/operator-no-newline-before/README.md)
- [`scss/operator-no-unspaced`](https://github.com/kristerkari/stylelint-scss/blob/master/src/rules/operator-no-unspaced/README.md)
- [`color-hex-alpha`](https://stylelint.io/user-guide/rules/color-hex-alpha/)
- [`comment-pattern`](https://stylelint.io/user-guide/rules/comment-pattern/)
- [`rule-selector-property-disallowed-list`](https://stylelint.io/user-guide/rules/rule-selector-property-disallowed-list/)
- [`selector-attribute-name-disallowed-list`](https://stylelint.io/user-guide/rules/selector-attribute-name-disallowed-list/)
- [`selector-disallowed-list`](https://stylelint.io/user-guide/rules/selector-disallowed-list/)
- [`alpha-value-notation`](https://stylelint.io/user-guide/rules/alpha-value-notation/)
- [`color-function-notation`](https://stylelint.io/user-guide/rules/color-function-notation/)
- [`hue-degree-notation`](https://stylelint.io/user-guide/rules/hue-degree-notation/)
- [`scss/comment-no-empty`](https://github.com/kristerkari/stylelint-scss/blob/master/src/rules/comment-no-empty/README.md)
- [`scss/dollar-variable-empty-line-after`](https://github.com/kristerkari/stylelint-scss/blob/master/src/rules/dollar-variable-empty-line-after/README.md)
- [`scss/dollar-variable-first-in-block`](https://github.com/kristerkari/stylelint-scss/blob/master/src/rules/dollar-variable-first-in-block/README.md)
- [`scss/no-duplicate-mixins`](https://github.com/kristerkari/stylelint-scss/blob/master/src/rules/no-duplicate-mixins/README.md)
- [`scss/no-global-function-names`](https://github.com/kristerkari/stylelint-scss/blob/master/src/rules/no-global-function-names/README.md)
- [`scss/at-each-key-value-single-line`](https://github.com/kristerkari/stylelint-scss/blob/master/src/rules/at-each-key-value-single-line/README.md)
- [`scss/at-function-named-arguments`](https://github.com/kristerkari/stylelint-scss/blob/master/src/rules/at-function-named-arguments/README.md)
- [`scss/at-if-no-null`](https://github.com/kristerkari/stylelint-scss/blob/master/src/rules/at-if-no-null/README.md)
- [`scss/at-import-partial-extension`](https://github.com/kristerkari/stylelint-scss/blob/master/src/rules/at-import-partial-extension/README.md)
- [`scss/at-mixin-named-arguments`](https://github.com/kristerkari/stylelint-scss/blob/master/src/rules/at-mixin-named-arguments/README.md)
- [`scss/at-rule-conditional-no-parentheses`](https://github.com/kristerkari/stylelint-scss/blob/master/src/rules/at-rule-conditional-no-parentheses/README.md)
- [`scss/comment-no-loud`](https://github.com/kristerkari/stylelint-scss/blob/master/src/rules/comment-no-loud/README.md)
- [`scss/dimension-no-non-numeric-values`](https://github.com/kristerkari/stylelint-scss/blob/master/src/rules/dimension-no-non-numeric-values/README.md)
- [`scss/function-color-relative`](https://github.com/kristerkari/stylelint-scss/blob/master/src/rules/function-color-relative/README.md)
- [`scss/function-quote-no-quoted-strings-inside`](https://github.com/kristerkari/stylelint-scss/blob/master/src/rules/function-quote-no-quoted-strings-inside/README.md)
- [`scss/function-unquote-no-unquoted-strings-inside`](https://github.com/kristerkari/stylelint-scss/blob/master/src/rules/function-unquote-no-unquoted-strings-inside/README.md)
- [`scss/map-keys-quotes`](https://github.com/kristerkari/stylelint-scss/blob/master/src/rules/map-keys-quotes/README.md)
- [`scss/no-duplicate-dollar-variables`](https://github.com/kristerkari/stylelint-scss/blob/master/src/rules/no-duplicate-dollar-variables/README.md)
- [`scss/selector-no-union-class-name`](https://github.com/kristerkari/stylelint-scss/blob/master/src/rules/selector-no-union-class-name/README.md)
- [`scss/media-feature-value-dollar-variable`](https://github.com/kristerkari/stylelint-scss/blob/master/src/rules/media-feature-value-dollar-variable/README.md)
- [`selector-no-qualifying-type`](https://stylelint.io/user-guide/rules/selector-no-qualifying-type/)
- [`shorthand-property-no-redundant-values`](https://stylelint.io/user-guide/rules/shorthand-property-no-redundant-values/)
- [`order/properties-order`](https://github.com/hudochenkov/stylelint-order/blob/master/rules/properties-order/README.md)

</details>

## Contributing

See the [contribution guidelines](CONTRIBUTING.md) for guidance and setup instructions.
