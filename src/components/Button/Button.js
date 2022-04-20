import React, { useContext } from "react";
import { ThemeContext } from "styled-components";
import { Link } from "react-router-dom";
import { ExternalLinkIcon } from "../../foundation/Icon/icons/ExternalLink";
import { StyledButton } from "./Button.styled";

export function Button({...props}){
  const theme = useContext(ThemeContext)
  return(
    <StyledButton>
      <Link to={{ pathname:props.path }} target="_blank" tabIndex="-1">
        {props.label}
      </Link>
      <ExternalLinkIcon size="tn" color={theme.color.bodyTxt}/>
    </StyledButton>
  )
}