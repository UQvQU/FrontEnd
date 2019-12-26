import React from 'react';
import Scroll from '../../components/scroll/index'

export default function() {
  return (
    <Scroll>
      <div>
        {
          new Array(100).fill(1).map((el, index) => {
            return (
              <li key={index}>{el}</li>
            )
          })
        }
      </div>
    </Scroll>
  )
}