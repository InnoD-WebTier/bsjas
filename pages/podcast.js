import React from 'react';
import Helmet from 'react-helmet';

class Podcast extends React.Component {
  render () {
    return (
      <div className="">
        <Helmet
          title={config.siteTitle}
        />
        <h1>
          Podcast
        </h1>
      </div>
    );
  }
}

export default Podcast;
