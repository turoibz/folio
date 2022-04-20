import React from "react";
import { graphql } from "gatsby";
import { ThemeConfig } from "./../app/App.config";
import App from './../app/App';
import { Project } from "./../components/Project/Project";

export const query = graphql`
  query Project($projectId: String!) {
    nodeProject(id: {eq: $projectId}) {
      body {
        processed
      }
      title
      field_is_about
    }
  }
`;
const ProjectTemplate = ({data}) => {
  const project = {
    title: data.nodeProject.title,
    projectType: data.nodeProject.field_is_about,
    body: data.nodeProject.body.processed
  }

  return(
    <>
      <ThemeConfig>
        <App>
          <Project {...project}/>
        </App>
      </ThemeConfig>
    </>
  )
}

export default ProjectTemplate;