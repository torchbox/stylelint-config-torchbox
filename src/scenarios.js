/**
 * Test scenarios for config rules.
 * Each scenario contains code that violates specific rules for testing.
 */

export default {
    'color-named': {
        code: '.foo { color: red; background: blue; }',
    },
    'declaration-block-no-shorthand-property-overrides': {
        code: '.foo { padding-left: 10px; padding: 20px; }',
    },
    'declaration-no-important': {
        code: '.foo { color: red !important; display: block !important; }',
    },
    'selector-max-id': {
        code: '#foo { color: black; } #bar #baz { color: black; }',
    },
    'selector-max-type': {
        code: 'div span a strong { color: black; }',
    },
    'selector-class-pattern': {
        code: '.InvalidClass { color: black; } .invalid_underscore { color: black; }',
    },
    'scss/selector-class-pattern': {
        code: '.InvalidClass { color: black; } .invalid_underscore { color: black; }',
    },
    'max-nesting-depth': {
        code: '.a { .b { .c { .d { .e { .f { color: black; } } } } } }',
    },
    'selector-max-specificity': {
        code: '.a .b .c .d .e { color: black; }',
    },
    'value-no-vendor-prefix': {
        code: '.foo { display: -webkit-box; }',
    },
    'property-no-vendor-prefix': {
        code: '.foo { -webkit-transform: scale(1); }',
    },
    'selector-no-vendor-prefix': {
        code: '::-webkit-input-placeholder { color: black; }',
    },
    'media-feature-name-no-vendor-prefix': {
        code: '@media (-webkit-min-device-pixel-ratio: 1) { .foo { color: black; } }',
    },
    'at-rule-no-vendor-prefix': {
        code: '@-webkit-keyframes foo { from { opacity: 0; } }',
    },
    'declaration-property-value-disallowed-list': {
        code: '.foo { text-align: justify; }',
    },
    'scss/at-rule-no-unknown': {
        code: '@tailwind base; @unknown-rule; @apply text-sm;',
    },
    'scss/declaration-nested-properties': {
        code: '.foo { font: { family: Arial; size: 12px; } }',
    },
    'scss/selector-no-redundant-nesting-selector': {
        code: '.foo { & > & { color: black; } }',
    },
    'scss/percent-placeholder-pattern': {
        code: '%my-placeholder { color: black; } .foo { @extend %my-placeholder; }',
    },
    'scss/dollar-variable-no-missing-interpolation': {
        code: '$var: "value"; .foo { content: "$var"; }',
    },
    'scss/at-mixin-argumentless-call-parentheses': {
        code: '@mixin foo { color: black; } .bar { @include foo; }',
    },
    'scss/at-mixin-pattern': {
        code: '@mixin InvalidMixinName { color: black; } @mixin invalid_mixin { color: black; }',
    },
    'order/order': {
        code: '.foo { color: black; $var: 10px; @include bar; }',
    },
    'scale-unlimited/declaration-strict-value': {
        code: '.foo { color: #fff; background-color: rgb(0, 0, 0); border-color: hsl(0, 0%, 0%); }',
    },
    'keyframes-name-pattern': {
        code: '@keyframes INVALID_NAME { from { opacity: 0; } } @keyframes invalid_name { from { opacity: 0; } }',
    },
    'custom-media-pattern': {
        code: '@custom-media --INVALID_NAME (min-width: 768px); @custom-media --invalid_name (min-width: 768px);',
    },
    'custom-property-pattern': {
        code: '.foo { --INVALID_NAME: red; --invalid_name: blue; }',
    },
    'selector-id-pattern': {
        code: '#INVALID_ID { color: black; } #invalid_id { color: black; }',
    },
    'alpha-value-notation': {
        code: '.foo { color: rgb(0 0 0 / 0.5); background: rgba(255, 255, 255, 50%); }',
    },
    'color-function-notation': {
        code: '.foo { color: rgba(0, 0, 0, 0.5); background: hsla(0, 100%, 50%, 0.5); }',
    },
    'selector-not-notation': {
        code: '.foo:not(.bar, .baz) { color: black; }',
    },
    'media-feature-range-notation': {
        code: '@media (min-width: 768px) { .foo { color: black; } }',
    },
    'scss/no-global-function-names': {
        code: '.foo { color: adjust-color(#000, $red: 10); opacity: fade-out(#000, 0.5); }',
    },
    'declaration-empty-line-before': {
        code: '.foo { color: black; background: white; }',
    },
    'no-descending-specificity': {
        code: '.foo .bar { color: black; } .foo { color: red; }',
    },
    'at-rule-no-unknown': {
        code: '@unknown { color: black; } @custom-selector; @random-rule;',
    },
    'declaration-block-no-redundant-longhand-properties': {
        code: '.foo { margin-top: 10px; margin-right: 10px; margin-bottom: 10px; margin-left: 10px; }',
    },
    'shorthand-property-no-redundant-values': {
        code: '.foo { margin: 10px 10px 10px 10px; padding: 5px 5px; }',
    },
    'at-rule-empty-line-before': {
        code: '.foo { color: black; } @media (min-width: 768px) { .bar { color: red; } }',
    },
    'scss/double-slash-comment-empty-line-before': {
        code: '.foo { color: black; } // Comment without empty line before',
    },
    'scss/dollar-variable-empty-line-before': {
        code: '.foo { color: black; } $variable: 10px;',
    },
    'scss/dollar-variable-pattern': {
        code: '$INVALID_VAR: 10px; $invalid_var: 20px;',
    },
    'scss/at-function-pattern': {
        code: '@function INVALID_FUNCTION() { @return 10px; } @function invalid_function() { @return 20px; }',
    },
    'scss/at-extend-no-missing-placeholder': {
        code: '.foo { color: black; } .bar { @extend .foo; }',
    },
};
