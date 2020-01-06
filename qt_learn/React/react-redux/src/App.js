import React from 'react';
import logo from './logo.svg';
import './App.css';
import connect from './react-redux/connect'

function App(props) {
  console.log('count', props.count)
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          count: {props.count}
          <button onClick={props.in}>+</button>
          <button onClick={props.de}>-</button>
        </p>
      </header>
    </div>
  );
}

const mapStateToProps = state => {
  console.log('state', state)
  return {
    count: state
  }
}
const mapDispatchToProps = dispatch => {
  return {
    in() {
      dispatch({type: 'INCREMENT'})
    },
    de() {
      dispatch({type: 'DECREMENT'})
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
