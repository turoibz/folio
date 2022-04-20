import React from "react";
import { Link as RouterLink } from "gatsby";
import { StyledLink } from "./Link.styled";

export function Link({children, path}){
  return(
    <StyledLink>
      <RouterLink to={path}>
        {children}
      </RouterLink>
    </StyledLink>
  )
}