# [stylelint-config-torchbox](https://www.npmjs.com/package/stylelint-config-torchbox) [<img src="https://raw.githubusercontent.com/torchbox/stylelint-config-torchbox/main/.github/stylelint-logo.svg?sanitize=true" alt="Stylelint" width="90" height="90" align="right">](https://stylelint.io)

> Shareable stylelint config for CSS and SCSS, following Torchbox’s code style.

## Usage

Install stylelint, and the config:

```sh
npm install --save-dev stylelint stylelint-config-torchbox
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
    rev: v15.10.3
    hooks:
      - id: stylelint
        files: \.(scss|vue)$
        additional_dependencies:
          - stylelint@15.10.3
          - stylelint-config-torchbox@3.0.0
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

> See [`config.js`](./config.js) for the config definition. This package includes configuration from:
>
> - [`stylelint-config-standard-scss`](https://github.com/stylelint-scss/stylelint-config-standard-scss)
> - [`stylelint-order`](https://github.com/hudochenkov/stylelint-order)
> - [`stylelint-declaration-strict-value`](https://github.com/AndyOGo/stylelint-declaration-strict-value)

<!-- Generated with: npm run build:docs -->

### Rules

> For the full list of enabled, disabled, and unused rules, view [src/rules.md](src/rules.md).

#### Custom rules

- [`color-named`](https://stylelint.io/user-guide/rules/color-named/): `never`
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
- [`scss/at-rule-no-unknown`](https://github.com/stylelint-scss/stylelint-scss/blob/master/src/rules/at-rule-no-unknown/README.md): `true, ignoreAtRules: tailwind, apply, variants, responsive, screen, layer, config, theme, custom-variant, plugin, source, variant, utility, reference`
- [`scss/declaration-nested-properties`](https://github.com/stylelint-scss/stylelint-scss/blob/master/src/rules/declaration-nested-properties/README.md): `never`
- [`scss/selector-no-redundant-nesting-selector`](https://github.com/stylelint-scss/stylelint-scss/blob/master/src/rules/selector-no-redundant-nesting-selector/README.md)
- [`scss/percent-placeholder-pattern`](https://github.com/stylelint-scss/stylelint-scss/blob/master/src/rules/percent-placeholder-pattern/README.md): `^do-not-use-placeholders$`
- [`scss/dollar-variable-no-missing-interpolation`](https://github.com/stylelint-scss/stylelint-scss/blob/master/src/rules/dollar-variable-no-missing-interpolation/README.md)
- [`scss/at-mixin-argumentless-call-parentheses`](https://github.com/stylelint-scss/stylelint-scss/blob/master/src/rules/at-mixin-argumentless-call-parentheses/README.md): `always`
- [`scss/at-mixin-pattern`](https://github.com/stylelint-scss/stylelint-scss/blob/master/src/rules/at-mixin-pattern/README.md): ``
- [`order/order`](https://github.com/hudochenkov/stylelint-order/blob/master/rules/order/README.md): `dollar-variables, custom-properties, type: at-rule, hasBlock: false, declarations`
- [`scale-unlimited/declaration-strict-value`](https://github.com/AndyOGo/stylelint-declaration-strict-value): `color, fill, stroke, /-color/, ignoreKeywords: currentColor, inherit, transparent, initial, none, unset, Canvas, CanvasText, LinkText, VisitedText, ActiveText, ButtonFace, ButtonText, ButtonBorder, Field, FieldText, Highlight, HighlightText, SelectedItem, SelectedItemText, Mark, MarkText, GrayText, AccentColor, AccentColorText`

## Inherited rules

- [`block-no-empty`](https://stylelint.io/user-guide/rules/block-no-empty/)
- [`color-hex-length`](https://stylelint.io/user-guide/rules/color-hex-length/): `short`
- [`color-no-invalid-hex`](https://stylelint.io/user-guide/rules/color-no-invalid-hex/)
- [`comment-empty-line-before`](https://stylelint.io/user-guide/rules/comment-empty-line-before/): `always, except: first-nested, ignore: stylelint-commands`
- [`comment-whitespace-inside`](https://stylelint.io/user-guide/rules/comment-whitespace-inside/): `always`
- [`custom-property-empty-line-before`](https://stylelint.io/user-guide/rules/custom-property-empty-line-before/): `always, except: after-custom-property, first-nested, ignore: after-comment, inside-single-line-block`
- [`custom-property-no-missing-var-function`](https://stylelint.io/user-guide/rules/custom-property-no-missing-var-function/)
- [`declaration-block-no-duplicate-custom-properties`](https://stylelint.io/user-guide/rules/declaration-block-no-duplicate-custom-properties/)
- [`declaration-block-no-duplicate-properties`](https://stylelint.io/user-guide/rules/declaration-block-no-duplicate-properties/): `true, ignore: consecutive-duplicates-with-different-syntaxes`
- [`declaration-block-single-line-max-declarations`](https://stylelint.io/user-guide/rules/declaration-block-single-line-max-declarations/): `1`
- [`font-family-name-quotes`](https://stylelint.io/user-guide/rules/font-family-name-quotes/): `always-where-recommended`
- [`font-family-no-duplicate-names`](https://stylelint.io/user-guide/rules/font-family-no-duplicate-names/)
- [`font-family-no-missing-generic-family-keyword`](https://stylelint.io/user-guide/rules/font-family-no-missing-generic-family-keyword/)
- [`function-calc-no-unspaced-operator`](https://stylelint.io/user-guide/rules/function-calc-no-unspaced-operator/)
- [`function-linear-gradient-no-nonstandard-direction`](https://stylelint.io/user-guide/rules/function-linear-gradient-no-nonstandard-direction/)
- [`function-name-case`](https://stylelint.io/user-guide/rules/function-name-case/): `lower`
- [`function-url-quotes`](https://stylelint.io/user-guide/rules/function-url-quotes/): `always`
- [`hue-degree-notation`](https://stylelint.io/user-guide/rules/hue-degree-notation/): `angle`
- [`import-notation`](https://stylelint.io/user-guide/rules/import-notation/): `string`
- [`keyframe-block-no-duplicate-selectors`](https://stylelint.io/user-guide/rules/keyframe-block-no-duplicate-selectors/)
- [`keyframe-declaration-no-important`](https://stylelint.io/user-guide/rules/keyframe-declaration-no-important/)
- [`keyframe-selector-notation`](https://stylelint.io/user-guide/rules/keyframe-selector-notation/): `percentage-unless-within-keyword-only-block`
- [`length-zero-no-unit`](https://stylelint.io/user-guide/rules/length-zero-no-unit/): `true, ignore: custom-properties`
- [`media-feature-name-no-unknown`](https://stylelint.io/user-guide/rules/media-feature-name-no-unknown/)
- [`named-grid-areas-no-invalid`](https://stylelint.io/user-guide/rules/named-grid-areas-no-invalid/)
- [`no-duplicate-at-import-rules`](https://stylelint.io/user-guide/rules/no-duplicate-at-import-rules/)
- [`no-duplicate-selectors`](https://stylelint.io/user-guide/rules/no-duplicate-selectors/)
- [`no-empty-source`](https://stylelint.io/user-guide/rules/no-empty-source/)
- [`no-invalid-double-slash-comments`](https://stylelint.io/user-guide/rules/no-invalid-double-slash-comments/)
- [`no-invalid-position-at-import-rule`](https://stylelint.io/user-guide/rules/no-invalid-position-at-import-rule/): `true, ignoreAtRules: use, forward`
- [`no-irregular-whitespace`](https://stylelint.io/user-guide/rules/no-irregular-whitespace/)
- [`number-max-precision`](https://stylelint.io/user-guide/rules/number-max-precision/): `4`
- [`property-no-unknown`](https://stylelint.io/user-guide/rules/property-no-unknown/)
- [`rule-empty-line-before`](https://stylelint.io/user-guide/rules/rule-empty-line-before/): `always-multi-line, except: first-nested, ignore: after-comment`
- [`scss/at-else-closing-brace-newline-after`](https://github.com/stylelint-scss/stylelint-scss/blob/master/src/rules/at-else-closing-brace-newline-after/README.md): `always-last-in-chain`
- [`scss/at-else-closing-brace-space-after`](https://github.com/stylelint-scss/stylelint-scss/blob/master/src/rules/at-else-closing-brace-space-after/README.md): `always-intermediate`
- [`scss/at-else-empty-line-before`](https://github.com/stylelint-scss/stylelint-scss/blob/master/src/rules/at-else-empty-line-before/README.md): `never`
- [`scss/at-else-if-parentheses-space-before`](https://github.com/stylelint-scss/stylelint-scss/blob/master/src/rules/at-else-if-parentheses-space-before/README.md): `always`
- [`scss/at-function-parentheses-space-before`](https://github.com/stylelint-scss/stylelint-scss/blob/master/src/rules/at-function-parentheses-space-before/README.md): `never`
- [`scss/at-if-closing-brace-newline-after`](https://github.com/stylelint-scss/stylelint-scss/blob/master/src/rules/at-if-closing-brace-newline-after/README.md): `always-last-in-chain`
- [`scss/at-if-closing-brace-space-after`](https://github.com/stylelint-scss/stylelint-scss/blob/master/src/rules/at-if-closing-brace-space-after/README.md): `always-intermediate`
- [`scss/at-if-no-null`](https://github.com/stylelint-scss/stylelint-scss/blob/master/src/rules/at-if-no-null/README.md)
- [`scss/at-import-no-partial-leading-underscore`](https://github.com/stylelint-scss/stylelint-scss/blob/master/src/rules/at-import-no-partial-leading-underscore/README.md)
- [`scss/at-import-partial-extension`](https://github.com/stylelint-scss/stylelint-scss/blob/master/src/rules/at-import-partial-extension/README.md): `never`
- [`scss/at-mixin-parentheses-space-before`](https://github.com/stylelint-scss/stylelint-scss/blob/master/src/rules/at-mixin-parentheses-space-before/README.md): `never`
- [`scss/at-rule-conditional-no-parentheses`](https://github.com/stylelint-scss/stylelint-scss/blob/master/src/rules/at-rule-conditional-no-parentheses/README.md)
- [`scss/comment-no-empty`](https://github.com/stylelint-scss/stylelint-scss/blob/master/src/rules/comment-no-empty/README.md)
- [`scss/declaration-nested-properties-no-divided-groups`](https://github.com/stylelint-scss/stylelint-scss/blob/master/src/rules/declaration-nested-properties-no-divided-groups/README.md)
- [`scss/dollar-variable-colon-space-after`](https://github.com/stylelint-scss/stylelint-scss/blob/master/src/rules/dollar-variable-colon-space-after/README.md): `always`
- [`scss/dollar-variable-colon-space-before`](https://github.com/stylelint-scss/stylelint-scss/blob/master/src/rules/dollar-variable-colon-space-before/README.md): `never`
- [`scss/double-slash-comment-whitespace-inside`](https://github.com/stylelint-scss/stylelint-scss/blob/master/src/rules/double-slash-comment-whitespace-inside/README.md): `always`
- [`scss/function-quote-no-quoted-strings-inside`](https://github.com/stylelint-scss/stylelint-scss/blob/master/src/rules/function-quote-no-quoted-strings-inside/README.md)
- [`scss/function-unquote-no-unquoted-strings-inside`](https://github.com/stylelint-scss/stylelint-scss/blob/master/src/rules/function-unquote-no-unquoted-strings-inside/README.md)
- [`scss/no-duplicate-mixins`](https://github.com/stylelint-scss/stylelint-scss/blob/master/src/rules/no-duplicate-mixins/README.md)
- [`scss/operator-no-newline-after`](https://github.com/stylelint-scss/stylelint-scss/blob/master/src/rules/operator-no-newline-after/README.md)
- [`scss/operator-no-newline-before`](https://github.com/stylelint-scss/stylelint-scss/blob/master/src/rules/operator-no-newline-before/README.md)
- [`scss/operator-no-unspaced`](https://github.com/stylelint-scss/stylelint-scss/blob/master/src/rules/operator-no-unspaced/README.md)
- [`selector-anb-no-unmatchable`](https://stylelint.io/user-guide/rules/selector-anb-no-unmatchable/)
- [`selector-attribute-quotes`](https://stylelint.io/user-guide/rules/selector-attribute-quotes/): `always`
- [`selector-pseudo-class-no-unknown`](https://stylelint.io/user-guide/rules/selector-pseudo-class-no-unknown/)
- [`selector-pseudo-element-colon-notation`](https://stylelint.io/user-guide/rules/selector-pseudo-element-colon-notation/): `double`
- [`selector-pseudo-element-no-unknown`](https://stylelint.io/user-guide/rules/selector-pseudo-element-no-unknown/)
- [`selector-type-case`](https://stylelint.io/user-guide/rules/selector-type-case/): `lower`
- [`selector-type-no-unknown`](https://stylelint.io/user-guide/rules/selector-type-no-unknown/): `true, ignore: custom-elements`
- [`string-no-newline`](https://stylelint.io/user-guide/rules/string-no-newline/)
- [`unit-no-unknown`](https://stylelint.io/user-guide/rules/unit-no-unknown/)
- [`value-keyword-case`](https://stylelint.io/user-guide/rules/value-keyword-case/): `lower`

## Contributing

See the [contribution guidelines](CONTRIBUTING.md) for guidance and setup instructions.
