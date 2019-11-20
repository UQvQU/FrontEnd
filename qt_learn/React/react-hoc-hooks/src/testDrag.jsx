import React, { Component } from 'react'

class testDrag extends Component {
  state = {
    left: 0,
    top: 0
  }
  handleMove = (e) => {
    let left = e.clientX
    let top = e.clientY
    this.setState({
      left,
      top
    })
  }
  handleUp = () => {
    document.removeEventListener('mousemove', this.handleMove)
  }
  handleDown = (e) => {
    document.addEventListener('mousemove', this.handleMove)
    document.addEventListener('mouseup', this.handleUp)
  }
  render() {
    const {left, top} = this.state
    return (
      <div style={{left, top}} onMouseDown={this.handleDown} className="drag">
        <h1>hhhhhhhhhhh</h1>
      </div>
    )
  }
}

export default testDrag
