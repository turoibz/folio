import React from "react";
import { StyledIcon } from "../Icon.styled";

export function CircleIcon({...props}){
  return (
    <StyledIcon viewBox="0 0 24 24" {...props}>
      <path 
        fillRule="evenodd"
        d="M12,2C6.47,2,2,6.47,2,12s4.47,10,10,10s10-4.47,10-10S17.53,2,12,2z"
      />
    </StyledIcon>
  )
}