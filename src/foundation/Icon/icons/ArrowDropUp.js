import React from "react";
import { StyledIcon } from "../Icon.styled";

export function ArrowDropUpIcon({...props}){
  return (
    <StyledIcon viewBox="0 0 24 24" {...props}>
      <path 
        fillRule="evenodd"
        d="M7 14l5-5 5 5H7z"
      />
    </StyledIcon>
  )
}

