import React, { Component } from 'react'
import { is } from 'immutable'

class BaseComponent extends Component {
  // 判断是否需要渲染更新
  shouldComponentUpdate(nextProps, nextState) {
    const thisProps = this.props || {}
    // props的长度(属性个数)是否改变
    if (Object.keys(thisProps).length !== Object.keys(nextProps).length) {
      // 更新
      return true
    }
    // props属性个数一样，判断每个属性是否一样 immutable is()
    for (const key in nextProps) {
      if (!is(thisProps[key], nextProps[key])) {
        // 更新
        return true
      }
    }
    // 不更新
    return false
  }
  
  // css in js 样式定义组件 好处：css变量和js变量共享

}
 
export default BaseComponent