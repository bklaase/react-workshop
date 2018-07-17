import React, { Component } from 'react';
import logo from './logo.svg';
import Weather from './weather/weather';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">React openweatherapi exercise</h1>
        </header>
        <Weather />
      </div>
    );
  }
}

export default App;
