import styled, { css } from "styled-components";

function margin({theme, isPage}){
	const margin = isPage ? "-3rem" : null;
	return css`
		margin-top: ${margin};
	`;
};

export const StyledProjectList =  styled.div`
	${margin};
`;