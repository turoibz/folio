import React from "react";
import { Container, Row, Col } from "styled-bootstrap-grid";
import { Spacer } from "../../components/Spacer/Spacer";
import { H1 } from "./../../foundation/Typography";



export function Page({title, body}){
  return(
    <>
      <Container>
        <Row>
          <Col col={12} sm={12} md={12} mdOffset={0}>
            <H1>{title}</H1>
            <main dangerouslySetInnerHTML={{ __html:body}}/>
          </Col>
        </Row>
        <Spacer/>
      </Container>
    </>
  )
}