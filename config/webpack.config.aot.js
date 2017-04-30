let webpack = require('webpack');
let path = require('path');
let webpackMerge = require('webpack-merge');
let HtmlWebpackPlugin = require('html-webpack-plugin');
let CompressionPlugin = require("compression-webpack-plugin");
let ngtools = require('@ngtools/webpack');
let ExtractTextPlugin = require('extract-text-webpack-plugin');
let commonConfig = require('./webpack.config.com.js');
let helpers = require('./helpers');

let relPath = './lib/', publicPath = '';
if(process.env.NODE_ABS){//设置打包路径
    relPath = '';publicPath = '/';
}


module.exports = webpackMerge(commonConfig, {

    devtool: 'cheap-module-source-map',

    //页面入口文件配置
    entry: {
        app: helpers.root('src', 'app/app.aot.ts'),
        vendor: helpers.root('src', 'js/vendor.ts'),
        polyfills: helpers.root('src', 'js/polyfills.ts')
    },

    output: {
      path: helpers.root('dist'),// path+filename js package path
      publicPath: publicPath,//inject html use relative path or absolute path
      filename: relPath + '[name].[hash].js',
      chunkFilename: relPath + '[id].[hash].chunk.js'
    },

    module: {
        rules: [
            {
                test: /\.ts$/,
                use: [
                    '@ngtools/webpack'
                ]
            },{
                //将样式抽取出来为独立的文件
                test: /\.css$/,
                exclude: helpers.root('src', 'app'),
                loader: ExtractTextPlugin.extract({ fallback: 'style-loader', use: 'css-loader' })
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

        new webpack.DefinePlugin({
          'process.env': {
            NODE_ENV: JSON.stringify('production')
          }
        }),

        new ExtractTextPlugin('[name].css')
    ]
});