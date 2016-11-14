import React from 'react';
import Helmet from 'react-helmet';
import { config } from 'config';

class Index extends React.Component {
  render () {
    return (
      <div className="">
        <Helmet
          title={config.siteTitle}
        />
        <div className="main-box">
          <div className="main-text">
            <p className="main-text-title">
              Engaging the Berkeley Community in dialogue on Asia.
            </p>
            <p className="main-text-subtitle">
              BSJAS is an Institute of East Asian Studies sponsored journal that strives to showcase the best undergraduate and graduate work in Asia-related fields.
            </p>
            <div className="main-button">
              Submit your work
            </div>
            <div className="main-button">
              Learn more
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Index;
