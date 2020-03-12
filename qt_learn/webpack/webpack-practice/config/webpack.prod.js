const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');

const baseConfig = require('./webpack.base.js');
const templatePath = path.join(__dirname, '../public/index.html')

module.exports = webpackMerge(baseConfig, {
  mode: 'none',
  // externals: {
  //   // 排除不常更新的基础库，main.js中没有react，react-dom
  //   // 在 /public/index.html中添加react\reactDom的cdn地址，程序自行去window中查找react，reactDom
  //   'react': 'React',
  //   'react-dom': 'ReactDOM'
  // },

  // 多个路口   login, index;打包生成两个js文件login.js/index.js
  // 两个文件都打包了react，react-dom
  // 正确做法：common.js(react react-dom) index.js(业务逻辑) login.js(业务逻辑)
  entry: {
    index: path.resolve(__dirname, '../src/pageEntry/index/index.js'),
    login: path.resolve(__dirname, '../src/pageEntry/login/login.js')
  },
  // 分离打包公共模块
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          name: 'commons',      // 保存分离的包
          // test: /(react|react-dom)/,   // 需要分离的包
          chunks: 'all',    // all async initial   异步/同步引入import(react).then\ import react from 'react'
          minChunks: 2,     // 最少引用次数 2
          minSize: 0      // 最小体积
        }
      }
    }
  },
  // devtool的值可以组合，eg:cheap-eval-source-map
  // devtool: 'source-map',  // eval(可以追踪出错位置) source-map(main.js.map映射文件) inline-source-map(map文件放在main.js) cheap(忽略列信息)
  plugins: [
    new HtmlWebPackPlugin({
      template: templatePath
    }),
    // 2.引入动态链接库描述文件
    // new webpack.DllReferencePlugin({
    //   manifest:require('../dist/dll/vendor-manifest.json')
    // })
  ]
});