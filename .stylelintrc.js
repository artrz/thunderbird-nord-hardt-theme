/** @type {import('stylelint').Config} */
export default {
    extends: [
        'stylelint-config-standard-scss',
    ],
    rules: {
        'comment-empty-line-before': null,
        'custom-property-pattern': null,
        'no-descending-specificity': null,
        'no-duplicate-selectors': null,
        'selector-id-pattern': null,
        'selector-type-no-unknown': [true, { ignore: ['custom-elements', 'default-namespace'] }],
        'scss/double-slash-comment-empty-line-before': null,
    },
};
