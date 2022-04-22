import React from "react";
import Image from "gatsby-image";
import { Container, Row, Col } from "styled-bootstrap-grid";
import { Spacer } from "../../components/Spacer/Spacer";
import { ProjectList } from "../../components/ProjectList/ProjectList";
import { H1, Paragraph } from "./../../foundation/Typography";

function Project({title, projectType, projectDate, body, images}){
  return(
    <>
      <Container>
        <Row>
          <Col col={12} sm={12} md={12} mdOffset={0}>
            <H1>{ title }</H1>
            <Paragraph isCaption>This project is about - { projectType }</Paragraph>
            <Paragraph xxs>Project finalised on { projectDate }</Paragraph>
            <article dangerouslySetInnerHTML={ { __html:body } }/>
            <Spacer/>
            {images.map((image) => (
              <Image fluid={image.localFile.childImageSharp.fluid} alt={"Temp text"}/>
            ))}
          </Col>
        </Row>
        <Spacer/>
      </Container>
      <ProjectList/>
    </>
  )
}

export default Project;