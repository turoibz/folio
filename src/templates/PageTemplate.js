import React from "react";
import { graphql } from "gatsby";
import Head from "./../components/Head/Head";
import Page from "./../components/Page/Page";

export const query = graphql`
  query Page($pageId: String!) {
    nodePage(id: {eq: $pageId}) {
      body {
        processed
      }
      title
      field_heading
    }
  }
`;
const PageTemplate = ({data}) => {
  const page = {
    title: data.nodePage.title,
    heading: data.nodePage.field_heading,
    body: data.nodePage.body.processed
  }

  return(
    <>
      <Head title={page.title}/>
      <Page {...page}/>
    </>
  )
}

export default PageTemplate;