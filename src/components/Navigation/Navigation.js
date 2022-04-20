import React from "react";
import { Link } from "../Link/Link";
import { StyledNavigation } from "./Navigation.styled";


export function Navigation(){
  return(
    <StyledNavigation>
      <Link path="/about">
        About
      </Link>
      <Link path="/work">
        Work
      </Link>
    </StyledNavigation>
  )
}