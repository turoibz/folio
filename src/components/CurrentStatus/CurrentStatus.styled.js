import styled from "styled-components";

export const StyledStatus = styled.span`
  width: fit-content;
  padding: .75rem 0rem;
  display: flex;
  align-items: center;
  *{
    color: ${({ theme }) => theme.color.name[theme.color.currentStatusTxt]};
    margin: 0;
  }
  svg{
    margin-right: 1rem;
  }
`;