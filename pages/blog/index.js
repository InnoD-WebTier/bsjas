import React from 'react';
import Helmet from 'react-helmet';
import { config } from 'config';
import access from 'safe-access'
import sortBy from 'lodash/sortBy';
import { Link } from 'react-router';
import { prefixLink } from 'gatsby-helpers';

// import data
import data from '../data/blogLanding';

class Blog extends React.Component {
  render () {

    const sortedPages = sortBy(this.props.route.pages, (page) =>
      access(page, 'data.date')
    ).reverse();

    const mostRecentBlogs = sortedPages.map((page) => {
      if (access(page, 'file.ext') === 'md' && !page.path.includes('/404')) {
        const title = access(page, 'data.title') || page.path;
        return (
          <div key={page.path}>
            <Link to={prefixLink(page.path)}>
              <li>
                <div className="img-container"></div>
                <span className="tile-title"><span>{title}</span></span>
              </li>
            </Link>
          </div>
        );
      }
    });

    const regions = [{ title: "Central Asia" }, { title: "East Asia" }, { title: "South Asia" }, { title: "Southeast Asia" }];
    const byRegion = regions.map((item, i) => (
      <li key={i}>
        <div className="img-container"></div>
        <span className="tile-title"><span>{item.title}</span></span>
      </li>
    ));

    return (
      <div className="blog-landing">

        <Helmet title={config.siteTitle} />

        <div className="blog-intro">
          <div className="content-header">
            <span>Blog / </span>
            <span className="subheader">Info</span>
          </div>
          <p className="desc">{data['description']}</p>
        </div>

        <div className="content-header">
          <span>Blog / </span>
          <span className="subheader">Posts</span>
        </div>

        <div className="section-subheader">
          <span className="right">see all</span>
          <span className="left">MOST RECENT BLOGS</span>
        </div>
        <ul className="most-recent-blogs">
          {mostRecentBlogs}
        </ul>

        <div className="section-subheader">
          <span className="left">BY REGION</span>
        </div>
        <ul className="by-region-blogs">
          {byRegion}
        </ul>

        <div className="content-header">
          <span>Blog / </span>
          <span className="subheader">Archive</span>
        </div>

        <div className="archives-container">
          <ul className="archives">
            <li>October 2016</li>
            <li>September 2016</li>
            <li>April 2016</li>
            <li>March 2016</li>
            <li>December 2015</li>
            <li>November 2015</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Blog;
