import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/common/switch'
import HelloWorld from '@/view/Display'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]
})
