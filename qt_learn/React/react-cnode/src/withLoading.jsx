import React, { Component } from 'react'
import { Spin } from 'antd'

export default function(Com) {
  class withLoading extends Component {
    state = {
      isLoading: false
    }
    ref = React.createRef()
    componentDidMount() {
      // 打开loading
      this.setState({
        isLoading: true
      })
      this.ref.current.initLoading().then(data => {
        // 数据请求成功，关闭loading
        this.setState({
          isLoading: false
        })
      }).catch(err => {
        // 请求失败，关闭loading
        this.setState({
          isLoading: false
        })
      })
    }
    render() {
      return (
        <Spin spinning={this.state.isLoading}>
          <Com from="fromWithLoading" ref={this.ref} {...this.props}/>
        </Spin>
      )
    }
  }
  return withLoading
}