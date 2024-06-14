import React from 'react';

import { ThemeContext, type IThemeContext } from '../contexts/ThemeContext';

const useTheme = (): IThemeContext => {
  const { theme, changeTheme } = React.useContext(ThemeContext) as IThemeContext;

  return { theme, changeTheme };
};

export default useTheme;
