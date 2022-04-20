import styled from "styled-components";

export const StyledH3 = styled.h3`
margin: 0 0 1.25rem 0;
color: ${({ theme }) => theme.color.name[theme.color.bodyTxt]};
font-family: ${({ theme }) => theme.font.family.sourcesans};
font-weight: ${({ theme }) => theme.font.weight.light};
font-size: ${({ theme }) => theme.font.size.lg};
`;