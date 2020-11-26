const javascriptRules = require('./rules/javascript');
/**
 * @typedef {import('eslint').Linter.Config} LinterConfig
 */

/** @type {LinterConfig} */
module.exports = {
  plugins: [
    'import',
  ],
  extends: [
    'eslint:recommended',
    'plugin:import/recommended',
    'airbnb-base',
  ],
  rules: {
    ...javascriptRules,
  },
};
