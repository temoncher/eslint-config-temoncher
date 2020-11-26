const javascriptRules = require('./rules/javascript');
const reactRules = require('./rules/react');
const typescriptRules = require('./rules/typescript');
/**
 * @typedef {import('eslint').Linter.Config} LinterConfig
 */

/** @type {LinterConfig} */
module.exports = {
  env: {
    browser: true,
  },
  plugins: [
    'import',
    'react',
    '@typescript-eslint',
  ],
  extends: [
    'eslint:recommended',
    'plugin:import/recommended',
    'plugin:import/react',
    'airbnb',
    'airbnb/hooks',
    'plugin:import/typescript',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'airbnb-typescript',
  ],
  rules: {
    ...javascriptRules,
    ...reactRules,
    ...typescriptRules,
  },
};
