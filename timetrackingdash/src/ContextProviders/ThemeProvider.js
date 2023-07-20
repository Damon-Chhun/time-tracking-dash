import { useCallback, useState, createContext } from "react";

export const ThemeContext = createContext();
export const ToggleThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [darkTheme, setDarkTheme] = useState(true);

  function toggleTheme() {
    setDarkTheme(!darkTheme);
  }
  return (
    <ThemeContext.Provider value={darkTheme}>
      <ToggleThemeContext.Provider value={toggleTheme}>
        {children}
      </ToggleThemeContext.Provider>
    </ThemeContext.Provider>
  );
}
