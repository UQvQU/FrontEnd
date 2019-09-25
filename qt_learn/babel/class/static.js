// es6 实例属性
// class Person {
//   constructor () {
//     this.state = {
//       count: 0
//     }
//   }
// }

// class Person {
//   state = {
//     count: 0
//   }
// }

// es5
// function Person () {
//   this.state = {
//     count: 0
//   }
// }


// es6 静态方法
class Person6 {
  static sayHello () {
    return 'hello'
  }
}
// 调用
console.log(Person6.sayHello())
// 静态方法不能被继承
const tt = new Person6()
// console.log(tt.sayHello())  报错

// es5
function Person5 () {
  Person5.sayHello = function () {
    return 'hello'
  }
}

// es6 静态属性
class Person1 {}
Person1.name = 'tt'

class Person2 {
  static name = 'tt'
}
// es5
function Person3 () {}
Person3.name = 'tt'