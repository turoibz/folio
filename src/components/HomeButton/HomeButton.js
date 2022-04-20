import React, { useContext } from "react";
import { ThemeContext } from "styled-components";
import { Link as RouterLink } from "gatsby";
import { CircleIcon } from "../../foundation/Icon";
import { StyledHomeButton } from "./HomeButton.styled";

export function HomeButton(){
  const theme = useContext(ThemeContext)
  return (
    <StyledHomeButton>
      <RouterLink to="/">
        <CircleIcon size="md" color={theme.color.navigation}/>
      </RouterLink>
    </StyledHomeButton>
  )
}


