module.exports = {
  plugins: ['prettier', 'react', 'jsx-a11y'],
  extends: ['plugin:react/recommended', 'prettier', 'prettier/react'],
  parser: 'babel-eslint',
  env: {
    node: true,
    browser: true,
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    'prefer-destructuring': ['error', { object: true, array: false }],
    'react/prop-types': 0,
    'react/display-name': 0,
    'no-unused-vars': 2,
    'prettier/prettier': [
      'error',
      {
        printWidth: 95,
        tabWidth: 2,
        singleQuote: true,
        trailingComma: 'es5',
        jsxBracketSameLine: true,
      },
    ],
  },
};
