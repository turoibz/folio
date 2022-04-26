import * as React from "react";
import { Tracker } from "../components/Tracker/Tracker";
import Head from "./../components/Head/Head";
import { FourOFour } from "../content/404/404";

const NotFoundPage = ({location}) => {
  return (
    <>
      <Tracker location={location}/>
      <Head title="Page not found"/>
      <FourOFour/>
    </> 
  )
}

export default NotFoundPage
