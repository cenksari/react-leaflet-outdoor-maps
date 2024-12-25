import type { Map, LatLngExpression } from 'leaflet';

// interfaces
interface IProps {
  map: Map | null;
  zoomLevel: number;
  centerCoords: LatLngExpression;
}

const CenterButton: React.FC<IProps> = ({ map, zoomLevel, centerCoords }) => {
  const onClick = (): void => {
    map?.setView(centerCoords, zoomLevel);
  };

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
