console.log('script start'); // 1
process.nextTick(() => {console.log('nextTick')})   
setImmediate(() => {console.log('setImmediate')}, 0)
// 宏任务
setTimeout(function () {
  console.log('setTimeout');  // 7
}, 0);

Promise.resolve().then(function () {
  console.log('promise1');     // 3
  // 产生微任务 继promise2加入队列
  return Promise.resolve(111);
  // return 111
}).then(function (val) { // Promise.resolve(111).then(...)
  // 产生微任务
  console.log('val', val);  // 5
  console.log('promise1-2');  // 6
});

Promise.resolve().then(function () {
  // 宏任务
  setTimeout(function () {
    console.log('promise2');  // 8
  }, 0);
}).then(function () {
  // 产生微任务
  console.log('promise2-2');  // 4
});

console.log('script end');  // 2