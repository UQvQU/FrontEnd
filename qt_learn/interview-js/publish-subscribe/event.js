class EventEmitter {   // 发布者
  constructor () {
    // 存储事件  --  发布的消息
    this._events = this._events || new Map()
    // 监听上限
    this._maxListeners = this._maxListeners || 10
  }
}

// // 触发名为type的事件
// EventEmitter.prototype.emit = function (type, ...args) {
//   let handler
//   // 从存储事件键值对的this._events中获取对应发布事件回调函数
//   handler = this._events.get(type)
//   // 发布消息
//   if (args.length > 0) {
//     handler.apply(this, args)
//   } else {
//     handler.apply(this)
//   }
//   return true
// }

// // 监听名为type的事件，判断是否已经发布该消息
// EventEmitter.prototype.addListener = function(type, fn) {
//   // 将监听者存储
//   if (!this._events.get(type)) {
//     this._events.set(type, fn)
//   }
// }

// 发布名为type的事件
EventEmitter.prototype.emit = function (type, ...args) {
  let handler
  // 从存储事件键值对的this._events中获取对应发布事件回调函数
  // 获取已订阅type事件的所有订阅者
  handler = this._events.get(type)
  if (Array.isArray(handler)) {
    // 多位订阅者
    for (let i = 0; i < handler.length; i++) {
      // 发布消息
      if (args.length > 0) {
        handler[i].apply(this, args)
      } else {
        handler[i].apply(this)
      }
    }
  } else {
    // 仅一位订阅者
    if (args.length > 0) {
      handler.apply(this, args)
    } else {
      handler.apply(this)
    }
  }
  return true
}

// 订阅名为type事件，订阅者fn
EventEmitter.prototype.addListener = function(type, fn) {
  // 获取对应发布事件的订阅者清单
  const handler = this._events.get(type)
  // 将监听者存储
  if (!handler) {
    this._events.set(type, fn)
  } else if (handler && typeof handler === 'function') {
    // 仅有一个订阅者
    this._events.set(type, [handler, fn])
  } else {
    // 有许多订阅者
    handler.push(fn)
  }
}