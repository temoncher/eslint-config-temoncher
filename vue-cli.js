const javascriptRules = require('./rules/javascript');
const vueRules = require('./rules/vue');
/**
 * @typedef {import('eslint').Linter.Config} LinterConfig
 */

/** @type {LinterConfig} */
module.exports = {
  plugins: [
    'unicorn',
    'import',
    'vue',
  ],
  extends: [
    'eslint:recommended',
    'plugin:unicorn/recommended',
    'plugin:import/recommended',
    'plugin:vue/recommended',
    '@vue/airbnb',
  ],
  rules: {
    ...javascriptRules,
    ...vueRules,
  },
};
