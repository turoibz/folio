import React, { useContext } from "react";
import { StaticQuery, graphql } from "gatsby";
import { ThemeContext } from "styled-components";
import { StyledStatus } from "./CurrentStatus.styled";
import { H4 } from "./../../foundation/Typography";
import { WaveHandIcon, WorkingIcon } from "../../foundation/Icon";

export const query = graphql`
  query folioStatus {
    allNodeFolioInformation(
      limit: 1
      filter: {}
      sort: {fields: created, order: DESC}
    ) {
      nodes {
        field_status
        field_status_label
      }
    }
  }
`;

export function CurrentStatusIcon({...props}) {

  const theme = useContext(ThemeContext)
  
  return(
    <>
      {props.type==="isOpen" &&
        <WaveHandIcon size="sm" color={theme.color.currentStatusTxt}/>
      }
      {props.type==="isWorking" &&
        <WorkingIcon size="lg" color={theme.color.currentStatusTxt}/>
      }
    </>
  )
}

export function CurrentStatus() {
  return(
    <StaticQuery
      query={ query }
      render={ data => (
        <StyledStatus>
          <CurrentStatusIcon type={ data.allNodeFolioInformation.nodes[0].field_status }/>
          <H4>
            { data.allNodeFolioInformation.nodes[0].field_status_label }
          </H4>
        </StyledStatus>
      )}
    />
  )
}


