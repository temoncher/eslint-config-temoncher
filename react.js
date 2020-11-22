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
  rules: {
    'react/jsx-filename-extension': [
      2,
      { extensions: ['.js', '.jsx', '.tsx'] },
    ],

    // disable import unnecessary rules
    'import/prefer-default-export': 0,
    'import/extensions': 0,
  },
};
