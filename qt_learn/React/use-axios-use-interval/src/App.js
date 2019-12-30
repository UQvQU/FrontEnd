import React from 'react';
import logo from './logo.svg';
import Search from './Search';
import PreState from './lastState'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Search/>
        <PreState />
      </header>
    </div>
  );
}

export default App;
