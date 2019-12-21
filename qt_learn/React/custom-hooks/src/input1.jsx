import React, { Component, useState } from 'react';
import AutoBind from './autoBind'
// hooks: 所以自定义的hooks都已use开头，只能在函数组件内部用，不能在类组件内部使用
function useFormInput(defaultVal) {
  // defaultVal 默认值
  // 函数内部使用state需要借助useState
  const onChange = function (e) {
    setValue(e.target.value)
  }
  const [value, setValue] = useState(defaultVal)
  return {
    value,
    onChange
  }
}
function Input2() {
  const userName = useFormInput('default')
  return (
    <>
      <input type="text" {...userName}/>
      <p>{userName.value}</p>
    </>
  )
}
class Input1 extends Component {
  state = {
    value1: '1',
    value2: '2'
  }
  handleVal = (e) => {
    this.setState({
      value1: e.target.value
    })
  }
  render() { 
    // React.createElement('div', {}, React.createElement('input))
    const {value1, value2} = this.state
    // state -> value -> change -> state
    return ( <>
      <div>
        {/* 原始 */}
        <input type="text" value={value1} onChange={this.handleVal}/>
        {/* 改进 */}
        <AutoBind vModel="value2" ctx={this}>
          <input type="text"/>
        </AutoBind>
        <Input2 />
        {value1}{value2}
      </div>
    </> );
  }
}
 
export default Input1;