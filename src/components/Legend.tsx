import React from 'react';

const Legend = (): React.JSX.Element => {
  const inputRef = React.useRef<HTMLInputElement>(null);

  return (
    <div className='legend'>
      <div className='flex flex-gap-small flex-v-center search-area'>
        <span
          tabIndex={0}
          role='button'
          className='material-symbols-outlined'
          onClick={() => inputRef.current?.focus()}
        >
          search
        </span>
        <input
          type='text'
          id='search'
          name='search'
          ref={inputRef}
          placeholder='Search places...'
        />
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
