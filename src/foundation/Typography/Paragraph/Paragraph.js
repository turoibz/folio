import React from "react";
import { StyledParagraph } from "./Paragraph.styled";

export function Paragraph({children, ...props}){
	return (
		<StyledParagraph isCaption={props.isCaption} xxs={props.xxs}>
			{children}
		</StyledParagraph>
	)
}