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
        title: '首页'
      }
    },
    {
      path: '/changecity',
      name: 'ChangeCity',
      component: _import_('changecity'),
      meta: {
        title: '美团网'
      }
    },
    {
      path: '/login',
      name: 'Login',
      component: _import_('login'),
      meta: {
        title: '登录'
      }
    },
    {
      path: '/register',
      name: 'Register',
      component: _import_('register'),
      meta: {
        title: '注册'
      }
    },
    {
      path: '/exit',
      name: 'Exit',
      component: _import_('exit'),
      meta: {
        title: '退出登录'
      }
    },
    {
      path: '/mobile',
      name: 'Mobile',
      component: _import_('mobile'),
      meta: {
        title: '手机app'
      }
    },
    {
      path: '/food',
      name: 'Food',
      component: _import_('food'),
      meta: {
        title: '美食'
      }
    },
    {
      path: '/movie',
      name: 'Movie',
      component: _import_('movie'),
      meta: {
        title: '猫眼电影'
      }
    },
    {
      path: '/hotel',
      name: 'Hotel',
      component: _import_('hotel'),
      meta: {
        title: '酒店民宿'
      }
    },
    {
      path: `/scenery/:name`,
      name: 'Scenery',
      component: _import_('scenery'),
      meta: {
        title: '景区'
      }
    }
  ]
})
