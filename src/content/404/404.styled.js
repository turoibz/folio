import styled from "styled-components";

export const StyledFourOFour = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media (max-width: 767px){
    align-items: center;
    h1{
      text-align: center;
    }
  }
`;

export const StyledEmoji = styled.div`
  font-size: 6rem;
  text-align: center;
`;