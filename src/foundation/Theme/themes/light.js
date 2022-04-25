import { rem } from "polished";

const Light =  {
	id:"light",
	color: {
		bodyBg: "isabelline",
		bodyTxt: "raisingBlack",
		projectsBg: "sand",
		footerBg: "bone",
		navigation: "raisingBlack",
		scrollUpBtn: "grullo",
		buttonImg: "raisingBlackValue",
		shadow: "shadow",
		currentStatusBg: "grullo",
		currentStatusTxt: "umber",
		meFill:"raisingBlack",
		border: "grullo",
		list: "umber",
		name:{
			raisingBlack: "#252323",
			raisingBlackValue: "252323",
			eerieBlack: "#121216",
			slateGray: "#70798C",
			umber: "#6B5D4C",
			isabelline: "#F5F1ED",
			bone: "#EAE3D7",
			grullo: "#A99985",
			sand: "#f3eee5",
			shadow: "#c2beb7",
		}
	},
	font:{
		family:{
			sourcesans: "Source Sans Pro, sans-serif",
			yeseve: "Yeseva One, serif",
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
		suffix: "_light"
	}
}

export default Light;