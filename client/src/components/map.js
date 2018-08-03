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
      <Marker position={{ lat: 40.728157, lng: -74.077644 }} />
    )}
  </GoogleMap>
));


export default MyMapComponent;