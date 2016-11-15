import React from 'react';
import Helmet from 'react-helmet';
import { config } from 'config';
import access from 'safe-access'
import sortBy from 'lodash/sortBy';
import { Link } from 'react-router';
import { prefixLink } from 'gatsby-helpers';

class List extends React.Component {
  render () {
    const sortedPages = sortBy(this.props.route.pages, (page) =>
      access(page, 'data.date')
    ).reverse();

    const mostRecentBlogs = sortedPages.map((page) => {
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
              <p>{title}</p>
              <p>By {author}</p>
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
