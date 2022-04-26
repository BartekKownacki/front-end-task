import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { MapContainer, TileLayer, Marker, useMap } from "react-leaflet";

import styles from "./MapFrame.module.scss";
import { LatLng } from "leaflet";

const BASIC_POSITION = [53, 10];
const BASIC_ZOOM = 4;

const MapFrame = ({ latitude, longitude, onClick }) => {
  const [position, setPosition] = useState(BASIC_POSITION);
  const [zoom, setZoom] = useState(BASIC_ZOOM);

  return (
    <MapContainer
      center={BASIC_POSITION}
      zoom={BASIC_ZOOM}
      scrollWheelZoom={false}
      className={styles["map-frame"]}
    >
      <MyComponent longitude={longitude} latitude={latitude} />
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {latitude && longitude && (
        <Marker position={[latitude, longitude]}></Marker>
      )}
    </MapContainer>
  );
};

MapFrame.propTypes = {};

export default MapFrame;

const MyComponent = ({ longitude, latitude }) => {
  const map = useMap();
  latitude && longitude
    ? map.flyTo([latitude, longitude], 11)
    : map.flyTo(BASIC_POSITION, BASIC_ZOOM);
  map.addEventListener("click", (e) => {
    map.flyTo([e.latlng.lat, e.latlng.lng], 9);
  });
  return null;
};
