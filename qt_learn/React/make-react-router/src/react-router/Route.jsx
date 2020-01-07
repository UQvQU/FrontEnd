import React, { Component } from 'react';
import Context from './context';
import {pathToRegexp} from 'path-to-regexp'

// 路由匹配
function matchPath (pathName, option) {
  // exact: 是否精准匹配
  // sensitive: 是否忽略大小写
  const {path, exact = false, sensitive = false, strict = false} = option
  // 获取生成的一个正则表达式
  const regexp = pathToRegexp(path, [], {end: exact, sensitive, strict})
  // 匹配
  const match = regexp.exec(pathName)
  console.log(pathName, 'match:', match)
  return match
}

class Route extends Component {
  // path component
  render() { 
    // 获取路由path   <Route path="/about">
    // const path = this.props
    return (
      <Context.Consumer>
        {
          // 通过consumer获取provider抛出的history中的location
          // location：浏览器中url的地址
          (context) => {
            const location = context.history.location
            // 匹配地址，成功则显示当前组件 location.pathname: /about
            const match = matchPath(location.pathname, this.props)
            return (
              <>
                {
                  match && this.props.children
                }
              </>
            )
          }
        }
      </Context.Consumer>
    )
  }
}
 
export default Route;