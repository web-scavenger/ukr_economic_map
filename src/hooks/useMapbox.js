import React, {
  useEffect, 
  useContext,
  useState,
  useRef
} from 'react';
import mapboxgl from "mapbox-gl"; // eslint-disable-line
import "mapbox-gl/dist/mapbox-gl.css";

import { data } from '../data'
import { mapContext } from '../context/mapContext'
import { PopupContent } from '../components/popup'
import { 
  MAPBOX_ACCESS_TOKEN, 
  MAP_INIT_ZOOM,
  MAP_ZOOM_LIMITATIONS,
  MAP_STYLE,
  MAP_CENTER,
  POINT_IMG_URL,
  ADD_LAYER_BASE,
  ICON_IMAGE,
  POINTER_LAYER_NAME
 } from '../constants'

mapboxgl.accessToken = MAPBOX_ACCESS_TOKEN;

export const useMapbox = () => {
  const [popupContent, setPopupContent] = useState([]);
  const [popupCoordinates, setPopupCoordinates] = useState(null);
  const mapContainerRef = useRef(null);
  const { setMap, map } = useContext(mapContext);

  useEffect(() => {
    const initializeMap = ({ setMap, mapContainer }) => {
      const map = new mapboxgl.Map({
        container: mapContainer.current,
        style: MAP_STYLE, 
        center: MAP_CENTER, 
        zoom: MAP_INIT_ZOOM,
        minZoom: MAP_ZOOM_LIMITATIONS.min,
        maxZoom: MAP_ZOOM_LIMITATIONS.max
      });

      map.on('load', () => {
        setMap(map);

        map.loadImage(
            POINT_IMG_URL,
            (error, image) => {
                if (error) throw error;
                map.addImage(ICON_IMAGE, image);

                map.addSource(POINTER_LAYER_NAME, {
                    type: 'geojson',
                    data
                });

                map.addLayer(ADD_LAYER_BASE);
            }
        );

        map.on("click", POINTER_LAYER_NAME, (e) => {
          const contents = e.features.map((feature) => {
            return (
                <PopupContent
                  key={feature.properties.id}
                  content={feature.properties.content}
                />
            )
          });
        
          setPopupContent(contents);
          setPopupCoordinates(e.lngLat);
        });

        map.on('click', (e) => {
          console.log('=> e', e); // eslint-disable-line no-console
        })
    });
    }

    if (!map) initializeMap({ setMap, mapContainer: mapContainerRef });
  }, [map, setMap, mapContainerRef, setPopupContent, setPopupCoordinates])

  return {
    popupCoordinates,
    popupContent,
    mapContainerRef,
    setPopupContent,
    setPopupCoordinates
  }
}