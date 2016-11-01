import React from 'react';
import Helmet from 'react-helmet';
import ReactDOM from 'react-dom';
import { config } from 'config';

// import data
import data from '../data';

// TODO: move this to external source
let k_desc_p1 = "The Berkeley Student Journal of Asian Studies (BSJAS) is an Institute of East Asian Studies sponsored journal that strives to showcase the best undergraduate and graduate work at Berkeley related to Asia.";

let k_desc_p2 = "We publish an annual academic journal in the Spring, a weekly blog, a bi-weekly podcast series and also host on campus events related to Asia as well as our annual symposium in the Spring.";

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
        return (
        <div className='profile'>
            <p className='profile-img'>{this.props.imgURL}</p>
            <p className='profile-name'>{this.props.name}</p>
            <p className='profile-text'>{this.props.position}</p>
            <p className='profile-subtext'>{this.props.additional}</p>
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
            p_list.push( <p>{desc_data[i]}</p> );
        
        return p_list;
    }
    
    // Get list of officer profiles.
    getProfiles()
    {
        var officer_data = data.officers;
        
        var officer_list = [];
        for (var i = 0; i < officer_data.length; i++)
        {
            let officer = officer_data[i];
            
            officer_list.push(
                <li key={'profile-' + i} className='profile-item'>    
                    <Profile 
                        imgURL={null} 
                        name={officer.name} 
                        position='Editor-in-Chief' 
                        additional={null} 
                    />
                </li>
            );
        }
        
        return officer_list;
    }
    
    render()
    {
        return (
        <div>
            <Helmet title={config.siteTitle} />

            <section className='desc fluid-width'>
                <h3 className='header'>Who are we?</h3>
                
                {this.getDescription()}
            </section>    
            
            <section className='officers fluid-width'>
                <h3 className='header'>Officers</h3>

                <ul className='profile-grid'>
                    {this.getProfiles()}
                </ul>
            </section>
        </div>
        );
    }
}

export default About;