module.exports = {
    extends: '@wagtail/stylelint-config-wagtail',
    rules: {
        'scss/selector-no-union-class-name': null,
        'scss/at-rule-no-unknown': [
            true,
            {
                ignoreAtRules: [
                    'apply',
                    'variants',
                    'responsive',
                    'screen',
                    'layer',
                ],
            },
        ],
        'no-invalid-position-at-import-rule': [
            true,
            {
                ignoreAtRules: ['use'],
            },
        ],
        // Would be valuable for strict BEM components but is too hard to enforce with legacy code.
        'no-descending-specificity': null,
        // Override stylelint-config-wagtail’s options to allow all float and clear values for now.
        'declaration-property-value-allowed-list': {
            // 'clear': ['both', 'none'],
            // 'float': ['inline-start', 'inline-end', 'none', 'unset'],
            'text-align': ['start', 'end', 'center'],
        },
        // Some parts of declaration-strict-value commented out until we are in a position to enforce them.
        'scale-unlimited/declaration-strict-value': [
            [
                // Colors should always be defined from variables or functions.
                '/color/',
                'fill',
                'stroke',
                // Font tokens should come from our design tokens.
                'font-family',
                // 'font-size',
                // 'font-weight',
                // Spacing should use a consistent scale rather than hard-coded values.
                // '/margin/',
                // '/padding/',
                // 'gap',
                // Consistently using variables for z-index allows us to define the order of the values globally.
                // 'z-index',
            ],
            {
                ignoreValues: [
                    'currentColor',
                    'inherit',
                    'initial',
                    'none',
                    'unset',
                    'transparent',
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
        // Allow use of 'right', 'left' and 'text-transform'
        'property-disallowed-list': null,
        // Refined ordering to align with media mixin usage - see https://github.com/wagtail/stylelint-config-wagtail/issues/37
        'order/order': [
            'dollar-variables',
            'custom-properties',
            // Disabled until we migrate existing code.
            // { type: 'at-rule', hasBlock: true },  // @-rules that have no nesting.
            'declarations',
        ],
    },
};
