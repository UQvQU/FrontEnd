import React, { useState, useMemo, useCallback } from 'react';
import logo from './logo.svg';
import './App.css';

// 组件缓存 React.memo  ->  控制函数组价渲染
function Count(props) {
  console.log('render')
  const [value, setValue] = useState(0)
  // useMemo缓存结果，返回函数计算结果，calculate = 20
  // useMemo 的第二个参数(数组)为缓存依据, 前后两个浅比较
  // 无变化从缓存中获取值，若变化了重新计算结果
  const calculate = useMemo(() => {
    console.log('calculate')
    return 10 + 10
  }, [])
  // useCallback 缓存函数
  const calculate2 = useCallback(() => {
    console.log('calculate2')
    return 10 + 10
  }, [])
  return (
    <h3>
      { props.count }<br/>
      { calculate }<br/>
      { calculate2() }
      {/* value更新 */}
      <button onClick={() => {setValue(Math.random())}}>update value</button>
    </h3>
  )
}

// const MCount = React.memo(Count)
// mCount 默认会把thisProps和nextProps 进行浅比较
// React.memo 仅针对props
const MCount = React.memo(Count, (thisProps, nextProps) => {
  // 自己比较thisProps和nextProps
  return true  // Props相同：返回true，不更新； 不相同：返回false，更新
})

// useMemo 缓存结果

function App() {
  const [count, setCount] = useState(0)
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* 父组件更新了, Count也会更新，即便值未发生变化，无优化操作 */}
        {/* <Count count={100} />  */}

        <MCount count={100} />
        <button onClick={() => {setCount(Math.random())}}>update count</button>
      </header>
    </div>
  );
}

export default App;
