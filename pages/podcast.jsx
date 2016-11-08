import React from 'react';
import ReactDOM from 'react-dom';
import Helmet from 'react-helmet';
import { config } from 'config';

// import data
import data from './data/podcast';

class Podcast extends React.Component
{
    render ()
    {
        let iframe = 'iframe';
        
        
        
        return (
        <div className="podcast">
            <Helmet title={config.siteTitle} />
                
            <h3 className='content-header'>Podcast</h3>
            <p className='desc'>{data['description']}</p>
                
            <iframe className='soundcloud-embed' src={data['iframe_src']}/>
        </div>
        );
    }
}

export default Podcast;
