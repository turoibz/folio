import styled, { css } from "styled-components";

const iconSize = css`
  ${({size, theme}) => `
    width: ${theme.icon.size[size]};
    height: ${theme.icon.size[size]};
  `}
`;

const iconColor = css`
  ${({color, theme}) => `
    fill: ${theme.color.name[color]};
    color: ${theme.color.name[color]};
  `}
`;

export const StyledIcon = styled.svg.attrs(props => ({
  viewBox: '0 0 24 24',
  focusable: 'false',
  'aria-hidden': 'true'
}))`
  display: inline-block;
  flex: 0 0 auto;
  ${({ theme }) => iconSize};
  ${({ theme }) => iconColor};
`;

