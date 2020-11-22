/**
 * @typedef {import('eslint').Linter.Config} LinterConfig
 */

/** @type {LinterConfig} */
module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:import/warnings',
    'airbnb-base',
  ],
  rules: {
    semi: 1,
    'comma-dangle': [
      1,
      'always-multiline',
    ],
    'no-console': 2,
    quotes: [
      1,
      'single',
      'avoid-escape',
    ],
    'no-trailing-spaces': 1,
    indent: [
      1,
      2,
    ],
    'no-multiple-empty-lines': [
      1,
      {
        max: 1,
      },
    ],
    'eol-last': [
      1,
      'always',
    ],
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
    ],
    'block-spacing': 1,
    eqeqeq: [
      1,
      'always',
    ],
    'comma-spacing': [
      1,
      {
        before: false,
        after: true,
      },
    ],
    'func-call-spacing': [
      1,
      'never',
    ],
    'no-duplicate-imports': 2,
    'newline-before-return': 1,
    'object-curly-spacing': [
      1,
      'always',
      {
        arraysInObjects: true,
        objectsInObjects: true,
      },
    ],
    'padded-blocks': [
      1,
      'never',
    ],
    'space-infix-ops': 1,
    'object-property-newline': [
      1,
      {
        allowAllPropertiesOnSameLine: true,
      },
    ],
    'arrow-spacing': 1,
    'key-spacing': [
      1,
      {
        afterColon: true,
      },
    ],
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
  },
};

