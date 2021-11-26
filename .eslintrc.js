module.exports = {
  extends: [require.resolve('@yueqing/lint/lib/ts-eslint')],
  parserOptions: {
    project: './tsconfig.json',
  },
  rules: {
    'no-restricted-syntax': 0,
  },
}