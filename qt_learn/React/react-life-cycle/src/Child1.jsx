import React, { Component } from 'react'

class Child1 extends Component {
  state = {
    data: 1
  }
  componentWillMount () {
    const { list } = this.props 
    console.log('componentWillMount')
    this.setState({
      list
    })
  }
  componentDidMount () {
    console.log('componentDidMount')
    this.interval = setInterval(() => {
      let list = this.state.list.slice(0)
      list.push(10)
      this.setState({
        list
      })
      console.log(123456)
    }, 1000)
  }
  update = () => {
    this.setState({
      data: ++ this.state.data
    })
  }
  // props
  componentWillReceiveProps (nextProps) {
    console.log('componentWillReceiveProps')
    console.log('nextProps', nextProps, this.props)
    let list = this.state.list.slice(0)
    list.splice(0, 3,...(nextProps.list))
    this.setState({
      list
    })
  }
  // 性能优化
  shouldComponentUpdate (nextProps, nextState) {
    console.log(nextProps, nextState)
    // if (this.state.data < 3) {
    //   return false
    // }
    return true
  }
  // 清理操作
  componentWillUnmount () {
    // 定时器 全局绑定的方法
    clearInterval(this.interval)
  }
  render () {
    return (
      <>
        <div onClick={this.update}>Child1 ：{ this.state.data}</div>
        <ul>
          {
            this.state.list.map((el, index) => {
              return (
                <li key={index}>{el}</li>
              )
            })
          }
        </ul>
      </>
    )
  }
}

export default Child1