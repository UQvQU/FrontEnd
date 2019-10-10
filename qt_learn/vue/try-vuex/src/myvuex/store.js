export class Store {
  constructor (options, Vue) {
    console.log(options)
    this.options = options
    Vue.mixin({
      // 初始化vuex
      beforeCreate: Init
    })
    console.log('实例化之后')
    forEachValue(options.getters, (getterFun, getterName) => {
      // console.log(getterFun, getterName)
      // 一个一个注册挂载
      registerGetter(this, getterName, getterFun)
    })
  }
  // get方法在获取的同时还可以做其他事情
  get state () {
    console.log('get 获取属性')
    return this.options.state
  }
  get getters () {
    return this.options.getters
  }
  set state (val) {
    throw new Error('不可以直接操作，请通过mutations')
  }
}
// this.$store
function Init () {
  console.log('实例化之前')
  const options = this.$options
  // 已含有（用户在options传参时以传store）
  if (options.store) {
    // this指向vue
    this.$store = typeof options.store === 'function' ? options.store() : options.store
  } else if (options.parent && options.parent.$store) {
    this.$store = options.parent.$store
  }
}
function forEachValue (obj, fun) {
  // console.log(obj, fun)
  console.log(Object.keys(obj))
  // 遍历所有函数
  Object.keys(obj).forEach(key => fun(obj[key], key))
}
function registerGetter (store, getterName, getterFun) {
  Object.defineProperty(store.getters, getterName, {
    get: () => {
      // getterFun === getStatePlusOne
      console.log(getterFun)
      return getterFun(store.state)
    }
  })
}
