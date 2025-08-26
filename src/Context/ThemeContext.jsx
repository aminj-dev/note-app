import { createContext, useContext, useEffect, useState } from "react";

export const ThemeContext = createContext();

export const ThemeContextProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
        document.documentElement.classList.add("dark")
        console.log(darkMode)
    } else {
        document.documentElement.classList.remove("dark");
        console.log(darkMode)
      }
  }, [darkMode])
  
  return <ThemeContext.Provider value={{ darkMode, setDarkMode }}>{children}</ThemeContext.Provider>;
};

export const UseTheme = () => useContext(ThemeContext);