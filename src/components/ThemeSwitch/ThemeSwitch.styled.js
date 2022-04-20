import styled from "styled-components";

export const StyledThemeSwitch = styled.button`
  cursor: pointer;
  border: none;
  border-radius: 4px;
  background: transparent;
  padding: 0;
  display: flex;
  outline: 1px solid transparent;
  font-family: ${({ theme }) => theme.font.family.sourcesans};
  &:focus{
    outline: 1px dotted ${({ theme }) => theme.color.name[theme.color.bodyTxt]};
  }
`;