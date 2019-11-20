import React, { useState } from 'react'

// hooks(useDragAble): 对外提供一个拖拽功能， 返回一个位置信息
// 自定义hooks （方法名以use开头）
function useDragAble() {
  let [ left, setLeft ] = useState(0)
  let [ top, setTop ] = useState(0)
  // let startX = 0, startY = 0

  const handleMove = function(e) {
    let left = e.clientX
    let top = e.clientY

    setLeft(left)
    setTop(top)
  }
  const handleUp = function() {
    document.removeEventListener('mousemove', handleMove)
  }
  const handleDown = function() {
    document.addEventListener('mousemove', handleMove)
    document.addEventListener('mouseup', handleUp)
  }

  return {
    style: {
      left, top
    },
    handleDown
  }
}

export default useDragAble