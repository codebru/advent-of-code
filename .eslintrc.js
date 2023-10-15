module.exports = {
  extends: [
    'airbnb-base',
    'airbnb-typescript/base'
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  root: true,
  parserOptions: {
    project: './tsconfig.json'
  },
  rules: {
    "operator-linebreak": "off",
    "implicit-arrow-linebreak": "off"
  },
};
