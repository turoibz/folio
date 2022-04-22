import React from "react";
import { useThemeConfig } from "./App.config";
import Theme from "./../foundation/Theme/Theme";
import GlobalStyle from "../foundation/GlobalStyle/GlobalStyle";
// import { Tracker } from "./../components/Tracker/Tracker";
import { StyledContentWrapper } from "./App.styled";
import { Header } from "../components/Header/Header";
import { Footer } from "../components/Footer/Footer";

const App = ({ children }) => {
  const theme = useThemeConfig();
  
  return (
    <Theme theme={theme}>
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

export default App;