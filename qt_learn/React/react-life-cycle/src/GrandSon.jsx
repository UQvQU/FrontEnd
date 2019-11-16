import React, { Component } from 'react'
import Context from './Context'

const { Consumer } = Context 

class GrandSon extends Component {
  render () {
    return (
      <>
        <div>GrandSon1
          <Consumer>
            {
              (theme) => {
                return (
                  <p style={{color: theme}}>GrandSon2</p>
                )
              }
            }
          </Consumer>
        </div>
        <Consumer>
          {
            (theme) => {
              return (
                <p style={{color: theme}}>GrandSon3</p>
              )
            }
          }
        </Consumer>
      </>
      

    )
  }
}

export default GrandSon