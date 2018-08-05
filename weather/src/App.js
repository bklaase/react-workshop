import React, { Component } from 'react';
import logo from './logo.svg';
import Weather from './weather/weather';
import './App.css';
import SettingsContext from './SettingsContext';


class App extends Component {
  render() {
    return (
      // <SettingsContext.Provider value={{controls: false}}>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
              <h1 className="App-title">React openweatherapi exercise</h1>
          </header>
          <Weather />
        </div>
      // </SettingsContext.Provider>
    );
  }
}

export default App;
