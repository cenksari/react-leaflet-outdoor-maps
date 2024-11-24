import { useContext } from 'react';

import { ThemeContext, type IThemeContext } from '../contexts/ThemeContext';

/**
 * Returns the current theme and a function to change the theme from the ThemeContext.
 *
 * @return {IThemeContext} An object containing the current theme and a function to change the theme.
 */
const useTheme = (): IThemeContext => {
  const { theme, changeTheme } = useContext(ThemeContext) as IThemeContext;

  return { theme, changeTheme };
};

export default useTheme;
