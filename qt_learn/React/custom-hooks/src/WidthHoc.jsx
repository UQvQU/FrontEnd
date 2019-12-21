import React, { Component } from 'react';
// 每个组件都可以获取屏幕宽度
// hoc
// 高阶组件 WithWidth(<Header />)  -> this.props.windowWidth 获取宽度
export default function withWindowWidth(Com) {
  class WithWindowWidth extends Component{
    state = {
      width: window.innerWidth
    }
    componentDidMount() {
      window.addEventListener('resize',
        () => {
          this.setState({
            width: window.innerWidth
          })
        }
      )
    }
    render() {
      return <Com a="1" windowWidth={this.state.width} />
    }
  }
  return WithWindowWidth;
}
