import React, { Component } from 'react'
import Son from './Son'
import Context from './Context'

const { Provider } = Context 

class Parent extends Component {
  state = {
    theme: 'red'
  }
  render () {
    return (
      <Provider value={this.state.theme}>
        {/* theme成为全局数据，使Parent中的组件皆可以使用 */}
        <Son/>
      </Provider>
    )
  }
}

export default Parent