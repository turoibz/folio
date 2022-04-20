import React from "react";
import { Container, Row, Col } from "styled-bootstrap-grid";
import { LinkedInButton } from "../LinkedInButton/LinkedInButton";
// import { ScrollUpButton } from "../ScrollUpButton/ScrollUpButton";
import { H2, H3, Paragraph } from "./../../foundation/Typography";
import { StyledFooter} from "./Footer.styled";
 
export function Footer(){
  return (
    <StyledFooter>
      <Container>
        <Row>
          <Col col={12} sm={12} md={12} mdOffset={0}>
            {/* <ScrollUpButton/> */}
            <H2 isVariant>Connect With  Me</H2>
            <H3>me@arturoibanez.com</H3>
            <br></br>
            <LinkedInButton/>
            <br/>
            <br/>
            <br/>
            <br/>
            <Paragraph xxs>Designed in the DOM, built with React — Arturo Ibanez 2021. All Rights Reserved.</Paragraph>
            <Paragraph isCaption>I acknowledge Aboriginal and Torres Strait Islander
              peoples as the First Australians and Traditional Custodians
              of the lands where I currently live, work, and play.
            </Paragraph>
          </Col>
        </Row>
      </Container>
    </StyledFooter>
  )
}