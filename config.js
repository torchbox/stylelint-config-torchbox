'use strict';

// See https://stylelint.io/user-guide/rules/.
module.exports = {
    extends: ['stylelint-config-standard', 'stylelint-config-prettier'],
    plugins: ['stylelint-scss', 'stylelint-order'],
    rules: {
        'color-named': 'never',
        'number-leading-zero': 'always',
        'declaration-block-no-shorthand-property-overrides': true,
        'declaration-no-important': true,
        'selector-max-id': 0,
        'selector-max-type': [
            2,
            { ignore: ['child', 'compounded', 'next-sibling'] },
        ],
        'max-nesting-depth': 4,
        'selector-max-specificity': '0,4,0',
        'value-no-vendor-prefix': true,
        'function-calc-no-invalid': true,
        'property-no-vendor-prefix': true,
        'selector-no-vendor-prefix': true,
        'media-feature-name-no-vendor-prefix': true,
        'declaration-empty-line-before': null,
        'no-descending-specificity': null,
        'at-rule-no-vendor-prefix': true,
        'at-rule-no-unknown': null,
        'scss/at-rule-no-unknown': true,
        'scss/declaration-nested-properties': 'never',
        'scss/selector-no-redundant-nesting-selector': true,
        'scss/percent-placeholder-pattern': '^do-not-use-placeholders$',
        'scss/dollar-variable-no-missing-interpolation': true,
        'scss/at-mixin-argumentless-call-parentheses': 'always',
        'scss/media-feature-value-dollar-variable': 'always',
        'order/order': [
            'dollar-variables',
            'custom-properties',
            // @-rules that have no nesting.
            { type: 'at-rule', hasBlock: false },
            'declarations',
            'rules',
            // @-rules that have nested elements, e.g. media queries
            { type: 'at-rule', hasBlock: true },
        ],
    },
};
