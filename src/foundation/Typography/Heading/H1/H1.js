import React from "react";
import { StyledH1 } from "./H1.styled";

export function H1({ children, ...props }) {
  return(
    <StyledH1 isHeadline={props.isHeadline}>
      {children}
    </StyledH1>
  )
}