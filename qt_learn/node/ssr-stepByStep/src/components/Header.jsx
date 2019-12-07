import React, { Component } from 'react';
// 虚拟节点 {tag: 'div'} -> 浏览器：react-dom div -> 服务器：字符串形式的html
class Header extends Component {
  state = {  }
  render() { 
    return ( 
      <div>
        hello server
        <button onClick={this.buy}>buy</button>
      </div>
     );
  }
}
 
export default Header;