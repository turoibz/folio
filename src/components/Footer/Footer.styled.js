import styled from "styled-components";

export const StyledFooter = styled.footer`
  padding: 8rem 0 4rem 0;
  background: linear-gradient( ${({ theme }) => theme.color.name[theme.color.bodyBg]} 0%, ${({ theme }) => theme.color.name[theme.color.footerBg]} 30%);
`;

