import React from "react";
import { StyledH2 } from "./H2.styled";

export function H2({ children, ...props }) {
  return(
    <StyledH2 isVariant={props.isVariant}>
      {children}
    </StyledH2>
  )
}