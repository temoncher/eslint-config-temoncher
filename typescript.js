/**
 * @typedef {import('eslint').Linter.Config} LinterConfig
 */

/** @type {LinterConfig} */
module.exports = {
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'airbnb-typescript/base',
    './base',
    'plugin:import/typescript',
  ],
  rules: {
    '@typescript-eslint/array-type': 1,
    '@typescript-eslint/consistent-indexed-object-style': [1, 'record'],
    '@typescript-eslint/consistent-type-assertions': {
      assertionStyle: 'as',
      objectLiteralTypeAssertions: 'never',
    },
    '@typescript-eslint/member-delimiter-style': [
      1,
      {
        multiline: {
          delimiter: 'semi',
          requireLast: true,
        },
      },
    ],
    '@typescript-eslint/member-ordering': 2,
    '@typescript-eslint/method-signature-style': [2, 'property'],
    '@typescript-eslint/naming-convention': [
      2,
      {
        selector: 'default',
        format: ['camelCase'],
        leadingUnderscore: 'forbid',
        trailingUnderscore: 'forbid',
      },
      {
        selector: 'variable',
        format: ['camelCase', 'PascalCase', 'UPPER_CASE'],
      },
      {
        selector: 'function',
        format: ['camelCase', 'PascalCase'],
      },
      {
        selector: 'typeLike',
        format: ['PascalCase'],
      },
      {
        selector: 'interface',
        prefix: ['I'],
        format: ['PascalCase'],
      },
      {
        selector: 'enumMember',
        format: ['UPPER_CASE'],
      },
    ],
    '@typescript-eslint/no-base-to-string': 1,
    '@typescript-eslint/no-confusing-non-null-assertion': 1,
    '@typescript-eslint/no-confusing-void-expression': 1,
    '@typescript-eslint/no-dynamic-delete': 1,
    '@typescript-eslint/no-empty-interface': 0,
    '@typescript-eslint/no-implicit-any-catch': 2,
    '@typescript-eslint/no-invalid-void-type': 2,
    '@typescript-eslint/no-parameter-properties': [
      2,
      {
        allows: ['private readonly'],
      },
    ],
    '@typescript-eslint/no-unnecessary-condition': 1,
    '@typescript-eslint/no-unnecessary-qualifier': 1,
    '@typescript-eslint/no-unnecessary-type-constraint': 1,
    '@typescript-eslint/prefer-for-of': 1,
    '@typescript-eslint/prefer-reduce-type-parameter': 1,
    '@typescript-eslint/prefer-string-starts-ends-with': 1,
    '@typescript-eslint/promise-function-async': 1,
    '@typescript-eslint/switch-exhaustiveness-check': 2,
    '@typescript-eslint/type-annotation-spacing': 1,
    '@typescript-eslint/default-param-last': 2,

    'no-duplicate-imports': 0,
    '@typescript-eslint/no-duplicate-imports': 2,

    'no-invalid-this': 0,
    '@typescript-eslint/no-invalid-this': 2,

    'no-loss-of-precision': 0,
    '@typescript-eslint/no-loss-of-precision': 2,

    'no-return-await': 0,
    '@typescript-eslint/return-await': 2,
  },
  overrides: [
    {
      // enable the rule specifically for TypeScript files
      files: ['*.ts', '*.tsx'],
      rules: {
        '@typescript-eslint/explicit-function-return-type': 1,
      },
    },
  ],
};

