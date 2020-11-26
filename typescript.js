const baseRules = require('./rules/javascript');
const typescriptRules = require('./rules/typescript');
/**
 * @typedef {import('eslint').Linter.Config} LinterConfig
 */

/** @type {LinterConfig} */
module.exports = {
  plugins: [
    'import',
    '@typescript-eslint',
  ],
  extends: [
    'eslint:recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'airbnb-typescript/base',
  ],
  rules: {
    ...baseRules,
    ...typescriptRules,
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
