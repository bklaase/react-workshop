import React, { Component } from 'react';
import WeatherDetails from './weatherDetails';
import SettingsContext from '../SettingsContext';

class Weather extends Component {

  constructor(props) {
    super(props);
    this.state = {
      location: '<please choose initial location>',
      weatherSummary: null
    };
  }

  fetchWeatherForLocation(location) {
    const request = new Request(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=c7da24463018a4fac7ef78ddc1941e81`);
    fetch(request)
      .then( resp => resp.json(), resp => this.setState({weatherSummary: "<please use a valid location.>"}))
      .then(jsonData => this.setState({weatherSummary: jsonData}));
  }
  
  render() {
    return (
      <SettingsContext>
        {settings =>
        <div>
          <p>Please enter a location and click "Confirm!", or press enter to see its weather summary</p>
          <input type='text' id='tbLocation'
                 onChange={evt => this.setState({location:evt.target.value})}
              onKeyPress={evt => {if(evt.key === 'Enter') this.fetchWeatherForLocation(this.state.location);}}
              />
          <br />
          <br />
            <button id='btnConfirm'
                    onClick={() => this.fetchWeatherForLocation(this.state.location)}
                style={{visibility: settings.controls ? 'visible' : 'hidden'}}>Confirm! </button>
          <div>
          <h3>Weather details for: {this.state.location}</h3>
          </div>
          <WeatherDetails summary={this.state.weatherSummary}></WeatherDetails>
        </div>}
      </SettingsContext>
    );
  }
}

export default Weather;
