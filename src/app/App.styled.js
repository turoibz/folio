import styled from "styled-components";


export const StyledContentWrapper = styled.section`
	padding: 2rem 0 0 0;
	flex: 1 auto;
	display: flex;
	flex-direction: column;
	justify-content: center;
`;

export const StyledAppBackground = styled.div`
	position: fixed;
	height: 100vh;
	width: 100vw;
	margin: 0;
	padding: 0;
	background: transparent;
	z-index: -1;
	top: 0;
	left: 0;
	svg{
		top: 0;
		right: -150%;
	}
`;
