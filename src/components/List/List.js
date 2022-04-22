import React, { useContext } from "react";
import Image from "gatsby-image";
import ScrollContainer from 'react-indiana-drag-scroll';
import { Link as NavLink } from "gatsby";
import { H4, Paragraph } from "./../../foundation/Typography";
import { ThemeContext } from "styled-components";
import { ChevronRightIcon } from "../../foundation/Icon";
import { StyledList, StyledListItem, StyledListItemContent } from "./List.styled";

export function List({children, ...props}){
  return(
    <ScrollContainer className="scroll-container">
      <StyledList isPage={props.isPage} isHomePage={props.isHomePage}>
        {children}
      </StyledList>
    </ScrollContainer>
  )
}

export function ListItem({...props}){
  const theme = useContext(ThemeContext);
  return(
    <StyledListItem>
      <NavLink activeClassName="active" to={props.path}>
        <Image fluid={props.cover} alt={props.altTxt} className={"projectImg"}/>
        <StyledListItemContent>
          <Paragraph>
            {props.label}
          </Paragraph>
          <H4>
            {props.tagline}
          </H4>
          <Paragraph xxs>
            {props.date}
          </Paragraph>
          <Paragraph xxs>
            {props.about}
          </Paragraph>
        </StyledListItemContent>
        <ChevronRightIcon size="md" color={theme.color.list}/>
      </NavLink>
    </StyledListItem>
  )
}