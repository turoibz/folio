import React, { useContext, useState, useEffect } from "react";
// import ReactGA from "react-ga";

const ThemeConfigContext = React.createContext();
const ThemeUpdateConfigContext = React.createContext();

export function useThemeConfig(){
  return useContext(ThemeConfigContext);
}

export function useThemeUpdateConfig(){
  return useContext(ThemeUpdateConfigContext);
}

export function useLocalStorageState(key, initialValue) {
  const [value, setValue] = useState(() => {
    const persistedValue = typeof window !== 'undefined' ? localStorage.getItem(key) : null;
    return persistedValue !== null ? persistedValue : initialValue;
  });

  useEffect(() => {
    localStorage.setItem(key, value);
  }, [key, value]);

  return [value, setValue];
}

export function ThemeConfig({ children }) {
  const [theme, setPersistentDarkTheme] = useLocalStorageState("theme", "light");

  function toggleTheme(){
    setPersistentDarkTheme(prevSetting => prevSetting==="light" ? "dark" : "light");
    // ReactGA.event({
    //   category: "Switch theme",
    //   action: "User switched theme",
    // });
  }

  return(
    <ThemeConfigContext.Provider value={theme}>
      <ThemeUpdateConfigContext.Provider value={toggleTheme}>
        {children}
      </ThemeUpdateConfigContext.Provider>
    </ThemeConfigContext.Provider>
  )
}
