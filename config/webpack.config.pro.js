
/*jshint esversion: 6 */

//'use strict';

let webpack = require('webpack');
let webpackMerge = require('webpack-merge');
let ExtractTextPlugin = require('extract-text-webpack-plugin');
let commonConfig = require('./webpack.common.js');
let helpers = require('./helpers');

module.exports = webpackMerge(commonConfig, {
  devtool: 'cheap-module-source-map',

  output: {
    path: helpers.root('dist'),
    publicPath: '/',
    filename: '[name].[hash].js',
    chunkFilename: '[id].[hash].chunk.js'
  },

  module: {
      rules: [{
              //tsx typescript 用来编译ng的
              test: /\.tsx?$/,
              use: [
                  {
                    loader: 'awesome-typescript-loader?sourceMap',
                    options: { configFileName: helpers.root('tsconfig.json') }
                  } , 'angular2-template-loader?sourceMap', 'source-map-loader'
              ]
          }]
  },

  plugins: [
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      mangle: {
        keep_fnames: true
      },
      output: {
        comments: false
      },
      compress: {
        warnings: false
      }
    }),
    new ExtractTextPlugin('[name].[hash].css'),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    }),
    new webpack.LoaderOptionsPlugin({
      htmlLoader: {
        minimize: false // workaround for ng2
      }
    })
  ]
});
