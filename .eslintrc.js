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
    //   'object-property-newline': ['error'],
    //   camelcase: 0,
    //   'jsx-a11y/img-has-alt': 0,
    //   'jsx-a11y/anchor-is-valid': 0,
    //   'jsx-a11y/no-static-element-interactions': 0,
    //   'jsx-a11y/click-events-have-key-events': 0,
    //   'react/jsx-no-bind': 0,
    'react/prop-types': 0,
    'react/display-name': 0,
    //   'react/prefer-stateless-function': 0,
    //   'react/require-extension': 0,
    //   'plugin:react/require-default-props': 0,
    //   'react/forbid-prop-types': 0,
    //   'no-param-reassign': ['error', { props: false }],
    //   'no-multiple-empty-lines': [2, { max: 1, maxEOF: 1 }],
    'no-unused-vars': 2,
    //   // 'max-len': ['error', { code: 80, ignoreUrls: true }],
    //   'no-confusing-arrow': 'error',
    'prettier/prettier': [
      'error',
      {
        printWidth: 120,
        tabWidth: 2,
        singleQuote: true,
        trailingComma: 'es5',
        jsxBracketSameLine: true,
      },
    ],
    //   // TODO - Fix this so it will correctly follow webpack resolutions too
    //   'import/no-unresolved': 0,
    //   'import/no-extraneous-dependencies': 0,
    //   'import/extensions': 0
  },
};
