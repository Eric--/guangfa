//'use strict';

let webpack = require('webpack');
let HtmlWebpackPlugin = require('html-webpack-plugin');
let BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
let CopyWebpackPlugin = require('copy-webpack-plugin');
let revHash = require('rev-hash');
let path = require('path');
let helpers = require('./helpers');

let precss = require('precss');
let postcssSprites = require('postcss-sprites');
let autoprefixer = require('autoprefixer');
let postcssSpritesCfg = require('./postcss.config');

module.exports = {

    module: {
        //加载器配置
        rules: [
            {
                test: /\.css$/,
                include: helpers.root('src', 'app'),
                use: [{
                    loader: 'to-string-loader'
                }, {
                    loader: 'css-loader',
                    options: {
                        importLoaders: 1,
                    }
                }, {
                    loader: 'postcss-loader'
                }]
            }, {
                //.scss 文件使用 style-loader、css-loader 和 sass-loader 来编译处理
                test: /\.scss$/,
                loader: 'style-loader!css-loader!sass-loader?sourceMap'
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
            }, {
                test: /\.(png|jpg)$/,
                loader: 'file-loader?name=/[hash:8].[name].[ext]'
            }
        ]
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

        new BundleAnalyzerPlugin({
            analyzerMode: 'static',
            reportFilename: './reports.index.html',
            openAnalyzer: false
        }),

        //自定义插件
        new webpack.LoaderOptionsPlugin({
            options: {
                //postcss
                postcss: [
                    precss,
                    autoprefixer,
                    postcssSprites({
                        // stylesheetPath: './dist', //好像也没什么用
                        spritePath: './dist/css/images', //感觉没用，生成了也不会使用
                        // basePath: 'dist', //好像也没什么用
                        // relativeTo: 'file',//这个也好像没用
                        retina: true,
                        spritesmith:{
                            padding: 10 
                        },
                        filterBy: function(image) {
                            // Allow only png files
                            if (/(search|logo)/.test(image.url)) {
                                return Promise.reject();
                            }

                            return Promise.resolve();
                        },
                        hooks: {
                            // onUpdateRule: function(rule, token, image) {
                            //     // `this` is the webpack loader context
                            //     this.addDependency(image.path); // adds a watch to the file
                            // },
                            onSaveSpritesheet: function(opts, spritesheet) {
                                return path.join(
                                    opts.spritePath,
                                    spritesheet.groups.concat([
                                        revHash(spritesheet.image),
                                        spritesheet.extension
                                    ]).join('.')
                                );
                            }
                        }
                    })
                ]
            }
        }),

        new CopyWebpackPlugin([
            { from: helpers.root('src', 'css'), to: 'css'}
        ])
    ],
    //其它解决方案配置
    resolve: {
        //自动扩展文件后缀名，意味着我们require模块可以省略不写后缀名
        extensions: ['.ts', '.js', 'jsx', '.json', '.scss'],
        modules: ["node_modules", "spritesmith-generated"]
    }

};
