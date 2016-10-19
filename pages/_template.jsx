import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import Headroom from 'react-headroom'
import '../css/markdown-styles'
import '../css/main'

class Template extends React.Component {
  render () {
    return (
      <div>
        <Headroom>
          <Link
            className="nav-item"
            to={prefixLink('/')}
          >
            Home
          </Link>
          <Link
            className="nav-item"
            to={prefixLink('/about/')}
          >
            About
          </Link>
          <Link
            className="nav-item"
            to={prefixLink('/journal/')}
          >
            Journal
          </Link>
          <Link
            className="nav-item"
            to={prefixLink('/blog/')}
          >
            Blog
          </Link>
          <Link
            className="nav-item"
            to={prefixLink('/podcast/')}
          >
            Podcast
          </Link>
          <Link
            className="nav-item"
            to={prefixLink('/events/')}
          >
            Events
          </Link>
        </Headroom>
        <div
          className="content"
        >
          {this.props.children}
        </div>
      </div>
    )
  }
}

export default Template;
