import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
const _import_ = file => () => import(`@/pages/${file}.vue`)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: _import_('home')
    },
    {
      path: '/changecity',
      name: 'ChangeCity',
      component: _import_('changecity')
    },
    {
      path: '/login',
      name: 'Login',
      component: _import_('login')
    },
    {
      path: '/register',
      name: 'Register',
      component: _import_('register')
    },
    {
      path: '/exit',
      name: 'Exit',
      component: _import_('exit')
    },
    {
      path: '/mobile',
      name: 'Mobile',
      component: _import_('mobile')
    },
    {
      path: '/food',
      name: 'Food',
      component: _import_('food')
    },
    {
      path: '/movie',
      name: 'Movie',
      component: _import_('movie')
    },
    {
      path: '/hotel',
      name: 'Hotel',
      component: _import_('hotel')
    },
    {
      path: `/scenery/:name`,
      name: 'Scenery',
      component: _import_('scenery')
    }
  ]
})
