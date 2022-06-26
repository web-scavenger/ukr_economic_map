import React, { createContext, useState } from "react";

const mapContext = createContext(undefined);

function MapProvider({ children }) {
  const [popupContent, setPopupContent] = useState([]);
  const [map, setMap] = useState(null);
  const [lngLat, setLngLat] = useState({ lng: null, lat: null });

  const Provider = mapContext.Provider;

  return (
    <Provider
      value={{
        popupContent,
        setPopupContent,
        map,
        setMap,
        lngLat,
        setLngLat,
      }}
    >
      {children}
    </Provider>
  );
}

export { MapProvider, mapContext };
