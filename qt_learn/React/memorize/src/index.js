import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();


// 纯函数：同样的输入 同样的输出

let map = new Map()
// 使add函数具有缓存功能
function add(a, b) {
  let key = JSON.stringify(Array.from(arguments));

  // 判断之前是否已有相同的计算
  if (map.get(key))
    return map.get(key);
  
  let result = a + b;
  map.set(key, result);
  return result;
}
add(1, 2);



// 让普通纯函数变成具有缓存功能的纯函数
function memorize(fn) {
  let map = new Map()
  return function(...args) {
    // console.log('args', args)
    // key: fn的参数
    let key = JSON.stringify(args)  // key值生成不严谨
    // console.log('key', key)

    if (map.get(key)) {
      return map.get(key)
    }
    console.log('result')
    let result = fn(...args);
    map.set(key, result);
    return result;
  }
}
function  reduce(a, b) {
  return a - b;
}
const mReduce = memorize(reduce);
// console.log(mReduce(3, 2));
// console.log(mReduce(3, 2, undefined));
// console.log(mReduce(3, 2, null));