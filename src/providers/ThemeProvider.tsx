import React from 'react';

import { initialState, ThemeContext } from '../contexts/ThemeContext';

import useLocalStorage from '../hooks/useLocalStorage';

interface IProps {
  children: React.ReactNode;
}

const ThemeProvider = ({ children }: IProps): React.JSX.Element => {
  const { getData, setData } = useLocalStorage();

  const [theme, setTheme] = React.useState<string>(initialState.theme);

  React.useEffect(() => {
    // eslint-disable-next-line
    const getTheme: any = getData('theme');

    if (getTheme) {
      setTheme(getTheme.theme);
    }
  }, [getData]);

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
