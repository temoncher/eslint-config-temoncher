const vueTemplateAirbnbRules = require('./vue-template-airbnb');

module.exports = {
  // [Plugin:Vue - Recommended] Overrides
  'vue/max-attributes-per-line': [
    2,
    {
      singleline: 1,
      multiline: {
        max: 1,
        allowFirstLine: false,
      },
    },
  ],
  'vue/attributes-order': [
    2,
    {
      order: [
        'DEFINITION',
        'LIST_RENDERING',
        'CONDITIONALS',
        'RENDER_MODIFIERS',
        'GLOBAL',
        'UNIQUE',
        'TWO_WAY_BINDING',
        'OTHER_DIRECTIVES',
        'OTHER_ATTR',
        'EVENTS',
        'CONTENT',
      ],
      alphabetical: false,
    },
  ],

  // [Plugin:Vue - Uncategorized](https://eslint.vuejs.org/rules/block-tag-newline.html)
  'vue/component-name-in-template-casing': [2, 'PascalCase'],
  'vue/html-comment-content-spacing': [1, 'never'],
  'vue/match-component-file-name': [
    2,
    {
      extensions: ['vue', 'js', 'jsx'],
      shouldMatchCase: true,
    },
  ],
  'vue/no-duplicate-attr-inheritance': 2,
  'vue/no-empty-component-block': 1,
  'vue/no-reserved-component-names': [
    2,
    {
      disallowVueBuiltInComponents: true,
      disallowVue3BuiltInComponents: true,
    },
  ],
  'vue/padding-line-between-blocks': [2, 'always'],
  'vue/require-name-property': 1,
  'vue/v-for-delimiter-style': 1,
  'vue/v-on-function-call': [
    1,
    'never',
    {
      ignoreIncludesComment: false,
    },
  ],

  // [Plugin:Vue - Extension rules](https://eslint.vuejs.org/rules/array-bracket-newline.html#vue-array-bracket-newline)
  ...vueTemplateAirbnbRules,

  // Overrides
  'no-param-reassign': [
    2,
    {
      props: true,
      ignorePropertyModificationsFor: [
        'state', // for vuex mutations
        'acc', // for reduce accumulators
        'e', // for e.returnvalue
      ],
    },
  ],
};
