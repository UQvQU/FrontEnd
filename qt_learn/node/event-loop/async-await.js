async function async1() {
  console.log('async1 start'); // 2
  await async2();  // await 返回 Promise 微任务1
  console.log('async1 end'); // 6
}
async function async2() {
  console.log('async2'); // 3
}

console.log('script start'); // 1

setTimeout(function () { // 宏任务
  console.log('setTimeout'); // 8
}, 0)

async1();

new Promise(function (resolve) {
  // 同步执行
  console.log('promise1'); // 4
  resolve();
}).then(function () {
  // 异步执行
  // 微任务2
  console.log('promise2'); // 7
});
console.log('script end'); // 5