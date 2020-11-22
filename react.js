/**
 * @typedef {import('eslint').Linter.Config} LinterConfig
 */

/** @type {LinterConfig} */
module.exports = {
  env: {
    browser: true,
  },
  extends: [
    'airbnb',
    'airbnb/hooks',
    './base',
    'plugin:import/react',
  ],
  plugins: [
    'react',
  ],
};
