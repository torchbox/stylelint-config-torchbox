const config = require('../config');

/**
 * Use this file to list all available rules that should *not* be used.
 * This is useful so that when new rules are introduced, we can tell right away,
 * and decide whether to add them to this "unused" list, or start using them.
 */

const tooOpinionated = [
    'comment-word-disallowed-list',
    'custom-media-pattern',
    'custom-property-pattern',
    'declaration-block-no-redundant-longhand-properties',
    'declaration-property-unit-disallowed-list',
    'declaration-property-unit-allowed-list',
    'declaration-property-value-allowed-list',
    'font-family-name-quotes',
    'font-weight-notation',
    'function-disallowed-list',
    'function-url-no-scheme-relative',
    'function-url-quotes',
    'function-url-scheme-disallowed-list',
    'function-url-scheme-allowed-list',
    'function-allowed-list',
    'keyframes-name-pattern',
    'linebreaks',
    'media-feature-name-disallowed-list',
    'media-feature-name-value-allowed-list',
    'media-feature-name-allowed-list',
    'no-empty-first-line',
    'no-unknown-animations',
    'number-max-precision',
    'property-disallowed-list',
    'property-allowed-list',
    'scss/partial-no-import',
    'scss/selector-nest-combinators',
    'selector-attribute-operator-disallowed-list',
    'selector-attribute-operator-allowed-list',
    'selector-combinator-disallowed-list',
    'selector-combinator-allowed-list',
    'selector-max-attribute',
    'selector-max-class',
    'selector-max-combinators',
    'selector-max-compound-selectors',
    'selector-max-pseudo-class',
    'selector-max-universal',
    'selector-nested-pattern',
    'selector-pseudo-class-disallowed-list',
    'selector-pseudo-class-allowed-list',
    'selector-pseudo-element-disallowed-list',
    'selector-pseudo-element-allowed-list',
    'time-min-milliseconds',
    'unit-disallowed-list',
    'unit-allowed-list',
    'value-keyword-case',
    'scss/dollar-variable-pattern',
    'scss/at-function-pattern',
    'scss/at-import-partial-extension-blacklist',
    'scss/at-import-partial-extension-whitelist',
    'scss/dollar-variable-default',
    'scss/no-dollar-variables',
    'order/properties-alphabetical-order',
];

const overridenByOtherRule = [
    'at-rule-disallowed-list',
    'at-rule-property-required-list',
    'at-rule-allowed-list',
    'color-no-hex',
    'selector-id-pattern',
];

const formattingByPrettier = [
    'scss/at-else-closing-brace-newline-after',
    'scss/at-else-closing-brace-space-after',
    'scss/at-else-empty-line-before',
    'scss/at-else-if-parentheses-space-before',
    'scss/at-extend-no-missing-placeholder',
    'scss/at-function-parentheses-space-before',
    'scss/at-if-closing-brace-newline-after',
    'scss/at-if-closing-brace-space-after',
    'scss/at-import-no-partial-leading-underscore',
    'scss/at-mixin-parentheses-space-before',
    'scss/declaration-nested-properties-no-divided-groups',
    'scss/dollar-variable-colon-newline-after',
    'scss/dollar-variable-colon-space-after',
    'scss/dollar-variable-colon-space-before',
    'scss/dollar-variable-empty-line-before',
    'scss/double-slash-comment-empty-line-before',
    'scss/double-slash-comment-inline',
    'scss/double-slash-comment-whitespace-inside',
    'scss/operator-no-newline-after',
    'scss/operator-no-newline-before',
    'scss/operator-no-unspaced',
];

const toReview = [
    // List of rules from stylelint v14 upgrade.
    // https://stylelint.io/user-guide/rules/color-hex-alpha/
    'color-hex-alpha',
    // https://stylelint.io/user-guide/rules/comment-pattern/
    'comment-pattern',
    // https://stylelint.io/user-guide/rules/rule-selector-property-disallowed-list/
    'rule-selector-property-disallowed-list',
    // https://stylelint.io/user-guide/rules/selector-attribute-name-disallowed-list/
    'selector-attribute-name-disallowed-list',
    // https://stylelint.io/user-guide/rules/selector-disallowed-list/
    'selector-disallowed-list',
    // List of rules from stylelint v13 upgrade.
    // https://stylelint.io/user-guide/rules/alpha-value-notation/
    'alpha-value-notation',
    // https://stylelint.io/user-guide/rules/color-function-notation/
    'color-function-notation',
    // https://stylelint.io/user-guide/rules/hue-degree-notation/
    'hue-degree-notation',
    // https://github.com/kristerkari/stylelint-scss/blob/master/src/rules/comment-no-empty/README.md
    'scss/comment-no-empty',
    // https://github.com/kristerkari/stylelint-scss/blob/master/src/rules/dollar-variable-empty-line-after/README.md
    'scss/dollar-variable-empty-line-after',
    // https://github.com/kristerkari/stylelint-scss/blob/master/src/rules/dollar-variable-first-in-block/README.md
    'scss/dollar-variable-first-in-block',
    // https://github.com/kristerkari/stylelint-scss/blob/master/src/rules/no-duplicate-mixins/README.md
    'scss/no-duplicate-mixins',
    // https://github.com/kristerkari/stylelint-scss/blob/master/src/rules/no-global-function-names/README.md
    'scss/no-global-function-names',
    // ================================
    // List of rules we initially decided to ship the config without, although they could in theory be added.
    // https://github.com/kristerkari/stylelint-scss/blob/master/src/rules/at-each-key-value-single-line/README.md
    'scss/at-each-key-value-single-line',
    // https://github.com/kristerkari/stylelint-scss/blob/master/src/rules/at-function-named-arguments/README.md
    'scss/at-function-named-arguments',
    // https://github.com/kristerkari/stylelint-scss/blob/master/src/rules/at-if-no-null/README.md
    'scss/at-if-no-null',
    // https://github.com/kristerkari/stylelint-scss/blob/master/src/rules/at-import-partial-extension/README.md
    'scss/at-import-partial-extension',
    // https://github.com/kristerkari/stylelint-scss/blob/master/src/rules/at-mixin-named-arguments/README.md
    'scss/at-mixin-named-arguments',
    // https://github.com/kristerkari/stylelint-scss/blob/master/src/rules/at-rule-conditional-no-parentheses/README.md
    'scss/at-rule-conditional-no-parentheses',
    // https://github.com/kristerkari/stylelint-scss/blob/master/src/rules/comment-no-loud/README.md
    'scss/comment-no-loud',
    // https://github.com/kristerkari/stylelint-scss/blob/master/src/rules/dimension-no-non-numeric-values/README.md
    'scss/dimension-no-non-numeric-values',
    // https://github.com/kristerkari/stylelint-scss/blob/master/src/rules/function-color-relative/README.md
    'scss/function-color-relative',
    // https://github.com/kristerkari/stylelint-scss/blob/master/src/rules/function-quote-no-quoted-strings-inside/README.md
    'scss/function-quote-no-quoted-strings-inside',
    // https://github.com/kristerkari/stylelint-scss/blob/master/src/rules/function-unquote-no-unquoted-strings-inside/README.md
    'scss/function-unquote-no-unquoted-strings-inside',
    // https://github.com/kristerkari/stylelint-scss/blob/master/src/rules/map-keys-quotes/README.md
    'scss/map-keys-quotes',
    // https://github.com/kristerkari/stylelint-scss/blob/master/src/rules/no-duplicate-dollar-variables/README.md
    'scss/no-duplicate-dollar-variables',
    // https://github.com/kristerkari/stylelint-scss/blob/master/src/rules/selector-no-union-class-name/README.md
    'scss/selector-no-union-class-name',
    // https://github.com/kristerkari/stylelint-scss/blob/master/src/rules/media-feature-value-dollar-variable/README.md
    'scss/media-feature-value-dollar-variable',
    // https://stylelint.io/user-guide/rules/selector-no-qualifying-type/
    'selector-no-qualifying-type',
    // https://stylelint.io/user-guide/rules/shorthand-property-no-redundant-values/
    'shorthand-property-no-redundant-values',
    // https://github.com/hudochenkov/stylelint-order/blob/master/rules/properties-order/README.md
    'order/properties-order',
];

const unusedRules = [
    ...tooOpinionated,
    ...overridenByOtherRule,
    ...formattingByPrettier,
    ...toReview,
].reduce((rules, r) => {
    rules[r] = true;
    return rules;
}, {});

module.exports = Object.assign({}, config, {
    rules: Object.assign(unusedRules, config.rules),
});
