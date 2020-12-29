import React, { Component } from "react";
import { withGoogleMap, GoogleMap, Marker } from "react-google-maps";
import classes from "./details.module.scss";

class Map extends Component {
  render() {
    const mapContainerEl = document.getElementById("myMapContainer");
    let mapContainerWidth;
    if (mapContainerEl) {
      mapContainerWidth = mapContainerEl.offsetHeight;
    }
    console.log("mapContainerWidth", mapContainerWidth);
    mapContainerWidth = mapContainerWidth ? mapContainerWidth : 500;
    mapContainerWidth += "px";
    console.log("mapContainerWidth", mapContainerWidth);
    const GoogleMapExample = withGoogleMap((props) => (
      <GoogleMap
        defaultCenter={{ lat: 12.9723, lng: 77.7227 }}
        defaultZoom={3}
        clickableIcons={true}
      >
        <Marker position={{ lat: 12.9723, lng: 77.7227 }} />
      </GoogleMap>
    ));
    return (
      <div
        className={`card text-secondary ${classes.detailSection} shadow mb-4`}
      >
        <div className={`card-header ${classes.myCardHeader}`}>
          <h4 className={`card-title ${classes.textShadow} ${classes.gray}`}>
            I am located at
          </h4>
        </div>
        <div
          id="myMapContainer"
          className={`${classes.fontsSize} ${classes.cardBody} ${classes.mapsCardBody}`}
        >
          <GoogleMapExample
            containerElement={
              <div style={{ height: `500px`, width: "100%" }} />
            }
            mapElement={<div style={{ height: `100%`, width: `100%` }} />}
          />
        </div>
      </div>
    );
  }
}
export default Map;
