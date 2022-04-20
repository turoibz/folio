import React, { useContext, useState } from "react";
// import ReactGA from "react-ga";
import smoothscroll from 'smoothscroll-polyfill';
import { ThemeContext } from "styled-components";
import { ArrowUpIcon } from "./../../foundation/Icon";
import { StyledScrollUp } from "./ScrollUpButton.styled";


export function ScrollUpButton({...props}){
  smoothscroll.polyfill();
  const theme = useContext(ThemeContext)
  const [showScrollUp, setShowScrollUp] = useState(false);
  const checkScrollTop = () => {
    if (!showScrollUp && window.pageYOffset > 200){
      setShowScrollUp(true)
    } else if (showScrollUp && window.pageYOffset <= 200){
      setShowScrollUp(false)
    }
  };
  window.addEventListener('scroll', checkScrollTop);
  const handleScrollUpClick = () =>{
    window.scrollTo({top: 0, behavior: 'smooth'});
    // ReactGA.event({
    //   category: "Scroll Up",
    //   action: "User scrolled up",
    // });
  };
  return(
    <StyledScrollUp showScrollUp={showScrollUp} onClick={handleScrollUpClick}>
      <ArrowUpIcon size="md" color={theme.color.navigation}/>
    </StyledScrollUp>
  )
}

