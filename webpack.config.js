/**
 * learning-gulp - webpack.config.js
 * Created by mengdesen on 15/4/14.
 */

'use strict';

var webpack = require('webpack');
var path = require('path'); //路径使用，兼容各个系统使用

module.exports = {
  //页面入口文件配置
  entry: {
    bundle: [
      //刷新start
      'webpack/hot/dev-server',
      'webpack-dev-server/client?http://localhost:8080',
      //刷新end
      path.resolve(__dirname, 'js/entry.jsx'  )
    ],
    vendor:[
        'react',
        'react-dom'
    ]
  },
  //入口文件输出配置
  output: {
    path: __dirname,
    filename: 'js/[name].js'
  },
  module: {
    //加载器配置
    loaders: [{
      //.css 文件使用 style-loader 和 css-loader 来处理
      test: /\.css$/,
      loader: 'style-loader!css-loader'
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
    }]
  },
  //插件
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
        names: ["vendor"],
        minChunks: Infinity,
        filename:`js/[name].js`
    }),
    new webpack.BannerPlugin('This file is create by eray'),//备注插件
    new webpack.HotModuleReplacementPlugin()//自动刷新插件
  ],
  //其它解决方案配置
  resolve: {
    //查找module的话从这里开始查找
  //  root: 'E:/github/nodes/webpack', //绝对路径
    //自动扩展文件后缀名，意味着我们require模块可以省略不写后缀名
    extensions: ['.js', 'jsx', '.json', '.scss'],
    //模块别名定义，方便后续直接引用别名，无须多写长长的地址
    alias: {
      AppStore: './js/stores/AppStores.js', //后续直接 require('AppStore') 即可
      ActionType: './js/actions/ActionType.js',
      AppAction: './js/actions/AppAction.js'
    }
  }
};
