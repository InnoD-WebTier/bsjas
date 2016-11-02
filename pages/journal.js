import React from 'react';
import Helmet from 'react-helmet';
import { config } from 'config';
import info from './journaldata';

class Journal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: 0,
    }
  }
  
  render () {
    const handleClick = (index) => {
      this.setState({
        activeTab: index,
      });
    }

    const navTabs = () => {
      let tabs = [{title: 'Spring 2015'}, {title: 'Spring 2014'}, {title: 'Spring 2013'}, {title: 'Spring 2012'}, {title: 'Fall 2010'}];
      const HTMLify = function (item, i) {
        return (
		  <div
			key={i}
			onClick={() => handleClick(i)}
			className = "tab"
		  >
			{item.title}
		  </div>
        );
      }
      return (
		<div className="tab-nav">
		  {tabs.map(HTMLify)}
		</div>
	  );
    }

    const tabContent = () => {
	  const journals = info["journals"];
      const activeTab = this.state.activeTab;
	  const data = journals[activeTab];
	  const journalContent = function (item) {
		return (
		  <div>
			<div className="author">
			  {item.author}
			</div>
			
			<div className="title">
			  {item.title}
			</div>
		  </div>
		);
	  }
      return (
        <div className="tab-content">
		  <div className="tab-title">
		    {data.title}
		  </div>
		  
		  	<img className="cover-img" src={data.cover} />

		  <div className="at-container">
		  {data.content.map(journalContent)}
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
				<div dangerouslySetInnerHTML={{__html: item.answer}} />
			  </div>
			</div>
		  );
		}
		
		return data.map(submitContent)
    }
	
	
    return (
      <div className="">
        <Helmet
          title={config.siteTitle}
        />
		
		<div className="journals">
		  <div className="content-header">
            <span>Journal / </span>
            <span className="subheader">Recent Publications</span>
          </div>
		  
		  {navTabs()}
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
