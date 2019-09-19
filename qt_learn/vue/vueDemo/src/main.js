import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'

Vue.config.productionTip = false
// 申明使用插件
// 内部会给vm对象和组件对象添加一个方法：$http
Vue.use(VueResource)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: {App},
  template: '<App/>'
})
