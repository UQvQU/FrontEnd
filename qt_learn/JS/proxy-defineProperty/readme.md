# proxy&&defineProperty

## defineProperty

1. 只能劫持对象已有的属性，且仅能劫持getter和setter
2. 无法监控到数组下标的变化，导致直接通过数组的下标给数组设置值，不能实时响应

## Proxy(get set apply constructor)

1. 劫持一个未来的（新增的）属性
2. 元编程（对编程语言的再次编程），可劫持 ->
  1、 对象（delete getOwnPropertyNames...等）
  2、 数组
  3、 方法
3. Proxy是es6提供的新特性，兼容性不好，最主要的是这个属性无法用polyfill来兼容
