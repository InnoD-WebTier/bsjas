import React from 'react';
import Helmet from 'react-helmet';
import { config } from 'config';

class Landing extends React.Component {
  render () {
    return (
      <div className="">
        <Helmet
          title={config.siteTitle}
        />
        <h1>
          Landing
        </h1>
      </div>
    );
  }
}

export default Landing;
