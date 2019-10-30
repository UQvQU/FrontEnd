import React, { Component } from 'react'
class Input extends Component {
  state = {
    value: ''
  }
  handleChange = (event) => {
    const value = event.target.value
    this.setState({
      value
    })
  }
  // 单向数据流
  // input 受控组件 完全受state.value 的控制
  handleSubmit = () => {
    const {onReceive} = this.props
    const { value } = this.state
    onReceive(value)
    console.log(value)
  }
  render () {
    const { value } = this.state;
    return (
      <>
        <input type="text" value={value} onChange={this.handleChange}/>
        <button onClick={this.handleSubmit}>submit</button>
      </>
    )
  }
}
class CommentList extends Component {
  render () {
    const { cList } = this.props
    return (
      <React.Fragment>
        {
          cList.map((list, index) => {
            return (
              <li key={index}>{list.content}</li>
            )
          })
        }
      </React.Fragment>
    )
  }
}
class Comment extends Component {
  state = {
    // 评论列表
    cList: [
      {
        content: '666'
      }
    ] 
  }
  handleReceiveComment = (value) => {
    console.log('commit', value)
    // 不可变数据
    let cList = this.state.cList.slice(0)
    console.log(cList)
    cList.push({content: value})
    this.setState({
      cList
    })
  }
  render () {
    const { cList } = this.state
    return (
      <>
        <Input onReceive={this.handleReceiveComment}/>
        <CommentList cList={cList}/>
      </>
    )
  }
}
export default Comment