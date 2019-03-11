const path = require('path');

module.exports = {
  extends: [
    'airbnb',
    'plugin:import/errors',
    'plugin:import/warnings',
    'prettier',
    'prettier/react'
  ],
  plugins: [
    'flowtype',
    'prettier',
    'import'
  ],
  parser: 'babel-eslint',
  rules: {
    'linebreak-style': 0,
    'prefer-const': 0,
    'spaced-comment': 0,
    'padded-blocks': 0,
    'import/imports-first': 0,
    'import/prefer-default-export': 0,
    'import/no-extraneous-dependencies': 0,
    'comma-dangle': 0,
    'no-shadow': 0,
    'arrow-body-style': 0,
    'quote-props': 0,
    'no-unused-vars': 1,
    'consistent-return': 0,
    'max-len': 0,
    'no-use-before-define': ['error', { 'functions': false, 'classes': true }],
    'no-underscore-dangle': 'off',
    'jsx-a11y/href-no-hash': 'off',
    'jsx-a11y/anchor-is-valid': ['warn', { 'aspects': ['invalidHref'] }],
    'jsx-a11y/label-has-associated-control': 'off',
    'react/prefer-stateless-function': ['off'],
    'react/jsx-filename-extension': ['off'],
    'react/forbid-prop-types': ['off'],
    'react/no-danger': 0,
    'react/prop-types': 0,
    'no-throw-literal': 'error',
    'no-bitwise': ['off'],
    'dot-notation': ['off'],
    'prettier/prettier': ['error'],
    'flowtype/define-flow-type': 1,
    'camelcase': ['off'],
    'jsx-a11y/label-has-for': ['off'],
    'no-nested-ternary': 'off',
    'react/no-this-in-sfc': 'off',
    'no-param-reassign': 'off',
    "react/sort-comp": [1, {
      order: [
        'static-methods',
        'instance-variables',
        'lifecycle',
        '/^on.+$/',
        'everything-else',
        'rendering',
      ],
      groups: {
        rendering: [
          '/^render.+$/',
          'render'
        ]
      }
    }],
  },
  parserOptions: {
    'ecmaVersion': 6,
    'sourceType': 'module',
    'ecmaFeatures': {
      'spread': true,
      'legacyDecorators': true
    }
  },
  globals: {
    'global': true,
    'document': true,
    'window': true,
  },
  settings: {
    'import/extensions': ['.js', '.jsx'],
    'import/parser': 'babel-eslint',
    'import/resolver': {
      // You can use only webpack but with this approach webstorm doesn't show
      // any red highlight for alias imports
      // If you forget to add alias here build still will work if there are aliases in
      // webpack.config but with this webstorm works better.
      // eslint-import-resolver-alias
      'alias': [
        ['app', path.join(__dirname, 'src/app/')],
        ['assets', path.join(__dirname, 'src/assets/')],
        // ['TT', 'src/app/test/'],
      ],
      // It also works but with alias there are no red highlight in webstorm
      // and with this approach build works but I still see red highlights in webstorm
      // eslint-import-resolver-webpack
      'webpack': {
        'config': './webpack/webpack.prod.js'
      }
    }
  }
};
