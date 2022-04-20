import styled from "styled-components";

export const StyledButton = styled.button`
  padding: 0;
  display: flex;
  align-items: center;
  background: transparent;
  border: none;
  outline: 1px solid transparent;
  a{
    color: ${({ theme }) => theme.color.name[theme.color.bodyTxt]};
    margin-right: 1rem;
  }
  :focus{
    outline: 1px dotted ${({ theme }) => theme.color.name[theme.color.bodyTxt]};
  }
`;