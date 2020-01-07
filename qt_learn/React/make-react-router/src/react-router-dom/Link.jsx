import React, { Component } from 'react';
import { __RouterContext as RouterContext } from './index'

export default class Link extends Component {
  render() { 
    return (
      <RouterContext.Consumer>
        {
          (context) => {
            const { history } = context
            return (
              // <Link to="/users">Users</Link>
            <a href={this.props.to} onClick={event => {
              // 跳转
              event.preventDefault()
              history.push(this.props.to)
            }}>{this.props.children}</a>
            )
          }
        }
      </RouterContext.Consumer>
    )
  }
}
