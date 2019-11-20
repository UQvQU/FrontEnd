import React, { useState } from 'react'
import './App.css';
import Drag1 from './Drag1'
import withDragAble from './withDragAble'
import useDragAble from './useDragAble'
import TestDrag from './testDrag'

// hooks
// react 15: function组件  没有state、this和生命周期
// 功能单纯 只负责接收 props 并 渲染

// react 16: hooks -> 解决组件之间的逻辑复用, 比hoc少了包装地狱等问题
// hooks 让 逻辑 扁平化

function Header() {
  return (
    <h2>Header</h2>
  )
}
function Footer() {
  const [count, setCount] = useState(0) // state={0}
  // 拖拽Footer
  const { style, handleDown } = useDragAble()
  return (
    <div style={style} onMouseDown={handleDown} className="drag">
      foot: { count }
      <button onClick={() => {
        let count1 = count + 1
        setCount(count1)
      }}>+</button>
    </div>
  )
}
const DragH2 = withDragAble(Header)
function App() {
  return (
    <>
      <TestDrag />
      <Drag1/>
      <DragH2 />
      <Footer />
    </>
  )
}

export default App;
