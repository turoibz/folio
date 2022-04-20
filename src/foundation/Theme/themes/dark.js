import { rem } from "polished";

export default {
	id:"dark",
	color: {
		bodyBg: "raisingBlack",
		bodyTxt: "isabelline",
		projectsBg: "dark",
		footerBg: "eerieBlack",
		navigation: "isabelline",
		scrollUpBtn: "slateGray",
		buttonImg: "isabellineValue",
		shadow: "shadow",
		currentStatusBg: "slateGray",
		currentStatusTxt: "silverSand",
		meFill:"isabelline",
		border: "slateGray",
		list: "silverSand",
		name:{
			raisingBlack: "#252323",
			eerieBlack: "#121216",
			slateGray: "#70798C",
			silverSand: "#C6CAD2",
			isabelline: "#F5F1ED",
			isabellineValue: "F5F1ED",
			bone: "#DAD2BC",
			grullo: "#A99985",
			dark: "#1a1a1b",
			shadow: "#101011"
		}
	},
	font:{
		family:{
			sourcesans: "Source Sans Pro, sans-serif",
			yeseve: "Yeseva One', serif",
		},
		weight:{
			light: 300,
			regular: 400,
			semibold: 600
		},
		size:{
			xxs: rem('14px'),
			xs: rem('17px'),
			sm: rem('18px'),
			md: rem('20px'),
			lg: rem('24px'),
			xlg: rem('32px'),
			xxlg: rem('40px'),
		}
	},
	grid:{
		row:{
			padding: 0
		},
		col:{
			padding: 10
		},
		container: {
			padding: 0,
			maxWidth: {
				xxl: 1141,
				xl: 1140,
				lg: 960,
				md: 720,
				sm: 540,
				xs: 540,
				}
		}
	},
	icon:{
		size: {
			tn: rem('20px'),
			sm: rem('24px'),
			md: rem('32px'),
			lg: rem('40px')
		}
	},
	img:{
		suffix: "_dark"
	}
}