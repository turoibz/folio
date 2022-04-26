import * as React from "react";
import Head from "./../components/Head/Head";
import { Home } from "../content/Home/Home";

const IndexPage = () => {
  return (
    <>
      <Head title="Home"/>
      <Home/>
    </>
  )
}

export default IndexPage;