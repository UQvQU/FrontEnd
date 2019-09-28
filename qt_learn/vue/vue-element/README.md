# vue

- vue
  vueRouter 路由
  vuex   数据流
  elementUI

  element-ui  pc
  mint-ui/iview  mobile

## 插件

  vue 瘦身  MVVM
  其他的都是他周边的生态
  插件机制往里面加
  Vue.use(plugin)
  this.$route
  Vue.prototype

- ElementUI 有两种引入组件的方式
  [el-button /]
  Vue.component(component.name, component)

- 写一个vue组件 开源插件 100+
  {
    install: function (message) {
      Vue.component(component.name, component);
      Vue.prototype.$message = message
    }
  }
  Vue.use()   执行install()
