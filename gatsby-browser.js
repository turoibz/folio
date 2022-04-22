import React from "react";
import { ThemeConfig } from "./src/app/App.config";
import App from "./src/app/App";


export const wrapRootElement = ({ element }) => {
  return (
    <main>
      <ThemeConfig>
        <App>
          {element}
        </App>
      </ThemeConfig>
    </main>
  )
}