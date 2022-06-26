export const MAP_CENTER = [30.7832, 48.6456];
export const MAP_INIT_ZOOM = 5.8;
export const MAP_ZOOM_LIMITATIONS = {
  min: 5,
  max: 7
}
export const MAP_STYLE = 'mapbox://styles/mapbox/light-v10'
export const POINT_IMG_URL = 'https://docs.mapbox.com/mapbox-gl-js/assets/custom_marker.png'
export const ICON_IMAGE = 'custom-marker';
export const POINTER_LAYER_NAME = 'points';
export const POINTER_NAME = 'pointer-name';
export const MAPBOX_ACCESS_TOKEN = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN;

export const ADD_LAYER_BASE = {
  'id': POINTER_LAYER_NAME,
  'type': 'symbol',
  'source': POINTER_LAYER_NAME,
  'layout': {
      'icon-image': ICON_IMAGE,
      'text-field': ['get', POINTER_NAME],
      'text-font': [
          'Open Sans Semibold',
          'Arial Unicode MS Bold'
      ],
      'text-offset': [0, 1.25],
      'text-anchor': 'top'
  }
}
