// work中不能操作dom
let sum = 0
for (let i = 0; i < 10000000; i++) {
  sum += i
}
// 运算结束，传递消息
this.postMessage(sum)