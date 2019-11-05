// function Person(name) {
//   this.name = name
// }
// let p = new Person('tt')
// // 对象的隐式原型链 === 构造函数的显式原型链
// p.__proto__ === Person.prototype
// console.log(p.__proto__)   // 隐式原型链
// console.log(Person.prototype)  // 显式原型链
// console.log(Person.__proto__)  // [Function]
// // Person.prototype 是对象，是 Object 类型的实例
// console.log(Person.prototype.__proto__ === Object.prototype);
// console.log(Function.__proto__, Function.prototype, Object.__proto__)
// console.log(Object.__proto__ === Function.prototype)

let gArr = [1, [2, 3], 4, 5, [6, 7, [3, 2, 8]]]
let oArr = [1, 2, 3, 4, 5, 6, 7, 3, 2, 8]

let arr = []
function addNum (e) {
  if (!Array.isArray(e)) {
    console.log('e', e)
    arr.push(e)
  } else {
    e.forEach(i => {
      addNum(i)
    })
  }
}

gArr.forEach(e => {
  addNum(e)
})

console.log(arr)

// 方法二

function outputArr(arr) {
  return arr.reduce(function(pre, item) {
    return pre.concat(Array.isArray(item) ? outputArr(item) : item)
  }, [])
}