import React from 'react';

import { initialState, ThemeContext } from '../contexts/ThemeContext';

// utils
import useLocalStorage from '../hooks/useLocalStorage';

// interfaces
interface ITheme {
  theme: string;
}

interface IProps {
  children: React.ReactNode;
}

const ThemeProvider = ({ children }: IProps): React.JSX.Element => {
  const { getData, setData } = useLocalStorage();

  const [theme, setTheme] = React.useState<string>(initialState.theme);

  React.useEffect(() => {
    const getTheme = getData<ITheme>('theme');

    if (getTheme) setTheme(getTheme.theme);
  }, [getData]);

  /**
   * Updates the theme and saves it to local storage.
   *
   * @param {string} style - The new theme style.
   * @return {void} This function does not return anything.
   */
  const changeTheme = (style: string): void => {
    setTheme(style);

    setData('theme', {
      theme: style,
    });
  };

  // eslint-disable-next-line
  const providerValue = React.useMemo(() => ({ theme, changeTheme }), [theme]);

  return <ThemeContext.Provider value={providerValue}>{children}</ThemeContext.Provider>;
};

export default ThemeProvider;
