import React from "react";
import ReactDOM from "react-dom";
import { compose, withProps } from "recompose";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from "react-google-maps";

const MyMapComponent = compose(
  withProps({

    googleMapURL: 
      "https://maps.googleapis.com/maps/api/js?key=AIzaSyChFNgz7xzd9ZSEKcFG4ZlmPOd4tEnkAX8&v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `400px` }} />,
    mapElement: <div style={{ height: `100%` }} />
  }),
  withScriptjs,
  withGoogleMap
)(props => (
  <GoogleMap defaultZoom={8} defaultCenter={{ lat: 40.728157, lng: -74.077644 }}>
    {props.isMarkerShown && (
        <div>
            {/* Following are rending multiple markers */}
      <Marker position={{ lat: 40.728157, lng: -74.077644 }}
       />
       <Marker position={{ lat: 40.730610, lng: -73.935242 }}
       />
       <Marker position={{ lat: 40.6870431, lng: -75.21851 }}
       />
       <Marker position={{ lat: 41.245708, lng: -75.881241 }}
       />
       <Marker position={{ lat: 40.730610, lng: -73.935242 }}
       />
       <Marker position={{ lat: 40.3573, lng: -74.6672 }}
       />
       <Marker position={{ lat: 39.9526, lng: -75.1652 }}
       />
       </div>
    )}
  </GoogleMap>
));

<MyMapComponent isMarkerShown />

export default MyMapComponent;