import React, { Component } from 'react';
import CSSModules from "react-css-modules";
import style from  './style.css';

const Services=()=>{
       
        return (
             
            
         <section  className='service angle'>           
        <div className='container'>
          <div className='row'>
            <div className='col-md-12 heading'>
             
              <h2 className='title'>Service We Provide <span className='title-desc'>A Quality Experience Team with 4 years
                  experience</span></h2>
            </div>
          </div>{/* Title row end */}
          <div className='row'>
            <div className='col-md-3 col-sm-3 wow fadeInDown' data-wow-delay=".5s">
              <div className='service-content text-center'>
                <span className='service-icon icon-pentagon'><i className="fa fa-tachometer" /></span>
                <h3>Web Design</h3>
                <p>High Life narwhal, banh mi PBR single-origin coffee Odd Future actually aliqua polaroid befor</p>
              </div>
            </div>
            {/*/ End first service */}
            <div  className='col-md-3 col-sm-3 wow fadeInDown'data-wow-delay=".8s">
              <div className='service-content text-center'>
                <span className='service-icon icon-pentagon'><i className="fa fa-android" /></span>
                <h3>Apps Development</h3>
                <p>Food truck master cleanse mixtape minim Portland, cardigan stumptown chambray swag</p>
              </div>
            </div>
            {/*/ End Second service */}
            <div  className='col-md-3 col-sm-3 wow fadeInDown' data-wow-delay="1.1s">
              <div className='service-content text-center'>
                <span className='service-icon icon-pentagon'><i className="fa fa-shopping-cart" /></span>
                <h3>eCommerce Websites</h3>
                <p>Neutra Thundercats craft beer, listicle meggings bicycle rights 90's XOXO beard cardiga</p>
              </div>
            </div>
            {/*/ End Third service */}
            <div className='col-md-3 col-sm-3 wow fadeInDown' data-wow-delay="1.4s">
              <div className='service-content text-center'>
                <span className='service-icon icon-pentagon'><i className="fa fa-lightbulb-o" /></span>
                <h3>Design for Startups</h3>
                <p>We design beautiful modern engaging websites that always latest responsive technologies.</p>
              </div>
            </div>
            {/*/ End 4th service */}
          </div>{/* Content row end */}
        </div>           
        {/*/ Container end */}
      
            </section>
        )
    }

export default CSSModules(Services,style,{allowMultiple: true});
