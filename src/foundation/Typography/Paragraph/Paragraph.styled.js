// import { border } from "polished";
import styled, { css } from "styled-components";

export const StyledParagraph = styled.p`
	color: ${({ theme }) => theme.color.name[theme.color.bodyTxt]};
	${size};
	${border};
	font-family: ${({ theme }) => theme.font.family.sourcesans};
	font-weight: ${({ theme }) => theme.font.weight.regular};
	max-width: 40em;
	margin: 0 0 1.5rem 0;
	outline: transparent;
	line-height: 1.5rem;
	&:last-child{
		margin: 0;
	}
`;

function border({theme, isCaption}){
	const borderColor = isCaption ? theme.color.bodyTxt : null;
	const borderStyle = isCaption ? "1px solid" : null;
	const padding = isCaption ? "1.5rem" : null;
	return css`
		border-top: ${borderStyle};
		border-color: ${borderColor};
		padding-top: ${padding};
	`;
};

function size({theme, isCaption, xxs}){
  const fontSize = isCaption || xxs ? theme.font.size.xxs : theme.font.size.xs;
  return css`
    font-size: ${fontSize};
  `;
}