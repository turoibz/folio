import React, { useContext, useState } from "react";
// import ReactGA from "react-ga";

const ThemeConfigContext = React.createContext();
const ThemeUpdateConfigContext = React.createContext();

export function useThemeConfig(){
  return useContext(ThemeConfigContext);
}

export function useThemeUpdateConfig(){
  return useContext(ThemeUpdateConfigContext);
}

export function ThemeConfig({ children }){
  const [darkTheme, setDarkTheme] = useState(false);

  function toggleTheme(){
    setDarkTheme(prevSetting => !prevSetting);
    // ReactGA.event({
    //   category: "Switch theme",
    //   action: "User switched theme",
    // });
  }

  return(
    <ThemeConfigContext.Provider value={darkTheme}>
      <ThemeUpdateConfigContext.Provider value={toggleTheme}>
        {children}
      </ThemeUpdateConfigContext.Provider>
    </ThemeConfigContext.Provider>
  )
}