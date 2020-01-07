# react-router源码分析

1. react-router、react-router-dom
react-router-dom/BrowserRouter.jsx
2. history
npm i history -S
history：The history library使您可以在运行JavaScript的任何地方轻松管理会话历史记录(manage session history)。history抽象化(history abstracts)各种环境中的差异，并提供一个最小的API，使您可以管理历史记录堆栈(history stack)，导航(navigate)和保持会话之间的状态(persist state between sessions)
3. Router
react-router/Router.jsx
将history(浏览器历史信息)放置在全局, Provider
4. index
合并导出
5. Route
react-router/Route.jsx
通过consumer获取provider抛出的history中的location, 获得路由匹配所需的浏览器的url地址
6. 路由匹配
react-router/Route.jsx>matchPath
npm i path-to-regexp -S  路径转换为正则
7. Link
react-router-dom/Link.jsx
路由跳转，但页面未渲染
8. Router>constructor
解决：再次刷新route.jsx,浏览器url重新匹配路由
history.listen() 监听路由变化
更新location
利用state，重新渲染Router组件
