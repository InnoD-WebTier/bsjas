import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import Headroom from 'react-headroom'
import '../css/markdown-styles'
import '../css/main'

// import data
import data from './data/nav.js';

class NavLink extends React.Component
{
    render()
    {
        let name = this.props.name;
        let link = "/";
        if (name && name.length > 0)
            link += name + "/";
        
        return (
            <Link 
                className='nav-link'
                to={prefixLink(link)}>
                {name}
            </Link>
        );
    }
}

class Template extends React.Component
{
    getNavLinks()
    {
        let links = data['links'];
        
        var link_items = [];
        for (var i = 0; i < links.length; i++)
        {
            let link = links[i];
            link_items.push(<NavLink name={link} />);
        }
        
        return link_items;
    }
    
    render ()
    {
        return (
        <div>
            <Headroom>
                <div className="navbar">
                    <div className="nav-content">
                        <Link className="badge">
                            <img className="logo" src="/assets/temp_logo.png" />
                            <h1 className="club-title">
                                <p className="top">Berkeley Student</p>
                                <p className="bot">Journal of Asian Studies</p>
                            </h1>
                        </Link>

                        <nav className="nav-links">
                            {this.getNavLinks()}
                        </nav>
                    </div>
                </div>
            </Headroom>
                
            <div className="content">
                {this.props.children}
            </div>
        </div>
        );
    }
}

//<Link className="badge" to="/">
//    <img className="logo" src="/assets/temp_logo.png"/>
//    <h1 className = "club-title">
//        Berkeley Student
//        <p>Journal of Asian Studies</p>
//    </h1>
//</Link>

//<Link className="menu-btn">
//    <span className="menu-icon">
//        <span className="menu-bar bar-1"></span>
//        <span className="menu-bar bar-2"></span>
//        <span className="menu-bar bar-3"></span>
//    </span>
//</Link>

export default Template;
