# 手动配置自动化构建工具-- webpack4

1. npm init -y
   npm i webpack webpack-cli --save-dev
   npm i lodash --save-dev

2. import './style/index' webpack无法直接按这种方式引入css
需要借助插件 npm i style-loader css-loader --save-dev
css-loader 使css文件引入生效
style-loader 使css在html中生效,无需在html中引入css文件
webpack.config.js 中配置module.rules
{
  test: /\.css$/,    // 匹配css文件
  use: ['style-loader', 'css-loader']   // 调用顺序从右往左 css->style
}

3. 引用sass
npm i sass-loader node-sass --save-dev
修改package.json
"scripts": {
  "build": "npx webpack -c webpack.config.js"
}
webpack.config.js 中配置module.rules
{
  test: /\.scss$/,
  use: ['style-loader', 'css-loader', 'sass-loader']
}

4. css自动添加前缀
npm i postcss-loader autoprefixer --save-dev

组合一下:
{
  test: /\.(sc|c|sa)ss$/,
  use: ['style-loader',
    {
      loader: 'css-loader',
      options: { sourceMap: true}
    },
    {
      loader: 'postcss-loader',
      options: {
        ident: 'postcss',
        sourceMap: true,
        plugins: loader => [
          require('autoprefixer')()
        ]
      }
    },
    {
      loader: 'sass-loader',
      options: { sourceMap: true}
    }
  ]
}

5. 分离单独打包css文件
npm i mini-css-extract-plugin --save-dev
不再使用'style-loader', 改成MiniCssExtractPlugin.loader
同时需要在html中引入css文件  link
webpack.config.js plugins配置
new MiniCssExtractPlugin({
  filename: '[name].css',
  chunkFilename: '[id].css'
})

6. 压缩css文件
npm i optimize-css-assets-webpack-plugin --save-dev
webpack.config.js plugins配置
new OptimizeCssAssetsWebpackPlugin({})

7. 分离单独打包js文件
npm i uglifyjs-webpack-plugin --save-dev
webpack.config.js plugins配置
new UglifyjsWebpackPlugin({
  cache: true,                      // js 文件未变化则不压缩
  parallel: true,                      // 是否启用并行压缩
  sourceMap: true
})
