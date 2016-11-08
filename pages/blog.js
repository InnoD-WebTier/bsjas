import React from 'react';
import Helmet from 'react-helmet';
import { config } from 'config';

class Blog extends React.Component {
  render () {
    return (
      <div className="blog-landing-main-class">

        <Helmet title={config.siteTitle} />

        <div className="blog-intro">
          <div className="content-header">
            <span>Blog / </span>
            <span className="subheader">Info</span>
          </div>

          <p> 
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pellentesque, nulla vestibulum vulputate scelerisque, metus sapien rhoncus sapien, in sagittis metus velit sit amet massa. Ut a malesuada lectus. Mauris non pellentesque elit, a maximus nunc. Pellentesque laoreet risus vitae nibh dignissim laoreet. Nunc in tempus magna. Praesent posuere mi eu risus dignissim consequat. Ut laoreet, sem in tempor tempus, odio ex tincidunt ante, ut consectetur lacus elit nec quam. Aliquam luctus pulvinar enim, id euismod magna hendrerit eget. Nullam in volutpat nisl, ac elementum nisi. Phasellus tellus justo, pulvinar nec nunc et, pretium feugiat ligula. Nullam fringilla risus et pretium pulvinar. Sed euismod risus ac bibendum laoreet. Cras nisl turpis, varius id libero vel, tincidunt sagittis arcu. Morbi sodales gravida orci, at malesuada dui.
          </p>
        </div>

        <div className="content-header">
            <span>Blog / </span>
            <span className="subheader">Posts</span>
        </div>
        
        <div className="section-subheader">
            <span className="right">see all</span>
            <span className="left">MOST RECENT BLOGS</span>
        </div>
        
        <ul className="most-recent-blogs">
          <li>
            <div className="img-container">
            </div>
            <span className="tile-title"><span>Blog Title 1</span></span>
          </li>

          <li>
            <div className="img-container">
            </div>
            <span className="tile-title"><span>Blog Title 2</span></span>
          </li>

          <li>
            <div className="img-container">
            </div>
            <span className="tile-title"><span>Blog Title 3</span></span> 
          </li>

          <li>
            <div className="img-container">
            </div>
            <span className="tile-title"><span>Blog Title 4</span></span> 
          </li>
        </ul>
        
        <div className="section-subheader">
            <span className="left">BY REGION</span>
        </div>
        
        <ul className="by-region-blogs">
          <li>
            <div className="img-container">
            </div>
            <span className="tile-title"><span>Central Asia</span></span>
          </li>
        
          <li>
            <div className="img-container">
            </div>
            <span className="tile-title"><span>East Asia</span></span>
          </li>
        
          <li>
            <div className="img-container">
            </div>
            <span className="tile-title"><span>South Asia</span></span>
          </li>
        
          <li>
            <div className="img-container">
            </div>
            <span className="tile-title"><span>Southeast Asia</span></span>
          </li>
        </ul>

        <div className="content-header">
            <span>Blog / </span>
            <span className="subheader">Archive</span>
        </div>
        
        <div className="archives-container">
            <ul className="archives">
                <li>October 2016</li>
                <li>September 2016</li>
                <li>April 2016</li>
                <li>March 2016</li>
                <li>December 2015</li>
                <li>November 2015</li>
            </ul>
        </div>

    </div>
    );
  }
}

export default Blog;
