import { createContext } from 'react';
import { IThemeContext } from './ThemeContext.interface';

export const ThemeContext = createContext<IThemeContext>({
  isDark: false,
  toggleTheme: () => null
});
