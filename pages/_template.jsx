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

        let active = this.props.active ? ' active' : '';

        return (
            <Link
                to = {prefixLink(link)}
                className = {'nav-link' + active}
                onClick={this.props.clickHandler}
                >
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

        // get pathname and strip all '/'
        let page = this.props.location.pathname.replace(new RegExp('/', 'g'), '');
        this.state = {
            page: page,
            showMenu: false,
        };
    }

    getNavLinks()
    {
        let page = this.props.location.pathname.replace(new RegExp('/', 'g'), '');

        return data['links'].map(link => (
            <NavLink
                name = {link}
                key  = {'nav-' + link}
                active = {link === page}
                clickHandler = {() => this.toggleMenu()}
            />
        ));
    }

    toggleMenu()
    {
        this.setState({showMenu: !this.state.showMenu});
    }

    render()
    {
        let showMenu = this.state.showMenu ? ' show' : ' hide';

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

                        <nav className={"nav-links " + showMenu}>
                            {this.getNavLinks()}
                        </nav>

                        <img src="/assets/menu_white.png"
                             className="menu-button"
                             onClick={() => this.toggleMenu()}
                        />
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

export default Template;
