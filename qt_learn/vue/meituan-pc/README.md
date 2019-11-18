# 美团

## 页面架构

## 问题

1. 深度作用选择器 (>>> /deep/)
element ui 组件修改样式覆盖无效
2. 登录拦截器
3. 二级路由
4. font-family 使用
5. style（tab）组件
6. 全局组件--header
7. koa2后端连接mysql数据库 （axios、跨域等问题）
8. store储存已登录的用户信息
9. 获取路由地址
   完整url可以用 window.location.href
   路由路径可以用 this.$route.path
   路由路径参数 this.$route.params 例如：/user/:id → /user/2044011030 → this.$route.params.id
   路由查询参数 this.$route.query 例如：/user/search?name=sf → this.$route.query.name
10. props 数组/对象的默认值应当由一个工厂函数返回
    https://blog.csdn.net/HuangZeJunXXX/article/details/100152048
