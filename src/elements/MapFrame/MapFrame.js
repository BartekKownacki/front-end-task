import React from 'react';
import PropTypes from 'prop-types';
import { MapContainer, TileLayer, Marker, useMap } from 'react-leaflet';

import styles from './MapFrame.module.scss';

const BASIC_POSITION = [53, 10];
const BASIC_ZOOM = 4;

const MapFrame = ({ latitude, longitude }) => {
  return (
    <MapContainer center={BASIC_POSITION} zoom={BASIC_ZOOM} scrollWheelZoom={true} className={styles['map-frame']}>
      <ZoomingComponent longitude={longitude} latitude={latitude} />
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {latitude && longitude && <Marker position={[latitude, longitude]}></Marker>}
    </MapContainer>
  );
};

MapFrame.propTypes = {
  latitude: PropTypes.number,
  longitude: PropTypes.number,
};

const ZoomingComponent = ({ longitude, latitude }) => {
  const map = useMap();
  latitude && longitude ? map.flyTo([latitude, longitude], 11) : map.flyTo(BASIC_POSITION, BASIC_ZOOM);
  map.addEventListener('click', (e) => {
    map.flyTo([e.latlng.lat, e.latlng.lng], map.getZoom());
  });
  return null;
};

export default MapFrame;
