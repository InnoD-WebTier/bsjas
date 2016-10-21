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
        <div className="header">
          <span>About / </span>
          <span className="subheader">Who is BSJAS?</span>
        </div>
      </div>
    );
  }
}

export default About;
