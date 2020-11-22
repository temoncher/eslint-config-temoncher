/**
 * @typedef {import('eslint').Linter.Config} LinterConfig
 */

/** @type {LinterConfig} */
module.exports = {
  env: {
    node: true,
  },
  extends: [
    'plugin:node/recommended',
    './base',
  ],
};
