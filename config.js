'use strict';

// See https://stylelint.io/user-guide/rules/.
module.exports = {
    extends: ['stylelint-config-standard', 'stylelint-config-prettier'],
    plugins: [
        'stylelint-scss',
        'stylelint-order',
        'stylelint-a11y',
        'stylelint-declaration-strict-value',
    ],
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
        'order/order': [
            'dollar-variables',
            'custom-properties',
            // @-rules that have no nesting.
            { type: 'at-rule', hasBlock: false },
            'declarations',
        ],
        'a11y/content-property-no-static-value': true,
        'a11y/no-obsolete-attribute': true,
        'a11y/no-obsolete-element': true,
        'a11y/no-text-align-justify': true,
        'a11y/no-outline-none': true,
        'scale-unlimited/declaration-strict-value': [
            ['color', 'background-color', 'fill', 'stroke', '/-color/'],
            {
                ignoreKeywords: [
                    'currentColor',
                    'inherit',
                    'transparent',
                    'initial',
                ],
            },
        ],
    },
};
