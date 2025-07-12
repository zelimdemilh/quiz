// @ts-nocheck
module.exports = {
  rules: {
    /**
     *
     * prettier
     *
     */
    // !Turns on the rule provided 'eslint-plugin-prettier', which runs Prettier from within ESLint
    // 'prettier/prettier': 'error',

    /**
     *
     * eslint
     *
     */
    'max-len': ['error', { ignoreComments: true, code: 140 }],
    'no-promise-executor-return': ['warn'],
    'no-underscore-dangle': ['warn'],
    'no-nested-ternary': 'off',
    'no-void': ['warn'],
    'linebreak-style': ['error', 'unix'],
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-plusplus': 'off',
    'no-undef': 'off',
    'no-bitwise': 'off',
    'no-shadow': 'off',
    camelcase: 'off',

    'no-unused-vars': [
      'warn',
      {
        vars: 'all',
        args: 'after-used',
        ignoreRestSiblings: true,
      },
    ],
    'import/no-extraneous-dependencies': 'off',
    'import/prefer-default-export': 'off',
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        mjs: 'never',
        ts: 'never',
        tsx: 'never',
        vue: 'never',
      },
    ],
    'unused-imports/no-unused-imports': 'error',
    'unused-imports/no-unused-vars': [
      'warn',
      {
        vars: 'all',
        varsIgnorePattern: '^_',
        args: 'after-used',
        argsIgnorePattern: '^_',
      },
    ],
    'import/no-relative-packages': 'off',

    /**
     *
     * typescript-eslint
     *
     */

    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/no-unused-vars': 'warn',
  },
  overrides: [
    {
      files: [
        '**/src/schemas/**/*.ts',
        '**/src/entities/**/injectedDeviceModelsApi*.ts',
        '**/src/entities/**/injected*.ts',
        '**/src/entities/**/core*.ts',
        '**/src/shared/lib/dictionary.ts',
      ],
      rules: {
        'no-use-before-define': 'off',
        'sonarjs/no-duplicate-string': 'off',
      },
    },
  ],
};
