import React, { Component } from 'react';
// input标签绑定onChange时间
class AutoBind extends Component {
  render() {
    const { ctx, vModel} = this.props; 
    return ( 
      <>
        {
          // 克隆节点
          // this.props.children 获取input节点
          React.cloneElement(this.props.children, 
            { 
              value: ctx.state[vModel],
              onChange: (e) => {
                ctx.setState({
                  [vModel]: e.target.value
                })
              }
            })
          
        }
      </>
    );
  }
}
 
export default AutoBind;