import * as React from "react";
import { ThemeConfig } from "./../app/App.config";
import App from './../app/App';
import { Work } from "../content/Work/Work";

const WorkPage = () => {
  return (
    <>
      <ThemeConfig>
        <App>
          <Work/>
        </App>
      </ThemeConfig>
    </>
  )
}

export default WorkPage;