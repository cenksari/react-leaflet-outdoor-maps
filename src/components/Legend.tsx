import React from 'react';

import { type LatLngExpression } from 'leaflet';

// data
import data, { type IData } from '../data/data';

// interfaces
interface IProps {
  map: any;
}

const Legend = ({ map }: IProps): React.JSX.Element => {
  const inputRef = React.useRef<HTMLInputElement>(null);

  const [filteredResults, setFilteredResults] = React.useState<IData[] | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const searchKeyword = e.target.value?.trim();

    if (searchKeyword != null && searchKeyword.length > 0) {
      const results = data.filter((s) =>
        s.title.toLocaleLowerCase('tr-TR').includes(searchKeyword.toLocaleLowerCase('tr-TR'))
      );

      if (!results) {
        setFilteredResults(null);
      } else {
        setFilteredResults(results);
      }
    } else {
      setFilteredResults(null);
    }
  };

  const handleClose = (): void => {
    setFilteredResults(null);

    if (inputRef.current) {
      inputRef.current.value = '';
    }
  };

  const handleClick = (coords: LatLngExpression): void => {
    map.setView(coords, 20);
  };

  return (
    <div className='legend'>
      <div className='autocomplete-container'>
        <div className='flex flex-gap-small flex-v-center search-area'>
          <span
            tabIndex={0}
            role='button'
            onClick={() => inputRef.current?.focus()}
            className='material-symbols-outlined input-icon'
          >
            search
          </span>
          <input
            type='text'
            id='search'
            name='search'
            ref={inputRef}
            onChange={handleChange}
            placeholder='Search places...'
          />
          <span
            tabIndex={0}
            role='button'
            onClick={() => handleClose()}
            className='material-symbols-outlined input-icon pointer'
          >
            close
          </span>
        </div>

        {filteredResults && (
          <div className='autocomplete scroller-vertical'>
            <ul>
              {filteredResults.map((item) => (
                <li key={item.id}>
                  <button
                    type='button'
                    className='pointer'
                    onClick={() => handleClick(item.shapeCoords[0])}
                  >
                    <span className='strong'>{item.title}</span>
                    <span className='material-symbols-outlined'>center_focus_weak</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <div className='flex flex-space-between'>
        <h5>Legend</h5>
        <span className='material-symbols-outlined down-icon'>keyboard_arrow_down</span>
      </div>

      <div className='flex flex-space-between'>
        <div className='grid flex-gap'>
          <div className='flex flex-v-center flex-gap'>
            <span className='material-symbols-outlined'>local_parking</span>
            <em>Car parking</em>
          </div>
          <div className='flex flex-v-center flex-gap'>
            <span className='material-symbols-outlined'>restaurant</span>
            <em>Restaurant</em>
          </div>
          <div className='flex flex-v-center flex-gap'>
            <span className='material-symbols-outlined'>follow_the_signs</span>
            <em>Toilets</em>
          </div>
          <div className='flex flex-v-center flex-gap'>
            <span className='material-symbols-outlined'>videocam</span>
            <em>Media area</em>
          </div>
        </div>

        <div className='flex flex-v-end'>
          <img src='images/fia-logo.png' width='150' alt='FIA logo' draggable='false' />
        </div>
      </div>
    </div>
  );
};

export default Legend;
