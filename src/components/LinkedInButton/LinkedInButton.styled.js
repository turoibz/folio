import styled from "styled-components";

export const StyledLinkedInButton = styled.button`
  background: transparent;
  border: none;
  outline: 1px solid transparent;
  padding: 0;
  line-height:0;
  a{
    display: inline-block;
    line-height:0;
  }
  :focus{
    outline: 1px dotted ${({ theme }) => theme.color.name[theme.color.bodyTxt]};
  }
`;