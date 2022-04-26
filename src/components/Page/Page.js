import React from "react";
import { Container, Row, Col } from "styled-bootstrap-grid";
import { Spacer } from "../../components/Spacer/Spacer";
import { H1 } from "./../../foundation/Typography";

function Page({heading, body}) {
  return(
    <>
      <Container>
        <Row>
          <Col col={12} sm={12} md={12} mdOffset={0}>
            <H1>{heading}</H1>
            <article dangerouslySetInnerHTML={{ __html:body}}/>
          </Col>
        </Row>
        <Spacer/>
      </Container>
    </>
  )
}

export default Page;