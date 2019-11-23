import React, { Component } from 'react'
import BaseComponent from './BaseComponent'

class Footer extends BaseComponent {
  state = {  }
  render() { 
    window.c++
    console.log(this.props.value)
    return (
      <>
        <div>
          {this.props.value.get('e')}
        </div>
      </>
    )
  }
}
 
export default Footer