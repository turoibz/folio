import styled, { css } from "styled-components";

function layout({theme, isPage, isHomePage}){
	const display = isPage ? "grid" : "flex";
	const columGap = isPage ? "1rem" : null;
	const rowGap = isPage ? "1rem" : null;
	const gridTemplate = isPage ? "1fr 1fr" : null;
	const gridTemplateMobile = isPage ? "1fr" : null;
	const childMargin = isPage ? "0" : "1rem";
	const fixMargin = isPage ? "-3rem" : null;
	const displayImg = isHomePage ? "none" : "block";
  const backgroundColor = isPage ? theme.color.name[theme.color.projectsBg] : theme.color.name[theme.color.bodyBg];
  const displayClearFix = isPage ? "none" : "block";
	return css`
		display: ${display};
    grid-column-gap: ${columGap};
    grid-row-gap: ${rowGap};
    grid-template-columns: ${gridTemplate};
    //margin-top: ${fixMargin};
    @media (max-width: 767px){
      grid-template-columns: ${gridTemplateMobile};
    }
    li{
      margin-right: ${childMargin};
      a{
        background: ${backgroundColor};
      }
      :last-child{
        display: flex;
      }
      :last-child::after{
        display: ${displayClearFix};
        content: "";
        width: 0px;
        margin-left: 10px;
      }
    }
    .projectImg{
      display: ${displayImg};
      margin-bottom: -2em;
    }
	`;
};

export const StyledList = styled.ul`
  margin: 0;
  padding: 0;
  // overflow: scroll;
  padding: 6px;
  ${layout};
  -ms-overflow-style: none;
  scrollbar-width: none;
  ::-webkit-scrollbar { 
    display: none;
  }
`;

export const StyledListItem = styled.li`
  list-style-type: none;
  flex: 1;
  min-width: 30%;
  //margin: 0 1rem 0 0;
  color: ${({ theme }) => theme.color.name[theme.color.list]};
  // background: ${({ theme }) => theme.color.name[theme.color.bodyBg]};
  // @media (min-width:  992px) and (max-width: 768){
  //   min-width: 25%;
  // }
  // @media (min-width: 767px){
  //   min-width: 45%;
  // }
  @media (max-width: 767px){
    min-width: 90%;
  }
  :last-child{
    margin-right: 0;
  }
  a{
    border-radius: 4px;
    position: relative;
    overflow: hidden;
    // padding: 2rem;
    display: block;
    height: 100%;
    box-shadow: 0px 0px 3px 1px ${({ theme }) => theme.color.name[theme.color.shadow]};
    align-items: center;
    color: inherit;
    text-decoration: none;
    transition: transform 250ms ease;
    // img{
    //   width: calc(100% + 4rem);
    //   margin: -2rem -2rem 0 -2rem;
    //   border-radius: 4px 4px 0 0;
    // }
    svg{
      position: absolute;
      bottom: 1rem;
      right: 1rem;
    }
    *{
      text-decoration: none;
    }
    :hover{
      cursor: pointer;
      text-decoration: none;
      transform: scale(101%,101%);
      box-shadow: 0px 0px 4px 1px ${({ theme }) => theme.color.name[theme.color.shadow]};
    }
    &.active{
      box-shadow: inset 0px 0px 4px 1px ${({ theme }) => theme.color.name[theme.color.shadow]};
      opacity: .4;
      pointer-events: none;
    }
  }
`;

export const StyledListItemContent = styled.div`
  padding: 2em;
`;

export const ListItemLabel = styled.span``;