import React, { useEffect } from "react";
import ReactGA from "react-ga";



export function Tracker({location}){
  const currentLocation = location.pathname;
  
  useEffect(() => {
    ReactGA.pageview(currentLocation);
  }, [currentLocation]);

  return (
    <></>
  )
}