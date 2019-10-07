const config = require('../config');

/**
 * Use this file to list all available rules that should *not* be used.
 * This is useful so that when new rules are introduced, we can tell right away,
 * and decide whether to add them to this "unused" list, or start using them.
 */

const tooOpinionated = [
    'comment-word-blacklist',
    'custom-media-pattern',
    'custom-property-pattern',
    'declaration-block-no-redundant-longhand-properties',
    'declaration-property-unit-blacklist',
    'declaration-property-unit-whitelist',
    'declaration-property-value-blacklist',
    'declaration-property-value-whitelist',
    'font-family-name-quotes',
    'font-weight-notation',
    'function-blacklist',
    'function-url-no-scheme-relative',
    'function-url-quotes',
    'function-url-scheme-blacklist',
    'function-url-scheme-whitelist',
    'function-whitelist',
    'keyframes-name-pattern',
    'linebreaks',
    'media-feature-name-blacklist',
    'media-feature-name-value-whitelist',
    'media-feature-name-whitelist',
    'no-empty-first-line',
    'no-unknown-animations',
    'number-max-precision',
    'property-blacklist',
    'property-whitelist',
    'scss/partial-no-import',
    'scss/selector-nest-combinators',
    'selector-attribute-operator-blacklist',
    'selector-attribute-operator-whitelist',
    'selector-combinator-blacklist',
    'selector-combinator-whitelist',
    'selector-max-attribute',
    'selector-max-class',
    'selector-max-combinators',
    'selector-max-compound-selectors',
    'selector-max-pseudo-class',
    'selector-max-universal',
    'selector-nested-pattern',
    'selector-pseudo-class-blacklist',
    'selector-pseudo-class-whitelist',
    'selector-pseudo-element-blacklist',
    'selector-pseudo-element-whitelist',
    'time-min-milliseconds',
    'unit-blacklist',
    'unit-whitelist',
    'value-keyword-case',
    'scss/dollar-variable-pattern',
    'scss/at-function-pattern',
    'scss/at-import-partial-extension-blacklist',
    'scss/at-import-partial-extension-whitelist',
    'scss/dollar-variable-default',
    'scss/no-dollar-variables',
    'order/properties-alphabetical-order',
    'a11y/font-size-is-readable',
    'a11y/line-height-is-vertical-rhythmed',
    'a11y/media-prefers-color-scheme',
    'a11y/media-prefers-reduced-motion',
    'a11y/no-display-none',
    'a11y/no-spread-text',
    'a11y/selector-pseudo-class-focus',
];

const overridenByOtherRule = [
    'at-rule-blacklist',
    'at-rule-property-requirelist',
    'at-rule-whitelist',
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
