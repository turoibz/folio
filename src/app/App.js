import React, { useState, useEffect } from "react";
import { StyledApp, StyledContentWrapper } from "./App.styled";
import { Header } from "../components/Header/Header";
import { Footer } from "../components/Footer/Footer";

const App = ({ children }) => {

  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);
  
  if (!hasMounted) {
    return null;
  }

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