module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'airbnb',
    'airbnb-typescript',
    'airbnb/hooks',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
    'plugin:@tanstack/eslint-plugin-query/recommended',
  ],
  parserOptions: {
    project: './tsconfig.json',
  },
  plugins: ['@typescript-eslint', 'import', 'react', 'jsx-a11y', 'prettier'],
  rules: {
    'prettier/prettier': 'error',
    'react/require-default-props': 'off',
    '@tanstack/query/exhaustive-deps': 'error',
    '@typescript-eslint/no-throw-literal': 'off',
    '@tanstack/query/stable-query-client': 'error',
    '@tanstack/query/no-rest-destructuring': 'warn',
    '@typescript-eslint/lines-between-class-members': 'off',
    'react/function-component-definition': [2, { namedComponents: 'arrow-function' }],
  },
};
