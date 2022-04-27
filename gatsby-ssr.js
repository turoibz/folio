import React from "react";
import { ThemeConfig } from "./src/app/App.config";
import AppTheme from "./src/app/App.theme";
import App from "./src/app/App";

const InitializeTheme = () => {
  const colorModeConfig = `
    (function() {
      function setColorMode(color) {
        window.__colormode = color;
        if (color === 'dark') {
          document.documentElement.className = 'dark';
        } else {
          document.documentElement.className = 'light';
        }
      };
      function getInitialColorMode() {
        const persistedColorPreference = window.localStorage.getItem('theme');
        const hasPersistedPreference = typeof persistedColorPreference === 'string';

        if (hasPersistedPreference) {
          return persistedColorPreference;
        }

        const mql = window.matchMedia('(prefers-color-scheme: dark)');
        const hasMediaQueryPreference = typeof mql.matches === 'boolean';
        
        mql.addEventListener("change", (e) => {
          const systemColorMode = e.matches ? 'dark' : 'light';
          setColorMode(systemColorMode);
        });

        if (hasMediaQueryPreference) {
          return mql.matches ? 'dark' : 'light';
        }
        
        return 'light';
      }
      const colorMode = getInitialColorMode();
      setColorMode(colorMode);
    })()
  `.replace(/\n/g, ' ').replace(/ {2}/g, '');
  // eslint-disable-next-line react/no-danger
  return <script dangerouslySetInnerHTML={{ __html: colorModeConfig }} />;
};

export const onRenderBody = ({ setPreBodyComponents }) => {
  setPreBodyComponents(<InitializeTheme />);
};


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