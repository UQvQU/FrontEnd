const path = require('path');
// 合并webpack
const webpackMerge = require('webpack-merge');
// 排除不需要打包的node内置的模块
const nodeExternals = require('webpack-node-externals');
const baseConfig = require('./webpack.base')
const serverConfig = {
  target: 'node',
  mode: 'development',
  entry: './src/server/index.js',
  output: {
    // 打包到
    filename: 'bundle.js',
    path: path.join(__dirname, 'build')
  },
  externals: [nodeExternals()]
}

module.exports = webpackMerge(baseConfig, serverConfig)