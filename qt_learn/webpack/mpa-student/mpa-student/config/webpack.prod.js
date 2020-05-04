const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const glob = require('glob');
const baseConfig = require('./webpack.base.js');
// const templatePath = path.join(__dirname, '../public/index.html')

function setUpMpa() {
  const HtmlWebPackPlugins = []
  // 入口文件  src/*/index.js
  const entry = {};
  // 读取所有入口文件
  const entryFiles = glob.sync(path.join(__dirname, '../src/*/index.js'));
  console.log(entryFiles)
  for (let filePath of entryFiles) {
    // 正则获取文件名 entry1; .*:任意长度任意字符
    const match = filePath.match(/src\/(.*)\/index\.js/);
    // console.log(match)
    const pageName = match && match[1];
    // filePath  ../src/entry1/index.js
    entry[pageName] = filePath;
    const htmlTemplatePath = path.join(__dirname, `../src/${pageName}/index.html`)
    HtmlWebPackPlugins.push(new HtmlWebPackPlugin({
      template: htmlTemplatePath,
      filename: `${pageName}.html`,
      chunks:[`${pageName}`]
    }))
  }
  
  return {
    entry,
    HtmlWebPackPlugins
  }

}
const { entry, HtmlWebPackPlugins } = setUpMpa()
module.exports = webpackMerge(baseConfig, {
  mode: 'development',
  // entry: {
  //   entry1: path.resolve(__dirname, '../src/entry1/index.js'),
  //   entry2: path.resolve(__dirname, '../src/entry2/index.js')
  // },
  entry: entry,
  plugins: [
    ...HtmlWebPackPlugins
    // 生成html文件
    // new HtmlWebPackPlugin({
    //   template: templatePath,
    //   filename: 'entry1.html',
    //   chunks:['entry1']
    // }),
    // new HtmlWebPackPlugin({
    //   template: templatePath,
    //   filename: 'entry2.html',
    //   chunks:['entry2']
    // }),
  ]
});