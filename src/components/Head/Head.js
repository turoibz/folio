import React from 'react';
import { Helmet } from 'react-helmet';

const Head = ({ title }) => {
  return (
    <>
      <Helmet
        defaultTitle="IxD Portfolio | Arturo Ibanez's Portfolio"
        title={title}
        titleTemplate="%s | Arturo Ibanez's Portfolio"
      />
    </>
  )
}

export default Head;