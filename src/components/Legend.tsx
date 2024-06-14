import React from 'react';

import { Map, type LatLngExpression } from 'leaflet';

// data
import { type ILegend } from '../data/legend';
import { type ILocation } from '../data/data';

// interfaces
interface IProps {
  map: Map | null;
  logo: string | null;
  data: ILegend[] | null;
  locations: ILocation[] | null;
}

const Legend = ({ map, logo, data, locations }: IProps): React.JSX.Element => {
  const inputRef = React.useRef<HTMLInputElement>(null);

  const [close, setClose] = React.useState<boolean>(false);
  const [keyword, setKeyword] = React.useState<string | null>(null);
  const [filteredResults, setFilteredResults] = React.useState<ILocation[] | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const searchKeyword = e.target.value?.trim();

    if (searchKeyword != null && searchKeyword.length > 0) {
      setKeyword(searchKeyword);

      const results = locations?.filter((s) =>
        s.title.toLocaleLowerCase('tr-TR').includes(searchKeyword.toLocaleLowerCase('tr-TR'))
      );

      if (!results) {
        setFilteredResults(null);
      } else {
        setClose(false);
        setFilteredResults(results);
      }
    } else {
      setKeyword(null);
      setFilteredResults(null);
    }
  };

  const handleAutocompleterClose = (): void => {
    setFilteredResults(null);

    if (inputRef.current) {
      inputRef.current.value = '';
    }
  };

  const handleClick = (coords: LatLngExpression): void => {
    map?.setView(coords, 18);
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
          {keyword && (
            <span
              tabIndex={0}
              role='button'
              onClick={() => handleAutocompleterClose()}
              className='material-symbols-outlined input-icon pointer'
            >
              close
            </span>
          )}
        </div>

        {filteredResults && (
          <div className='autocomplete scroller-vertical'>
            {filteredResults.length > 0 ? (
              <ul>
                {filteredResults.map((item) => (
                  <li key={item.id}>
                    <button
                      type='button'
                      className='flex-space-between flex-gap flex-h-center pointer'
                      onClick={() => handleClick(item.shapeCoords[0])}
                    >
                      <span className='material-symbols-outlined'>{item.category.icon}</span>
                      <span className='flex flex-grow flex-self strong'>{item.title}</span>
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
        )}
      </div>

      <div className='flex flex-space-between legend-header'>
        <h5>Legend</h5>
        <button type='button' onClick={() => setClose(!close)}>
          <span className='material-symbols-outlined down-icon'>
            {close ? 'expand_less' : 'expand_more'}
          </span>
        </button>
      </div>

      {!close && (
        <div className='flex flex-space-between legend-content'>
          <div className='grid flex-gap'>
            {data?.map((item) => (
              <div key={item.id} className='flex flex-v-center flex-gap'>
                <span className='material-symbols-outlined'>{item.icon}</span>
                <em>{item.name}</em>
              </div>
            ))}
          </div>

          {logo && (
            <div className='flex flex-v-end'>
              <img src={logo} width='150' alt='FIA logo' draggable='false' />
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Legend;
