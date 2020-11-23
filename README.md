# eslint-config-temoncher

Personal set of super-strict eslint rules for various environments. The package is made so strict on purpose, to allow excluding unnecessary rules rather than adding new ones intentionally.

## Install config and core peer dependencies

Via npm:

```sh
npm i -D eslint eslint-config-temoncher eslint-plugin-import
```

Via yarn:

```sh
yarn add -D eslint eslint-config-temoncher eslint-plugin-import
```

## Available configurations

Configurations can be combined. For example configuration for react-typescript project will look like:

```
  {
    ...
    "extends": [
      ...,
      "temoncher/base",
      "temoncher/typescript",
      "temoncher/react",
    ],
    ...
  };
```

### Base

Extension of [eslint-config-airbnb-base](https://npmjs.com/eslint-config-airbnb-base).

1. Install peer dependencies of `base` package:

Using npm:

```sh
npm i -D eslint-plugin-unicorn
```

Using yarn:

```sh
yarn add -D eslint-plugin-unicorn
```

2. Add `"extends": "temoncher/base"` to your `.eslintrc`

```
{
  ...
  "extends": [
    ...,
    "temoncher/base",
  ],
  ...
};
```

### Typescript

Does NOT include `base` configuration.

1. Install typescript-eslint parser and plugin, along with peer dependencies of `typescript` package:

Using npm:

```sh
npm i -D eslint-config-airbnb-typescript @typescript-eslint/eslint-plugin @typescript-eslint/parser
```

Using yarn:

```sh
yarn add -D eslint-config-airbnb-typescript @typescript-eslint/eslint-plugin @typescript-eslint/parser
```

2. Configure typescript parser and add `"extends": "temoncher/typescript"` to your `.eslintrc`:

```
{
  ...
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: ['./tsconfig.json'],
  },
  plugins: [
    '@typescript-eslint',
  ],
  "extends": [
    ...,
    "temoncher/typescript",
  ],
  ...
};
```

### React

Does NOT include `base` configuration

1. Install peer dependencies of `react` package:

Using npm:

```sh
npm i -D eslint-plugin-jsx-a11y eslint-plugin-react eslint-plugin-react-hooks
```

Using yarn:

```sh
yarn add -D eslint-plugin-jsx-a11y eslint-plugin-react eslint-plugin-react-hooks
```

2. Add `"extends": "temoncher/react"` to your `.eslintrc`

```
{
  ...
  "extends": [
    ...,
    "temoncher/react",
  ],
  ...
};
```

### Vue

Does NOT include `base` configuration

1. Install peer dependencies of `vue` package:

Using npm:

```sh
npm i -D eslint-plugin-vue @vue/eslint-config-airbnb
```

Using yarn:

```sh
yarn add -D eslint-plugin-vue @vue/eslint-config-airbnb
```

2. Add `"extends": "temoncher/vue"` to your `.eslintrc`

```
{
  ...
  "extends": [
    ...,
    "temoncher/vue",
  ],
  ...
};
```
