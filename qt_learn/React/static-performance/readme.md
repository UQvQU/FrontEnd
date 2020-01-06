# 前端性能优化之静态资源优化

## 图片

1. jpg
适用于色彩丰富的图片 banner图片 焦点图片
2. png
支持透明
适用于icon
3. webp
集大成者

webpack之图片压缩
imagemin-webpack-plugin

## css

1. css放置在页面头部
2. 布局layout->渲染paint->合成composite
重排一定会引起重绘
重绘不一定会引起重排(比如：选择影响较小的transform，opacity)
3. 使用外联(link),避免使用@import
link(html) @import(css)
@import会在页面加载完成才去引入
4. css Houdini
   1. link
   2. 没有模块化
   3. stylus 预处理器
   4. post-css 后处理器(-webkit)
   5. css-module  / scope
   6. css in js
   styled-components(共享 js变量)
5. 为什么 js in css
   1. js提出的语法 因babel
