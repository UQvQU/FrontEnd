// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import ElementUI from 'element-ui'
import router from './router'
import store from './store/index'
import 'element-ui/lib/theme-chalk/index.css'
import '../static/css/reset.css'
import '../static/css/fontfamily.css'
import axios from 'axios'

Vue.use(ElementUI)
Vue.config.productionTip = false

Vue.prototype.$http = axios
// Vue.prototype.$router = router

router.beforeEach((to, from, next) => {
  // router跳转之前都会经过beforeEach
  document.title = to.meta.title
  next()
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
