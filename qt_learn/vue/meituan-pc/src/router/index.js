import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
const _import_ = file => () => import(`@/pages/${file}.vue`)

export default new Router({
  // mode: 'history',
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
      path: '/food/:id',
      name: 'FoodDetail',
      component: _import_('food-detail'),
      meta: {
        title: '美食详情'
      }
    },
    {
      path: '/vouchers/:id/:index',
      name: 'VouchersDetail',
      component: _import_('vouchers-detail'),
      meta: {
        title: '优惠详情'
      }
    },
    {
      path: '/buy',
      name: 'Buy',
      component: _import_('buy'),
      meta: {
        title: '购买详情'
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
    },
    {
      path: `/me`,
      name: 'Me',
      component: _import_('me'),
      meta: {
        requireAuth: true,
        title: '我的'
      },
      children: [
        {
          path: '/',
          name: 'userInfo',
          component: _import_('userInfo'),
          meta: {
            requireAuth: true,
            title: '我的首页'
          }
        },
        {
          path: '/me/order',
          name: 'order',
          component: _import_('order'),
          meta: {
            requireAuth: true,
            title: '我的订单'
          }
        },
        {
          path: '/me/collect',
          name: 'collect',
          component: _import_('collect'),
          meta: {
            requireAuth: true,
            title: '我的收藏'
          }
        },
        {
          path: '/me/ticket',
          name: 'ticket',
          component: _import_('ticket'),
          meta: {
            requireAuth: true,
            title: '我的抵用券'
          }
        },
        {
          path: '/me/settings',
          name: 'settings',
          component: _import_('settings'),
          meta: {
            requireAuth: true,
            title: '账户设置'
          }
        }
      ]
    }
  ]
})
