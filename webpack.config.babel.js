import path from 'path';

export default {
  entry: {
    'angular-ui-router-resolve': [ path.resolve('./src/') ]
  },
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
  }
};
