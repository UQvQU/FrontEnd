import React, { Component } from 'react'
import { Link, Route } from 'react-router-dom'
const isLogin = true

// 私有路由，需要一定权限
class PrivateRouter extends Component{
  render() {
    const props = this.props
    console.log(props)
    return (
      <div>
        {
          isLogin ? <Route {...props}/> : null
        }
      </div>
    )
  }
}
// function 定义组件
function PriCon() {
  return (
    <div>私密</div>
  )
}
function View() {
  return (
    <div>关注</div>
  )
}
function Fe() {
  return (
    <div>前端</div>
  )
}
function Rd() {
  return (
    <div>后端</div>
  )
}
function Home() {
  return (
    <div>HOME
      <div>
        <Link to="/home">首页</Link>
        <br/>
        <Link to="/home/view">关注</Link>
        <br/>
        <Link to="/home/fe">前端</Link>
        <br/>
        <Link to="/home/rd">后端</Link>
        <br/>
        <Link to="/home/private">私密</Link>
      </div>
      <div className="main">
        {/* <Route path="/home" component={Home}></Route> */}
        <Route path="/home/view" component={View}></Route>
        <Route path="/home/fe" component={Fe}></Route>
        <Route path="/home/rd" component={Rd}></Route>
        <PrivateRouter path="/home/private" component={PriCon}></PrivateRouter>
      </div>
    </div>
  )
}
function Me() {
  return (
    <div>ME</div>
  )
}
class Layout extends Component {
  render() {
    return (
      <div>
        <div className="main">
          <Route path="/home" component={Home}></Route>
          { isLogin && <Route path="/me" component={Me}></Route>}
        </div>
        <div className="footer">
          <Link to="/home">home</Link>
          <br/>
          { isLogin && <Link to="/me">me</Link>}
        </div>
      </div>
    )
  }
}

export default Layout