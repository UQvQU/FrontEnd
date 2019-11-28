// 装饰器 decorator

// // es6
// class Person2 {
//   say () {
//     console.log('hello')
//   }
// }

// es5
function Person3() {}
Object.defineProperty(Person3.prototype, 'say', {
  value: function () {console.log('hello')},
  enumerable: false,
  configurable: true,
  writable: true
})

// 类装饰器
function addAge(constructor: Function) {
  constructor.prototype.age = 18
}

@addAge
class PersonF {
  name: string
  age?: number
  constructor () {
    this.name = 'tt'
  }
}

let person = new PersonF()
console.log(person.age)

// 属性/方法 装饰器
function method(target:any, propertyKey: string, descriptor: PropertyDescriptor) {
  console.log(target)
  console.log('prop', propertyKey)
  console.log('desc', JSON.stringify(descriptor) + '\n\n')
  descriptor.writable = true
}

class personS {
  name: string
  constructor () {
    this.name = 'tt'
  }

  @method
  say () {
    return 'instance method'
  }

  @method
  static run() {
    return 'static method'
  }
}

const abc = new personS()

abc.say = function () {
  return 'abc'
}
abc.say()
