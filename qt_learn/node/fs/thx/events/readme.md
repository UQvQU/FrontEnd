# events

- 某些类型的对象（又称触发器，Emitter）会触发命名事件来调用函数（又称监听器，Listener）
- 所有能触发事件的对象都是 EventEmitter 类的实例。这些对象有一个 eventEmitter.on() 函数，用于将一个或多个函数绑定到命名事件上。
- eventEmitter.on() 用于注册监听器
- eventEmitter.emit() 用于触发事件。
