import './App.css'
import React from 'react'

class DynamicField extends React.Component {
  // 数据在哪里获取就去哪里修改
  handleAdd = () => {
    this.props.onAdd()
  }
  handleSub = (i) => {
    this.props.onSub(i)
  }
  render() {
    const { rules } = this.props
    return (
      <>
        <label>规则</label>
        {
          rules.map((rule, index) => {
            return (
              <div key={index}>
                <label>姓名</label>
                {/* 表单元素加了value属性后变成受控组件 */}
                <input type="text" value={rule.name} data-i={index} data-key="name" onChange={(e) => {this.props.onFieldChange(e, 'name')}}></input>
                <label>年龄</label>
                <input type="text" value={rule.age} data-i={index} data-key="age" onChange={this.props.onFieldChange}></input>
                <button onClick={() => {this.handleSub(index)}}>-{index}</button>
              </div> 
            )
          })
        }
        <br/>
        <button onClick={this.handleAdd}>+</button>
      </>
    )
  }
}
class App extends React.Component {
  state = {
    date: '',
    rules: [
      {name: '', age: ''}
    ]
  }
  handleAdd = () => {
    // 不建议在原来的数据直接修改, 先浅复制一份原有数据，修改后直接setState
    let rules = this.state.rules.slice(0)
    rules.push({name:'', age: ''})
    this.setState({
      rules
    })
  }
  handleSub = (i) => {
    console.log(i)
    let rules = this.state.rules.slice(0)
    rules.splice(i, 1)
    this.setState({
      rules
    })
  }
  handleChange = event => {
    console.log(event.target.dataset)
    const key = event.target.dataset.key
    const value = event.target.value
    const index = event.target.dataset.i
    console.log(key, value, index)
    let rules = this.state.rules.slice(0)
    rules[parseInt(index)][key] = value
    this.setState({
      rules
    })
  }
  render() {
    const { rules } = this.state
    return (
      <div>
        <label htmlFor="date">日期</label>
        <input type="date" id="date" />
        <br/>
        <DynamicField rules={rules} onAdd={this.handleAdd} onSub={this.handleSub} onFieldChange={this.handleChange}/>
      </div>
    )
  }
}

export default App