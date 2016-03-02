import webpack from 'webpack';

import path from 'path';

const { name } = require('./package.json');

export default {
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
          'babel',
          'ng-annotate'
        ]
      }
    ],
    postLoaders: []
  },
  plugins: []
};
