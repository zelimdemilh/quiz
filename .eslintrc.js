// @ts-nocheck
module.exports = {
  root: true,
  env: {
    browser: true,
    es2022: true,
  },
  extends: [
    'airbnb',
    'airbnb/hooks',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:react/recommended',
    'plugin:promise/recommended',
    'plugin:sonarjs/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'plugin:boundaries/recommended',
    'prettier',
    './shared/lint-rules-client',
    'plugin:storybook/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    tsconfigRootDir: '.',
    project: ['./tsconfig.json'],
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: [
    'prettier',
    'react',
    'react-hooks',
    'promise',
    'optimize-regex',
    'sonarjs',
    '@typescript-eslint',
    'unused-imports',
  ],
  rules: {
    'jsx-a11y/label-has-associated-control': [
      2,
      {
        controlComponents: ['CustomRangePicker'],
      },
    ],
  },
  settings: {
    react: {
      createClass: 'createReactClass',
      pragma: 'React',
      version: 'detect',
    },
    'import/resolver': {
      typescript: {
        project: './tsconfig.json',
      },
    },
    'boundaries/elements': [
      {
        type: 'app',
        pattern: 'app/*',
      },
      {
        type: 'processes',
        pattern: 'processes/*',
      },
      {
        type: 'pages',
        pattern: 'pages/*',
      },
      {
        type: 'widgets',
        pattern: 'widgets/*',
      },
      {
        type: 'features',
        pattern: 'features/*',
      },
      {
        type: 'entities',
        pattern: 'entities/*',
      },
      {
        type: 'shared',
        pattern: 'shared/*',
      },
    ],
    'boundaries/ignore': ['**/*.test.*'],
  },
  ignorePatterns: ['jest.config.js', 'vite.config.js', 'build/**'],
};
