import React from "react";
import { Container, Row, Col } from "styled-bootstrap-grid";
import { Spacer } from "./../../components/Spacer/Spacer"
import { H1, H2 } from "./../../foundation/Typography";
import { StyledFourOFour, StyledEmoji } from "./404.styled";

export function FourOFour(){
  return(
    <Container>
      <Row>
        <Col col={12} sm={12} md={6} mdOffset={0}>
          <StyledFourOFour>
            <Spacer/>
            <Spacer/>
            <H1>Oops!</H1>
            <H2>This page doesn't exist or it was removed.</H2>
            <Spacer/>
            <Spacer/>
          </StyledFourOFour>
        </Col>
        <Col col={12} sm={12} md={6} mdOffset={0}>
          <StyledFourOFour>
            <Spacer/>
            <Spacer/>
            <StyledEmoji>{"(>_<)"}</StyledEmoji>
            <Spacer/>
            <Spacer/>
          </StyledFourOFour>
        </Col>
      </Row>
    </Container>
  )
}