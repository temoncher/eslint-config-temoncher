# eslint-config-temoncher

Personal set of super-strict eslint rules for various environments. The package is made so strict on purpose, to allow excluding unnecessary rules rather than adding new ones intentionally.

For even more strict rules visit [Unicorn](https://github.com/sindresorhus/eslint-plugin-unicorn)

## Install config and core peer dependencies

Via npm:

```sh
npm i -D eslint eslint-config-temoncher
```

Via yarn:

```sh
yarn add -D eslint eslint-config-temoncher
```

## Available configurations

### JavaScript

Extension of [eslint-config-airbnb-base](https://npmjs.com/eslint-config-airbnb-base).

1. Install peer dependencies of the `javascript` package:

   Using npm:

   ```sh
   npm i -D eslint-plugin-import
   ```

   Using yarn:

   ```sh
   yarn add -D eslint-plugin-import
   ```

2. Add `"extends": "temoncher/javascript"` to your `.eslintrc`
   ```
   {
     "extends": [
       "temoncher/javascript",
     ],
   };
   ```

### TypeScript extends `javascript`

1. Install peer dependencies of the [`javascript` package](#javascript)

2. Install typescript-eslint parser and plugin, along with peer dependencies of the `typescript` package:

   Using npm:

   ```sh
   npm i -D eslint-config-airbnb-typescript @typescript-eslint/eslint-plugin @typescript-eslint/parser
   ```

   Using yarn:

   ```sh
   yarn add -D eslint-config-airbnb-typescript @typescript-eslint/eslint-plugin @typescript-eslint/parser
   ```

3. Configure typescript parser and add `"extends": "temoncher/typescript"` to your `.eslintrc`:
   ```
   {
     parserOptions: {
       parser: '@typescript-eslint/parser',
       project: ['./tsconfig.json'],
     },
     "extends": [
       "temoncher/typescript",
     ],
   };
   ```

### React extends `javascript`

1. Install peer dependencies of the [`javascript` package](#javascript)

2. Install peer dependencies of the `react` package:

   Using npm:

   ```sh
   npm i -D eslint-plugin-jsx-a11y eslint-plugin-react eslint-plugin-react-hooks
   ```

   Using yarn:

   ```sh
   yarn add -D eslint-plugin-jsx-a11y eslint-plugin-react eslint-plugin-react-hooks
   ```

3. Add `"extends": "temoncher/react"` to your `.eslintrc`
   ```
   {
     "extends": [
       "temoncher/react",
     ],
   };
   ```

### React-Typescript extends `javascript`, `react`, `typescript`

1. Install peer dependencies of the [`javascript` package](#javascript)

2. Install peer dependencies of the [`react` package](#react-extends-javascript)

2. Install peer dependencies of the [`typescript` package](#typescript-extends-javascript)

4. Add `"extends": "temoncher/react-typescript"` to your `.eslintrc`
   ```
   {
     "extends": [
       "temoncher/react-typescript",
     ],
   };
   ```

### Vue extends `javascript`

> **⚠ WARNING: For Vue CLI projects only.**
> This package expects you to have Vue CLI project with installed [@vue/cli-plugin-eslint](https://www.npmjs.com/package/@vue/cli-plugin-eslint).

1. Install peer dependencies of the [`javascript` package](#javascript)

2. Install peer dependencies of the `vue` package:

   Using npm:

   ```sh
   npm i -D @vue/eslint-config-airbnb
   ```

   Using yarn:

   ```sh
   yarn add -D @vue/eslint-config-airbnb
   ```

3. Add `"extends": "temoncher/vue"` to your `.eslintrc`
   ```
   {
     "extends": [
       "temoncher/vue",
     ],
   };
   ```

### Vue-Typescript extends `javascript`, `vue`, `typescript`

> **⚠ WARNING: For Vue CLI projects only.**
> This package expects you to have Vue CLI project with installed [@vue/cli-plugin-eslint](https://www.npmjs.com/package/@vue/cli-plugin-eslint).

1. Install peer dependencies of the [`javascript` package](#javascript)

2. Install peer dependencies of the [`vue` package](#vue-extends-javascript)

3. Install peer dependencies of the [`typescript` package](#typescript-extends-javascript)

4. Add `"extends": "temoncher/vue-typescript"` to your `.eslintrc`
   ```
   {
     "extends": [
       "temoncher/vue-typescript",
     ],
   };
   ```
