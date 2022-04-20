import React from "react";
import { graphql } from "gatsby";
import { ThemeConfig } from "./../app/App.config";
import App from './../app/App';
import { Page } from "./../components/Page/Page";

export const query = graphql`
  query Page($pageId: String!) {
    nodePage(id: {eq: $pageId}) {
      body {
        processed
      }
      title
    }
  }
`;
const PageTemplate = ({data}) => {
  const page = {
    title: data.nodePage.title,
    body: data.nodePage.body.processed
  }

  return(
    <>
      <ThemeConfig>
        <App>
          <Page {...page}/>
        </App>
      </ThemeConfig>
    </>
  )
}

export default PageTemplate;