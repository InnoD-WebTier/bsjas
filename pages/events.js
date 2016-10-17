import React from 'react';
import Helmet from 'react-helmet';

class Events extends React.Component {
  render () {
    return (
      <div className="">
        <Helmet
          title={config.siteTitle}
        />
        <h1>
          Events
        </h1>
      </div>
    );
  }
}

export default Events;
