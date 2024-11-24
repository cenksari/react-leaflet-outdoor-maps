import { createContext } from 'react';

export interface IThemeContext {
  theme: string;
  changeTheme: (style: string) => void;
}

export const initialState: IThemeContext = {
  theme: 'light',
  changeTheme: () => {},
};

export const ThemeContext = createContext<IThemeContext>(initialState);
