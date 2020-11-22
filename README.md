# eslint-config-temoncher

Personal set of super-strict eslint rules for various environments

## Available configurations

Configurations can be combined. For example configuration for react-typescript project will look like:

```json
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
npm i -D eslint-config-airbnb-base eslint-plugin-import
```

Using yarn:

```sh
yarn add -D eslint-config-airbnb-base eslint-plugin-import
```

2. Add `"extends": "temoncher/base"` to your `.eslintrc`

```json
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

Does NOT include `base` configuration

1. Install peer dependencies of `typescript` package:

Using npm:

```sh
npm i -D eslint-config-airbnb-typescript eslint-plugin-import @typescript-eslint/eslint-plugin
```

Using yarn:

```sh
yarn add -D eslint-config-airbnb-typescript eslint-plugin-import @typescript-eslint/eslint-plugin
```

2. Add `"extends": "temoncher/typescript"` to your `.eslintrc`

```json
{
  ...
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
npm i -D eslint-config-airbnb eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-react eslint-plugin-react-hooks
```

Using yarn:

```sh
yarn add -D eslint-config-airbnb eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-react eslint-plugin-react-hooks
```

2. Add `"extends": "temoncher/react"` to your `.eslintrc`

```json
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
npm i -D eslint-plugin-import eslint-plugin-vue @vue/eslint-config-airbnb
```

Using yarn:

```sh
yarn add -D eslint-plugin-import eslint-plugin-vue @vue/eslint-config-airbnb
```

2. Add `"extends": "temoncher/vue"` to your `.eslintrc`

```json
{
  ...
  "extends": [
    ...,
    "temoncher/vue",
  ],
  ...
};
```
