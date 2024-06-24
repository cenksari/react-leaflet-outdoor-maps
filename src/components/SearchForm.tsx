import React from 'react';

// interfaces
interface IProps {
  keyword: string;
  handleChange: React.ChangeEventHandler<HTMLInputElement>;
  handleAutoCompleterClose: () => void;
}

const SearchForm = ({
  keyword,
  handleChange,
  handleAutoCompleterClose,
}: IProps): React.JSX.Element => {
  const inputRef = React.useRef<HTMLInputElement>(null);

  return (
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
        autoComplete='off'
        onChange={handleChange}
        placeholder='Search places...'
      />
      {keyword && (
        <button type='button' className='pointer active-opacity' onClick={handleAutoCompleterClose}>
          <span className='material-symbols-outlined input-icon'>close</span>
        </button>
      )}
    </div>
  );
};

export default SearchForm;
