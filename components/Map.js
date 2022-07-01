import React from "react";
import { Map, Marker } from "pigeon-maps";

const MapCOntainer = () => {
  return (
    <Map height={300} defaultCenter={[40, -90]} defaultZoom={3}>
      <Marker width={50} anchor={[25.527972, -80.480186]} />
      <Marker
        width={50}
        anchor={[40.744226463519254, -73.501104623574]}
        color="#00ff00"
      />
    </Map>
  );
};

export default MapCOntainer;
