import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router';
import { prefixLink } from 'gatsby-helpers';
import Headroom from 'react-headroom';
import '../css/markdown-styles';
import '../css/main';

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
    constructor(props)
    {
        super(props);
        this.state = {showMenu: false};
    }
    
    toggleMenu()
    {
        console.log("toggle");
        this.setState({showMenu: !this.state.showMenu});
    }
    
    getNavLinks()
    {
        let links = data['links'];
        
        var link_items = [];
        for (var i = 0; i < links.length; i++)
        {
            let link = links[i];
            link_items.push(<NavLink key={'nav-' + i} name={link} />);
        }
        
        return link_items;
    }
    
    render ()
    {
        console.log(this.state.showMenu);
        let navLinksClasses = 'nav-links' + (this.state.showMenu ? '' : ' collapse');
        
        return (
        <div>
            <Headroom>
                <div className="navbar">
                    <div className="nav-content">
                        <Link className="badge" to="/">
                            <img className="logo" src="/assets/temp_logo.png" />
                            <h1 className="club-title">
                                <p className="top">Berkeley Student</p>
                                <p className="bot">Journal of Asian Studies</p>
                            </h1>
                        </Link>

                        <img src="/assets/menu_white.png" 
                             className="menu-button"
                             onClick={this.toggleMenu.bind(this)}
                            />
                        
                        <nav className={navLinksClasses}>
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

//<Link className="menu-btn">
//    <span className="menu-icon">
//        <span className="menu-bar bar-1"></span>
//        <span className="menu-bar bar-2"></span>
//        <span className="menu-bar bar-3"></span>
//    </span>
//</Link>

export default Template;
