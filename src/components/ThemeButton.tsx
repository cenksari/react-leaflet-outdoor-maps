import React from 'react';

import useTheme from '../hooks/useTheme';

const ThemeButton = (): React.JSX.Element => {
  const { theme, changeTheme } = useTheme();

  return (
    <div className='theme-button flex flex-v-center flex-h-center'>
      <button
        type='button'
        title='Change theme'
        className='flex flex-h-center flex-v-center pointer'
        onClick={() => {
          changeTheme(theme === 'light' ? 'dark' : 'light');
        }}
      >
        <span className='material-symbols-outlined'>
          {theme === 'light' ? 'dark_mode' : 'light_mode'}
        </span>
      </button>
    </div>
  );
};

export default ThemeButton;
