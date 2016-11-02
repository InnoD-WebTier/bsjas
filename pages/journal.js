import React from 'react';
import Helmet from 'react-helmet';
import { config } from 'config';
import info from './data/journal';

class Journal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: 0,
    }
  }

  render () {

    const tabs = info["journals"];
    const journals = info["journals"];

    const handleClick = (index) => {
      this.setState({
        activeTab: index,
      });
    }

    const navTabs = tabs.map((item, i) => (
      <div
        key={i}
        onClick={() => handleClick(i)}
        className="tab"
      >
        {item.year}
      </div>
    ));

    const tabContent = () => {
      const activeTab = this.state.activeTab;
      const data = journals[activeTab];
      const journalContent = data.content.map((item, i) => (
        <div>
          <div className="author">
            {item.author}
          </div>
          <div className="title">
            {item.title}
          </div>
        </div>
      ));
      return (
        <div className="tab-data-container">
          <div className="img-container">
            <a href={data.link} target="_blank">
              <img className="cover-img" src={data.cover} />
              <span className="caption">Click to read!</span>
            </a>
          </div>
      	  <div className="data">
            <div className="tab-title">
              {data.title}
            </div>
      	    {journalContent}
      	  </div>
      	</div>
      );
    }

    const submitQA = () => {
      const data = info["submit"];
      const submitContent = function (item) {
        return (
          <div>
            <div className="question">
              {item.question}
            </div>
            <div className="answer">
              {item.answer}
            </div>
          </div>
        );
      }
      return data.map(submitContent);
    }

    return (
      <div>
        <Helmet
          title={config.siteTitle}
        />
        <div className="content-header">
          <span>Journal / </span>
          <span className="subheader">Recent Publications</span>
        </div>
      	<div className="journals">
          <div className="tab-nav">
            {navTabs}
          </div>
      	  {tabContent()}
      	</div>
        <div className="submit">
	        <div className="content-header">
            <span>Journal / </span>
            <span className="subheader">Submit</span>
          </div>
      	  {submitQA()}
      	</div>
      </div>
    );
  }
}

export default Journal;
