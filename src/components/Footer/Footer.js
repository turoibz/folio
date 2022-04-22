import React from "react";
import { StaticQuery, graphql } from "gatsby";
import { Container, Row, Col } from "styled-bootstrap-grid";
import { LinkedInButton } from "../LinkedInButton/LinkedInButton";
// import { ScrollUpButton } from "../ScrollUpButton/ScrollUpButton";
import { H2, H3 } from "./../../foundation/Typography";
import { Spacer } from "../Spacer/Spacer";
import { StyledFooter} from "./Footer.styled";


export const query = graphql`
  query folioFooter {
    allNodeFolioInformation(
      limit: 1
      filter: {}
      sort: {fields: created, order: DESC}
    ) {
      nodes {
        field_footer {
          processed
        }
      }
    }
  }
`;

export function Footer(){
  return(
    <StaticQuery
      query={ query }
      render={ data => (
        <StyledFooter>
          <Container>
            <Row>
              <Col col={12} sm={12} md={12} mdOffset={0}>
                {/* <ScrollUpButton/> */}
                <H2 isVariant>Connect With  Me</H2>
                <H3>me@arturoibanez.com</H3>
                <LinkedInButton/>
                <Spacer/>
                <div dangerouslySetInnerHTML={ { __html:data.allNodeFolioInformation.nodes[0].field_footer.processed } }/>
              </Col>
            </Row>
          </Container>
        </StyledFooter>
      )}
    />
  )
}