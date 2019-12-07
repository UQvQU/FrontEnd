// common js模块化和es6 模块化的区别

// typeOf exports ?
console.log(exports === module.exports);
var counter = 3;
// typeof exports === 'object'
var obj = {
  name: 'David'
}
function changeValue() {
  counter ++;
  obj.name = 'Tom';
}
module.exports = {
  counter,
  obj,
  changeValue
}
// module.exports.counter = counter;
// exports.counter = counter;
// exports = module.exports = {
//   counter
// }
