import React from 'react';

import { Map, type LatLngExpression } from 'leaflet';

// data
import { type ILegend } from '../data/legend';
import { type ILocation } from '../data/data';

// interfaces
interface IProps {
  map: Map | null;
  logo?: string;
  data: ILegend[] | null;
  locations?: ILocation[];
}

const Legend = ({ map, logo, data, locations }: IProps): React.JSX.Element => {
  const inputRef = React.useRef<HTMLInputElement>(null);

  const [close, setClose] = React.useState<boolean>(false);
  const [keyword, setKeyword] = React.useState<string>('');
  const [filteredResults, setFilteredResults] = React.useState<ILocation[] | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const searchKeyword = e.target.value;

    if (searchKeyword != null && searchKeyword?.trim().length > 0) {
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
      setKeyword('');
      setFilteredResults(null);
    }
  };

  const handleAutocompleterClose = (): void => {
    setKeyword('');
    setFilteredResults(null);
  };

  const handleClick = (coords: LatLngExpression): void => {
    map?.setView(coords, 18);
  };

  return (
    <div className='legend'>
      <div className='flex flex-space-between flex-v-center legend-header'>
        <h5>Legend & Search</h5>
        <button type='button' onClick={() => setClose(!close)}>
          <span className='material-symbols-outlined down-icon pointer active-opacity'>
            {close ? 'expand_less' : 'expand_more'}
          </span>
        </button>
      </div>

      {!close && (
        <>
          <div className='autocomplete-container'>
            <div className='flex flex-gap-small flex-v-center search-area'>
              <button type='button' onClick={() => inputRef.current?.focus()}>
                <span className='material-symbols-outlined input-icon'>search</span>
              </button>
              <input
                type='text'
                id='search'
                name='search'
                maxLength={32}
                ref={inputRef}
                value={keyword}
                onChange={handleChange}
                placeholder='Search places...'
              />
              {keyword && (
                <button
                  type='button'
                  className='pointer active-opacity'
                  onClick={() => handleAutocompleterClose()}
                >
                  <span className='material-symbols-outlined input-icon'>close</span>
                </button>
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
                          onClick={() => handleClick(item.shapeCoords[0])}
                          className='flex-space-between flex-gap flex-h-center pointer active-opacity'
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
            )}
          </div>

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
        </>
      )}
    </div>
  );
};

export default Legend;
