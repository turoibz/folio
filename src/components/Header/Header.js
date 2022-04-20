import React from "react";
import { useThemeUpdateConfig } from "../../app/App.config";
import { Container, Row, Col } from "styled-bootstrap-grid";
import { HomeButton } from "../HomeButton/HomeButton";
import { ThemeSwitch } from "../ThemeSwitch/ThemeSwitch";
import { Navigation } from "../Navigation/Navigation";
import { StyledHeader, StyledHeaderContent, StyledHeaderGroup } from "./Header.styled";

export function Header(){
  const toggleTheme = useThemeUpdateConfig();
  return(
    <StyledHeader>
      <Container>
        <Row>
          <Col col={12} sm={12} md={12}>
            <StyledHeaderContent>
              <HomeButton/>
              <StyledHeaderGroup>
                <Navigation/>         
                <ThemeSwitch onClick={toggleTheme}/>
              </StyledHeaderGroup>
            </StyledHeaderContent>
          </Col>
        </Row>
      </Container>
    </StyledHeader>
  )
}