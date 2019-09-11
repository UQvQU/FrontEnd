# VUE REACT -- SPA Single Page Application

应用体验更好，避免刷新出现片刻空白

## 区别

- 传统网站：链接把网站组织起来 重新加载页面 新的http请求
延迟 -> 网路传输时间 01二进制对应电频信号 光速 + node/java/python 后端代码
查询数据库时间 再把html资源response => 页面白屏时间
1.5s 用户离开
0.1s 减少 1000w 增加
路由是独立的

- 网站MVC => 应用(vue app)体验产生路由 解决白屏问题 => VueRouter

- hashRouter
优点：ie8以上都支持
缺点：路由不够纯粹

- historyRouter

VUERouter 两种实现方式 = HashRouter(兼容性) + HistoryRouter(代码好看，移动端兼容性没什么大问题)
