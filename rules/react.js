/**
 * @typedef {import('eslint').Linter.Config['rules']} Rules
 */

/** @type {Rules} */
module.exports = {
  // [Plugin:React](https://github.com/yannickcr/eslint-plugin-react)
  'react/jsx-filename-extension': [
    2,
    {
      extensions: [
        '.js',
        '.jsx',
        '.tsx',
      ],
    },
  ],
};
