'use strict';

const postcssScss = require('postcss-scss');

// See https://stylelint.io/user-guide/rules/.
module.exports = {
    extends: ['stylelint-config-standard', 'stylelint-config-prettier'],
    customSyntax: postcssScss,
    plugins: [
        'stylelint-scss',
        'stylelint-order',
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
        'selector-class-pattern': [
            // Loose pattern for hyphenated BEM. This also allows simple words to be used as class names, .e.g. `.active`, `.button`.
            // Based on:
            // - https://github.com/postcss/postcss-bem-linter/issues/89#issuecomment-255482072
            // - https://gist.github.com/Potherca/f2a65491e63338659c3a0d2b07eee382
            // See also: https://github.com/simonsmith/stylelint-selector-bem-pattern.
            // Proceed with caution if reviewing this – and use https://regexper.com.
            /^[a-z]+(-[a-z0-9]+)*(__[a-z0-9]+(-[a-z0-9]+)*)?(--[a-z0-9]+(-[a-z0-9]+)*)?$/,
            { resolveNestedSelectors: true },
        ],
        'keyframes-name-pattern': null,
        'custom-media-pattern': null,
        'custom-property-pattern': null,
        'selector-id-pattern': null,
        'alpha-value-notation': null,
        'color-function-notation': null,
        'max-nesting-depth': 4,
        'selector-max-specificity': '0,4,0',
        'value-no-vendor-prefix': true,
        'property-no-vendor-prefix': true,
        'selector-no-vendor-prefix': true,
        'media-feature-name-no-vendor-prefix': true,
        'declaration-empty-line-before': null,
        'no-descending-specificity': null,
        'at-rule-no-vendor-prefix': true,
        'at-rule-no-unknown': null,
        'declaration-block-no-redundant-longhand-properties': null,
        'shorthand-property-no-redundant-values': null,
        // Replaces previously-used `a11y/no-text-align-justify`.
        'declaration-property-value-disallowed-list': {
            'text-align': ['justify'],
        },
        'scss/at-rule-no-unknown': [
            true,
            {
                ignoreAtRules: [
                    'tailwind',
                    'apply',
                    'variants',
                    'responsive',
                    'screen',
                    'layer',
                ],
            },
        ],
        'scss/declaration-nested-properties': 'never',
        'scss/selector-no-redundant-nesting-selector': true,
        'scss/percent-placeholder-pattern': '^do-not-use-placeholders$',
        'scss/dollar-variable-no-missing-interpolation': true,
        'scss/at-mixin-argumentless-call-parentheses': 'always',
        'scss/at-mixin-pattern': /^[a-z0-9-]+$/,
        'order/order': [
            'dollar-variables',
            'custom-properties',
            // @-rules that have no nesting.
            { type: 'at-rule', hasBlock: false },
            'declarations',
        ],
        'scale-unlimited/declaration-strict-value': [
            ['color', 'fill', 'stroke', '/-color/'],
            {
                ignoreKeywords: [
                    'currentColor',
                    'inherit',
                    'transparent',
                    'initial',
                    'none',
                    'unset',
                    // System colors for forced-colors styling.
                    // See https://drafts.csswg.org/css-color-4/#css-system-colors.
                    'Canvas',
                    'CanvasText',
                    'LinkText',
                    'VisitedText',
                    'ActiveText',
                    'ButtonFace',
                    'ButtonText',
                    'ButtonBorder',
                    'Field',
                    'FieldText',
                    'Highlight',
                    'HighlightText',
                    'SelectedItem',
                    'SelectedItemText',
                    'Mark',
                    'MarkText',
                    'GrayText',
                    'AccentColor',
                    'AccentColorText',
                ],
            },
        ],
    },
};
