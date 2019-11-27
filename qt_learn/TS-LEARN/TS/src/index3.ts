// 类型断言
// const person = {}
// person.name = 'tt'

interface Person {
  name: string
  age: number
}

// const person = {} as Person
// person.name = 'tt'

// const person: Person = {
//   name: 'tt1',
//   age: 12
// }

// console.log(person.name)

// 双重断言
// const person: Person = {}
// const person = 'tt2' as any as Person
// console.log(person)  // tt2

// 类型守卫
class Person {
  name = 'tt'
  age = 18
}

class Animal {
  name = 'petty'
  color = 'pink'
}

function getSomething(arg: Person | Animal) {
  if ('age' in arg) {
    console.log(arg.name)
    console.log(arg.age)
  }

  if ('color' in arg) {
    console.log(arg.name)
    console.log(arg.color)
  }
}

// 字面量类型守卫
type Foo = {
  kind: 'foo' // 字面量
  foo: number
}
type Bar = {
  kind: 'bar'
  bar: number
}

function doStuff(arg: Foo | Bar) {
  if (arg.kind === 'foo') {
    console.log(arg.foo)
  } else {
    console.log(arg.bar)
  }
}
