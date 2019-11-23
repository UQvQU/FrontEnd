import React from 'react'
import immutable from 'immutable'
import Header from './Header'
import Main from './Main'
import Footer from './Footer'
import './App.css';
import ColorRedWrapper from './RedColor'

// 可变
let a = [0, 1, 2]
a.push(3)
// 不可变
let immutableArr = immutable.fromJS([2, 3, 4])
let b = immutableArr.push(5)
console.log(b.toJS())

let obj = {
  a: 1,
  b: {
    c: 2
  },
  d: {
    e: 3
  }
}
let imObj = immutable.fromJS(obj) 
console.log(imObj.getIn(['b', 'c'], 'default'))
let imObj1 = imObj.setIn(['d', 'e'], 6)
let obj1 = imObj1.toJS()
// 结构共享：未更新的结构共享（obj.a(b)与obj1.a(b)是同一个结构）
console.log(obj, obj1, obj.a===obj1.a)

class App extends React.Component {
  state = {
    store: imObj
  }
  handleSet = () => {
    // 只更新Footer中的value，Header和Main
    let store = this.state.store.setIn(['d', 'e'], '456')
    this.setState({
      store
    })
  }
  render () {
    const store = this.state.store
    return (
      <div>
        <ColorRedWrapper>
          <p>red text</p>
        </ColorRedWrapper>
        <button onClick={this.handleSet}>set d</button>
        <Header value={store.get('a')}/>
        <Main value={store.get('b')}/>
        <Footer value={store.get('d')}/>
      </div>
    )
  }
}

export default App;
