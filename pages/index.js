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
        <div id="main-box">
          <div id="main-text">
            <p class="main-text-title">
              Engaging the Berkeley Community in dialogue on Asia.
            </p>
            <p class="main-text-subtitle">
              BSJAS is an Institute of East Asian Studies sponsored journal that strives to showcase the best undergraduate and graduate work in Asia-related fields.
            </p>
            <div class="main-button">
              Submit your work
            </div>
            <div class="main-button">
              Learn more
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Index;
