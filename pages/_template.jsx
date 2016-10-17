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
            to={prefixLink('/')}
          >
            Home
          </Link>
          <Link
            className="example"
            to={prefixLink('/about')}
          >
            About
          </Link>
        </Headroom>
        {this.props.children}
      </div>
    )
  }
}

export default Template;
