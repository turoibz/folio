import React from "react";
import { graphql } from "gatsby";
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
    <Page {...page}/>
  )
}

export default PageTemplate;