
//'use strict';

let webpack = require('webpack');
let HtmlWebpackPlugin = require('html-webpack-plugin');
let ExtractTextPlugin = require('extract-text-webpack-plugin');
let BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
let helpers = require('./helpers');

module.exports = {

    module: {
        //加载器配置
        rules: [{
            //.css 文件使用 style-loader 和 css-loader 来处理
            test: /\.css$/,
            exclude: helpers.root('src', 'app'),
            loader: ExtractTextPlugin.extract({ fallbackLoader: 'style-loader', loader: 'css-loader?sourceMap' })
        }, {
            test: /\.css$/,
            include: helpers.root('src', 'app'),
            use: ['to-string-loader', 'css-loader?sourceMap']
        }, {
            //.scss 文件使用 style-loader、css-loader 和 sass-loader 来编译处理
            test: /\.scss$/,
            loader: 'style-loader!css-loader!sass-loader?sourceMap'
        }, {
            //图片文件使用 url-loader 来处理，小于8kb的直接转为base64
            test: /\.(png|jpg)$/,
            loader: 'url-loader?limit=8192'
        }, {
            //.js jsx 文件使用 babel-loader 来编译处理
            test: /\.js|jsx$/,
            loader: 'babel-loader',
            query: {
                presets: ['react', 'es2015']
            }
        }, {
            // support for .html as raw text
            test: /\.html$/,
            loader: 'raw-loader'
        }]
    },
    //插件
    plugins: [

        // Workaround for angular/angular#11580
        new webpack.ContextReplacementPlugin(
          // The (\\|\/) piece accounts for path separators in *nix and Windows
          /angular(\\|\/)core(\\|\/)@angular/,
          helpers.root('./src'), // location of your src
          {} // a map of your routes
        ),

        new webpack.optimize.CommonsChunkPlugin({
          minChunks: Infinity,
          name: ['app', 'vendor', 'polyfills']
        }),

        new HtmlWebpackPlugin({
          filename: 'index.html',
          template: 'src/index.html',
          inject: true
        }),

        new BundleAnalyzerPlugin()
    ],
    //其它解决方案配置
    resolve: {
        //自动扩展文件后缀名，意味着我们require模块可以省略不写后缀名
        extensions: ['.ts', '.js', 'jsx', '.json', '.scss']
    }
};
