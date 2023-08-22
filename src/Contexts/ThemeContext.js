import { createContext, useContext, useState, useMemo, useEffect } from 'react';
import { darkTheme, lightTheme } from '../Application/Constants/themeColors';

const ThemeContext = createContext();

export const useThemeContext = () => {
  return useContext(ThemeContext);
}

export const ThemeProvider = ({ children }) => {
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const [theme, setTheme] = useState(prefersDark ? 'dark' : 'light');

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleMediaChange = event => {
      setTheme(event.matches ? 'dark' : 'light');
    };

    mediaQuery.addEventListener('change', handleMediaChange);
    return () => {
      mediaQuery.removeEventListener('change', handleMediaChange);
    };
  }, []);

  const themeColors = useMemo(() => {        
    switch (theme) {
      case 'dark': return darkTheme
      case 'light': return lightTheme
      default: return lightTheme;
    }
  }, [theme]);

  const themeContextValue = {
    theme,
    themeColors,
  };

  return (
    <ThemeContext.Provider value={themeContextValue}>
      {children}
    </ThemeContext.Provider>
  );
}
