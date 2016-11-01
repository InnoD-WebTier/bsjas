import React from 'react';
import Helmet from 'react-helmet';
import ReactDOM from 'react-dom';
import { config } from 'config';

// import data
import data from '../data';

<<<<<<< 4bd5905068cfe369b79e4dfee49de99bf14be9f0
// TODO: move this to external source
let k_desc_p1 = "The Berkeley Student Journal of Asian Studies (BSJAS) is an Institute of East Asian Studies sponsored journal that strives to showcase the best undergraduate and graduate work at Berkeley related to Asia.";
=======
// constants
const PATH_ASSETS = '../assets/';
>>>>>>> code cleanup

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
    static type = {
        officers: 'officers',
        bloggers: 'bloggers',
    }
    
    render()
    {
<<<<<<< 4bd5905068cfe369b79e4dfee49de99bf14be9f0
=======
        let style = {
            backgroundImage: 'url("' + PATH_ASSETS + this.props.name + '.jpg")'
        };
        
>>>>>>> code cleanup
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
 * Includes description and officers + blog writers profile grids sections.
 * All data is loaded from an external json from definined data.js 
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
<<<<<<< 4bd5905068cfe369b79e4dfee49de99bf14be9f0
    getProfiles()
=======
    getProfiles(type = Profile.type.officers)
>>>>>>> code cleanup
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
<<<<<<< 4bd5905068cfe369b79e4dfee49de99bf14be9f0
                <h3 className='header'>Officers</h3>

                <ul className='profile-grid'>
                    {this.getProfiles()}
=======
                <h3 className='content-header'>
                    <span>About / </span>
                    <span className="subheader">Officers</span>
                </h3>

                <ul className='profile-grid'>
                    {this.getProfiles(Profile.type.officers)}
                </ul>
            </section>
                
            <section className='bloggers fluid-width'>
                <h3 className='content-header'>
                    <span>About / </span>
                    <span className="subheader">Blog Writers</span>
                </h3>

                <ul className='profile-grid'>
                    {this.getProfiles(Profile.type.bloggers)}
>>>>>>> code cleanup
                </ul>
            </section>
        </div>
        );
    }
}

export default About;