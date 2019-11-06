let a = {
  name: 'tt',
  book: {
    title: "You don't konw JS",
    price: '55'
  }
}
// a对象中的基础类型执行深拷贝，引用类型执行浅拷贝
// let b = Object.assign({}, a)

// a.name = 'thx'
// a.book.price = '45'

// console.log(a,b)

// 解构同Object.assign()
// let b2 = {...a}

// a.name = 'thx'
// a.book.price = '45'

// console.log(a,b2)


let c = [0, '1', [2, 3]]
// slice()返回一个新的数组，但对象仍拷贝额的是引用
let b = c.slice(1)
// b = ['1', [2, 3]]
c[1] = '22'
c[2][0] = 4

console.log(c, b)  //[ 0, '22', [ 4, 3 ] ] [ '1', [ 4, 3 ] ]