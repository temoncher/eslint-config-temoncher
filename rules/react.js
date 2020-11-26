module.exports = {
  // [Plugin:React](https://github.com/yannickcr/eslint-plugin-react)
  'react/jsx-filename-extension': [
    2,
    { extensions: ['.js', '.jsx', '.tsx'] },
  ],

  // Overrides
  'unicorn/filename-case': [
    2,
    {
      cases: {
        kebabCase: true,
        pascalCase: true, // for component names
      },
    },
  ],
};
