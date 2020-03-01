import * as React from 'react';
import { Component } from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';


class Header extends Component{
  render() {
      // console.log("Header render")
      return (
          <div className="m-header">
              <div className="icon"></div>
              <h1 className="text">RT Music</h1>
              <Link className="mine" to="/user"><i className="icon-mine"></i></Link>
          </div>
      )
  }
}

export default Header