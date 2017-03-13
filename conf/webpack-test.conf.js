const webpack = require('webpack');

// const HtmlWebpackPlugin = require('html-webpack-plugin');
const autoprefixer = require('autoprefixer');
const lost = require('lost');
const postcssCssReset = require('postcss-css-reset');

module.exports = {
  module: {
    loaders: [
      {
        test: require.resolve('c3'),
        loader: 'expose-loader?$!expose-loader?c3'
      },
      {
        test: require.resolve('jquery'),
        loader: 'expose-loader?$!expose-loader?jQuery'
      },
      {
        test: /\.json$/,
        loaders: [
          'json-loader'
        ]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
        enforce: 'pre'
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: [
          'ng-annotate-loader',
          'babel-loader'
        ]
      },
      {
        test: /\.(css|scss)$/,
        loaders: [
          'style-loader',
          'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]',
          'sass-loader',
          'postcss-loader'
        ]
      },
      {
        test: /\.html$/,
        loaders: [
          'html-loader'
        ]
      }
    ]
  },
  plugins: [
    new webpack.LoaderOptionsPlugin({
      options: {
        postcss: () => [lost, postcssCssReset, autoprefixer]
      },
      debug: true
    })
  ],
  devtool: 'source-map'
};
