import styled, { css } from "styled-components";

export const StyledH2 = styled.h2`
margin: 0 0 1.75rem 0;
color: ${({ theme }) => theme.color.name[theme.color.bodyTxt]};
font-weight: ${({ theme }) => theme.font.weight.light};
font-size: ${({ theme }) => theme.font.size.xlg};
${fontFamily};
`;

function fontFamily({theme, isVariant}){
  const family = isVariant ? 'Yeseva One' : theme.font.family.sourcesans;
  return css`
    font-family: ${family};
  `;
}