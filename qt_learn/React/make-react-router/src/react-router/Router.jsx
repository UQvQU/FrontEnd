import React, { Component } from 'react';
import Context from './context'

class Router extends Component {
  // constructor(props) {
  //   super(props)
  //   // link push -> 浏览器url 变化 -> 监听变化
  //   this.state = {
  //     location: props.history.location
  //   }
  //   // newLocation：变化后的url
  //   props.history.listen(newLocation => {
  //     this.setState({
  //       location: newLocation
  //     })
  //   })
  // }
  state = {
    location: this.props.history.location
  }  
  componentDidMount(){
    this.props.history.listen(newLocation => {
      this.setState({
        location: newLocation
      })
    })
  }
  render() {
    const { history } = this.props
    // 将history(浏览器历史信息)放置在全局, Provider
    return ( 
      <Context.Provider value={{history}} {...this.props}>

      </Context.Provider>
     );
  }
}
 
export default Router;