import React from 'react';

export interface IThemeContext {
  theme: string;
  changeTheme: (style: string) => void;
}

export const initialState: IThemeContext = {
  theme: 'light',
  changeTheme: () => {},
};

export const ThemeContext = React.createContext<IThemeContext>(initialState);
