process.nextTick(() => {console.log('nextTick')})
Promise.resolve().then(()=> {console.log('promise1');}).then(()=> {
 console.log('promise2');
});
setTimeout(() => {console.log('timeOut')})
setImmediate(() => {console.log('setImmediate')})
console.log('end')
