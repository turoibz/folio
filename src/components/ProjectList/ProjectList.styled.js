import styled, { css } from "styled-components";

function bg({theme, isPage}){
	const backgroundColor = isPage ? "transparent" : theme.color.name[theme.color.projectsBg];
	return css`
		background: ${backgroundColor};
	`;
};
function margin({theme, isPage}){
	const margin = isPage ? "-3rem" : null;
	return css`
		margin-top: ${margin};
	`;
};

export const StyledProjectList =  styled.div`
  ${bg};
	${margin};
`
