import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import Headroom from 'react-headroom'
import '../css/markdown-styles'
import '../css/main'

class MyLink extends React.Component {
  render () {
    return(
      <div className={"MyLink-"+this.props.name}>
        <Link to={prefixLink('/' + this.props.name + '/')}>
          {this.props.name}
        </Link>
      </div>
    ) 
    
  }
}

class Template extends React.Component {
  render () {
    const myListOfPages = [
      'Home',
      'About',
      'Blog',
      'Events',
    ];
    const myLinks = myListOfPages.map((item, i) => (
      <MyLink name={item} key={i} />
    ));

    return (
      <div>
        <Headroom>
        <div className = "nav_content">
          <img className="logo" src="assets/temp_logo.png"/>
          <span className = "club_title">
            Berkeley Student
            <span>
              Journal of Asian Studies
            </span>
          </span>

          <Link className="menu-btn">
            <span className="menu-icon">
              <span className="menu-bar bar-1"></span>
              <span className="menu-bar bar-2"></span>
              <span className="menu-bar bar-3"></span>
            </span>
          </Link>
          
          <nav className="nav-links">
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
          </nav>
        </div>
        </Headroom>
      </div>
    )
  }
}

export default Template;
