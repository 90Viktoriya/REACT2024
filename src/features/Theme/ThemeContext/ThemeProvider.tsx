import React, { useCallback, useState } from 'react';
import { ThemeContext } from './ThemeContext';

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [isDark, setIsDark] = useState(false);
  const toggleTheme = useCallback(() => setIsDark((value) => !value), []);
  return <ThemeContext.Provider value={{ isDark, toggleTheme }}>{children}</ThemeContext.Provider>;
}
