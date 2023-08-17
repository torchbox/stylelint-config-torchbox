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
    // https://github.com/kristerkari/stylelint-scss/blob/master/src/rules/at-function-pattern/README.md
    'scss/at-function-pattern',
    // https://github.com/kristerkari/stylelint-scss/blob/master/src/rules/at-import-partial-extension-blacklist/README.md
    'scss/at-import-partial-extension-blacklist',
    // https://github.com/kristerkari/stylelint-scss/blob/master/src/rules/at-import-partial-extension-whitelist/README.md
    'scss/at-import-partial-extension-whitelist',
    // https://github.com/kristerkari/stylelint-scss/blob/master/src/rules/dollar-variable-default/README.md
    'scss/dollar-variable-default',
    // https://github.com/kristerkari/stylelint-scss/blob/master/src/rules/dollar-variable-pattern/README.md
    'scss/dollar-variable-pattern',
    // https://github.com/kristerkari/stylelint-scss/blob/master/src/rules/no-dollar-variables/README.md
    'scss/no-dollar-variables',
    // https://github.com/kristerkari/stylelint-scss/blob/master/src/rules/partial-no-import/README.md
    'scss/partial-no-import',
    // https://github.com/kristerkari/stylelint-scss/blob/master/src/rules/selector-nest-combinators/README.md
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
    // List of rules from stylelint v14.16.1 upgrade.
    // https://stylelint.io/user-guide/rules/annotation-no-unknown
    'annotation-no-unknown',
    // https://stylelint.io/user-guide/rules/declaration-property-max-values
    'declaration-property-max-values',
    // https://stylelint.io/user-guide/rules/function-no-unknown
    'function-no-unknown',
    // https://stylelint.io/user-guide/rules/import-notation
    'import-notation',
    // https://stylelint.io/user-guide/rules/keyframe-block-no-duplicate-selectors
    'keyframe-block-no-duplicate-selectors',
    // https://stylelint.io/user-guide/rules/keyframe-selector-notation
    'keyframe-selector-notation',
    // https://stylelint.io/user-guide/rules/media-feature-range-notation
    'media-feature-range-notation',
    // https://stylelint.io/user-guide/rules/selector-not-notation
    'selector-not-notation',
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
    // https://github.com/kristerkari/stylelint-scss/blob/master/src/rules/media-feature-value-dollar-variable/README.md
    'scss/media-feature-value-dollar-variable',
    // https://github.com/kristerkari/stylelint-scss/blob/master/src/rules/no-duplicate-dollar-variables/README.md
    'scss/no-duplicate-dollar-variables',
    // https://github.com/kristerkari/stylelint-scss/blob/master/src/rules/selector-no-union-class-name/README.md
    'scss/selector-no-union-class-name',
    // https://stylelint.io/user-guide/rules/selector-no-qualifying-type
    'selector-no-qualifying-type',
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
