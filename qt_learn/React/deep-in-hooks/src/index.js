import React, { useState, useEffect, useMemo } from 'react';
import ReactDOM from 'react-dom';
import './order'
// hooks不能放在逻辑判断中，防止之后hooks执行的顺序会与之前的顺序不一致
// 数组 链表 实现所有hooks
// 第一次渲染: [{_state: 0},{_deps:{args}},{_deps:{args,value}}]
// 第二次渲染 按照出现的顺序一一取出来，顺序如果不一致会导致取错


// 手动实现hooks -- useState
let _state
function myUseState(initState) {
  _state = _state || initState
  function setState(newState) {
    // console.log('_state', _state, 'newState', newState)
    _state = newState
    // 渲染
    render()
  }

  return [_state, setState]
}

// 手动实现hooks -- useEffect
let _deeps = {
  args: null
}
function myUseEffect(cb, args) {
  // args：判断是否再次执行的条件；args与上一次一致则不执行
  // console.log('args', args)
  const hasChange = args && args.some((arg, index) => {
    // console.log('arg', arg)
    // 若有一项不一致，返回true，args前后不一致，再次执行useEffect()
    return _deeps.args && arg !== _deeps.args[index]
  })
  // console.log(hasChange)
  if (hasChange || !_deeps.args) {
    cb()
    // 更新_deeps中的args
    _deeps.args = args
  }
}

// 手动实现hooks -- useMemo()
let _deepsMemo = {
  args: null,
  value: null
}
function myUseMemo(cb, args) {
  const hasChange = args && args.some((arg, index) => {
    // console.log('arg', arg)
    // 若有一项不一致，返回true，args前后不一致，再次执行useEffect()
    return _deepsMemo.args && arg !== _deepsMemo.args[index]
  })
  // console.log('mHasChange', hasChange)
  if (hasChange || !_deepsMemo.args) {
    _deepsMemo.value = cb()
    _deepsMemo.args = args
    // console.log('_deepsMemo', _deepsMemo.args)
    return _deepsMemo.value
  }
  return _deepsMemo.value
}


// 手动实现hooks -- useCallback()
function myUseCallback(cb, args) {
  return myUseMemo(() => cb, args)
}


// test
function Counter() {
  console.log('1')
  const [count, setCount] = myUseState(0)
  console.log(count)

  myUseEffect(() => {
    console.log('myDidMount')
  }, [count])   // []: 只执行一次

  let res = myUseMemo(() => {
    return count + 1
  }, [count]) // []: 只执行一次, [count]:每次执行

  return (
    <div>
      count: {count}<br/>
      <button onClick={() =>{setCount(Math.random())}}>btn</button><br/>
      res: {res}
    </div>
  )
}

render()
function render() {
  ReactDOM.render(<Counter />, document.getElementById('root'));
}



// serviceWorker.unregister();
