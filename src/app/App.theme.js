import React from "react";
import { useThemeConfig } from "./App.config";
import Theme from "./../foundation/Theme/Theme";
import GlobalStyle from "../foundation/GlobalStyle/GlobalStyle";

const AppTheme = ({ children }) => {
  
  const theme = useThemeConfig();
  return (
    <Theme theme={ theme }>
      <GlobalStyle/>
      {/* <Tracker/> */}
      { children }
    </Theme>
  )
}

export default AppTheme;