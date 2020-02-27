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
    <https://blog.csdn.net/HuangZeJunXXX/article/details/100152048>
11. class 动态绑定
    <https://www.jianshu.com/p/45dbac5035e2>
12. 路由切换不刷新问题
    vue-router的切换不同于传统的页面的切换。路由之间的切换，其实就是组件之间的切换，不是真正的页面切换。这也会导致一个问题，就是引用相同组件的时候，会导致该组件无法更新，也就是我们口中的页面无法更新的问题了。
    在 router-view 中加 :key="$route.fullPath"

## mysql database

1. 用户表 (id, phone, password, nickname, avatar)
2. 优惠券 (id, itemId, title, num, index, nuitPrice)

![Image text](https://raw.githubusercontent.com/THXXZB/qt_learn/master/qt_learn/img/m1.png)
![Image text](https://raw.githubusercontent.com/THXXZB/qt_learn/master/qt_learn/img/m2.png)
![Image text](https://raw.githubusercontent.com/THXXZB/qt_learn/master/qt_learn/img/m3.png)
![Image text](https://raw.githubusercontent.com/THXXZB/qt_learn/master/qt_learn/img/m4.png)
![Image text](https://raw.githubusercontent.com/THXXZB/qt_learn/master/qt_learn/img/m5.png)
![Image text](https://raw.githubusercontent.com/THXXZB/qt_learn/master/qt_learn/img/m6.png)
![Image text](https://raw.githubusercontent.com/THXXZB/qt_learn/master/qt_learn/img/m7.png)
![Image text](https://raw.githubusercontent.com/THXXZB/qt_learn/master/qt_learn/img/m8.png)
![Image text](https://raw.githubusercontent.com/THXXZB/qt_learn/master/qt_learn/img/m9.png)
