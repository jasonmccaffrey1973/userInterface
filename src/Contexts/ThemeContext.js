import { createContext, useContext, useState, useMemo, useEffect } from 'react';
import { darkTheme, lightTheme } from '../Application/Constants/themeColors';
import UserPreferences from '../Application/Models/UserPreferences';

const ThemeContext = createContext();

export const useThemeContext = () => {
  return useContext(ThemeContext);
}

export const ThemeProvider = ({ children }) => {
  const userPreferences = UserPreferences;
  const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  const [theme, setTheme] = useState(userPreferences.theme || systemTheme);

  useEffect(() => {
    setTheme(userPreferences.theme || systemTheme);
  }, [userPreferences.theme, systemTheme]);
  

  const themeColors = useMemo(() => {        
    switch (theme) {
      case 'dark': return darkTheme
      case 'light': return lightTheme
      default: return lightTheme;
    }
  }, [theme]);

  const themeContextValue = {
    userPreferences,
    theme,
    setTheme,
    themeColors,
  };

  return (
    <ThemeContext.Provider value={themeContextValue}>
      {children}
    </ThemeContext.Provider>
  );
}
