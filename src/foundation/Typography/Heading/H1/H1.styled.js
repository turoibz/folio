import styled, { css } from "styled-components";

export const StyledH1 = styled.h1`
  margin: 0 0 2rem 0;
  color: ${({ theme }) => theme.color.name[theme.color.bodyTxt]};
  font-family: 'Yeseva One';
  ${size};
  
`;

function size({theme, isHeadline}){
  const fontSize = isHeadline ? "4rem" : "3rem";
  const fontLineHeight = isHeadline ? "3.25rem" : "2.75rem";
  return css`
    font-size: ${fontSize};
    line-height: ${fontLineHeight};
  `;
}