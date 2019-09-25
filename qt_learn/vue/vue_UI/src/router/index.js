import Vue from 'vue'
import Router from 'vue-router'
import About from '@/views/About'
import Home from '@/views/Home'
import News from '@/views/news'
import Messages from '@/views/messages'
import MessageDetail from '@/views/MessageDetail'

Vue.use(Router)

export default new Router({
  // 路由s
  routes: [
    {
      path: '/about',
      component: About,
      children: [
        {
          // path 最左侧的'/'永远代表根路径
          path: '/about/news',
          component: News
        },
        {
          path: '/about/messages',
          name: 'Messages',
          component: Messages,
          children: [
            {
              path: '/about/messages/detail/:id',
              component: MessageDetail
            }
          ]
        }
      ]
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/',
      redirect: '/about'
    }
  ]
})
