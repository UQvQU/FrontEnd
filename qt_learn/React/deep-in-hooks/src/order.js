import React from 'react';
import ReactDome from 'react-dom';

let cursor = 0
// [{_state: 0},{_deps:{args}},{_deps:{args,value}}]
let currentComponent = {
  _hook: []
}

// 判断是否更新
const argsHasChange = (oldAgs, args) => {
  return !oldAgs || args.some((arg, index) => {
    return arg !== oldAgs[index]
  })
}
// 遇到下一个新的hooks都要push保存到currentComponent._hook中
function getHookState(i) {
  const hooks = currentComponent._hook
  console.log('currentComponent1', currentComponent._hook, currentComponent._hook.length)
  if (i >= currentComponent._hook.length) {
    // 此时hooks还没有，应该添加
    hooks.push({})
    // hooks[i] = {}
  }
  console.log('currentComponent2', currentComponent._hook)
  console.log('hooks[i]', hooks[i], 'i', i)
  return hooks[i]
}

// useState
function myUseState(initState) {
  // 保证顺序
  const hook = getHookState(cursor++)
  console.log('hook', hook)
  // [state, setState]
  hook._value = [
    hook._value ? hook._value[0] : initState,   // state
    function setState(newState) {               // setState
      hook._value[0] = newState
      render()
    }
  ]
  return hook._value
}

function Counter() {
  const [c, setC] = myUseState(10)
  const [d, setD] = myUseState(11)

  return (
    <div>
      c: {c} <br/>
      <button onClick={() => {setC(Math.random())}}>ccc</button><br/>
      d: {d}<br/>
      <button onClick={() => {setD(Math.random())}}>ddd</button><br/>
    </div>
  )
}

render()
function render() {
  cursor = 0
  ReactDome.render(<Counter />, document.getElementById('count'))
}
