module.exports = {
  // [Possible errors]
  'vue/no-irregular-whitespace': 2,
  'vue/no-sparse-arrays': 2,

  // [Best practices]
  'vue/dot-location': [2, 'property'],
  'vue/dot-notation': [2, { allowKeywords: true }],
  'vue/eqeqeq': [2, 'always', { null: 'ignore' }],
  'vue/no-empty-pattern': 2,
  'vue/no-useless-concat': 2,

  // [Style]
  'vue/array-bracket-newline': [1, 'consistent'],
  'vue/array-element-newline': [1, { multiline: true, minItems: 3 }],
  'vue/array-bracket-spacing': [2, 'never'],
  'vue/block-spacing': [2, 'always'],
  'vue/brace-style': [2, '1tbs', { allowSingleLine: true }],
  'vue/camelcase': [2, { properties: 'never', ignoreDestructuring: false }],
  'vue/comma-dangle': [1, 'always-multiline'],
  'vue/comma-spacing': [2, { before: false, after: true }],
  'vue/comma-style': [2, 'last', {
    exceptions: {
      ArrayExpression: false,
      ArrayPattern: false,
      ArrowFunctionExpression: false,
      CallExpression: false,
      FunctionDeclaration: false,
      FunctionExpression: false,
      ImportDeclaration: false,
      ObjectExpression: false,
      ObjectPattern: false,
      VariableDeclaration: false,
      NewExpression: false,
    },
  }],
  'vue/func-call-spacing': [2, 'never'],
  'vue/key-spacing': [2, { beforeColon: false, afterColon: true }],
  'vue/keyword-spacing': [2, {
    before: true,
    after: true,
    overrides: {
      return: { after: true },
      throw: { after: true },
      case: { after: true },
    },
  }],
  'vue/max-len': [2, 100, 2, {
    ignoreUrls: true,
    ignoreComments: false,
    ignoreRegExpLiterals: true,
    ignoreStrings: true,
    ignoreTemplateLiterals: true,
  }],
  'vue/no-restricted-syntax': [
    2,
    {
      selector: 'ForInStatement',
      message: 'for..in loops iterate over the entire prototype chain, which is virtually never what you want. Use Object.{keys,values,entries}, and iterate over the resulting array.',
    },
    {
      selector: 'ForOfStatement',
      message: 'iterators/generators require regenerator-runtime, which is too heavyweight for this guide to allow them. Separately, loops should be avoided in favor of array iterations.',
    },
    {
      selector: 'LabeledStatement',
      message: 'Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.',
    },
    {
      selector: 'WithStatement',
      message: '`with` is disallowed in strict mode because it makes code impossible to predict and optimize.',
    },
  ],
  'vue/object-curly-newline': [2, {
    ObjectExpression: { minProperties: 4, multiline: true, consistent: true },
    ObjectPattern: { minProperties: 4, multiline: true, consistent: true },
    ImportDeclaration: { minProperties: 4, multiline: true, consistent: true },
    ExportDeclaration: { minProperties: 4, multiline: true, consistent: true },
  }],
  'vue/object-curly-spacing': [2, 'always'],
  'vue/object-property-newline': [2, {
    allowAllPropertiesOnSameLine: true,
  }],
  'vue/operator-linebreak': [2, 'before', { overrides: { '=': 'none' } }],

  // [ES6]
  'vue/arrow-spacing': 1,
  'vue/prefer-template': 2,
  'vue/space-in-parens': [2, 'never'],
  'vue/space-infix-ops': 2,
  'vue/space-unary-ops': [2, {
    words: true,
    nonwords: false,
    overrides: {
    },
  }],
  'vue/template-curly-spacing': 2,

  // [Removed or deprecated]
  'vue/no-extra-parens': 0,
};
