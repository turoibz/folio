import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { ThemeProvider } from "styled-components";
import { GridThemeProvider } from "styled-bootstrap-grid";
import Dark from "./themes/dark";
import Light from "./themes/light"

const themes = {
	dark: Dark,
	light: Light
}

const Theme = ({children, theme}) => {
	const currentTheme = themes[theme];

	return (
		<ThemeProvider theme={currentTheme}>
			<HelmetProvider>
				<Helmet>
					<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no viewport-fit=cover"/>
					<link rel="preconnect" href="https://fonts.gstatic.com"/>
					<link href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300;400;600&family=Yeseva+One&display=swap" rel="stylesheet"/>
				</Helmet>
			</HelmetProvider>
			<GridThemeProvider gridTheme={currentTheme.grid}>
				{ children }
			</GridThemeProvider>
		</ThemeProvider>
	)
}

export default Theme