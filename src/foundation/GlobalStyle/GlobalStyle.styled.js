import { createGlobalStyle, css } from "styled-components";
import { normalize } from "polished";

const StyledGlobalStyle = createGlobalStyle`
	${borderBox}
	${normilizeStyle}
	body{
		transition: background 0.3s ease;
		background: ${({ theme }) => theme.color.name[theme.color.bodyBg]};
		font-family: ${({ theme }) => theme.font.family.sourcesans};
		font-weight: ${({ theme }) => theme.font.weight.regular};
		font-size: ${({ theme }) => theme.font.size.xs};
		color: ${({ theme }) => theme.color.name[theme.color.bodyTxt]};
		#root{
			display:flex; 
			flex-direction:column;
			min-height: 100vh;
		}
	}
	a{
		h1,h2,h3,h4,h4,h5,p{
			text-decoration: underline;
		}
	}
	ul{
		line-height: 1.5rem;
	}
	a{
		color: ${({ theme }) => theme.color.name[theme.color.bodyTxt]};
	}
	h1{
		margin: 0 0 2rem 0;
		color: ${({ theme }) => theme.color.name[theme.color.bodyTxt]};
		font-family: 'Yeseva One';
		font-size: '3rem';
    line-height: '2.73rem';
	}
	h2{
		margin: 0 0 1.75rem 0;
		color: ${({ theme }) => theme.color.name[theme.color.bodyTxt]};
		font-weight: ${({ theme }) => theme.font.weight.light};
		font-size: ${({ theme }) => theme.font.size.xlg};
		font-family: ${({ theme }) => theme.font.family.sourcesans};
	}
	h3{
		margin: 0 0 1.25rem 0;
		color: ${({ theme }) => theme.color.name[theme.color.bodyTxt]};
		font-family: ${({ theme }) => theme.font.family.sourcesans};
		font-weight: ${({ theme }) => theme.font.weight.light};
		font-size: ${({ theme }) => theme.font.size.lg};
	}
	h4{
		margin: 0 0 1rem 0;
		color: ${({ theme }) => theme.color.name[theme.color.bodyTxt]};
		font-family: ${({ theme }) => theme.font.family.sourcesans};
		font-weight: ${({ theme }) => theme.font.weight.semibold};
		font-size: ${({ theme }) => theme.font.size.md};
	}
	h5{
		margin: 0 0 1rem 0;
		color: ${({ theme }) => theme.color.name[theme.color.bodyTxt]};
		font-family: ${({ theme }) => theme.font.family.sourcesans};
		font-weight: ${({ theme }) => theme.font.weight.semibold};
		font-size: ${({ theme }) => theme.font.size.sm};
	}
	p{
		color: ${({ theme }) => theme.color.name[theme.color.bodyTxt]};
		font-size: ${({ theme }) => theme.font.size.xs};
		font-family: ${({ theme }) => theme.font.family.sourcesans};
		font-weight: ${({ theme }) => theme.font.weight.regular};
		max-width: 40em;
		margin: 0 0 1.5rem 0;
		outline: transparent;
		line-height: 1.5rem;
		&:last-child{
			margin: 0;
		}
	}
	p.isCaption{
		font-size: ${({ theme }) => theme.font.size.xxs};
		border-top: "1px solid";
		border-color: ${({ theme }) => theme.color.bodyTxt};
		padding-top: "1.5rem";
	}
	p.xxs{
		font-size: ${({ theme }) => theme.font.size.xxs};
	}
	.iiz {
		max-width: 100%;
		margin: 0;
		position: relative;
		overflow: hidden;
		display: inline-block;
		cursor: -webkit-zoom-in;
		cursor: zoom-in;
	}

	.iiz--drag .iiz__zoom-img--visible {
		cursor: -webkit-grab;
		cursor: grab;
	}
	
	.iiz__img {
		max-width: 100%;
		height: auto;
		display: block;
		pointer-events: none;
		visibility: visible;
		opacity: 1;
	}
	
	.iiz__img--hidden {
		visibility: hidden;
		opacity: 0;
	}
	
	.iiz__img--abs {
		width: 100%;
		height: 100%;
		position: absolute;
		top: 0;
		left: 0;
		display: block;
	}
	
	.iiz__zoom-img {
		width: auto !important;
		max-width: none !important;
		position: absolute;
		visibility: hidden;
		opacity: 0;
		pointer-events: none;
		display: block;
	}
	
	.iiz__zoom-img--visible {
		visibility: visible;
		opacity: 1;
		pointer-events: auto;
		cursor: -webkit-zoom-out;
		cursor: zoom-out;
		-ms-touch-action: none;
		touch-action: none;
	}
	
	.iiz__zoom-portal {
		position: fixed;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		z-index: 10000;
		background: ${({ theme }) => theme.color.name[theme.color.bodyBg]};
	}
	
	.iiz__btn {
		background: ${({ theme }) => theme.color.name[theme.color.scrollUpBtn]};
		border-radius: 100%;
		width: 45px;
		height: 45px;
		border: none;
		outline: none;
		padding: 0;
		position: absolute;
		text-decoration: none;
		display: -webkit-box;
		display: -ms-flexbox;
		display: flex;
		-webkit-box-align: center;
		-ms-flex-align: center;
		align-items: center;
		-webkit-box-pack: center;
		-ms-flex-pack: center;
		justify-content: center;
		-moz-appearance: none;
		-webkit-appearance: none;
		appearance: none;
	}
	
	.iiz__btn:before {
		content: " ";
		background-position: center;
		background-repeat: no-repeat;
		display: block;
	}
	
	.iiz__hint {
		bottom: 0px;
		right: 0px;
		pointer-events: none;
	}
	
	.iiz__hint:before {
		content: " ";
		background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath d='M15.5 14h-.79l-.28-.27c1.2-1.4 1.82-3.31 1.48-5.34-.47-2.78-2.79-5-5.59-5.34-4.23-.52-7.79 3.04-7.27 7.27.34 2.8 2.56 5.12 5.34 5.59 2.03.34 3.94-.28 5.34-1.48l.27.28v.79l4.25 4.25c.41.41 1.08.41 1.49 0 .41-.41.41-1.08 0-1.49L15.5 14zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z' fill='%23${({ theme }) => theme.color.name[theme.color.buttonImg]}' /%3E%3C/svg%3E");
		width: 32px;
		height: 32px;
	}
	
	.iiz__close {
		top: 10px;
		right: 10px;
		visibility: hidden;
		opacity: 0;
	}
	
	.iiz__close--visible {
		visibility: visible;
		opacity: 1;
	}
	
	.iiz__close::before {
		content: " ";
		width: 29px;
		height: 29px;
		background-image:
			-webkit-gradient(linear, left top, left bottom, from(${({ theme }) => theme.color.name[theme.color.bodyTxt]}), to(${({ theme }) => theme.color.name[theme.color.bodyTxt]})),
			-webkit-gradient(linear, left top, left bottom, from(${({ theme }) => theme.color.name[theme.color.bodyTxt]}), to(${({ theme }) => theme.color.name[theme.color.bodyTxt]}));
		background-image: linear-gradient(${({ theme }) => theme.color.name[theme.color.bodyTxt]}, ${({ theme }) => theme.color.name[theme.color.bodyTxt]}), linear-gradient(${({ theme }) => theme.color.name[theme.color.bodyTxt]}, ${({ theme }) => theme.color.name[theme.color.bodyTxt]});
		background-size: 100% 2px, 2px 100%;
		-webkit-transform: rotate(45deg);
		transform: rotate(45deg);
	}
`;

function borderBox(){
	return(
		css`
			*,
			*:before,
			*:after{
				box-sizing: border-box;
			}
		`
	);
}

function normilizeStyle(){
	return normalize();
}

export default StyledGlobalStyle;