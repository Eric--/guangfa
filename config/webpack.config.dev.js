
//'use strict';

let webpackMerge = require('webpack-merge');
let ExtractTextPlugin = require('extract-text-webpack-plugin');
let commonConfig = require('./webpack.config.com.js');
let helpers = require('./helpers');

module.exports = webpackMerge(commonConfig, {
    devtool: 'cheap-module-eval-source-map',

    //页面入口文件配置
    entry: {
        app: helpers.root('src', 'app/app.ts'),
        vendor: helpers.root('src', 'js/vendor.ts'),
        polyfills: helpers.root('src', 'js/polyfills.ts')
    },

    output: {
        path: helpers.root('dist'),
        publicPath: '/',
        filename: '[name].js',
        chunkFilename: '[id].chunk.js'
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
        new ExtractTextPlugin('[name].css')
    ],

    devServer: {
        historyApiFallback: true,
        stats: 'minimal'
    }
});
