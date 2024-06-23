import React from 'react';

import { LatLngExpression } from 'leaflet';

// types
import type { ILocation } from '../types/types';

// interfaces
interface IProps {
  data: ILocation[];
  handleClickLocate: (coords: LatLngExpression) => void;
}

const SearchFilter = ({ data, handleClickLocate }: IProps): React.JSX.Element => {
  return (
    <div className='autocomplete scroller-vertical'>
      {data.length > 0 ? (
        <ul>
          {data.map((item) => (
            <li key={item.id}>
              <button
                type='button'
                onClick={() => handleClickLocate(item.shape.location[0])}
                className='flex-space-between flex-gap flex-h-center no-select pointer active-opacity'
              >
                <span className='material-symbols-outlined'>{item.category.icon}</span>
                <span className='flex flex-grow flex-self'>{item.title}</span>
                <span className='material-symbols-outlined'>center_focus_weak</span>
                <em>Show</em>
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p>No results found!</p>
      )}
    </div>
  );
};

export default SearchFilter;
