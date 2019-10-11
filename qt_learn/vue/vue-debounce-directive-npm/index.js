
// <div v-debounce="open">立即购买</div>
function debounce(fn, wait) {
  var timeout = null;
  return function () {
    if (timeout !== null) {
      clearTimeout(timeout);
    }
    timeout = setTimeout(fn, wait);
  }
}
let option = {
  inserted: (el, binding) => {
    console.log(el, binding)
  },
  bind: function (el, binding) {
    console.log(binding.value)
    el.addEventListener('click', debounce(binding.value, 2000))
  },
  unbind: function () {}
}
// Vue.directive('debounce', option)
// 插件注册
let  plugin = {}
plugin.install = function (argVue) {
  argVue.directive('debounce', option)
}

if (typeof exports === 'object') {
  // node import导入
  module.exports = plugin
} else if (window) {
  // script 引入
  window.Vue.use((argVue) => {
    argVue.use(plugin)
  })
}