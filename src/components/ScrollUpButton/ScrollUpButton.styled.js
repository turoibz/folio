import styled, {keyframes} from "styled-components";


const fadeIn = keyframes`
  0%   { opacity: 0; }
  100% { opacity: 1; }
`;

export const StyledScrollUp = styled.button`
  box-sizing: content-box;
  border: none;
  cursor: pointer;
  border-radius: 50%;
  height: 36px;
  width: 36px;
  display: ${props => props.showScrollUp ? "flex" : "none"};
  animation: ${fadeIn} .3s;
  align-items: center;
  justify-content: center;
  padding: .25rem;
  background: ${({ theme }) => theme.color.name[theme.color.scrollUpBtn]};
  outline: 1px solid transparent;
  position: absolute;
  top: -4.25rem;
  right: 1rem;
  :focus{
    outline: 1px dotted ${({ theme }) => theme.color.name[theme.color.bodyTxt]};
  }

`;