import config from '../config.js';

/**
 * Use this file to list all available rules that should *not* be used.
 * This is useful so that when new rules are introduced, we can tell right away,
 * and decide whether to add them to this "unused" list, or start using them.
 */

/** Rules that we’ve reviewed previously and decided to not enforce. */
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
    // https://stylelint.io/user-guide/rules/no-unknown-custom-media
    'no-unknown-custom-media',
    // https://github.com/hudochenkov/stylelint-order/blob/master/rules/properties-alphabetical-order/README.md
    'order/properties-alphabetical-order',
    // https://stylelint.io/user-guide/rules/property-allowed-list
    'property-allowed-list',
    // https://stylelint.io/user-guide/rules/property-disallowed-list
    'property-disallowed-list',
    // https://stylelint.io/user-guide/rules/rule-nesting-at-rule-required-list
    'rule-nesting-at-rule-required-list',
    // https://github.com/stylelint-scss/stylelint-scss/blob/master/src/rules/at-import-partial-extension-disallowed-list
    'scss/at-import-partial-extension-disallowed-list',
    // https://github.com/stylelint-scss/stylelint-scss/blob/master/src/rules/at-import-partial-extension-allowed-list
    'scss/at-import-partial-extension-allowed-list',
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

/** Rules that are overridden by other rules. */
const overridenByOtherRule = [
    'at-rule-disallowed-list',
    'at-rule-property-required-list',
    'at-rule-allowed-list',
    'color-no-hex',
];

/** Rules that are unused because they are handled by auto-formatting. */
const formatting = [
    'scss/dollar-variable-colon-newline-after',
    'scss/double-slash-comment-inline',
];

// prettier-ignore
/** Rules that have been introduced in a new version and haven’t been reviewed yet. */
const toReviewUpgrades = {
    upgrade17: {
        'display-notation': 'https://stylelint.io/user-guide/rules/display-notation',
    },
    upgrade16: {
        'scss/at-mixin-no-risky-nesting-selector': 'https://github.com/stylelint-scss/stylelint-scss/blob/master/src/rules/at-mixin-no-risky-nesting-selector',
        'scss/at-root-no-redundant': 'https://github.com/stylelint-scss/stylelint-scss/blob/master/src/rules/at-root-no-redundant',
        'scss/at-use-no-redundant-alias': 'https://github.com/stylelint-scss/stylelint-scss/blob/master/src/rules/at-use-no-redundant-alias',
        'scss/block-no-redundant-nesting': 'https://github.com/stylelint-scss/stylelint-scss/blob/master/src/rules/block-no-redundant-nesting',
        'scss/declaration-property-value-no-unknown': 'https://github.com/stylelint-scss/stylelint-scss/blob/master/src/rules/declaration-property-value-no-unknown',
        'scss/function-calculation-no-interpolation': 'https://github.com/stylelint-scss/stylelint-scss/blob/master/src/rules/function-calculation-no-interpolation',
        'scss/function-color-channel': 'https://github.com/stylelint-scss/stylelint-scss/blob/master/src/rules/function-color-channel',
        'scss/no-duplicate-load-rules': 'https://github.com/stylelint-scss/stylelint-scss/blob/master/src/rules/no-duplicate-load-rules',
        'scss/no-unused-private-members': 'https://github.com/stylelint-scss/stylelint-scss/blob/master/src/rules/no-unused-private-members',
        'scss/property-no-unknown': 'https://github.com/stylelint-scss/stylelint-scss/blob/master/src/rules/property-no-unknown',
    },
    upgrade15: {
        'media-query-no-invalid': 'https://stylelint.io/user-guide/rules/media-query-no-invalid',
        'declaration-property-value-no-unknown': 'https://stylelint.io/user-guide/rules/declaration-property-value-no-unknown',
        'media-feature-name-unit-allowed-list': 'https://stylelint.io/user-guide/rules/media-feature-name-unit-allowed-list',
        'media-feature-name-value-no-unknown': 'https://stylelint.io/user-guide/rules/media-feature-name-value-no-unknown',
        'no-unknown-custom-properties': 'https://stylelint.io/user-guide/rules/no-unknown-custom-properties',
        'scss/at-use-no-unnamespaced': 'https://github.com/stylelint-scss/stylelint-scss/blob/master/src/rules/at-use-no-unnamespaced',
        'scss/dollar-variable-no-namespaced-assignment': 'https://github.com/stylelint-scss/stylelint-scss/blob/master/src/rules/dollar-variable-no-namespaced-assignment',
        'scss/function-disallowed-list': 'https://github.com/stylelint-scss/stylelint-scss/blob/master/src/rules/function-disallowed-list',
        'scss/function-no-unknown': 'https://github.com/stylelint-scss/stylelint-scss/blob/master/src/rules/function-no-unknown',
    },
    upgrade14: {
        'declaration-property-max-values': 'https://stylelint.io/user-guide/rules/declaration-property-max-values',
        'color-hex-alpha': 'https://stylelint.io/user-guide/rules/color-hex-alpha/',
        'comment-pattern': 'https://stylelint.io/user-guide/rules/comment-pattern/',
        'rule-selector-property-disallowed-list': 'https://stylelint.io/user-guide/rules/rule-selector-property-disallowed-list/',
        'selector-attribute-name-disallowed-list': 'https://stylelint.io/user-guide/rules/selector-attribute-name-disallowed-list/',
        'selector-disallowed-list': 'https://stylelint.io/user-guide/rules/selector-disallowed-list/',
        'selector-no-qualifying-type': 'https://stylelint.io/user-guide/rules/selector-no-qualifying-type',
    },
    upgrade13: {
        'scss/at-each-key-value-single-line': 'https://github.com/stylelint-scss/stylelint-scss/blob/master/src/rules/at-each-key-value-single-line',
        'scss/at-function-named-arguments': 'https://github.com/stylelint-scss/stylelint-scss/blob/master/src/rules/at-function-named-arguments',
        'scss/at-mixin-named-arguments': 'https://github.com/stylelint-scss/stylelint-scss/blob/master/src/rules/at-mixin-named-arguments',
        'scss/comment-no-loud': 'https://github.com/stylelint-scss/stylelint-scss/blob/master/src/rules/comment-no-loud',
        'scss/dimension-no-non-numeric-values': 'https://github.com/stylelint-scss/stylelint-scss/blob/master/src/rules/dimension-no-non-numeric-values',
        'scss/dollar-variable-empty-line-after': 'https://github.com/stylelint-scss/stylelint-scss/blob/master/src/rules/dollar-variable-empty-line-after',
        'scss/dollar-variable-first-in-block': 'https://github.com/stylelint-scss/stylelint-scss/blob/master/src/rules/dollar-variable-first-in-block',
        'scss/function-color-relative': 'https://github.com/stylelint-scss/stylelint-scss/blob/master/src/rules/function-color-relative',
        'scss/map-keys-quotes': 'https://github.com/stylelint-scss/stylelint-scss/blob/master/src/rules/map-keys-quotes',
        'scss/media-feature-value-dollar-variable': 'https://github.com/stylelint-scss/stylelint-scss/blob/master/src/rules/media-feature-value-dollar-variable',
        'scss/no-duplicate-dollar-variables': 'https://github.com/stylelint-scss/stylelint-scss/blob/master/src/rules/no-duplicate-dollar-variables',
        'scss/selector-no-union-class-name': 'https://github.com/stylelint-scss/stylelint-scss/blob/master/src/rules/selector-no-union-class-name',
        'order/properties-order': 'https://github.com/hudochenkov/stylelint-order/blob/master/rules/properties-order/README.md',
    }
};

const toReview = [
    ...Object.values(toReviewUpgrades).flatMap((obj) => Object.keys(obj)),
];

const unusedRules = [
    ...tooOpinionated,
    ...overridenByOtherRule,
    ...formatting,
    ...toReview,
].reduce((rules, r) => {
    rules[r] = true;
    return rules;
}, {});

export default Object.assign({}, config, {
    rules: Object.assign(unusedRules, config.rules),
});
