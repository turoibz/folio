import styled, { css } from "styled-components";


const meColor = css`
  ${({color, theme}) => `
    fill: ${theme.color.name[color]};
    color: ${theme.color.name[color]};
  `}
`;

export const StyledMe = styled.svg.attrs(props => ({
  viewBox: '0 0 500 250',
  focusable: 'false',
  'aria-hidden': 'true'
}))`
  display: inline-block;
  flex: 0 0 auto;
  ${({ theme }) => meColor};
`;

