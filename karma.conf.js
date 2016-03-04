const webpackConfig = require('./webpack.config');

const webpack = {
  resolve: webpackConfig.resolve,
  module: webpackConfig.module,
  plugins: webpackConfig.plugins
};

module.exports = function(config) {
  config.set({
    basePath: '.',

    frameworks: ['jasmine'],

    files: [
      'spec.bundle.js'
    ],

    exclude: [],

    preprocessors: {
      'spec.bundle.js': ['webpack']
    },

    webpack: webpack,

    webpackMiddlware: {
      noInfo: true,
      stats: {
        colors: true
      }
    },

    reporters: ['progress'],

    port: 9876,

    runnerPort: 9100,

    reportSlowerThan: 500,

    colors: true,

    singleRun: false,

    logLevel: config.LOG_INFO,

    browsers: ['PhantomJS']
  });
};
