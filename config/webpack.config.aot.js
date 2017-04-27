let webpack = require('webpack');
let path = require('path');
let webpackMerge = require('webpack-merge');
let HtmlWebpackPlugin = require('html-webpack-plugin');
let CompressionPlugin = require("compression-webpack-plugin");
let ngtools = require('@ngtools/webpack');
let commonConfig = require('./webpack.config.com.js');
let helpers = require('./helpers');


module.exports = webpackMerge(commonConfig, {

    devtool: 'cheap-module-source-map',

    //页面入口文件配置
    entry: {
        app: helpers.root('src', 'app/app.aot.ts'),
        vendor: helpers.root('src', 'js/vendor.ts'),
        polyfills: helpers.root('src', 'js/polyfills.ts')
    },

    output: {
      path: helpers.root('dist'),
      publicPath: '/',
      filename: '[name].[hash].js',
      chunkFilename: '[id].[hash].chunk.js'
    },

    module: {
        rules: [
            {
                test: /\.ts$/,
                use: [
                    '@ngtools/webpack'
                ]
            }
        ]
    },

    plugins: [
        new ngtools.AotPlugin({
            tsConfigPath: helpers.root('tsconfig.aot.json'),
            skipMetadataEmit: true,
            entryModule: helpers.root('src', 'app/app.module#AppModule')
        }),

        new CompressionPlugin({
            asset: "[path].gz[query]",
            algorithm: "gzip",
            test: /\.js$|\.html$/,
            threshold: 10240,
            minRatio: 0.3
        }),

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

        new webpack.DefinePlugin({
          'process.env': {
            NODE_ENV: JSON.stringify('production')
          }
        }),
    ]
});