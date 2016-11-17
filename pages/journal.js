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
    const title = journals[this.state.activeTab]["year"];

    const tabStyle = (i) => {
      const active = (this.state.activeTab === i) ? 'tab active' : 'tab';
      return active;
    }

    const handleClick = (index) => {
      this.setState({
        activeTab: index,
      });
    }

    const navTabs = tabs.map((item, i) => (
      <div
        key={i}
        onClick={() => handleClick(i)}
        className={tabStyle(i)}
      >
        {item.year}
      </div>
    ));

    const mobileNavTabs = tabs.map((item, i) => (
      <div
        key={i}
        onClick={() => handleClick(i)}
      >
        {item.year}
      </div>
    ));

    const tabContent = () => {
      const activeTab = this.state.activeTab;
      const data = journals[activeTab];
      const journalContent = data.content.map((item, i) => (
        <div key={i}>
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
              <img className="cover-img" src={prefixLink(data.cover)} />
              <span className="caption">Click to read publication.</span>
            </a>
          </div>
      	  <div className="data">
		    <a href={data.link} target="_blank" className="mobile-link">
			  <span className="caption">Click to read publication.</span>
			</a>
      	    {journalContent}
      	  </div>
      	</div>
      );
    }

    const submitQA = () => {
      const data = info["submit"];
      const submitContent = data.map((item, i) => (
        <div key={i}>
          <div className="question">
            {item.question}
          </div>
          <div className="answer">
            <div dangerouslySetInnerHTML={{ __html: item.answer }} />
          </div>
        </div>
      ));
      return submitContent;
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
          <div className="tab-nav-mobile">
            <button className="dropdown">
              <span className="left">{title}</span>
              <span className="right">▾</span>
            </button>
            <div className="dropdown-content">
              {mobileNavTabs}
            </div>
          </div>
      	  {tabContent()}
      	</div>
        <div id="submit" className="submit">
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
