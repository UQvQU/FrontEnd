import React, { Component } from 'react'
import BaseComponent from './BaseComponent'

class Main extends BaseComponent {
  
  render() {
    window.c++ 
    console.log(this.props.value)
    return (
      <>
        <div>
          {this.props.value.get('c')}
        </div>
      </>
    )
  }
}
 
export default Main