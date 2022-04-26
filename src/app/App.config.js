import React, { useContext, useState, useEffect } from "react";
import ReactGA from "react-ga";

const ThemeConfigContext = React.createContext();
const ThemeUpdateConfigContext = React.createContext();


export function useThemeConfig(){
  return useContext(ThemeConfigContext);
}

export function useThemeUpdateConfig(){
  return useContext(ThemeUpdateConfigContext);
}

export function ThemeConfig({ children }) {
  const [darkMode, setDarkMode] = useState(undefined);
  useEffect(() => {
    const initialDarkMode = window.__colormode === 'dark';
    setDarkMode(initialDarkMode);
  },[])

  function toggleTheme(){
    setDarkMode(prevSetting => !prevSetting);
    localStorage.setItem("theme", darkMode ? "light" : "dark");
    ReactGA.event({
      category: "Switch theme",
      action: "User switched theme",
    });
  }

  return(
    <ThemeConfigContext.Provider value={darkMode ? "dark" : "light"}>
      <ThemeUpdateConfigContext.Provider value={toggleTheme}>
        {children}
      </ThemeUpdateConfigContext.Provider>
    </ThemeConfigContext.Provider>
  )
}