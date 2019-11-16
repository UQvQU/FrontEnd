import React from 'react';
import './App.css';
import Child1 from './Child1'
import Parent from './Parent'

class App extends React.Component {
  state = {
    list: [1, 2, 3],
    show: true
  }
  componentDidMount () {
    setTimeout(() => {
      let list = this.state.list.slice(0)
      list.push(4)
      this.setState({
        list
      })
    }, 1000)
    console.log('app - componentDidMount')
  }
  render () {
    return (
      <>
        <Parent/>
        <button onClick={() => {
          this.setState({
            show: !this.state.show
          })
        }}>卸载</button>
        {
          !this.state.show ? <Child1 list={this.state.list}/> : null
        }
      </>
    )
  }
}

export default App;
