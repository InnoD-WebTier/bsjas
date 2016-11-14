import React from 'react';
import Helmet from 'react-helmet';
import { config } from 'config';

class Index extends React.Component {
  render () {
    return (
      <div>
        <Helmet
          title={config.siteTitle}
        />
        <div className="Main">
          <div className="Main__box">
            <p className="Main__title">
              Engaging the Berkeley Community in dialogue on Asia.
            </p>
            <p className="Main__subtitle">
              BSJAS is an Institute of East Asian Studies sponsored journal that strives to showcase the best undergraduate and graduate work in Asia-related fields.
            </p>
            <div className="Main__button">
              Submit your work
            </div>
            <div className="Main__button">
              Learn more
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Index;
