import React from 'react';
import reactDom from 'react-dom'
import { BrowserRouter, Route } from 'react-router-dom'
import { createStore } from 'redux'
import './App.css';
import Layout from './Layout'

// Store reducer纯函数
function reducer(state, actions) {
  // state: 上一份 state
  // actions： 提交过来的state
  if (!state) {
    return {
      count: 4
    }
  }
  const { count } = state
  if (actions.type === 'ADD') {
    return {
      count: count + 1
    }
  }
  if (actions.type === 'SUB') {
    return {
      count: count - 1
    }
  }
}
const store = createStore(reducer)

class Counter extends React.Component{
  add = () => {
    store.dispatch({
      type: 'ADD'
    })
  }
  sub = () => {
    store.dispatch({
      type: 'SUB'
    })
  }
  render() {
    console.log(store)
    return (
      <div>
        count: {store.getState().count}
        <br/>
        <button onClick={this.add}>+</button>
        <button onClick={this.sub}>-</button>
      </div>
    )
  }
}
// 订阅：一旦修改则重新渲染
store.subscribe(() => {

  reactDom.render(<Counter />, document.getElementById('root'))
})
// 注释index中的reactDom.render(<App />),否则无法覆盖
reactDom.render(<Counter />, document.getElementById('root'))


// react-router 1. dom  2. native  3. 内存
class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Route path="/" component={Layout} />
      </BrowserRouter>

    )
  }
}

export default App;
