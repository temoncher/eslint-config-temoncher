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
    'import',
    'react',
  ],
  extends: [
    'eslint:recommended',
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
