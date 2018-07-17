import React, { Component } from 'react';

class WeatherDetails extends Component {
  render() {
    let summary = this.props.summary;
    if(!summary) return <a/>;
    if(summary && summary.message)
      return(<a>{summary.message}</a>);
    return (
      <center>
      <p style={{width:300+'px', textAlign:'left'}}>
        <p>Found location: {summary.name}</p>
        <p>Current temperature: {(summary.main.temp - 273.15).toFixed(2)} °C</p>
        <p>Minimum temperature: {(summary.main.temp_min - 273.15).toFixed(2)} °C</p>
        <p>Maximum temperature: {(summary.main.temp_max - 273.15).toFixed(2)} °C</p>
        <p>Humidity: {summary.main.humidity} %</p>
      </p>
      </center>
    );
  }
}

export default WeatherDetails;
