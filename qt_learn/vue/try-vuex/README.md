- vuex 数据流
  组件 + 共享数据

1. 共享状态

- this.$store
  Vue.use(Vuex) Vue.$store
- this.$store.state
  new Vue({
    store
  })
  store = new Vuex.Store({
    state,
    ...
  })
  myVuex Vue.use(myVuex)
  new myVuex.Store(options)
  options: state mutation actions getter

- es6: 模块化机制
  export default xxx
  默认引入的就是xxx
- get 方法
  this.$store 对vue.prototype扩展后，所有组件都可以用
  vue 钩子函数 beforeCreate 生命周期 对vuex进行初始化
  Vue.mixin({  // 混入
    beforeCreate: vuexInit
  })
- this.$store.getters.xxx
  跟state不一样的地方是方法
  会返回state的新的值
  Object.defineProperty(
    this.$store.getters, xxx. {
      get () {
        数据劫持
      }
    }
  )
