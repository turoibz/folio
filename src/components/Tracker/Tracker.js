import React, { useEffect } from "react";
import ReactGA from "react-ga";
import { useLocation } from "react-router-dom";


export function Tracker(){
  let location = useLocation();
  
  useEffect(() => {
    window.scrollTo({top: 0, behavior: 'auto'});
    ReactGA.pageview(location.pathname);
  }, [location]);

  return (
    <></>
  )
}