//'use strict';

let webpackMerge = require('webpack-merge');
let commonConfig = require('./webpack.config.com.js');
let helpers = require('./helpers');

module.exports = webpackMerge(commonConfig, {
    devtool: 'cheap-module-eval-source-map',

    output: {
        path: helpers.root('dist'),
        publicPath: '',
        filename: '[name].js',
        chunkFilename: '[id].chunk.js'
    },

    module: {
        rules: [{
            //tsx typescript 用来编译ng的
            test: /\.tsx?$/,
            use: [{
                loader: 'awesome-typescript-loader?sourceMap',
                options: { configFileName: helpers.root('tsconfig.json') }
            }, 'angular2-template-loader?sourceMap', 'source-map-loader']
        }]
    },

    plugins: [],

    devServer: {
        historyApiFallback: true,
        stats: 'minimal'
    }
});
