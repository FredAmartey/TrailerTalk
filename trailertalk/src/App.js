import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Welcome to TrailerTalk
          </p>
          <a
            className="App-link"
            href="https://github.com/FredAmartey/TrailerTalk"
            target="_blank"
            rel="noopener noreferrer"
          >
            Coming soon
          </a>
        </header>
      </div>
    );
  }
}

export default App;
