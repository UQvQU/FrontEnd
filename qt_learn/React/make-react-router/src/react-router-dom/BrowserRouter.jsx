import React, { Component } from 'react';
import { createBrowserHistory } from 'history';
import { Router } from './index'

class BrowserRouter extends Component {
  // 路由信息 eg:location、listen、push、go
  history = createBrowserHistory()
  render() { 
    return ( 
      // 将路由信息给Router组件
      <Router history={this.history} {...this.props} /> 
     );
  }
}
 
export default BrowserRouter;