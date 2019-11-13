// var t
// function  foo() {
    // if (t) return t
  //   t = new Date()
  //   return t
// }
// console.log(foo())

// 避免全局污染
// 1. 闭包
// var foo = (function () {
//   var t
//   return function() {
//     if (t) return t
//     t = new Date()
//     return t
//   }
// })

// 2. 给函数添加属性
// function foo() {
//   if (foo.t) return foo.t
//   foo.t = new Date()
//   return t
// }

// 3. 惰性函数：解决多次判读问题
// var foo = function() {
//   var t = new Date()  // 首次获得t
//   console.log('t:', t)
//   foo = function() {  // foo 再次被复制 return t
//     console.log('2foo')
//     return t
//   }
//   console.log('1foo')
//   return foo
// }
// foo()
// foo()
// foo()

// 惰性函数应用场景
// 判断是否为IE浏览器，每次都需要判断
function addEvent(type, el, fn) {
  if (window.addEventListener) {
    el.addEventListener(type, fn, false)
  } else if (window.attachEvent) {
    el.attachEvent('on' + type, fn)
  }
}
// 升级为惰性函数
function addEvent(type, el, fn) {
  if (window.addEventListener) {
    addEvent = function(type, el, fn) {
      el.addEvent(type, fn, false)
    }
  } else if (window.attachEvent) {
    addEvent = function(type, el, fn) {
      el.addEvent('on' + type, fn)
    }
  }
}