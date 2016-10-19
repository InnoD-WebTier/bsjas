import React from 'react';
import Helmet from 'react-helmet';
import { config } from 'config';

class About extends React.Component {
  render () {
    return (
      <div className="">
        <Helmet
          title={config.siteTitle}
        />
        <h1>
          About
        </h1>
      </div>
    );
  }
}

export default About;
