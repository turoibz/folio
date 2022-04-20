import * as React from "react";
import { ThemeConfig } from "./../app/App.config";
import App from './../app/App';
import { FourOFour } from "../content/404/404";

const NotFoundPage = () => {
  return (
    <>
      <ThemeConfig>
        <App>
          <FourOFour/>
        </App>
      </ThemeConfig>
    </>
  )
}

export default NotFoundPage
