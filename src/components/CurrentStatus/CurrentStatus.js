import React, { useContext } from "react";
import { ThemeContext } from "styled-components";
import { StyledStatus } from "./CurrentStatus.styled";
import { H4 } from "./../../foundation/Typography";
import { BadgeIcon, WaveHandIcon, WorkingIcon } from "../../foundation/Icon";

export function CurrentStatus({...props}){
  const theme = useContext(ThemeContext)
  return(
    <StyledStatus>
      {props.isOpen &&
        <WaveHandIcon size="sm" color={theme.color.currentStatusTxt}/>
      }
      {props.isWorking &&
        <WorkingIcon size="lg" color={theme.color.currentStatusTxt}/>
      }
      <H4>
        {props.label}
      </H4>
    </StyledStatus>
  )
}