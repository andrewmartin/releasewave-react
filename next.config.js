require('dotenv').config();
const compose = require('next-compose');
const FilterWarningsPlugin = require('webpack-filter-warnings-plugin');
const withImages = require('next-images');

module.exports = compose(
  [[withImages]],
  {
    webpack: config => {
      // Fixes npm packages that depend on `fs` module

      const newConfig = {
        node: {
          fs: 'empty',
        },
        ...config,
      };
      newConfig.plugins = [
        ...config.plugins,
        new FilterWarningsPlugin({
          exclude: /mini-css-extract-plugin[^]*Conflicting order between:/,
        }),
      ];

      return newConfig;
    },
  }
);
