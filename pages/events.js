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
        <h1>
          Events
        </h1>
        <hr></hr>
        <div className="main-event">
          <img className=""
            src="http://i.imgur.com/RRtDu9K.jpg"
          />
          <span className="descript">Spring 2015 Symposium</span>
        </div>

        <div className="upcoming-events">

          <h3 className="section-header">
            Upcoming Events
          </h3>
          <hr></hr>

          <div className="events-row">
            <div className="subevent">
              <img src="http://imgur.com/fm0Ow8Z.jpg" />
              <br />
              <span className="event-descript event-title">
                Event Title<br />
              </span>
              <span className="event-descript event-info">
                Mulford Hall<br />October 28th, 2016
              </span>
            </div>
            <div className="subevent">
              <img src="http://imgur.com/7riDg3P.jpg" />
              <br />
              <span className="event-descript event-title">
                BSJAS Event<br />
              </span>
              <span className="event-descript event-info">
                Evans Hall<br />November 4th, 2016
              </span>
            </div>
            <div className="subevent">
              <img src="http://imgur.com/4a4WA2s.jpg" />
              <br />
              <span className="event-descript event-title">
                2017 Symposium<br />
              </span>
              <span className="event-descript event-info">
                MLK Student Union<br />February 2nd, 2017
              </span>
            </div>
          </div>

          <div className="events-row">
            <div className="subevent">
              <img src="http://imgur.com/fm0Ow8Z.jpg" />
              <br />
              <span className="event-descript event-title">
                Event Event<br />
              </span>
              <span className="event-descript event-info">
                Dwinelle Hall<br />March 8th, 2017
              </span>
            </div>
            <div className="subevent">
              <img src="http://imgur.com/4a4WA2s.jpg" />
              <br />
              <span className="event-descript event-title">
                Summer Symposium<br />
              </span>
              <span className="event-descript event-info">
                VLSB<br />June 6th, 2017
              </span>
            </div>
            <div className="subevent">
              <img src="http://imgur.com/7riDg3P.jpg" />
              <br />
              <span className="event-descript event-title">
                2018 Symposium<br />
              </span>
              <span className="event-descript event-info">
                Cory Hall<br />April 3rd, 2018
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Events;
