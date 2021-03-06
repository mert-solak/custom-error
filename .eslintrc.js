module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:react/recommended', 'airbnb'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint'],
  rules: {
    'implicit-arrow-linebreak': 0,
    'import/extensions': 0,
    'import/no-extraneous-dependencies': 0,
    'import/no-unresolved': 0,
    'import/prefer-default-export': 0,
    'max-len': [2, { code: 110 }],
    'no-unused-vars': 0,
    'no-use-before-define': 0,
    'object-curly-newline': 0,
    'operator-linebreak': 0,
    'react/button-has-type': 0,
    'react/jsx-filename-extension': [2, { extensions: ['.jsx', '.tsx'] }],
    'react/prop-types': 0,
    'jsx-a11y/label-has-associated-control': 0,
    'no-new-func': 0,
    'lines-between-class-members': 0,
  },
};
