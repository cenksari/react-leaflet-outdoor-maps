import React from 'react';

import { LatLngBoundsExpression } from 'leaflet';
import { Popup, Tooltip, Circle, Polygon, Rectangle, Polyline, Marker } from 'react-leaflet';

import { type ILocation } from '../data/data';

// interfaces
interface IProps {
  location: ILocation;
}

const MapLocation = ({ location }: IProps): React.JSX.Element | null => {
  if (location.shape.type === 'polygon') {
    return (
      <Polygon
        key={location.id}
        positions={location.shape.location}
        pathOptions={{ color: location.category.color }}
      >
        <Tooltip>{location.title}</Tooltip>
        <Popup>
          <div className='flex flex-gap-medium flex-v-center'>
            <span className='material-symbols-outlined'>{location.category.icon}</span>
            <strong className='popup-title'>{location.title}</strong>
          </div>
          <p>{location.description}</p>
        </Popup>
      </Polygon>
    );
  }

  if (location.shape.type === 'rectangle') {
    return (
      <Rectangle
        key={location.id}
        bounds={location.shape.location as LatLngBoundsExpression}
        pathOptions={{ color: location.category.color }}
      >
        <Tooltip>{location.title}</Tooltip>
        <Popup>
          <div className='flex flex-gap-medium flex-v-center'>
            <span className='material-symbols-outlined'>{location.category.icon}</span>
            <strong className='popup-title'>{location.title}</strong>
          </div>
          <p>{location.description}</p>
        </Popup>
      </Rectangle>
    );
  }

  if (location.shape.type === 'circle') {
    return (
      <Circle
        key={location.id}
        radius={location.shape.radius || 0}
        center={location.shape.location[0]}
        pathOptions={{ color: location.category.color }}
      >
        <Tooltip>{location.title}</Tooltip>
        <Popup>
          <div className='flex flex-gap-medium flex-v-center'>
            <span className='material-symbols-outlined'>{location.category.icon}</span>
            <strong className='popup-title'>{location.title}</strong>
          </div>
          <p>{location.description}</p>
        </Popup>
      </Circle>
    );
  }

  if (location.shape.type === 'polyline') {
    return (
      <Polyline
        key={location.id}
        positions={location.shape.location}
        pathOptions={{ color: location.category.color }}
      >
        <Tooltip>{location.title}</Tooltip>
        <Popup>
          <div className='flex flex-gap-medium flex-v-center'>
            <span className='material-symbols-outlined'>{location.category.icon}</span>
            <strong className='popup-title'>{location.title}</strong>
          </div>
          <p>{location.description}</p>
        </Popup>
      </Polyline>
    );
  }

  if (location.shape.type === 'marker') {
    return (
      <Marker key={location.id} position={location.shape.location[0]}>
        <Tooltip>{location.title}</Tooltip>
        <Popup>
          <div className='flex flex-gap-medium flex-v-center'>
            <span className='material-symbols-outlined'>{location.category.icon}</span>
            <strong className='popup-title'>{location.title}</strong>
          </div>
          <p>{location.description}</p>
        </Popup>
      </Marker>
    );
  }

  return null;
};

export default MapLocation;
