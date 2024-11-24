import { useCallback } from 'react';

import type { Map, LatLngExpression } from 'leaflet';

// interfaces
interface IProps {
  map: Map | null;
  zoomLevel: number;
  centerCoords: LatLngExpression;
}

const CenterButton = ({ map, zoomLevel, centerCoords }: IProps): JSX.Element => {
  const onClick = useCallback((): void => {
    map?.setView(centerCoords, zoomLevel);
  }, [map, zoomLevel, centerCoords]);

  return (
    <div className='center-button flex flex-v-center flex-h-center'>
      <button
        type='button'
        onClick={onClick}
        title='Center map'
        className='flex flex-h-center flex-v-center pointer'
      >
        <span className='material-symbols-outlined'>center_focus_weak</span>
      </button>
    </div>
  );
};

export default CenterButton;
