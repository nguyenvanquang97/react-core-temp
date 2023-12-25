import React, {createContext, useContext} from 'react';
import {FTheme} from './FTheme';

const ThemeContext = createContext(FTheme);

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({children}) => {
  return (
    <ThemeContext.Provider value={FTheme}>{children}</ThemeContext.Provider>
  );
};
