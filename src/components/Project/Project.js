import React from "react";
import Image from "gatsby-image";
import { Container, Row, Col } from "styled-bootstrap-grid";
import { Spacer } from "../../components/Spacer/Spacer";
import { ProjectList } from "../../components/ProjectList/ProjectList";
import { H1, Paragraph } from "./../../foundation/Typography";
import { StyledImage } from "./Project.style";

import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'

function Project({heading, projectType, projectDate, body, images}){
  return(
    <>
      <Container>
        <Row>
          <Col col={12} sm={12} md={12} mdOffset={0}>
            <H1>{ heading }</H1>
            <Paragraph isCaption>This project is about - { projectType }</Paragraph>
            <Paragraph xxs>Project finalised on { projectDate }</Paragraph>
            <article dangerouslySetInnerHTML={ { __html:body } }/>
            <Spacer/>
          </Col>
        </Row>
        <Row>
          <Col col={12} sm={8} md={8} mdOffset={0}>
            {images.map((image) => (
              <Zoom>
                <StyledImage>
                  <Image fluid={image.localFile.childImageSharp.fluid} alt={"Project image"}/>
                </StyledImage>
              </Zoom>
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