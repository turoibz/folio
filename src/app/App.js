import React from "react";
// import { BrowserRouter as Router } from "react-router-dom";
// import { Route, Switch } from "react-router-dom";
import { useThemeConfig } from "./App.config";
import { Theme } from "./../foundation/Theme";
import { GlobalStyle } from "../foundation/GlobalStyle";
// import { Tracker } from "./../components/Tracker/Tracker";
import { StyledContentWrapper } from "./App.styled";
import { Header } from "../components/Header/Header";
import { Footer } from "../components/Footer/Footer";
// import { Home, About, Work, Nrp, Nab, Fines, MooneyValley, Paper, CodyCube, FourOFour } from "../pages";


export default function App({ children }) {
  
  const darkTheme = useThemeConfig();
  
  return (
    <Theme theme={darkTheme ? "dark" : "light"}>
      <GlobalStyle/>
      <>
        {/* <Tracker/> */}
        <Header/>
        <StyledContentWrapper>
          {children}
        </StyledContentWrapper>
        <Footer/>
      </>
    </Theme>
  )
}
