import React from 'react';
import Helmet from 'react-helmet';
import { config } from 'config';
import access from 'safe-access'
import sortBy from 'lodash/sortBy';
import { Link } from 'react-router';
import { prefixLink } from 'gatsby-helpers';

class List extends React.Component {
  render () {
    const pathname = decodeURIComponent(window.location.href);
    const region = pathname.split("?region=")[1];
    const pages = this.props.route.pages;

    console.log(pages);
    console.log(region);

    let filtered = pages;

    if (region != "all")
      filtered = pages.filter(page => access(page, 'data.region') === region);

    const mostRecentBlogs = filtered.map((page) => {
      if (filtered.length === 0) {
        return (
          <p>Looks like we have not posted anything under this category yet!</p>
        );
      }

      if (access(page, 'file.ext') === 'md' && !page.path.includes('/404')) {
        const title = access(page, 'data.title') || page.path;
        const author = access(page, 'data.author') || "Author Unknown";
        let post = page.data.body;
        let i = 300;
        if (post.length < i) {
          post = page.data.body.substring(0, post.length);
        } else {
          while (post[i] != " ")
            i = i - 1;
          post = page.data.body.substring(0, i) + " ...";
        }
        return (
          <div className="post" key={page.path}>
            <Link to={prefixLink(page.path)}>
              <p className="title">{title}</p>
              <p className="bloglist-author">By {author}</p>
              <div dangerouslySetInnerHTML={{ __html: post }} />
            </Link>
          </div>
        );
      }
    });

    return (
      <div>
        <Helmet title={config.siteTitle} />
        <div className="blog-list">
          {mostRecentBlogs}
        </div>
      </div>
    );
  }
}

export default List;
