import React from "react";
import { compose, withProps, withStateHandlers } from "recompose";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from "react-google-maps";
const { InfoBox } = require("react-google-maps/lib/components/addons/InfoBox");
const apikey = "AIzaSyBwMH7UqQ979BrIAfNk316K8c6KhaSMglE";

const MyMapComponent = compose(
  withProps({
    googleMapURL: `https://maps.googleapis.com/maps/api/js?key=${apikey}&v=3.exp&libraries=geometry,drawing,places`,
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `400px` }} />,
    mapElement: <div style={{ height: `100%` }} />,
    center: { lat: 40.728157, lng: -74.077644 }
  }),
  withStateHandlers(
    () => ({
      isOpen: false
    }),
    {
      onToggleOpen: ({ isOpen }) => () => ({
        isOpen: !isOpen
      })
    }
  ),
  withScriptjs,
  withGoogleMap
)(props => (
  <GoogleMap defaultZoom={4} defaultCenter={props.center}>
    {props.markers.map((marker, i) => (
      <Marker
        onClick={props.onToggleOpen}
        key={i}
        position={{ lat: marker.lat, lng: marker.long }}
      >
        {props.isOpen && (
          <InfoBox
            defaultPosition={{ lat: marker.lat, lng: marker.long }}
            options={{ closeBoxURL: ``, enableEventPropagation: true }}
          >
            <div
              style={{
                backgroundColor: `white`,
                opacity: 0.75,
                padding: `1px`
              }}
            >
              <div style={{ fontSize: `12px`, fontColor: `#08233B` }}>
                <div>{marker.username}</div>
              </div>
            </div>
          </InfoBox>
        )}
      </Marker>
    ))}
  </GoogleMap>
));

export default MyMapComponent;
