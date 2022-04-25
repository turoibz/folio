import React, { useContext, useState, useEffect } from "react";
// import ReactGA from "react-ga";

const ThemeConfigContext = React.createContext();
const ThemeUpdateConfigContext = React.createContext();
const isBrowser = () => typeof window !== "undefined";

export function useThemeConfig(){
  return useContext(ThemeConfigContext);
}

export function useThemeUpdateConfig(){
  return useContext(ThemeUpdateConfigContext);
}

// export function useLocalStorageState(key, initialValue) {
//   const [value, setValue] = useState(() => {
//     const persistedValue = isBrowser ? localStorage.getItem(key) : null;
//     return persistedValue !== null ? persistedValue : initialValue;
//   });

//   useEffect(() => {
//     localStorage.setItem(key, value);
//   }, [key, value]);

//   return [value, setValue];
// }

export function ThemeConfig({ children }) {
  
  const colorMode = isBrowser && window.__colormode === 'dark';
  const [darkMode, setDarkMode] = useState(colorMode);
  // const [darkMode, setDarkMode] = useState(false);

  // const [theme, setPersistentDarkTheme] = useLocalStorageState("theme", "light");

  function toggleTheme(){
    setDarkMode(prevSetting => !prevSetting);
    isBrowser && localStorage.setItem("theme", darkMode ? "light" : "dark");
    // setPersistentDarkTheme(prevSetting => prevSetting==="light" ? "dark" : "light");
    // ReactGA.event({
    //   category: "Switch theme",
    //   action: "User switched theme",
    // });
  }

  return(
    <ThemeConfigContext.Provider value={darkMode ? "dark" : "light"}>
      <ThemeUpdateConfigContext.Provider value={toggleTheme}>
        {children}
      </ThemeUpdateConfigContext.Provider>
    </ThemeConfigContext.Provider>
  )
}