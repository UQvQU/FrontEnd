# nuxt

## SSR

相对于SPA体验好
缺点：对搜索引擎不友好
Vue component JS 内存 手机网站大部分不来自于搜索

PC端 入口大部分来自于www.baidu.com

- 前端
vue + nuxt
- 后端
koa + mysql mongodb redis

- VUE UI 框架

- pages 目录下的vue文件都会自动配置路由
/posts 没有vue单点入口 根组件的概念
路由由pages配置决定 _id.vue

- layout 布局
有专门的layout 目录 多个页面的公有部分
app.html 全局
layout/
  default.vue 默认选择
  其他  page/
  script layout: false

- 数据流
store -> api -> node -> mysql

./node_modules/.bin/json-server --watch assets/db.json --port 3333

- json-server
方便的API工具，编辑一个json就行
/assets/*.json

- restful web
一切皆资源 url
url 设计标准化 /posts/:1
请求相应的资源 使用对应的谓语动词
获取资源 /get
添加资源 /post
修改资源 /put 新对象更新老对象
/patch 打补丁
/delete 删除 /posts/1 (删除id="1"对应的对象)
