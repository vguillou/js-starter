module.exports = {
  plugins: ['prettier'],
  extends: ['airbnb-base', 'plugin:prettier/recommended'],
  env: {
    browser: true,
    node: true,
  },
  // ESLint will parse the code via Babel and understand which JS features are supported
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module',
  },
  settings: {
    // Allows ESLint to understand our custom Babel module resolving. See .babelrc
    'import/resolver': {
      'babel-module': {},
    },
  },
  rules: {
    // Code formatting rules. See https://prettier.io/docs/en/options.html
    'prettier/prettier': [
      'warn',
      {
        semi: false,
        tabWidth: 2,
        arrowParens: 'always',
        printWidth: 100,
        singleQuote: true,
      },
    ],

    // Custom ESlint rules. See https://eslint.org/docs/rules/
    'no-param-reassign': [2, { props: true }],
  },
  overrides: [
    {
      // Allows to use Jest in test files
      files: ['**/*.test.{j,t}s?(x)'],
      env: {
        jest: true,
        node: true,
      },
    },
  ],
}
