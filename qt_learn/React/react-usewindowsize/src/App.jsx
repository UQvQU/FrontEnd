import React, {PureComponent} from 'react';
import './App.css';

class App extends React.Component {
  state = {
    val: 1
  }
  // 浅比较
  shallowEqual(objA, objB) { 
    console.log(objA, objB)
    // 判断所有属性是否相等
    console.log(Object.keys(objA), Object.keys(objB))
    // if (Object.keys(objA) !== Object.keys(objB)) {
    //   return false
    // }
    let keys = Object.keys(objA)
    // 判断属性值是否相等
    for (let i = 0; i < keys.length; i++) {
      // Object.is() 判断两个值是否相等，与‘===’几乎一致，除NAN外
      // Object.is(NAN, NAN) ->  true       NAN === NAN  ->  false
      if (!Object.is(objA[keys[i]], objB[keys[i]])) {
        console.log(objA[keys[i]], objB[keys[i]])
        return false
      }
    }
    return true
  }
  // shouldComponentUpdate 默认返回true，即默认更新
  // PureComponent 浅比较
  shouldComponentUpdate(nextProps, nextState) {
    // 组件是否更新
    // 比较 thisProps nextProps state nextState
    console.log('props', this.props, 'next', nextProps)
    return !this.shallowEqual(this.props, nextProps)
  }
  handleChange = () => {
    this.setState({
      val: 4
    })
  }
  render () {
    console.log('render!!')
    return (
      <div>
        {this.state.val}
        <button onClick={this.handleChange}>Change</button>
      </div>
    )
  }
}

export default App;
