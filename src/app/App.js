import React from "react";
import { StyledApp, StyledContentWrapper } from "./App.styled";
import { Header } from "../components/Header/Header";
import { Footer } from "../components/Footer/Footer";

const App = ({ children }) => {
  return (
    <StyledApp>
      <Header/>
      <StyledContentWrapper>
        {children}
      </StyledContentWrapper>
      <Footer/>
    </StyledApp>
  )
}

export default App;