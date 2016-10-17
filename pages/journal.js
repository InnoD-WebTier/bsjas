import React from 'react';
import Helmet from 'react-helmet';

class Journal extends React.Component {
  render () {
    return (
      <div className="">
        <Helmet
          title={config.siteTitle}
        />
        <h1>
          Journal
        </h1>
      </div>
    );
  }
}

export default Journal;
