import React from "react";
import { ThemeConfig } from "./src/app/App.config";
import AppTheme from "./src/app/App.theme";
import App from "./src/app/App";

import "./src/styles/global.css";

export const wrapPageElement = ({ element, props }) => {
  return (
    <App {...props}>{element}</App>
  )
}

export const wrapRootElement = ({ element }) => {
  return (
    <ThemeConfig>
       <AppTheme>
         {element}
      </AppTheme>
    </ThemeConfig>
  )
}