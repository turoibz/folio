import React from "react";
import { Container, Row, Col } from "styled-bootstrap-grid";
import { Spacer } from "../../components/Spacer/Spacer";
import { H1, Paragraph } from "./../../foundation/Typography";



export function Project({title, projectType, body}){
  return(
    <>
      <Container>
        <Row>
          <Col col={12} sm={12} md={12} mdOffset={0}>
            <H1>{title}</H1>
            <Paragraph isCaption>This project is about: {projectType}</Paragraph>
            <main dangerouslySetInnerHTML={{ __html:body}}/>
          </Col>
        </Row>
        <Spacer/>
      </Container>
    </>
  )
}