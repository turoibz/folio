import React from "react";
import { Container, Row, Col } from "styled-bootstrap-grid";
import { H1, H2 } from "./../../foundation/Typography";
import { ProjectList } from "../../components/ProjectList/ProjectList";


export function Work(){
  return(
    <>
      <Container>
        <Row>
          <Col col={12} md={12} sm={12}>
            <H1>Work</H1>
            <H2>These are some of the projects I've worked on</H2>
          </Col>
        </Row>
      </Container>
      <ProjectList isPage/>
    </>
  )
}