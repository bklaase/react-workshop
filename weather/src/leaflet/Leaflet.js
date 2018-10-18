import React, { createRef, Component } from 'react';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';

class Leaflet extends Component {
 state = {
    hasLocation: false,
    latlng: {
      lat: 51.58,
      lng: 6.02,
    },
  }

  mapRef = createRef()

  handleClick = () => {
    if(this.state.hasLocation) {

      console.log(this.state.latlng);
      this.mapRef.current.leafletElement.flyTo({lat: 51.72, lng: 5.36}); //crashes
    }
    else
      this.mapRef.current.leafletElement.locate();
  }

  handleLocationFound = e => {
    this.setState({
      hasLocation: true,
      latlng: e.latlng,
    });
  }

  render() {
    const marker = this.state.hasLocation ? (
      <Marker position={this.state.latlng}>
        <Popup>
          <span>Hier ben je nu!</span>
        </Popup>
      </Marker>
    ) : null;

    return (
      <Map
        style={{height:'600px'}}
        center={this.state.latlng}
        length={4}
        onClick={this.handleClick}
        onLocationfound={this.handleLocationFound}
        ref={this.mapRef}
        zoom={13}>
        <TileLayer
          attribution="&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {marker}
      </Map>
    );
  }
}

export default Leaflet;

