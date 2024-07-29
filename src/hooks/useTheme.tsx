import { useContext } from 'react';
import { ThemeContext } from '../features/Theme/ThemeContext/ThemeContext';

export const useTheme = () => useContext(ThemeContext);
