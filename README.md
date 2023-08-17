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

> For the full list of enabled, disabled, and unused rules, view [src/rules.md](src/rules.md).

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
- [`scss/at-rule-no-unknown`](https://github.com/stylelint-scss/stylelint-scss/blob/master/src/rules/at-rule-no-unknown/README.md): `true, ignoreAtRules: tailwind, apply, variants, responsive, screen, layer`
- [`scss/declaration-nested-properties`](https://github.com/stylelint-scss/stylelint-scss/blob/master/src/rules/declaration-nested-properties/README.md): `never`
- [`scss/selector-no-redundant-nesting-selector`](https://github.com/stylelint-scss/stylelint-scss/blob/master/src/rules/selector-no-redundant-nesting-selector/README.md)
- [`scss/percent-placeholder-pattern`](https://github.com/stylelint-scss/stylelint-scss/blob/master/src/rules/percent-placeholder-pattern/README.md): `^do-not-use-placeholders$`
- [`scss/dollar-variable-no-missing-interpolation`](https://github.com/stylelint-scss/stylelint-scss/blob/master/src/rules/dollar-variable-no-missing-interpolation/README.md)
- [`scss/at-mixin-argumentless-call-parentheses`](https://github.com/stylelint-scss/stylelint-scss/blob/master/src/rules/at-mixin-argumentless-call-parentheses/README.md): `always`
- [`scss/at-mixin-pattern`](https://github.com/stylelint-scss/stylelint-scss/blob/master/src/rules/at-mixin-pattern/README.md): ``
- [`order/order`](https://github.com/hudochenkov/stylelint-order/blob/master/rules/order/README.md): `dollar-variables, custom-properties, type: at-rule, hasBlock: false, declarations`
- [`scale-unlimited/declaration-strict-value`](https://github.com/AndyOGo/stylelint-declaration-strict-value): `color, fill, stroke, /-color/, ignoreKeywords: currentColor, inherit, transparent, initial, none, unset, Canvas, CanvasText, LinkText, VisitedText, ActiveText, ButtonFace, ButtonText, ButtonBorder, Field, FieldText, Highlight, HighlightText, SelectedItem, SelectedItemText, Mark, MarkText, GrayText, AccentColor, AccentColorText`

## Inherited rules

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

## Contributing

See the [contribution guidelines](CONTRIBUTING.md) for guidance and setup instructions.
