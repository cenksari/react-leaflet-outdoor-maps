import { useState } from 'react';

// types
import type { Map, LatLngExpression } from 'leaflet';
import type { IData, ILocation } from '../types/types';

// components
import Swiper from './Swiper';
import Categories from './Categories';
import SearchForm from './SearchForm';
import SearchFilter from './SearchFilter';

// interfaces
interface IProps {
  map: Map | null;
  data: IData | null;
}

const Legend: React.FC<IProps> = ({ map, data }) => {
  const [close, setClose] = useState<boolean>(false);
  const [keyword, setKeyword] = useState<string>('');
  const [filteredResults, setFilteredResults] = useState<ILocation[] | null>(null);

  /**
   * Handles the change event of the input field.
   *
   * @param {React.ChangeEvent<HTMLInputElement>} e - The event object representing the input change.
   * @return {void} This function does not return anything.
   */
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
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
  };

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

  /**
   * Updates the state of the component to reflect a collapse or expand action.
   *
   * @param {boolean} collapse - A boolean indicating whether to collapse or expand the component.
   * @return {void} This function does not return anything.
   */
  const onCollapse = (collapse: boolean): void => {
    setClose(collapse);
  };

  return (
    <div className='legend'>
      <Swiper close={close} onCollapse={onCollapse} />

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
