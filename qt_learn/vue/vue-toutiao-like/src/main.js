// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import HeaderBar from './components/HeaderBar'
import FooterBar from './components/FooterBar'
import './styles/index.css'
import './rem'
import store from './store/index'

Vue.config.productionTip = false
// 注册全局组件
// 1. 方法；2.对象（必须包含install属性）
Vue.use((foo) => {
  // foo === Vue
  foo.component('header-bar', HeaderBar)
  foo.component('footer-bar', FooterBar)
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
