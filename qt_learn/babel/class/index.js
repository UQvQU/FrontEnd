// es6
// 类中定义的方法不能被枚举，理解为不能遍历类中的方法
// 用Symbol定义的值是不能被枚举的    用户不可用
class Person6 {
  constructor (name) {
    this.name = name
  }

  sayHello () {
    return '6Hello, I am ' + this.name
  }
}
console.log(Object.keys(Person6));
console.log(Object.keys(Person6.prototype));
// es5
// 原型链上的方法可以枚举
function Person5 (name) {
  this.name = name
}
Person5.prototype.sayHello = function () {
  return '5Hello, I am ' + this.name
}
console.log(Object.keys(Person5));
console.log(Object.keys(Person5.prototype));

var wn = new Person6('wn')
var tt = new Person5('tt')
console.log(wn.sayHello(), tt.sayHello())