import React from "react";
import { graphql } from "gatsby";
import Project from "./../components/Project/Project";

export const query = graphql`
  query Project($projectId: String!) {
    nodeProject(id: {eq: $projectId}) {
      body {
        processed
      }
      title
      field_is_about
      field_project_date
    }
  }
`;

const ProjectTemplate = ({data}) => {
  const project = {
    title: data.nodeProject.title,
    projectType: data.nodeProject.field_is_about,
    projectDate: data.nodeProject.field_project_date,
    body: data.nodeProject.body.processed
  }

  return(
    <Project {...project}/>
  )
}

export default ProjectTemplate;