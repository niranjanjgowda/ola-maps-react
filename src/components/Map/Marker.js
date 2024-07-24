import React from "react";
import MapMarker from "react-map-gl";

const Marker = ({ position, name, children }) => (
  <MapMarker latitude={position.lat} longitude={position.lng}>
    {children || (
      <div style={{ textAlign: "center" }}>
        <img src="https://raw.githubusercontent.com/niranjanjgowda/SVGs/c846a45a60572886c1a418ff29f827ae09fdb188/poi.svg" alt="POI Icon" style={{ width: "24px", height: "24px" }} />
        {name && <div>{name}</div>}
      </div>
    )}
  </MapMarker>
);


export default Marker;
