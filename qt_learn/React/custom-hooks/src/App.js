import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import Input1 from './input1';
import WithWindowWidth from './WidthHoc'
// useCallback  缓存  函数
// useMemo  缓存  值
// useReducer dispatch -> action -> reducer -> state
// 高阶组件
function Width({ windowWidth}) {
  return (
    <h2>{windowWidth}</h2>
  )
}
const WithWidth = WithWindowWidth(Width)
console.log(WithWidth)

// 防止包装地狱 hooks
function useWidth() {
  const [ width, setWidth] = useState(window.innerWidth);
  // const [height, setHeight] = useState;
  const handleSize = () => {
    setWidth(window.innerWidth)
  }
  // 绑定resize事件
  // useEffect 此处相当于componentDidMount生命周期
  useEffect(() => {
    window.addEventListener('resize', handleSize)
    return () => {
      // 此处相当于unMount生命周期
      // 移除绑定事件
      window.removeEventListener('resize', handleSize)
    }
  })
  return width;
}
function WithWidth2() {
  const width = useWidth()
  return (
    <h3>{width}</h3>
  )
}
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Input1 />
        <WithWidth />
        <WithWidth2 />
      </header>
    </div>
  );
}

export default App;
