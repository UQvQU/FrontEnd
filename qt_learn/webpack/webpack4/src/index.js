import _ from 'lodash'
import './style/index.css'  // webpack无法直接按这种方式引入css
import './style/leo.scss'

function createElement() {
  let div = document.createElement('div')
  div.innerHTML = _.join(['my', 'name', 'is', 'tt'], ' ')
  div.className = 'box'
  return div
}

document.body.appendChild(createElement())