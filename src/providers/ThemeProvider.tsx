import { useState, useEffect } from 'react';

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

const ThemeProvider: React.FC<IProps> = ({ children }) => {
  const { getData, setData } = useLocalStorage();

  const [theme, setTheme] = useState<string>(initialState.theme);

  useEffect(() => {
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

  return <ThemeContext value={{ theme, changeTheme }}>{children}</ThemeContext>;
};

export default ThemeProvider;
