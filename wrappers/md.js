import React from 'react'
import 'css/markdown-styles.css'
import Helmet from "react-helmet"
import { config } from 'config'
import { prefixLink } from 'gatsby-helpers'

module.exports = React.createClass({
  propTypes () {
    return {
      router: React.PropTypes.object,
    }
  },

  render () {
    const post = this.props.route.page.data
    return (
      <div className="markdown">
        <Helmet
          title={`${config.siteTitle} | ${post.title}`}
        />
        <div className="post">
          <div className="header">
            <h1>{post.title}</h1>
          </div>
          <div className="metadata">
            <div className="author">
              <div>{post.author}</div>
            </div>
            <div className="post-social">
              <img src={prefixLink("/assets/facebook.png")}/>
              <img src={prefixLink("/assets/twitter.png")}/>
              <img src={prefixLink("/assets/mail.png")}/>
            </div>
          </div>
          <div className="post-text">
            <div dangerouslySetInnerHTML={{ __html: post.body }} />
          </div>
        </div>
      </div>
    )
  },
})
