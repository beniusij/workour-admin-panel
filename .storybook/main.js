const path = require('path');
const getCSSModuleLocalIdent = require('react-dev-utils/getCSSModuleLocalIdent');

// const configFactory = require('../config/webpack.config');
// const appWebpack = configFactory('development');

// style files regexes
const cssRegex = /\.css$/;
const cssModuleRegex = /\.module\.css$/;
const sassRegex = /\.(scss|sass)$/;
const sassModuleRegex = /\.module\.(scss|sass)$/;

module.exports = {
  stories: ['../src/**/*.stories.js'],
  addons: [
    '@storybook/addon-actions',
    '@storybook/addon-links',
    '@storybook/addon-viewport/register'
  ],
  webpackFinal: (config) => {
    // Make whatever fine-grained changes you need
    config.module.rules.push({
      test: cssRegex,
      exclude: cssModuleRegex,
      use: [
        require.resolve('style-loader'),
        {
          loader: require.resolve('css-loader'),
          options: {
            importLoaders: 1,
            sourceMap: false
          },
        },
      ],
      // Don't consider CSS imports dead code even if the
      // containing package claims to have no side effects.
      // Remove this when webpack adds a warning or an error for this.
      // See https://github.com/webpack/webpack/issues/6571
      sideEffects: true,
    })

    config.module.rules.push({
      test: cssModuleRegex,
      use: [
        require.resolve('style-loader'),
        {
          loader: require.resolve('css-loader'),
          options: {
            importLoaders: 1,
            sourceMap: false,
            modules: {
              getLocalIdent: getCSSModuleLocalIdent
            }
          },
        },
      ],
    })

    config.module.rules.push({
      test: sassRegex,
      exclude: sassModuleRegex,
      use: [
        require.resolve('style-loader'),
        {
          loader: require.resolve('css-loader'),
          options: {
            importLoaders: 3,
            sourceMap: false
          },
        },
        {
          loader: require.resolve('resolve-url-loader'),
          options: {
            sourceMap: false,
          },
        },
        {
          loader: require.resolve('sass-loader'),
          options: {
            sourceMap: true,
          },
        },
        {
          loader: 'sass-resources-loader',
          options: {
            // Provide path to the file with resources
            resources: 'src/styles/**/*.scss',
          },
        },
      ],
      // Don't consider CSS imports dead code even if the
      // containing package claims to have no side effects.
      // Remove this when webpack adds a warning or an error for this.
      // See https://github.com/webpack/webpack/issues/6571
      sideEffects: true,
      include: path.resolve(__dirname, '../'),
    })

    config.module.rules.push({
      test: sassModuleRegex,
      use: [
        require.resolve('style-loader'),
        {
          loader: require.resolve('css-loader'),
          options: {
            importLoaders: 3,
            sourceMap: false,
            modules: {
              getLocalIdent: getCSSModuleLocalIdent,
            },
          },
        },
        {
          loader: require.resolve('resolve-url-loader'),
          options: {
            sourceMap: false,
          },
        },
        {
          loader: require.resolve('sass-loader'),
          options: {
            sourceMap: true,
          },
        },
        {
          loader: 'sass-resources-loader',
          options: {
            // Provide path to the file with resources
            resources: 'src/styles/**/*.scss',
          },
        },
      ],
      // Don't consider CSS imports dead code even if the
      // containing package claims to have no side effects.
      // Remove this when webpack adds a warning or an error for this.
      // See https://github.com/webpack/webpack/issues/6571
      sideEffects: true,
      include: path.resolve(__dirname, '../'),
    })

    config.module.rules.push({
      test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/, /\.svg$/],
      loader: require.resolve('url-loader'),
      options: {
        limit: '10000',
        name: 'static/media/[name].[hash:8].[ext]',
      },
    })

    // Return the altered config
    return config;
  },
};
