import React from "react";
import { Container, Row, Col } from "styled-bootstrap-grid";
import { H1, H2 } from "./../../foundation/Typography";
import { StyledFourOFour, StyledEmoji } from "./404.styled";

export function FourOFour(){
  return(
    <Container>
      <Row>
        <Col col={12} sm={12} md={6} mdOffset={0}>
          <StyledFourOFour>
            <br/>
            <br/>
            <H1>Oops!</H1>
            <H2>This page doesn't exist or it was removed.</H2>
            <br/>
          </StyledFourOFour>
        </Col>
        <Col col={12} sm={12} md={6} mdOffset={0}>
          <StyledFourOFour>
            <br/>
            <br/>
            <StyledEmoji>{"(>_<)"}</StyledEmoji>
          </StyledFourOFour>
        </Col>
      </Row>
    </Container>
  )
}