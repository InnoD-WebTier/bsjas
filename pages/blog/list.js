import React from 'react';
import Helmet from 'react-helmet';
import { config } from 'config';
import access from 'safe-access'
import sortBy from 'lodash/sortBy';
import { Link } from 'react-router';
import { prefixLink } from 'gatsby-helpers';

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filter: "None",
      type: "None",
    }
  }

  componentDidMount() {
    const pathname = decodeURIComponent(window.location.href);
    console.log(pathname);
    const filter = pathname.split("?filter=")[1];
    console.log(filter);
    const type = pathname.split("?type=")[1].split("?filter")[0];
    console.log(type);
    this.setState({
      filter,
      type,
    });
  }

  render () {
    const pages = this.props.route.pages;
    const filter = this.state.filter;
    const type = this.state.type;

    let filtered = pages;

    if (filter != "all") {
      if (type === "year") {
        filtered = pages.filter(page => access(page, 'data.archive') === filter);
      } else {
        filtered = pages.filter(page => access(page, 'data.region') === filter);
      }
    }


    if (filtered.length === 0) {
      return (
        <p>Looks like we do not have content for this category yet!</p>
      );
    }

    const mostRecentBlogs = filtered.map((page) => {
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
