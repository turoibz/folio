import React from "react";
import { StaticQuery, graphql } from "gatsby";
import { Container, Row, Col } from "styled-bootstrap-grid";
import { List, ListItem } from "./../List";
import { Spacer } from "../Spacer/Spacer";
import { StyledProjectList } from "./ProjectList.styled";
import { H2 } from "./../../foundation/Typography";

export const query = graphql`
  query projectListResult {
    allNodeProject(sort: {fields: field_order, order: ASC}) {
      nodes {
        field_is_about
        id
        path {
          alias
        }
        field_client
        field_tag_line
        field_project_date
        field_cover {
          alt
        }
        relationships {
          field_cover {
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
  }
`;

export function ProjectList({...props}){
  return(
    <StaticQuery
      query={ query }
      render={ data => (
        <StyledProjectList isPage={props.isPage}>
          <Spacer/>
          <Container>
            <Row>
              <Col col={12} sm={12} md={12}>
                {!props.isPage &&
                  <H2 isVariant>My Work</H2>
                }
                <List isPage={props.isPage}  isHomePage={props.isHomePage}>
                  {data.allNodeProject.nodes.map((node) => (
                    <ListItem
                      key={node.id}
                      cover={node.relationships.field_cover.localFile.childImageSharp.fluid}
                      path={node.path.alias}
                      label={node.field_client}
                      tagline={node.field_tag_line}
                      date={node.field_project_date}
                      about={node.field_is_about}
                      altTxt={node.field_cover.alt}
                    />
                  ))}
                </List>
              </Col>
            </Row>
            <Spacer/>
          </Container>
        </StyledProjectList>
      )}
    />
  )
}