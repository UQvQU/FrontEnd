// let a = {
//   name: 'tt',
//   book: {
//     title: "You don't konw JS",
//     price: '55'
//   }
// }

// JSON.parse(JSON.stringify(a)) 深拷贝方法 缺点：忽略undefined等
// let b = JSON.parse(JSON.stringify(a))
// a.name = 'thx'
// a.book.price = '66'
// console.log(a, b)

let a = [0, '1', [2, 3]]
let b = JSON.parse(JSON.stringify(a.slice(1)))
a[1] = '22'
a[2][0] = 4
console.log(a, b)  // [ 0, '22', [ 4, 3 ] ] [ '1', [ 2, 3 ] ]