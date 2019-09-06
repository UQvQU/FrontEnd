# 路由

链接带来了页面的互联
一切皆资源 链接 url
重新刷新
传统页面刷新：html 重新加载 浪费时间 体验差

## 路由的步骤 vue-router

- 单页应用的结构，只有一个页面，分动态部分和静态部分
  动态部分 使用 锚链接 #/page1
  url 改变事件 container 元素中 动态dom
- 锚链接 大型页面 方便跳转 点击链接无需跳转页面 #/page

路由接管一切
new HashRouter()
constructor 订阅hashChange事件

