import React from 'react';
import { GoogleMap, Marker, useLoadScript } from '@react-google-maps/api';
import { Wrapper, Status } from '@googlemaps/react-wrapper';
const containerStyle = {
  width: '100%',
  height: '400px',
};

const berlinPosition = {
  lat: 52.5200,
  lng: 13.4050,
};

const Map: React.FC = () => {
  return (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={berlinPosition}
      zoom={10}
    >
      <Marker position={berlinPosition} />
    </GoogleMap>
  );
};

export default Map;
