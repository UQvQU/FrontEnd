import React, { Component } from 'react'
import ReactDom from 'react-dom'
import { CSSTransition, TransitionGroup} from 'react-transition-group'
// import Notice from './Notice'

let key = 0
class Toast extends Component {
  state = {
    toastList: []
  }
  addNotice (icon, content, duration) {
    // console.log(icon, content, duration)
    key ++
    const item = {key, icon, content, duration}
    let toastList1 = this.state.toastList.slice(0)
    toastList1.push(item)
    this.setState({
      toastList: toastList1
    })
    console.log(toastList1)
    setTimeout(() => {
      let toastList2 = this.state.toastList.slice(0)
      let current = toastList2.findIndex(item => item.key === key)
      toastList2.splice(current, 1)
      this.setState({
        toastList: toastList2
      })
    }, duration)
  }
  render () {
    const { toastList } = this.state
    return (
      <TransitionGroup>
        {
          toastList.map((toast) => {
            return (
              // <Notice {...toast} />
              <CSSTransition key={toast.key} classNames="notices" timeout={900}>
                <li>{toast.icon}:{toast.content}{toast.key}</li>
              </CSSTransition>
            )
          })
        }
      </TransitionGroup>
    )
  }
}

let instance = null
export default {
  addNotice: function (icon, content, duration) {
    // ref
    // 单例模式 (防止生成许多无效div)
    if (instance) return instance.addNotice(icon, content, duration)
    let div = document.createElement('div')
    document.body.appendChild(div)
    let objRef = React.createRef()
    // 获取这个组件的实例
    ReactDom.render(<Toast ref={objRef}/>, div)
    instance = objRef.current
    return instance.addNotice(icon, content, duration)
  }
}