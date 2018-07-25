import React, { Component } from 'react';
import logo from './logo.svg';
import MakerActions from './MakerActions.js'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Oscar Coffee Machine</h1>
        </header>
        <MakerActions/>
      </div>    
    );
  }
}

export default App;
