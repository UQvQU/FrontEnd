//  redux 中间件  ---  组合
const middleWare1 = next => action => {
  console.log(1)
  next()
  console.log(2)
}
const middleWare2 = next => action => {
  console.log(3)
  next()
  console.log(4)
}

const middleWares = [middleWare1, middleWare2]

// compose 组合
function compose(...funcs) {
  if (funcs.length === 0) {
    console.log('arg', arg)
    return arg => arg
  }
  if (funcs.length === 1) {
    console.log('0', funcs[0])
    return funcs[0]
  }
  // console.log(funcs)
  return funcs.reduce((a, b) => (...args) => a(b(...args)))
}

// 组合对字符串操作的函数
let fn1 = str => str.split('')   // 转换为数组
let fn2 = str => str.toLocaleLowerCase()    // 全部改为小写
const opt = compose(fn1, fn2)
console.log(opt('ABCDE'))   // ===   fn1(fn2('ABCDE))

// 组合中间件
const chain = compose(...middleWares)
/* redux dispatch
只能dispatch一个对象， 有了thunk 之后能 dispatch 函数
if (action == function) {}
else if (action == promise) {}
else 执行原始的dispatch
*/
let dispatch = chain(() => {
  console.log('原始的dispatch')
})
dispatch()