const config = require('../config');

/**
 * Use this file to list all available rules that should *not* be used.
 * This is useful so that when new rules are introduced, we can tell right away,
 * and decide whether to add them to this "unused" list, or start using them.
 */

const tooOpinionated = [
    // https://stylelint.io/user-guide/rules/comment-word-disallowed-list
    'comment-word-disallowed-list',
    // https://stylelint.io/user-guide/rules/declaration-property-unit-allowed-list
    'declaration-property-unit-allowed-list',
    // https://stylelint.io/user-guide/rules/declaration-property-unit-disallowed-list
    'declaration-property-unit-disallowed-list',
    // https://stylelint.io/user-guide/rules/declaration-property-value-allowed-list
    'declaration-property-value-allowed-list',
    // https://stylelint.io/user-guide/rules/font-weight-notation
    'font-weight-notation',
    // https://stylelint.io/user-guide/rules/function-allowed-list
    'function-allowed-list',
    // https://stylelint.io/user-guide/rules/function-disallowed-list
    'function-disallowed-list',
    // https://stylelint.io/user-guide/rules/function-url-no-scheme-relative
    'function-url-no-scheme-relative',
    // https://stylelint.io/user-guide/rules/function-url-scheme-allowed-list
    'function-url-scheme-allowed-list',
    // https://stylelint.io/user-guide/rules/function-url-scheme-disallowed-list
    'function-url-scheme-disallowed-list',
    // https://stylelint.io/user-guide/rules/media-feature-name-allowed-list
    'media-feature-name-allowed-list',
    // https://stylelint.io/user-guide/rules/media-feature-name-disallowed-list
    'media-feature-name-disallowed-list',
    // https://stylelint.io/user-guide/rules/media-feature-name-value-allowed-list
    'media-feature-name-value-allowed-list',
    // https://stylelint.io/user-guide/rules/no-unknown-animations
    'no-unknown-animations',
    // https://github.com/hudochenkov/stylelint-order/blob/master/rules/properties-alphabetical-order/README.md
    'order/properties-alphabetical-order',
    // https://stylelint.io/user-guide/rules/property-allowed-list
    'property-allowed-list',
    // https://stylelint.io/user-guide/rules/property-disallowed-list
    'property-disallowed-list',
    // https://github.com/stylelint-scss/stylelint-scss/blob/master/src/rules/at-import-partial-extension-blacklist
    'scss/at-import-partial-extension-blacklist',
    // https://github.com/stylelint-scss/stylelint-scss/blob/master/src/rules/at-import-partial-extension-whitelist
    'scss/at-import-partial-extension-whitelist',
    // https://github.com/stylelint-scss/stylelint-scss/blob/master/src/rules/dollar-variable-default
    'scss/dollar-variable-default',
    // https://github.com/stylelint-scss/stylelint-scss/blob/master/src/rules/no-dollar-variables
    'scss/no-dollar-variables',
    // https://github.com/stylelint-scss/stylelint-scss/blob/master/src/rules/partial-no-import
    'scss/partial-no-import',
    // https://github.com/stylelint-scss/stylelint-scss/blob/master/src/rules/selector-nest-combinators
    'scss/selector-nest-combinators',
    // https://stylelint.io/user-guide/rules/selector-attribute-operator-allowed-list
    'selector-attribute-operator-allowed-list',
    // https://stylelint.io/user-guide/rules/selector-attribute-operator-disallowed-list
    'selector-attribute-operator-disallowed-list',
    // https://stylelint.io/user-guide/rules/selector-combinator-allowed-list
    'selector-combinator-allowed-list',
    // https://stylelint.io/user-guide/rules/selector-combinator-disallowed-list
    'selector-combinator-disallowed-list',
    // https://stylelint.io/user-guide/rules/selector-max-attribute
    'selector-max-attribute',
    // https://stylelint.io/user-guide/rules/selector-max-class
    'selector-max-class',
    // https://stylelint.io/user-guide/rules/selector-max-combinators
    'selector-max-combinators',
    // https://stylelint.io/user-guide/rules/selector-max-compound-selectors
    'selector-max-compound-selectors',
    // https://stylelint.io/user-guide/rules/selector-max-pseudo-class
    'selector-max-pseudo-class',
    // https://stylelint.io/user-guide/rules/selector-max-universal
    'selector-max-universal',
    // https://stylelint.io/user-guide/rules/selector-nested-pattern
    'selector-nested-pattern',
    // https://stylelint.io/user-guide/rules/selector-pseudo-class-allowed-list
    'selector-pseudo-class-allowed-list',
    // https://stylelint.io/user-guide/rules/selector-pseudo-class-disallowed-list
    'selector-pseudo-class-disallowed-list',
    // https://stylelint.io/user-guide/rules/selector-pseudo-element-allowed-list
    'selector-pseudo-element-allowed-list',
    // https://stylelint.io/user-guide/rules/selector-pseudo-element-disallowed-list
    'selector-pseudo-element-disallowed-list',
    // https://stylelint.io/user-guide/rules/time-min-milliseconds
    'time-min-milliseconds',
    // https://stylelint.io/user-guide/rules/unit-allowed-list
    'unit-allowed-list',
    // https://stylelint.io/user-guide/rules/unit-disallowed-list
    'unit-disallowed-list',
];

const overridenByOtherRule = [
    'at-rule-disallowed-list',
    'at-rule-property-required-list',
    'at-rule-allowed-list',
    'color-no-hex',
];

const formattingByPrettier = [
    'scss/dollar-variable-colon-newline-after',
    'scss/double-slash-comment-inline',
];

const toReview = [
    // List of rules from stylelint v15.10.2 upgrade.
    // https://stylelint.io/user-guide/rules/media-query-no-invalid
    'media-query-no-invalid',
    // https://stylelint.io/user-guide/rules/declaration-property-value-no-unknown
    'declaration-property-value-no-unknown',
    // https://stylelint.io/user-guide/rules/media-feature-name-unit-allowed-list
    'media-feature-name-unit-allowed-list',
    // https://stylelint.io/user-guide/rules/media-feature-name-value-no-unknown
    'media-feature-name-value-no-unknown',
    // https://stylelint.io/user-guide/rules/no-unknown-custom-properties
    'no-unknown-custom-properties',
    // https://github.com/stylelint-scss/stylelint-scss/blob/master/src/rules/at-use-no-unnamespaced
    'scss/at-use-no-unnamespaced',
    // https://github.com/stylelint-scss/stylelint-scss/blob/master/src/rules/dollar-variable-no-namespaced-assignment
    'scss/dollar-variable-no-namespaced-assignment',
    // https://github.com/stylelint-scss/stylelint-scss/blob/master/src/rules/function-disallowed-list
    'scss/function-disallowed-list',
    // https://github.com/stylelint-scss/stylelint-scss/blob/master/src/rules/function-no-unknown
    'scss/function-no-unknown',
    // List of rules from stylelint v14 upgrade.
    // https://stylelint.io/user-guide/rules/declaration-property-max-values
    'declaration-property-max-values',
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
    // https://stylelint.io/user-guide/rules/selector-no-qualifying-type
    'selector-no-qualifying-type',
    // List of rules from stylelint v13 upgrade.
    // https://github.com/stylelint-scss/stylelint-scss/blob/master/src/rules/at-each-key-value-single-line
    'scss/at-each-key-value-single-line',
    // https://github.com/stylelint-scss/stylelint-scss/blob/master/src/rules/at-function-named-arguments
    'scss/at-function-named-arguments',
    // https://github.com/stylelint-scss/stylelint-scss/blob/master/src/rules/at-mixin-named-arguments
    'scss/at-mixin-named-arguments',
    // https://github.com/stylelint-scss/stylelint-scss/blob/master/src/rules/comment-no-loud
    'scss/comment-no-loud',
    // https://github.com/stylelint-scss/stylelint-scss/blob/master/src/rules/dimension-no-non-numeric-values
    'scss/dimension-no-non-numeric-values',
    // https://github.com/stylelint-scss/stylelint-scss/blob/master/src/rules/dollar-variable-empty-line-after
    'scss/dollar-variable-empty-line-after',
    // https://github.com/stylelint-scss/stylelint-scss/blob/master/src/rules/dollar-variable-first-in-block
    'scss/dollar-variable-first-in-block',
    // https://github.com/stylelint-scss/stylelint-scss/blob/master/src/rules/function-color-relative
    'scss/function-color-relative',
    // https://github.com/stylelint-scss/stylelint-scss/blob/master/src/rules/map-keys-quotes
    'scss/map-keys-quotes',
    // https://github.com/stylelint-scss/stylelint-scss/blob/master/src/rules/media-feature-value-dollar-variable
    'scss/media-feature-value-dollar-variable',
    // https://github.com/stylelint-scss/stylelint-scss/blob/master/src/rules/no-duplicate-dollar-variables
    'scss/no-duplicate-dollar-variables',
    // https://github.com/stylelint-scss/stylelint-scss/blob/master/src/rules/selector-no-union-class-name
    'scss/selector-no-union-class-name',
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
