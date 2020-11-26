const baseRules = require('./rules/javascript');
const reactRules = require('./rules/react');
/**
 * @typedef {import('eslint').Linter.Config} LinterConfig
 */

/** @type {LinterConfig} */
module.exports = {
  env: {
    browser: true,
  },
  plugins: [
    'unicorn',
    'import',
    'react',
  ],
  extends: [
    'eslint:recommended',
    'plugin:unicorn/recommended',
    'plugin:import/recommended',
    'plugin:import/react',
    'airbnb',
    'airbnb/hooks',
  ],
  rules: {
    ...baseRules,
    ...reactRules,
  },
};
