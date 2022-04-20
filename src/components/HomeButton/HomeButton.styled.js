import styled from "styled-components";

export const StyledHomeButton = styled.div`
  line-height: 0;
  *{
    line-height:0;
    display: inline-block;
    &:focus{
      outline: 1px dotted ${({ theme }) => theme.color.name[theme.color.bodyTxt]};
    }
  }
`;