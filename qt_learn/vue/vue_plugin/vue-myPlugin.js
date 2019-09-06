// vue的插件库
(function () {
    // 需要向外暴露的插件对象
    const MyPlugin = {}
    // 必须有install()
    MyPlugin.install = function (Vue, options) {
        // 1. 添加全局方法或属性(vue函数添加方法)
        Vue.myGlobalMethod = function () {
            console.log('Vue函数对象的方法myGlobalMethod()');
        }
      
        // 2. 添加全局资源
        // 自定义属性
        Vue.directive('my-directive', function (el, binding) {
            el.textContent = binding.value.toUpperCase();
        })
      
        // 4. 添加实例方法(vue实例添加方法)
        Vue.prototype.$myMethod = function () {
            console.log('vue实例的方法myMethod()')
        }
      }
    //   向外暴露
    window.MyPlugin = MyPlugin;
})()