const paths = require('./config/paths');

module.exports = {
  env: {
    browser: true,
    es6: true,
    commonjs: true,
    node: true,
    jest: true,
    mocha: true,
  },
  extends: [
    'wiremore',
    'wiremore/react',
    'plugin:react/recommended',
    'plugin:flowtype/recommended',
    'prettier',
    'prettier/react',
  ],
  plugins: ['security', 'flowtype'],
  settings: {
    'import/resolver': {
      node: {
        paths: paths.appNodeModules,
      },
    }
  },
  rules: {
    indent: 0,
    'import/named': 0,
    'import/prefer-default-export': 'off',
    'import/no-unassigned-import': 0,
    'import/no-named-as-default-member': 0,
    'camelcase': 0
  },
};
