let proto = {}

// 参数分别是代理对象和对象上的属性
function defineGetter(prop, name) {
  // 每个对象都有一个__defineGetter__方法，用这个方法来实现代理
  proto.__defineGetter__(name, function () {
    // this ==> ctx
    return this[prop][name]
  })
}
defineGetter('request', 'url')
defineGetter('request', 'path')
module.exports = proto