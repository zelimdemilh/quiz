// @ts-nocheck
module.exports = {
  extends: ['./lint-rules'],
  rules: {
    /**
     *
     * JS
     *
     */

    'no-restricted-exports': 'off',
    'no-restricted-syntax': 'warn',
    'no-continue': 'warn',
    'sort-imports': 'off',
    'sonarjs/no-nested-template-literals': 'off',

    /**
     *
     * FSD
     *
     */
    'import/no-cycle': [
      'error',
      {
        maxDepth: 5,
        ignoreExternal: true,
      },
    ],
    'import/order': [
      'error',
      {
        alphabetize: { order: 'asc', caseInsensitive: true },
        'newlines-between': 'always',
        pathGroups: [
          { group: 'internal', position: 'after', pattern: '@/processes/**' },
          { group: 'internal', position: 'after', pattern: '@/pages/**' },
          { group: 'internal', position: 'after', pattern: '@/widgets/**' },
          { group: 'internal', position: 'after', pattern: '@/features/**' },
          { group: 'internal', position: 'after', pattern: '@/entities/**' },
          { group: 'internal', position: 'after', pattern: '@/shared/**' },
        ],
        pathGroupsExcludedImportTypes: ['builtin'],
        groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
      },
    ],
    'no-restricted-imports': [
      'error',
      {
        patterns: [
          { message: 'Private imports are prohibited, use public imports instead', group: ['@/app/**'] },
          { message: 'Private imports are prohibited, use public imports instead', group: ['@/processes/*/**'] },
          { message: 'Private imports are prohibited, use public imports instead', group: ['@/pages/*/**'] },
          { message: 'Private imports are prohibited, use public imports instead', group: ['@/widgets/*/**'] },
          { message: 'Private imports are prohibited, use public imports instead', group: ['@/features/*/**'] },
          { message: 'Private imports are prohibited, use public imports instead', group: ['@/entities/*/**'] },
          { message: 'Private imports are prohibited, use public imports instead', group: ['@/shared/*/*/**'] },
          { message: 'Prefer absolute imports instead of relatives (for root modules)', group: ['../**/app'] },
          { message: 'Prefer absolute imports instead of relatives (for root modules)', group: ['../**/processes'] },
          { message: 'Prefer absolute imports instead of relatives (for root modules)', group: ['../**/pages'] },
          { message: 'Prefer absolute imports instead of relatives (for root modules)', group: ['../**/widgets'] },
          { message: 'Prefer absolute imports instead of relatives (for root modules)', group: ['../**/features'] },
          { message: 'Prefer absolute imports instead of relatives (for root modules)', group: ['../**/entities'] },
          { message: 'Prefer absolute imports instead of relatives (for root modules)', group: ['../**/shared'] },
        ],
      },
    ],
    'boundaries/element-types': [
      'warn',
      {
        default: 'disallow',
        rules: [
          { from: 'app', allow: ['processes', 'pages', 'widgets', 'features', 'entities', 'shared'] },
          { from: 'processes', allow: ['pages', 'widgets', 'features', 'entities', 'shared'] },
          { from: 'pages', allow: ['widgets', 'features', 'entities', 'shared'] },
          { from: 'widgets', allow: ['features', 'entities', 'shared'] },
          { from: 'features', allow: ['entities', 'shared'] },
          { from: 'entities', allow: ['shared'] },
          { from: 'shared', allow: ['shared'] },
        ],
      },
    ],

    /**
     *
     * React
     *
     */

    'react/no-array-index-key': ['warn'],
    'react/display-name': 'off',
    'react/function-component-definition': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/require-default-props': 'off',
    'react/jsx-filename-extension': [
      'error',
      {
        extensions: ['.jsx', '.tsx'],
      },
    ],
    'react/jsx-props-no-spreading': 'off',
    'react/prop-types': 'off',
    'jsx-a11y/click-events-have-key-events': 'off',
    'jsx-a11y/no-noninteractive-element-interactions': 'off',
    'react/no-access-state-in-setstate': 'error',
    'react/no-unescaped-entities': 'off',
    'react/no-danger': 'error',
    'react/no-multi-comp': 'error',
    'react/no-this-in-sfc': 'error',
    'react/prefer-stateless-function': [
      2,
      {
        ignorePureComponents: true,
      },
    ],

    'react/jsx-no-bind': ['error', { allowArrowFunctions: true }],
    'react/jsx-no-literals': 'off',
    'react/jsx-no-useless-fragment': 'error',
    'react/jsx-pascal-case': 'error',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'react/jsx-uses-react': 'off',
    /**
     *
     * Typescript
     *
     */
    '@typescript-eslint/brace-style': ['error', '1tbs'],
    '@typescript-eslint/indent': 'off',
    '@typescript-eslint/quotes': ['error', 'single'],
    '@typescript-eslint/func-call-spacing': ['error', 'never'],
    '@typescript-eslint/no-useless-constructor': 'error',
    '@typescript-eslint/prefer-for-of': 'warn',
    '@typescript-eslint/no-parameter-properties': 'error',
    '@typescript-eslint/no-unnecessary-type-arguments': 'warn',
    '@typescript-eslint/prefer-function-type': 'warn',
    '@typescript-eslint/prefer-readonly': 'warn',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-misused-promises': 'off',
    '@typescript-eslint/no-unsafe-assignment': 'off',
    '@typescript-eslint/no-unsafe-call': 'off',
    '@typescript-eslint/no-unsafe-member-access': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-unsafe-return': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/restrict-template-expressions': [
      'error',
      {
        allowNumber: true,
      },
    ],
    '@typescript-eslint/no-magic-numbers': [
      'error',
      {
        ignoreNumericLiteralTypes: true,
        ignoreEnums: true,
        enforceConst: true,
        ignoreReadonlyClassProperties: true,
        ignoreArrayIndexes: true,
        ignore: [-1, 0, 1, 2, 3, 6, 8, 12, 16, 24, 48, 60, 100, 1000],
      },
    ],
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_$',
      },
    ],
  },
  /**
   *
   * overrides
   *
   */
  overrides: [
    {
      files: [
        '**/src/store/**/*.{ts,tsx}',
        '**/src/entities/**/model/reducers/**/*.{ts,tsx}',
        '**/src/entities/**/model/extraReducers/**/*.{ts,tsx}',
      ],
      rules: {
        'no-param-reassign': 'warn',
      },
    },
    {
      files: ['**/src/schemas/types/*.ts'],
      rules: {
        '@typescript-eslint/no-magic-numbers': 'off',
      },
    },
    { files: ['**/*.test.*'], rules: { 'boundaries/element-types': 'off' } },
  ],
};
