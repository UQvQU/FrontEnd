import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
const _import_ = file => () => import(`@/pages/${file}.vue`)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: _import_('home'),
      meta: {
        title: '在线实验， 高校编程--实验楼'
      }
    },
    {
      path: `/user/:id`,
      name: 'User',
      component: _import_('user'),
      meta: {
        title: '欢迎登录, 实验楼'
      }
    }
  ]
})
