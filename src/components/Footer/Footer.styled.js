import styled from "styled-components";

export const StyledFooter = styled.footer`
  padding: 3rem 0 4rem 0;
  background: ${({ theme }) => theme.color.name[theme.color.footerBg]};
`;

