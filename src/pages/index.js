import * as React from "react";
import { ThemeConfig } from "./../app/App.config";
import App from './../app/App';
import { Home } from "../content/Home/Home";

const IndexPage = () => {
  return (
    <>
      <ThemeConfig>
        <App>
          <Home/>
        </App>
      </ThemeConfig>
    </>
  )
}

export default IndexPage;
