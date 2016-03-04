const webpack = require('webpack');

const path = require('path');

const name = require('./package.json').name;

module.exports = {
  entry: {
    [name]: [ path.resolve('./src/') ]
  },
  devtool: '#source-map',
  output: {
    filename: '[name].js',
    path: 'dist',
    publicPath: '/',
    libraryTarget: 'umd'
  },
  module: {
    preLoaders: [],
    loaders: [
      {
        test: /\.js$/,
        loaders: [
          'ng-annotate',
          'babel'
        ]
      }
    ],
    postLoaders: []
  },
  plugins: []
};
