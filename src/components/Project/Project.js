import React from "react";
import { Container, Row, Col } from "styled-bootstrap-grid";
import { Spacer } from "../../components/Spacer/Spacer";
import { H1, Paragraph } from "./../../foundation/Typography";

function Project({title, projectType, projectDate, body}){
  return(
    <>
      <Container>
        <Row>
          <Col col={12} sm={12} md={12} mdOffset={0}>
            <H1>{ title }</H1>
            <Paragraph isCaption>This project is about - { projectType }</Paragraph>
            <Paragraph xxs>Project finalised on { projectDate }</Paragraph>
            <article dangerouslySetInnerHTML={ { __html:body } }/>
          </Col>
        </Row>
        <Spacer/>
      </Container>
    </>
  )
}

export default Project;