import * as React from "react";
import { Tracker } from "./../components/Tracker/Tracker";
import Head from "./../components/Head/Head";
import { Work } from "../content/Work/Work";

const WorkPage = ({location}) => {
  return (
    <>
      <Tracker location={location}/>
      <Head title="My Work"/>
      <Work/>
    </>
  )
}

export default WorkPage;