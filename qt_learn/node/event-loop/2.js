// * nextTick优先于其他微任务先执行
setImmediate(() => {
  console.log('time1');
  Promise.resolve().then(() => console.log('resolve1'));
  process.nextTick(() => console.log('tick1'))
})
setImmediate(() => {
  console.log('time2');
  Promise.resolve().then(() => console.log('resolve2'));
  process.nextTick(() => console.log('tick2'))
})
setImmediate(() => console.log('time3'))