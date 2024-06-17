import React from 'react';

import { Popup, Polygon, Tooltip } from 'react-leaflet';

import { type ILocation } from '../data/data';

// interfaces
interface IProps {
  location: ILocation;
}

const MapPolygon = ({ location }: IProps): React.JSX.Element => {
  return (
    <Polygon
      key={location.id}
      positions={location.shapeCoords}
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
};

export default MapPolygon;
