// interfaces
interface IProps {
  show: boolean;
  onSetLocation: () => void;
}

const LocationButton: React.FC<IProps> = ({ show, onSetLocation }) => {
  if (show) {
    return (
      <div className='location-button flex flex-v-center flex-h-center'>
        <button
          type='button'
          onClick={onSetLocation}
          title='Get my location'
          className='flex flex-h-center flex-v-center pointer'
        >
          <span className='material-symbols-outlined'>my_location</span>
        </button>
      </div>
    );
  }

  return null;
};

export default LocationButton;
