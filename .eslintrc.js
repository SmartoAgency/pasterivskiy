module.exports = {
  env: {
    browser: true,
    es2020: true,
    node: true,
    jquery: {
      globals: {
        $: true,
      },
    },
  },
  extends: ['airbnb-base', 'plugin:jest/recommended'],
  plugins: ['jest'],
  parserOptions: {
    ecmaVersion: 11,
    sourceType: 'module',
  },
  rules: {
    'prefer-regex-literals': 'off',
  },
};
