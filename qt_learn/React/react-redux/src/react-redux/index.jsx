import React, { createContext } from 'react'

const Context = createContext()
// 原生的Provider不会引起组件的重新渲染
class EnhanceProvider extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      state: props.store.getState(),
      getState: props.store.getState,
      dispatch: props.store.dispatch
    }
    props.store.subscribe(() => {
      this.setState({
        state: props.store.getState()
      })
    })
  }
  
  render() {
    // console.log(this.props.children)
    return (<Context.Provider value={this.state}>{this.props.children}</Context.Provider>)
  }
}

// export const Provider = Context.Provider
export const Provider = EnhanceProvider
export const Consumer = Context.Consumer
