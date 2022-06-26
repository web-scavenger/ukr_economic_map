import React from "react";
import styled from "styled-components";

import { useMapbox } from '../../hooks/useMapbox'
import { Popup } from "../popup";

const StyledContainer = styled.div`
  width: 100%;
  min-width: 600px;
  height: 100vh;
`;

export const Map = () => {
  const {
    popupCoordinates,
    popupContent,
    mapContainerRef,
    setPopupContent,
    setPopupCoordinates
  } = useMapbox()

  const onPopupClose = () => {
      setPopupContent([]);
      setPopupCoordinates(null);
  }

  return (
    <>
      {popupCoordinates && (
        <Popup lngLat={popupCoordinates} onClose={onPopupClose}>
          {popupContent}
        </Popup>
      )}
      <StyledContainer ref={(el) => (mapContainerRef.current = el)} />
    </>
  );
};
