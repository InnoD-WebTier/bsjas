import React from 'react';
import Helmet from 'react-helmet';
import ReactDOM from 'react-dom';
import { config } from 'config';

// import data
import data from '../data';



/**
 * Profile consists of a circular headshot with name and position of person.
 * For the grid of officers.
 * 
 * Props:
 * String name       - first & last name of the person
 * String position   - office position (ex. Editor-in-Chief)
 * String additional - any additional descriptions
 */
class Profile extends React.Component
{    
    render()
    {
        var style = {
            backgroundImage: 'url("../assets/' + this.props.name + '.jpg")'
        };
        console.log(style.backgroundImage);
        
        return (
        <div className='profile'>
            <div className='profile-img' style={style}></div>
            <p className='profile-name'>{this.props.name}</p>
            <p className='profile-text'>{this.props.text}</p>
            <p className='profile-more'>{this.props.more}</p>
        </div>
        );
    }
}

/**
 * About component defines the entire section for the page.
 * Includes description and officers list/grid sections.
 *
 * Component doesn't hold any props.
 * The club description and list of officers should be
 * parsed from an external source, instead of being hard-coded into this file.
 */
class About extends React.Component
{
    // Get list of description texts.
    getDescription()
    {
        let desc_data = data.description;
        
        var p_list = [];
        for (var i = 0; i < desc_data.length; i++)
            p_list.push( <p key={'desc-'+i}>{desc_data[i]}</p> );
        
        return p_list;
    }
    
    // Get list of officer profiles.
    getProfiles(type = 'officers')
    {
        var people = data[type];
        
        var profile_items = [];
        for (var i = 0; i < people.length; i++)
        {
            let person = people[i];
            
            profile_items.push(
                <li key={type + '-' + i} className='profile-item'>    
                    <Profile 
                        name  = {person.name} 
                        text  = {person.text}
                        more  = {person.more} 
                    />
                </li>
            );
        }
        
        return profile_items;
    }
    
    render()
    {
        return (
        <div>
            <Helmet title={config.siteTitle} />

            <section className='desc fluid-width'>
                <h3 className='content-header'>
                    <span>About / </span>
                    <span className="subheader">Who is BSJAS?</span>
                </h3>
                
                {this.getDescription()}
            </section>    
            
            <section className='officers fluid-width'>
                <h3 className='content-header'>
                    <span>About / </span>
                    <span className="subheader">Officers</span>
                </h3>

                <ul className='profile-grid'>
                    {this.getProfiles('officers')}
                </ul>
            </section>
                
            <section className='bloggers fluid-width'>
                <h3 className='content-header'>
                    <span>About / </span>
                    <span className="subheader">Blog Writers</span>
                </h3>

                <ul className='profile-grid'>
                    {this.getProfiles('bloggers')}
                </ul>
            </section>
        </div>
        );
    }
}

export default About;