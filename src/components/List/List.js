import React, { useContext } from "react";
import ScrollContainer from 'react-indiana-drag-scroll'
import { Link as NavLink } from "gatsby";
import { H4, Paragraph } from "./../../foundation/Typography"
import { ThemeContext } from "styled-components";
import { ChevronRightIcon } from "../../foundation/Icon";
import { StyledList, StyledListItem } from "./List.styled";

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
        {/* <img className={"projectImg"} src={props.img} alt={props.altTxt}/> */}
        <Paragraph>
          {props.label}
        </Paragraph>
        <H4>
          {props.tagline}
        </H4>
        <Paragraph xxs>
          {props.about}
        </Paragraph>
        <ChevronRightIcon size="md" color={theme.color.list}/>
      </NavLink>
    </StyledListItem>
  )
}