import React from "react";
import { graphql } from "gatsby";
import App from "../app/App";
import Page from "./../components/Page/Page";

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
    <App>
      <Page {...page}/>
    </App>
  )
}

export default PageTemplate;