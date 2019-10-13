# 大型项目架构

- 项目架构，目录
  utils: js逻辑复用(公共方法)
  assets: 静态资源
  api: 前后端分离
    vue前端，ajax连接后端(axios)
    /api/v2(版本)/products/:1(参数)
  store: vuex状态管理
  pages: 路由组件
  components: 普通组件
  css/stylus: stylus用的较多(reset, 变量声明文件等)

- 路由
  懒加载
- page组件化
- 页面由组件构成
  1、页面级组件(路由组件)  /pages
  2、可复用的组件   /components
  - 全站常用的公共组价，跟业务无关 -- 使用框架 (iView, element-ui)
    /components/common/
  3、容器组件
    PC 页面量 切页面交给组件化 -- html中的section标签
- App.vue 根组件 reset 工作 通用样式
