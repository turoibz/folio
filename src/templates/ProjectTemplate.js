import React from "react";
import { graphql } from "gatsby";
import Head from "./../components/Head/Head";
import Project from "./../components/Project/Project";

export const query = graphql`
  query Project($projectId: String!) {
    nodeProject(id: {eq: $projectId}) {
      body {
        processed
      }
      title
      field_heading
      field_is_about
      field_project_date
      field_project_image {
        alt
      }
      relationships {
        field_project_image {
          localFile {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`;

const ProjectTemplate = ({data}) => {
  const project = {
    title: data.nodeProject.title,
    heading: data.nodeProject.field_heading,
    projectType: data.nodeProject.field_is_about,
    projectDate: data.nodeProject.field_project_date,
    body: data.nodeProject.body.processed,
    images: data.nodeProject.relationships.field_project_image
  }

  return(
    <>
     <Head title={project.title}/>
     <Project {...project}/>
    </>
  )
}

export default ProjectTemplate;