import Vue from 'vue'
import Router from 'vue-router'
import StarBanner from '@/components/starBanner/StarBanner'
import StarNotes from '@/components/StarNotes'
import StarLogin from '@/components/Login/StarLogin'
import noteClass from '@/components/noteClass'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'StarNotes',
      component: StarNotes,
      meta: {
        title: '星辰笔记'
      }
    },
    {
      path: '/StarBanner',
      name: 'StarBanner',
      component: StarBanner,
      meta: {
        title: '欢迎'
      }
    },
    {
      path: '/StarLogin',
      name: 'StarLogin',
      component: StarLogin,
      meta: {
        title: '登录'
      }
    },
    {
      path: '/noteClass',
      name: 'noteClass',
      component: noteClass,
      meta: {
        title: '登录'
      }
    }
  ]
})
