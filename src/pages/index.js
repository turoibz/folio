import * as React from "react";
import { Tracker } from "../components/Tracker/Tracker";
import Head from "./../components/Head/Head";
import { Home } from "../content/Home/Home";

const IndexPage = ({location}) => {
  return (
    <>
      <Tracker location={location}/>
      <Head title="Home"/>
      <Home/>
    </>
  )
}

export default IndexPage;