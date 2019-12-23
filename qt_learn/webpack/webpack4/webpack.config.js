const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin')
const UglifyjsWebpackPlugin = require('uglifyjs-webpack-plugin')

module.exports = {
  entry: './src/index.js',
  mode: 'development',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.(sc|c|sa)ss$/,
        use: [MiniCssExtractPlugin.loader, 
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
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css'
    }),
    new OptimizeCssAssetsWebpackPlugin({}),
    new UglifyjsWebpackPlugin({
      cache: true,                      // js 文件未变化则不压缩
      parallel: true,                      // 是否启用并行压缩
      sourceMap: true
    })
  ]
}