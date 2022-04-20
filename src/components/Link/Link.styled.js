import styled from "styled-components";

export const StyledLink = styled.span`
  display: inline-block;
  padding: 0 1rem;
  a{
    font-family: ${({ theme }) => theme.font.family.sourcesans};
    font-size: ${({ theme }) => theme.font.size.sm};
    color: ${({ theme }) => theme.color.name[theme.color.bodyTxt]};
    font-weight: 600;
    text-decoration: none;
    text-transform: uppercase;
    &:focus{
      outline: 1px dotted ${({ theme }) => theme.color.name[theme.color.bodyTxt]};
    }
    &:hover{
      text-decoration: underline;
    }
  }
`;