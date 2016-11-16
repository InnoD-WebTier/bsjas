import React from 'react';
import Helmet from 'react-helmet';
import { config } from 'config';

class Events extends React.Component {
  render () {
    return (
      <div className="">
        <Helmet
          title={config.siteTitle}
        />
        <div className="content-header">
          <span>Events / </span>
          <span className="subheader">Symposium</span>
        </div>

        <div className="events-main">
          <img src="http://i.imgur.com/RRtDu9K.jpg" />
          <div className="desc">Spring 2015 Symposium</div>
        </div>
        {/* For upcoming events, it would be best to remove this repetitive structure with
            a map function -- provided we have the data for upcoming events already*/}
        <div className="events-upcoming">
          <div className="content-header">
            <span>Events / </span>
            <span className="subheader">Upcoming</span>
          </div>

          <div className="row">
            <div className="subevent">
              <img src="http://imgur.com/fm0Ow8Z.jpg" />
              <div className="desc title">
                Event Title
              </div>
              <div className="desc info">
                <div>Mulford Hall</div>
                <div>October 28th, 2016</div>
              </div>
            </div>
            <div className="subevent">
              <img src="http://imgur.com/7riDg3P.jpg" />
              <div className="desc title">
                BSJAS Event
              </div>
              <div className="desc info">
                <div>Evans Hall</div>
                <div>November 4th, 2016</div>
              </div>
            </div>
            <div className="subevent">
              <img src="http://imgur.com/4a4WA2s.jpg" />
              <div className="desc title">
                2017 Symposium
              </div>
              <div className="desc info">
                <div>MLK Student Union</div>
                <div>February 2nd, 2017</div>
              </div>
            </div>
          </div>
        </div>

        <div className="events-past">
          <div className="content-header">
            <span>Events / </span>
            <span className="subheader">Past</span>
          </div>
          <div className="row">
            <div className="subevent">
              <img src="http://imgur.com/fm0Ow8Z.jpg" />
              <div className="desc title">
                Event Event
              </div>
              <div className="desc info">
                <div>Dwinelle Hall</div>
                <div>March 8th, 2017</div>
              </div>
            </div>
            <div className="subevent">
              <img src="http://imgur.com/4a4WA2s.jpg" />
              <div className="desc title">
                Summer Symposium
              </div>
              <div className="desc info">
                <div>VLSB</div>
                <div>June 6th, 2017</div>
              </div>
            </div>
            <div className="subevent">
              <img src="http://imgur.com/7riDg3P.jpg" />
              <div className="desc title">
                2018 Symposium
              </div>
              <div className="desc info">
                <div>Cory Hall</div>
                <div>April 3rd, 2018</div>
              </div>
            </div>
          </div>

        </div>

      </div>
    );
  }
}

export default Events;