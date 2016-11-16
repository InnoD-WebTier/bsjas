import React from 'react';
import Helmet from 'react-helmet';
import { config } from 'config';
import { Link } from 'react-router';
import { prefixLink } from 'gatsby-helpers';

class Index extends React.Component {
  render () {
    console.log(this.props.route);
    return (
      <div>
        <Helmet
          title={config.siteTitle}
        />
        <div className="site-landing">
          <div className="box">
            <p className="title">
              Engaging the Berkeley Community in dialogue on Asia.
            </p>
            <p className="subtitle">
              BSJAS is an Institute of East Asian Studies sponsored journal that strives to showcase the best undergraduate and graduate work in Asia-related fields.
            </p>
            <Link to={prefixLink("journal/")}>
              <div className="button">
                Submit your work
                </div>
            </Link>
            <Link to={prefixLink("about/")}>
              <div className="button">
                Learn more
              </div>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Index;
