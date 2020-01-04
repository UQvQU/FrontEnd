const variable = require('./plugin')   // 引入自己的插件

module.exports = {
  plugins: [variable],   // 插件：是一个个单独的功能
  presets: []           // presets将一个个插件集合起来（@babel/env）   简化
}