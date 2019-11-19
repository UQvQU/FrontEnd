import React from 'react'

import { connect } from 'react-redux'
import './App.css'

class App extends React.Component {
  state = {
    inputText:''
  }
  handleChange = (e) => {
    // console.log('e.target', e)
    this.setState({
      inputText:e.target.value
    })
  }
  render(){
    // console.log(this.props)
    const { todolist } = this.props
    return (
      <div>
        {
          todolist.map((item,i) => {
            return (
              <li key={i}>
                { item.content }
              </li>
            )
          })
        }
        <div>
          <input value={this.state.inputText} onChange={this.handleChange}></input>
          <button onClick={() => {
            console.log(this.state.inputText)
            this.props.addTodo(this.state.inputText)
          }}>提交</button>
        </div>
      </div>
    )
  }
}
// state
const mapStateToProps = (state) => {
  console.log(state)
  return {
    todolist:state
  }
}
// connect(App)

// payload 载荷
const mapDispatchToProps = (dispatch) => {
  return {
    addTodo(content) {
      dispatch({
        type: 'ADD_TODO',
        content
      })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
