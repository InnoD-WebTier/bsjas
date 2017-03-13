import React from 'react';
import Helmet from 'react-helmet';
import { config } from 'config';
import access from 'safe-access'
import sortBy from 'lodash/sortBy';
import uniq from 'lodash/uniq';
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
                <div className="most-recent-container"><span>{title}</span></div>
              </li>
            </Link>
          </div>
        );
      }
    });

    const regions = [{ title: "Central Asia" }, { title: "East Asia" }, { title: "South Asia" }, { title: "Southeast Asia" }];
    const byRegion = regions.map((page, i) => {
      const source = '/assets/' + page.title.toLowerCase().replace(" ", "") + '.jpg';
      const backgroundLink = prefixLink(source);
      const style = {
        'background': "url('" + backgroundLink + "') no-repeat center center",
        '-webkit-background-size': 'cover',
        '-moz-background-size': 'cover',
        '-o-background-size': 'cover',
        'background-size': 'cover',
      };
      return (
        <div key={page.title}>
          <Link to={prefixLink("/blog/list/?type=region?filter=" + page.title)}>
            <li>
              <div className="region-img-container" style={style}></div>
              <span className="region-title"><span>{page.title}</span></span>
            </li>
          </Link>
        </div>
      );
    });

    let archiveYears = this.props.route.pages.map((page, i) => {
      if (access(page, 'file.ext') === 'md' && !page.path.includes('/404')) {
        const archive = access(page, 'data.archive');
        return archive;
      }
    });

    archiveYears = uniq(archiveYears);

    const archives = archiveYears.map((year, i) => (
      <li key={i}>
        <Link to={prefixLink("/blog/list/?type=year?filter=" + year)}>
          {year}
        </Link>
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
          <Link to={prefixLink("/blog/list/?type=year?filter=all")}>
            <span className="right">see all</span>
          </Link>
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
            {archives}
          </ul>
        </div>
      </div>
    );
  }
}

export default Blog;
