const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const resolve = require('path').resolve;

const plugins = [
  new HtmlWebpackPlugin({
    template: resolve('public/index.html'),
    filename: 'index.html',
    inject: 'body',
    favicon: resolve('public/favicon.ico'),
  }),
];

const live = !process.env.NODE_ENV || process.env.NODE_ENV === 'development';

if (!live) {
  plugins.push(new webpack.optimize.UglifyJsPlugin());
  plugins.push(new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify('production'),
  }));
}

module.exports = {
  entry: resolve('app/index.js'),
  output: {
    path: resolve('build'),
    filename: 'assets/js/app.js',
  },
  module: {
    loaders: [
      { test: /\.jsx?$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.scss$/, loader: 'style-loader!css-loader!sass-loader' },
    ]
  },
  plugins,
};
