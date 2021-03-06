/**
 * @typedef {import('eslint').Linter.Config['rules']} Rules
 */

/** @type {Rules} */
module.exports = {
  // [Plugin:Import](https://github.com/benmosher/eslint-plugin-import)
  'import/order': [
    1,
    {
      groups: [
        'builtin',
        'external',
        'parent',
        'sibling',
        'index',
      ],
      pathGroups: [
        {
          pattern: '@/**',
          group: 'parent',
          position: 'before',
        },
      ],
      'newlines-between': 'always',
      alphabetize: {
        order: 'asc',
        caseInsensitive: false,
      },
      pathGroupsExcludedImportTypes: [
        'builtin',
      ],
    },
  ],
  // disable import unnecessary rules
  'import/prefer-default-export': 0,
  'import/extensions': 0,

  // [Possible errors](https://eslint.org/docs/rules/#possible-errors)
  'no-console': 2,

  // [Best practices](https://eslint.org/docs/rules/#best-practices)
  complexity: [2, 6],
  'no-param-reassign': [
    2,
    {
      props: true,
      ignorePropertyModificationsFor: [
        'acc', // for reduce accumulators
      ],
    },
  ],

  // [Stylistic Issues](https://eslint.org/docs/rules/#stylistic-issues)
  'array-bracket-newline': [1, 'consistent'],
  'array-element-newline': [
    1,
    {
      multiline: true,
      minItems: 3,
    },
  ],
  'function-call-argument-newline': [1, 'consistent'],
  'func-style': [1, 'expression'],
  'function-paren-newline': [1, 'multiline-arguments'],
  'id-denylist': [
    2,
    'data',
    'err',
    'e',
    'cb',
    'callback',
    'handleChange',
    'handleClick',
    'handleSubmit',
    'handleInput',
  ],
  'prefer-exponentiation-operator': 2,
  'padding-line-between-statements': [
    1,
    {
      blankLine: 'always',
      prev: [
        'const',
        'let',
        'var',
      ],
      next: '*',
    },
    {
      blankLine: 'always',
      prev: '*',
      next: [
        'if',
        'try',
        'class',
        'export',
      ],
    },
    {
      blankLine: 'always',
      prev: [
        'if',
        'try',
        'class',
        'export',
      ],
      next: '*',
    },
    {
      blankLine: 'any',
      prev: [
        'const',
        'let',
        'var',
        'export',
      ],
      next: [
        'const',
        'let',
        'var',
        'export',
      ],
    },
    {
      blankLine: 'always',
      prev: [
        'expression',
      ],
      next: [
        'const',
        'let',
        'var',
      ],
    },
    {
      blankLine: 'always',
      prev: '*',
      next: [
        'return',
      ],
    },
  ],

  // [ES6](https://eslint.org/docs/rules/#ecmascript-6)
  'arrow-spacing': 1,
  'no-restricted-exports': [
    1,
    {
      restrictedNamedExports: ['default', 'then'],
    },
  ],
};
