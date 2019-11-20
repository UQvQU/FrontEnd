import React, { Component } from 'react'

class Drag1 extends Component {
  state = {
    left: 0,
    top: 0
  }
  handleMove = (e) => {
    let left = e.clientX - this.startX
    let top = e.clientY - this.startY
    this.setState({
      left,
      top
    })
  }
  handleUp = () => {
    document.removeEventListener('mousemove', this.handleMove)
    
  }
  handleDown = (e) => {
    // // 获取当前元素的坐标
    let oldClientRect = e.target.getBoundingClientRect()
    console.log(oldClientRect.width, oldClientRect.height)
    // // 获取鼠标按下时的坐标
    // this.startX = e.clientX - oldClientRect.x
    // this.startY = e.clientY - oldClientRect.y
    this.startX = oldClientRect.width / 2
    this.startY = oldClientRect.height
    document.addEventListener('mousemove', this.handleMove)
    document.addEventListener('mouseup', this.handleUp)
  }
  render() {
    const {left, top} = this.state
    return (
      <div style={{left, top}} onMouseDown={this.handleDown} className="drag">
        <h1>hello world</h1>
      </div>
    )
  }
}

export default Drag1
