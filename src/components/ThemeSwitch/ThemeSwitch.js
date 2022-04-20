import React, { useContext } from "react";
import { ThemeContext } from "styled-components";
import { StyledThemeSwitch } from "./ThemeSwitch.styled";
import { DarkMode, LightMode } from "../../foundation/Icon";

export function ThemeSwitch({...props}){
  const theme = useContext(ThemeContext)
  const setTheme = props.onClick;
  return(
    <StyledThemeSwitch onClick={setTheme}>
      {theme.id === "dark" ?
        <LightMode size="md" color="isabelline"/> :
        <DarkMode size="md" color="raisingBlack"/>
    }
    </StyledThemeSwitch>
  )
}