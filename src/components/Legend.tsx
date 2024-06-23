import React from 'react';
import Swipe from 'react-easy-swipe';

// types
import type { Map, LatLngExpression } from 'leaflet';
import type { IData, ILocation } from '../types/types';

// components
import Categories from './Categories';
import SearchFilter from './SearchFilter';
import SearchForm from './SearchForm';

// interfaces
interface IProps {
  map: Map | null;
  data: IData | null;
}

const Legend = ({ map, data }: IProps): React.JSX.Element => {
  const [close, setClose] = React.useState<boolean>(false);
  const [keyword, setKeyword] = React.useState<string>('');
  const [filteredResults, setFilteredResults] = React.useState<ILocation[] | null>(null);

  /**
   * Handles the change event of the input field.
   *
   * @param {React.ChangeEvent<HTMLInputElement>} e - The event object representing the input change.
   * @return {void} This function does not return anything.
   */
  const handleChange = React.useCallback(
    (e: React.ChangeEvent<HTMLInputElement>): void => {
      const searchKeyword = e.target.value;

      if (searchKeyword != null && searchKeyword?.trim().length > 0) {
        setKeyword(searchKeyword);

        const results = data?.locations?.filter((s) =>
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
    },
    [data]
  );

  /**
   * Handles the close event of the autocompleter.
   *
   * This function resets the keyword state and filtered results state to empty values.
   *
   * @return {void} This function does not return anything.
   */
  const handleAutocompleterClose = (): void => {
    setKeyword('');
    setFilteredResults(null);
  };

  /**
   * A function that handles clicking to locate a specific coordinates on the map.
   *
   * @param {LatLngExpression} coords - The coordinates to set the view to.
   * @return {void} This function does not return anything.
   */
  const handleClickLocate = (coords: LatLngExpression): void => {
    map?.setView(coords, 18);
  };

  return (
    <div className='legend'>
      <Swipe onSwipeUp={() => setClose(false)} onSwipeDown={() => setClose(true)}>
        <div className='swiper' />
        <div className='flex flex-space-between flex-v-center legend-header'>
          <h5>Legend & Search</h5>
          <button type='button' onClick={() => setClose(!close)}>
            <span className='material-symbols-outlined down-icon pointer active-opacity'>
              {close ? 'expand_less' : 'expand_more'}
            </span>
          </button>
        </div>
      </Swipe>

      {!close && (
        <>
          <div className='autocomplete-container'>
            <SearchForm
              keyword={keyword}
              handleChange={handleChange}
              handleAutoCompleterClose={handleAutocompleterClose}
            />

            {filteredResults && (
              <SearchFilter data={filteredResults} handleClickLocate={handleClickLocate} />
            )}
          </div>

          <div className='flex flex-space-between legend-content'>
            <Categories data={data} />

            {data?.bottomLogo && (
              <div className='flex flex-v-end'>
                <img src={data.bottomLogo} width='150' alt='' draggable='false' />
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default Legend;
