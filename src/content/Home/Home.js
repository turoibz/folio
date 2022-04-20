import React, { useContext } from "react";
import { ThemeContext } from "styled-components";
import { Container, Row, Col } from "styled-bootstrap-grid";
import { Spacer } from "../../components/Spacer/Spacer";
import { H1, H2 } from "./../../foundation/Typography";
import { StyledHome } from "./Home.styled";
import { Glasses } from "../../components/Glasses/Glasses";
import { ProjectList } from "../../components/ProjectList/ProjectList";
import { CurrentStatus } from "../../components/CurrentStatus/CurrentStatus";

export function Home(){
  const theme = useContext(ThemeContext)
  return(
    <>
      <Container>
        <Row>
          <Col col={12} sm={12} md={6} mdOffset={0}>
            <StyledHome>
              <H2>Interaction Designer</H2>
              <H1 isHeadline>Arturo Ibanez</H1>
              <br/>
              <CurrentStatus isWorking label={"Designing Products @ Zendesk"}/>
            </StyledHome>
          </Col>
          <Col col={12} sm={12} md={6} mdOffset={0}>
            <StyledHome>
              <br/>
              <br/>
              <Glasses color={theme.color.meFill}/>
            </StyledHome>
          </Col>
        </Row>
        <Spacer/>
      </Container>
      <ProjectList isHomePage/>
    </>
  )
}