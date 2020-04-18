# js-starter

A comfortable JavaScript starter project.

## Usage

### Prerequisites

-   Install [Yarn](https://yarnpkg.com/)
-   [Node.js](https://nodejs.org/) >= 12.16.1
-   An IDE/Code editor (recommended: [VS Code](https://code.visualstudio.com/))

### Install dependencies

```sh
yarn
```

### Available scripts

- `yarn test` Run all tests
- `yarn test:watch` Continuously run all tests after each change in source files
- `yarn lint` Lint the source files, fixing any fixable code or formatting error
- `yarn scan` Scan dependencies for known vulnerabilities

### VS Code Debug configurations

- `Jest All` Launch all tests in debug mode
- `Jest Current File` Launch only the tests of the file currently opened in your Editor, if any
- `Jest Attach` Attach the debugger to a Node process. Run it after launching `yarn test:watch`

### Package your Code

You will probably want to somehow package your code before "shipping" it.
Take a look at [Rollup](https://www.npmjs.com/package/rollup) if you develop a library, or [Webpack]([webpack](https://www.npmjs.com/package/webpack)) for an application.
Considering your target runtime, you also probably should adjust the [ESLint configuration](https://eslint.org/docs/user-guide/configuring) (`.eslintrc.js`) and [Babel configuration](https://babeljs.io/docs/en/configuration) (`.babelrc`)

## Features

### Intellisense, auto-imports and static type checking in VS Code
- The type checking works thanks to your JSDoc. Time to start documenting!
- To disable it, set `checkJs` to `false` in `jsconfig.json`

### Editor config for any other IDE

### Use the very last Javascript features
- Feature using Babel to transpile your code
- Look for configuration in `.babelrc`

### A Test friendly environment
- Feature using Jest and VS Code debugging configurations. See the list of commands above
- Using Jest's default configuration, but VS Code debugging configurations can be found in `.vscode/launch.json`

### Linting and formatting on save, automatically fixing minor issues
- Feature using ESLint, Prettier, and VS Code config
- Look for configuration in `.eslintrc.js` mainly, but also `.eslintignore`, `.prettierignore` and `.vscode/settings.json`

### Linting and formatting on commit, automatically fixing minor issues
- Feature using Lint-Staged and Yorkie, in addition of the tools mentioned previously
- Look for configuration in `package.json` (see `gitHooks` and `lint-staged` attributes)

### Custom import resolving
Say, you preffer to type `@src/index` to import this file from anywhere, rather than its relative path (something like `../../../../../index`)
- Feature using Babel and VS Code
- Look for configuration in `.babelrc` (for runtime resolution) and `jsconfig.json` (for VS Code's intellisense to follow along)
