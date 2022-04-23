import React from "react";
import { ThemeConfig } from "./src/app/App.config";
import AppTheme from "./src/app/App.theme";

export const wrapPageElement = ({ element, props }) => {
  return (
    <AppTheme {...props}>{element}</AppTheme>
  )
}

export const wrapRootElement = ({ element }) => {
  return (
    <ThemeConfig>
      {element}
    </ThemeConfig>
  )
}