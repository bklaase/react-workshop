import React, { Component } from 'react';
import SettingsContext from '../SettingsContext';

class WeatherDetails extends Component {
  render() {
    let summary = this.props.summary;
    if(!summary) return <span/>;
    if(summary && summary.message)
      return(<span>{summary.message}</span>);
    return (
      <SettingsContext.Consumer>
      { settings =>
      <center>
        <div style={{width:300+'px', textAlign:'left'}}>
          <p>Found location: {summary.name}</p>
          <p>Weather: {summary.weather[0].description}</p>
          <p>Current temperature: {(summary.main.temp - 273.15).toFixed(2)} °C</p>
          <p>Minimum temperature: {(summary.main.temp_min - 273.15).toFixed(2)} °C</p>
          <p>Maximum temperature: {(summary.main.temp_max - 273.15).toFixed(2)} °C</p>
          <p>Humidity: {summary.main.humidity} %</p>
        </div>
        <br/><br/>
        <a>Showing controls: {""+settings.controls}</a>
      </center>
      }</SettingsContext.Consumer>
    );
  }
}

export default WeatherDetails;
