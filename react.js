/**
 * @typedef {import('eslint').Linter.Config} LinterConfig
 */

/** @type {LinterConfig} */
module.exports = {
  env: {
    browser: true,
  },
  plugins: [
    'react',
  ],
  extends: [
    'plugin:import/react',
    'airbnb',
    'airbnb/hooks',
    './base',
  ],
};
