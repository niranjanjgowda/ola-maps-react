import React, { useState, useEffect, useRef } from "react";
import DeckGL from "@deck.gl/react";
import StaticMap from "react-map-gl";
import maplibregl from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";
import getApiKey from "../utils/GetApiKey";

export const Map = ({ zoom, center, heading, tilt, apiKey: propApiKey, children }) => {
  const [viewState, setViewState] = useState({
    longitude: center.lng,
    latitude: center.lat,
    zoom: zoom,
    bearing: heading,
    pitch: tilt,
  });

  const [apiKey, setApiKey] = useState(propApiKey || null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!propApiKey) {
      try {
        const key = getApiKey();
        setApiKey(key);
      } catch (err) {
        setError(err.message);
      }
    }
  }, [propApiKey]);

  useEffect(() => {
    setViewState({
      longitude: center.lng,
      latitude: center.lat,
      zoom: zoom,
      bearing: heading,
      pitch: tilt,
    });
  }, [zoom, center, heading, tilt]);

  if (error) {
    return <div>{error}</div>;
  }

  if (!apiKey) {
    return <div>Loading...</div>;
  }

  return (
    <div style={{ width: "100%", height: "100%", position: "relative" }}>
      <DeckGL
        viewState={viewState}
        onViewStateChange={({ viewState }) => setViewState(viewState)}
        controller={{ doubleClickZoom: false }}
        layers={[]}
      >
        <StaticMap
          mapLib={maplibregl}
          mapStyle="https://api.olamaps.io/tiles/vector/v1/styles/default-light-standard/style.json"
          transformRequest={(url, resourceType) => {
            if (url === "https://api.olamaps.io/tiles/vector/v1/styles/default-light-standard/style.json")
              url = url + `?api_key=${apiKey}`;
            else
              url = url + `&api_key=${apiKey}`;
            return { url, resourceType };
          }}
        >
          {children}
        </StaticMap>
      </DeckGL>
    </div>
  );
};

Map.defaultProps = {
  zoom: 15,
  center: {
    lat: 13.1362,
    lng: 78.1291,
  },
  heading: 0,
  tilt: 0,
};

export default Map;
