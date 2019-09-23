# [stylelint-config-torchbox](https://www.npmjs.com/package/stylelint-config-torchbox) [<img src="https://raw.githubusercontent.com/torchbox/stylelint-config-torchbox/master/.github/stylelint-logo.svg?sanitize=true" alt="Stylelint" width="90" height="90" align="right">](https://stylelint.io)

[![stylelint-config-torchbox on npm](https://img.shields.io/npm/v/stylelint-config-torchbox.svg)](https://www.npmjs.com/package/stylelint-config-torchbox) [![Build status](https://github.com/actions/torchbox/stylelint-config-torchbox/.github/workflows/ci.yml/badge.svg)](https://github.com/torchbox/stylelint-config-torchbox/actions)

> Shareable stylelint config for CSS and SCSS, following Torchbox’s code style.

## Usage

Install stylelint and the config:

```sh
npm install --save-dev stylelint@10 stylelint-config-torchbox

```

Then [configure stylelint to use this config](https://stylelint.io/user-guide/configuration/#extends). As a `stylelint.config.js` in the root of your project:

```js
module.exports = {
  // See https://github.com/torchbox/stylelint-config-torchbox for rules.
  extends: 'stylelint-config-torchbox',
};
```

### Tips

- Use Stylelint’s [`--report-needless-disables`](https://stylelint.io/user-guide/node-api/#reportneedlessdisables) flag to ensure you do not use more `stylelint-disable` comments than needed.

### Related tools

To get the most out of this config, it is assumed that projects have the following tools set up:

- [Prettier](https://prettier.io/) for automated formatting of stylesheets.
- [Browserslist](https://github.com/browserslist/browserslist) and [autoprefixer](https://github.com/postcss/autoprefixer).

## What’s included

> See [`config.js`](./config.js) for the config definition. This package depends on:
>
> - [`stylelint-scss`](https://github.com/kristerkari/stylelint-scss)
> - [`stylelint-order`](https://github.com/hudochenkov/stylelint-order)
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
- [`max-nesting-depth`](https://stylelint.io/user-guide/rules/max-nesting-depth/): `4`
- [`selector-max-specificity`](https://stylelint.io/user-guide/rules/selector-max-specificity/): `0,4,0`
- [`value-no-vendor-prefix`](https://stylelint.io/user-guide/rules/value-no-vendor-prefix/)
- [`function-calc-no-invalid`](https://stylelint.io/user-guide/rules/function-calc-no-invalid/)
- [`property-no-vendor-prefix`](https://stylelint.io/user-guide/rules/property-no-vendor-prefix/)
- [`selector-no-vendor-prefix`](https://stylelint.io/user-guide/rules/selector-no-vendor-prefix/)
- [`media-feature-name-no-vendor-prefix`](https://stylelint.io/user-guide/rules/media-feature-name-no-vendor-prefix/)
- [`at-rule-no-vendor-prefix`](https://stylelint.io/user-guide/rules/at-rule-no-vendor-prefix/)
- [`scss/at-rule-no-unknown`](https://github.com/kristerkari/stylelint-scss#readme)
- [`scss/declaration-nested-properties`](https://github.com/kristerkari/stylelint-scss#readme): `never`
- [`scss/selector-no-redundant-nesting-selector`](https://github.com/kristerkari/stylelint-scss#readme)
- [`scss/percent-placeholder-pattern`](https://github.com/kristerkari/stylelint-scss#readme): `^do-not-use-placeholders$`
- [`scss/dollar-variable-no-missing-interpolation`](https://github.com/kristerkari/stylelint-scss#readme)
- [`scss/at-mixin-argumentless-call-parentheses`](https://github.com/kristerkari/stylelint-scss#readme): `always`
- [`scss/media-feature-value-dollar-variable`](https://github.com/kristerkari/stylelint-scss#readme): `always`
- [`order/order`](https://github.com/hudochenkov/stylelint-order): `dollar-variables, custom-properties, type: at-rule, hasBlock: false, declarations, rules, type: at-rule, hasBlock: true`

#### Rules of `stylelint-config-standard`

- [`at-rule-name-space-after`](https://stylelint.io/user-guide/rules/at-rule-name-space-after/): `always`
- [`color-hex-length`](https://stylelint.io/user-guide/rules/color-hex-length/): `short`
- [`comment-empty-line-before`](https://stylelint.io/user-guide/rules/comment-empty-line-before/): `always, except: first-nested, ignore: stylelint-commands`
- [`comment-whitespace-inside`](https://stylelint.io/user-guide/rules/comment-whitespace-inside/): `always`
- [`custom-property-empty-line-before`](https://stylelint.io/user-guide/rules/custom-property-empty-line-before/): `always, except: after-custom-property, first-nested, ignore: after-comment, inside-single-line-block`
- [`declaration-bang-space-after`](https://stylelint.io/user-guide/rules/declaration-bang-space-after/): `never`
- [`declaration-bang-space-before`](https://stylelint.io/user-guide/rules/declaration-bang-space-before/): `always`
- [`declaration-block-single-line-max-declarations`](https://stylelint.io/user-guide/rules/declaration-block-single-line-max-declarations/): `1`
- [`function-name-case`](https://stylelint.io/user-guide/rules/function-name-case/): `lower`
- [`function-whitespace-after`](https://stylelint.io/user-guide/rules/function-whitespace-after/): `always`
- [`length-zero-no-unit`](https://stylelint.io/user-guide/rules/length-zero-no-unit/)
- [`media-feature-colon-space-after`](https://stylelint.io/user-guide/rules/media-feature-colon-space-after/): `always`
- [`media-feature-colon-space-before`](https://stylelint.io/user-guide/rules/media-feature-colon-space-before/): `never`
- [`media-feature-parentheses-space-inside`](https://stylelint.io/user-guide/rules/media-feature-parentheses-space-inside/): `never`
- [`media-feature-range-operator-space-after`](https://stylelint.io/user-guide/rules/media-feature-range-operator-space-after/): `always`
- [`media-feature-range-operator-space-before`](https://stylelint.io/user-guide/rules/media-feature-range-operator-space-before/): `always`
- [`selector-attribute-brackets-space-inside`](https://stylelint.io/user-guide/rules/selector-attribute-brackets-space-inside/): `never`
- [`selector-attribute-operator-space-after`](https://stylelint.io/user-guide/rules/selector-attribute-operator-space-after/): `never`
- [`selector-attribute-operator-space-before`](https://stylelint.io/user-guide/rules/selector-attribute-operator-space-before/): `never`
- [`selector-pseudo-class-parentheses-space-inside`](https://stylelint.io/user-guide/rules/selector-pseudo-class-parentheses-space-inside/): `never`
- [`selector-pseudo-element-colon-notation`](https://stylelint.io/user-guide/rules/selector-pseudo-element-colon-notation/): `double`
- [`selector-type-case`](https://stylelint.io/user-guide/rules/selector-type-case/): `lower`
- [`block-no-empty`](https://stylelint.io/user-guide/rules/block-no-empty/)
- [`color-no-invalid-hex`](https://stylelint.io/user-guide/rules/color-no-invalid-hex/)
- [`comment-no-empty`](https://stylelint.io/user-guide/rules/comment-no-empty/)
- [`declaration-block-no-duplicate-properties`](https://stylelint.io/user-guide/rules/declaration-block-no-duplicate-properties/): `true, ignore: consecutive-duplicates-with-different-values`
- [`font-family-no-duplicate-names`](https://stylelint.io/user-guide/rules/font-family-no-duplicate-names/)
- [`font-family-no-missing-generic-family-keyword`](https://stylelint.io/user-guide/rules/font-family-no-missing-generic-family-keyword/)
- [`function-calc-no-unspaced-operator`](https://stylelint.io/user-guide/rules/function-calc-no-unspaced-operator/)
- [`function-linear-gradient-no-nonstandard-direction`](https://stylelint.io/user-guide/rules/function-linear-gradient-no-nonstandard-direction/)
- [`keyframe-declaration-no-important`](https://stylelint.io/user-guide/rules/keyframe-declaration-no-important/)
- [`media-feature-name-no-unknown`](https://stylelint.io/user-guide/rules/media-feature-name-no-unknown/)
- [`no-duplicate-at-import-rules`](https://stylelint.io/user-guide/rules/no-duplicate-at-import-rules/)
- [`no-duplicate-selectors`](https://stylelint.io/user-guide/rules/no-duplicate-selectors/)
- [`no-empty-source`](https://stylelint.io/user-guide/rules/no-empty-source/)
- [`no-invalid-double-slash-comments`](https://stylelint.io/user-guide/rules/no-invalid-double-slash-comments/)
- [`property-no-unknown`](https://stylelint.io/user-guide/rules/property-no-unknown/)
- [`selector-pseudo-class-no-unknown`](https://stylelint.io/user-guide/rules/selector-pseudo-class-no-unknown/)
- [`selector-pseudo-element-no-unknown`](https://stylelint.io/user-guide/rules/selector-pseudo-element-no-unknown/)
- [`selector-type-no-unknown`](https://stylelint.io/user-guide/rules/selector-type-no-unknown/)
- [`string-no-newline`](https://stylelint.io/user-guide/rules/string-no-newline/)
- [`unit-no-unknown`](https://stylelint.io/user-guide/rules/unit-no-unknown/)
- [`selector-attribute-quotes`](https://stylelint.io/user-guide/rules/selector-attribute-quotes/): `always`
- [`at-rule-semicolon-space-before`](https://stylelint.io/user-guide/rules/at-rule-semicolon-space-before/): `never`

#### Disabled rules

> Rules that are turned off on purpose.

<details>

- [`declaration-empty-line-before`](https://stylelint.io/user-guide/rules/declaration-empty-line-before/)
- [`no-descending-specificity`](https://stylelint.io/user-guide/rules/no-descending-specificity/)
- [`at-rule-no-unknown`](https://stylelint.io/user-guide/rules/at-rule-no-unknown/)
- [`at-rule-empty-line-before`](https://stylelint.io/user-guide/rules/at-rule-empty-line-before/)
- [`at-rule-name-case`](https://stylelint.io/user-guide/rules/at-rule-name-case/)
- [`at-rule-semicolon-newline-after`](https://stylelint.io/user-guide/rules/at-rule-semicolon-newline-after/)
- [`block-closing-brace-empty-line-before`](https://stylelint.io/user-guide/rules/block-closing-brace-empty-line-before/)
- [`block-closing-brace-newline-after`](https://stylelint.io/user-guide/rules/block-closing-brace-newline-after/)
- [`block-closing-brace-newline-before`](https://stylelint.io/user-guide/rules/block-closing-brace-newline-before/)
- [`block-closing-brace-space-before`](https://stylelint.io/user-guide/rules/block-closing-brace-space-before/)
- [`block-opening-brace-newline-after`](https://stylelint.io/user-guide/rules/block-opening-brace-newline-after/)
- [`block-opening-brace-space-after`](https://stylelint.io/user-guide/rules/block-opening-brace-space-after/)
- [`block-opening-brace-space-before`](https://stylelint.io/user-guide/rules/block-opening-brace-space-before/)
- [`color-hex-case`](https://stylelint.io/user-guide/rules/color-hex-case/)
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
- [`media-feature-name-case`](https://stylelint.io/user-guide/rules/media-feature-name-case/)
- [`media-query-list-comma-newline-after`](https://stylelint.io/user-guide/rules/media-query-list-comma-newline-after/)
- [`media-query-list-comma-space-after`](https://stylelint.io/user-guide/rules/media-query-list-comma-space-after/)
- [`media-query-list-comma-space-before`](https://stylelint.io/user-guide/rules/media-query-list-comma-space-before/)
- [`no-eol-whitespace`](https://stylelint.io/user-guide/rules/no-eol-whitespace/)
- [`no-missing-end-of-source-newline`](https://stylelint.io/user-guide/rules/no-missing-end-of-source-newline/)
- [`number-no-trailing-zeros`](https://stylelint.io/user-guide/rules/number-no-trailing-zeros/)
- [`property-case`](https://stylelint.io/user-guide/rules/property-case/)
- [`rule-empty-line-before`](https://stylelint.io/user-guide/rules/rule-empty-line-before/)
- [`selector-combinator-space-after`](https://stylelint.io/user-guide/rules/selector-combinator-space-after/)
- [`selector-combinator-space-before`](https://stylelint.io/user-guide/rules/selector-combinator-space-before/)
- [`selector-descendant-combinator-no-non-space`](https://stylelint.io/user-guide/rules/selector-descendant-combinator-no-non-space/)
- [`selector-list-comma-newline-after`](https://stylelint.io/user-guide/rules/selector-list-comma-newline-after/)
- [`selector-list-comma-space-before`](https://stylelint.io/user-guide/rules/selector-list-comma-space-before/)
- [`selector-max-empty-lines`](https://stylelint.io/user-guide/rules/selector-max-empty-lines/)
- [`selector-pseudo-class-case`](https://stylelint.io/user-guide/rules/selector-pseudo-class-case/)
- [`selector-pseudo-element-case`](https://stylelint.io/user-guide/rules/selector-pseudo-element-case/)
- [`unit-case`](https://stylelint.io/user-guide/rules/unit-case/)
- [`value-list-comma-newline-after`](https://stylelint.io/user-guide/rules/value-list-comma-newline-after/)
- [`value-list-comma-space-after`](https://stylelint.io/user-guide/rules/value-list-comma-space-after/)
- [`value-list-comma-space-before`](https://stylelint.io/user-guide/rules/value-list-comma-space-before/)
- [`value-list-max-empty-lines`](https://stylelint.io/user-guide/rules/value-list-max-empty-lines/)
- [`no-extra-semicolons`](https://stylelint.io/user-guide/rules/no-extra-semicolons/)
- [`max-line-length`](https://stylelint.io/user-guide/rules/max-line-length/)
- [`function-comma-newline-before`](https://stylelint.io/user-guide/rules/function-comma-newline-before/)
- [`value-list-comma-newline-before`](https://stylelint.io/user-guide/rules/value-list-comma-newline-before/)
- [`declaration-block-semicolon-newline-before`](https://stylelint.io/user-guide/rules/declaration-block-semicolon-newline-before/)
- [`block-closing-brace-space-after`](https://stylelint.io/user-guide/rules/block-closing-brace-space-after/)
- [`block-opening-brace-newline-before`](https://stylelint.io/user-guide/rules/block-opening-brace-newline-before/)
- [`selector-list-comma-newline-before`](https://stylelint.io/user-guide/rules/selector-list-comma-newline-before/)
- [`selector-list-comma-space-after`](https://stylelint.io/user-guide/rules/selector-list-comma-space-after/)
- [`media-query-list-comma-newline-before`](https://stylelint.io/user-guide/rules/media-query-list-comma-newline-before/)
- [`at-rule-name-newline-after`](https://stylelint.io/user-guide/rules/at-rule-name-newline-after/)
- [`string-quotes`](https://stylelint.io/user-guide/rules/string-quotes/)

</details>

#### Unused rules

> Rules that are not configured.

<details>

- [`comment-word-blacklist`](https://stylelint.io/user-guide/rules/comment-word-blacklist/)
- [`custom-media-pattern`](https://stylelint.io/user-guide/rules/custom-media-pattern/)
- [`custom-property-pattern`](https://stylelint.io/user-guide/rules/custom-property-pattern/)
- [`declaration-block-no-redundant-longhand-properties`](https://stylelint.io/user-guide/rules/declaration-block-no-redundant-longhand-properties/)
- [`declaration-property-unit-blacklist`](https://stylelint.io/user-guide/rules/declaration-property-unit-blacklist/)
- [`declaration-property-unit-whitelist`](https://stylelint.io/user-guide/rules/declaration-property-unit-whitelist/)
- [`declaration-property-value-blacklist`](https://stylelint.io/user-guide/rules/declaration-property-value-blacklist/)
- [`declaration-property-value-whitelist`](https://stylelint.io/user-guide/rules/declaration-property-value-whitelist/)
- [`font-family-name-quotes`](https://stylelint.io/user-guide/rules/font-family-name-quotes/)
- [`font-weight-notation`](https://stylelint.io/user-guide/rules/font-weight-notation/)
- [`function-blacklist`](https://stylelint.io/user-guide/rules/function-blacklist/)
- [`function-url-no-scheme-relative`](https://stylelint.io/user-guide/rules/function-url-no-scheme-relative/)
- [`function-url-quotes`](https://stylelint.io/user-guide/rules/function-url-quotes/)
- [`function-url-scheme-blacklist`](https://stylelint.io/user-guide/rules/function-url-scheme-blacklist/)
- [`function-url-scheme-whitelist`](https://stylelint.io/user-guide/rules/function-url-scheme-whitelist/)
- [`function-whitelist`](https://stylelint.io/user-guide/rules/function-whitelist/)
- [`keyframes-name-pattern`](https://stylelint.io/user-guide/rules/keyframes-name-pattern/)
- [`linebreaks`](https://stylelint.io/user-guide/rules/linebreaks/)
- [`media-feature-name-blacklist`](https://stylelint.io/user-guide/rules/media-feature-name-blacklist/)
- [`media-feature-name-value-whitelist`](https://stylelint.io/user-guide/rules/media-feature-name-value-whitelist/)
- [`media-feature-name-whitelist`](https://stylelint.io/user-guide/rules/media-feature-name-whitelist/)
- [`no-empty-first-line`](https://stylelint.io/user-guide/rules/no-empty-first-line/)
- [`no-unknown-animations`](https://stylelint.io/user-guide/rules/no-unknown-animations/)
- [`number-max-precision`](https://stylelint.io/user-guide/rules/number-max-precision/)
- [`property-blacklist`](https://stylelint.io/user-guide/rules/property-blacklist/)
- [`property-whitelist`](https://stylelint.io/user-guide/rules/property-whitelist/)
- [`scss/partial-no-import`](https://github.com/kristerkari/stylelint-scss#readme)
- [`scss/selector-nest-combinators`](https://github.com/kristerkari/stylelint-scss#readme)
- [`selector-attribute-operator-blacklist`](https://stylelint.io/user-guide/rules/selector-attribute-operator-blacklist/)
- [`selector-attribute-operator-whitelist`](https://stylelint.io/user-guide/rules/selector-attribute-operator-whitelist/)
- [`selector-class-pattern`](https://stylelint.io/user-guide/rules/selector-class-pattern/)
- [`selector-combinator-blacklist`](https://stylelint.io/user-guide/rules/selector-combinator-blacklist/)
- [`selector-combinator-whitelist`](https://stylelint.io/user-guide/rules/selector-combinator-whitelist/)
- [`selector-max-attribute`](https://stylelint.io/user-guide/rules/selector-max-attribute/)
- [`selector-max-class`](https://stylelint.io/user-guide/rules/selector-max-class/)
- [`selector-max-combinators`](https://stylelint.io/user-guide/rules/selector-max-combinators/)
- [`selector-max-compound-selectors`](https://stylelint.io/user-guide/rules/selector-max-compound-selectors/)
- [`selector-max-pseudo-class`](https://stylelint.io/user-guide/rules/selector-max-pseudo-class/)
- [`selector-max-universal`](https://stylelint.io/user-guide/rules/selector-max-universal/)
- [`selector-nested-pattern`](https://stylelint.io/user-guide/rules/selector-nested-pattern/)
- [`selector-pseudo-class-blacklist`](https://stylelint.io/user-guide/rules/selector-pseudo-class-blacklist/)
- [`selector-pseudo-class-whitelist`](https://stylelint.io/user-guide/rules/selector-pseudo-class-whitelist/)
- [`selector-pseudo-element-blacklist`](https://stylelint.io/user-guide/rules/selector-pseudo-element-blacklist/)
- [`selector-pseudo-element-whitelist`](https://stylelint.io/user-guide/rules/selector-pseudo-element-whitelist/)
- [`time-min-milliseconds`](https://stylelint.io/user-guide/rules/time-min-milliseconds/)
- [`unit-blacklist`](https://stylelint.io/user-guide/rules/unit-blacklist/)
- [`unit-whitelist`](https://stylelint.io/user-guide/rules/unit-whitelist/)
- [`value-keyword-case`](https://stylelint.io/user-guide/rules/value-keyword-case/)
- [`scss/dollar-variable-pattern`](https://github.com/kristerkari/stylelint-scss#readme)
- [`scss/at-function-pattern`](https://github.com/kristerkari/stylelint-scss#readme)
- [`scss/at-import-partial-extension-blacklist`](https://github.com/kristerkari/stylelint-scss#readme)
- [`scss/at-import-partial-extension-whitelist`](https://github.com/kristerkari/stylelint-scss#readme)
- [`scss/dollar-variable-default`](https://github.com/kristerkari/stylelint-scss#readme)
- [`scss/no-dollar-variables`](https://github.com/kristerkari/stylelint-scss#readme)
- [`at-rule-blacklist`](https://stylelint.io/user-guide/rules/at-rule-blacklist/)
- [`at-rule-property-requirelist`](https://stylelint.io/user-guide/rules/at-rule-property-requirelist/)
- [`at-rule-whitelist`](https://stylelint.io/user-guide/rules/at-rule-whitelist/)
- [`color-no-hex`](https://stylelint.io/user-guide/rules/color-no-hex/)
- [`selector-id-pattern`](https://stylelint.io/user-guide/rules/selector-id-pattern/)
- [`scss/at-else-closing-brace-newline-after`](https://github.com/kristerkari/stylelint-scss#readme)
- [`scss/at-else-closing-brace-space-after`](https://github.com/kristerkari/stylelint-scss#readme)
- [`scss/at-else-empty-line-before`](https://github.com/kristerkari/stylelint-scss#readme)
- [`scss/at-else-if-parentheses-space-before`](https://github.com/kristerkari/stylelint-scss#readme)
- [`scss/at-extend-no-missing-placeholder`](https://github.com/kristerkari/stylelint-scss#readme)
- [`scss/at-function-parentheses-space-before`](https://github.com/kristerkari/stylelint-scss#readme)
- [`scss/at-if-closing-brace-newline-after`](https://github.com/kristerkari/stylelint-scss#readme)
- [`scss/at-if-closing-brace-space-after`](https://github.com/kristerkari/stylelint-scss#readme)
- [`scss/at-import-no-partial-leading-underscore`](https://github.com/kristerkari/stylelint-scss#readme)
- [`scss/at-mixin-parentheses-space-before`](https://github.com/kristerkari/stylelint-scss#readme)
- [`scss/at-mixin-pattern`](https://github.com/kristerkari/stylelint-scss#readme)
- [`scss/declaration-nested-properties-no-divided-groups`](https://github.com/kristerkari/stylelint-scss#readme)
- [`scss/dollar-variable-colon-newline-after`](https://github.com/kristerkari/stylelint-scss#readme)
- [`scss/dollar-variable-colon-space-after`](https://github.com/kristerkari/stylelint-scss#readme)
- [`scss/dollar-variable-colon-space-before`](https://github.com/kristerkari/stylelint-scss#readme)
- [`scss/dollar-variable-empty-line-before`](https://github.com/kristerkari/stylelint-scss#readme)
- [`scss/double-slash-comment-empty-line-before`](https://github.com/kristerkari/stylelint-scss#readme)
- [`scss/double-slash-comment-inline`](https://github.com/kristerkari/stylelint-scss#readme)
- [`scss/double-slash-comment-whitespace-inside`](https://github.com/kristerkari/stylelint-scss#readme)
- [`scss/operator-no-newline-after`](https://github.com/kristerkari/stylelint-scss#readme)
- [`scss/operator-no-newline-before`](https://github.com/kristerkari/stylelint-scss#readme)
- [`scss/operator-no-unspaced`](https://github.com/kristerkari/stylelint-scss#readme)
- [`scss/at-each-key-value-single-line`](https://github.com/kristerkari/stylelint-scss#readme)
- [`scss/at-function-named-arguments`](https://github.com/kristerkari/stylelint-scss#readme)
- [`scss/at-if-no-null`](https://github.com/kristerkari/stylelint-scss#readme)
- [`scss/at-import-partial-extension`](https://github.com/kristerkari/stylelint-scss#readme)
- [`scss/at-mixin-named-arguments`](https://github.com/kristerkari/stylelint-scss#readme)
- [`scss/at-rule-conditional-no-parentheses`](https://github.com/kristerkari/stylelint-scss#readme)
- [`scss/comment-no-loud`](https://github.com/kristerkari/stylelint-scss#readme)
- [`scss/dimension-no-non-numeric-values`](https://github.com/kristerkari/stylelint-scss#readme)
- [`scss/function-color-relative`](https://github.com/kristerkari/stylelint-scss#readme)
- [`scss/function-quote-no-quoted-strings-inside`](https://github.com/kristerkari/stylelint-scss#readme)
- [`scss/function-unquote-no-unquoted-strings-inside`](https://github.com/kristerkari/stylelint-scss#readme)
- [`scss/map-keys-quotes`](https://github.com/kristerkari/stylelint-scss#readme)
- [`scss/no-duplicate-dollar-variables`](https://github.com/kristerkari/stylelint-scss#readme)
- [`scss/selector-no-union-class-name`](https://github.com/kristerkari/stylelint-scss#readme)
- [`selector-no-qualifying-type`](https://stylelint.io/user-guide/rules/selector-no-qualifying-type/)
- [`shorthand-property-no-redundant-values`](https://stylelint.io/user-guide/rules/shorthand-property-no-redundant-values/)

</details>
