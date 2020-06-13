import React, { Component } from 'react';
import CSSModules from "react-css-modules";
import style from  './style.css';

const Services=()=>{
       
        return (
             
            
         <section  className='service angle'>           
        <div className='container'>
          <div className='row'>
            
          </div>{/* Title row end */}
          <div className='row' >
            <div className='wow fadeInDown' data-wow-delay=".5s">
              <div className='service-content text-center'style={{marginLeft:'300px'}}>
                <div className="hexagon"><span><h3 style={{marginTop:'23px',color:'white',fontSize:'20px'}}>All about Projects</h3></span></div>
              </div>
            </div>
            {/*/ End first service */}
            <div className='col-md-3  wow fadeInDown' data-wow-delay=".7s">
              <div className=' service-content text-center'>
                <div className="hexagon"><span><h3 style={{marginTop:'23px',color:'white',fontSize:'20px'}}>Projects</h3></span></div>
              </div>
            </div>
            </div>
            <div className="row" >
            <div className=' wow fadeInDown' data-wow-delay=".5s">
              <div className='service-content text-center'style={{marginLeft:'190px'}}>
                <div className="hexagon"><span><h3 style={{marginTop:'23px',color:'white',fontSize:'20px'}}>Hire Talents</h3></span></div>
              </div>
            </div>
            <div className=' wow fadeInDown' data-wow-delay=".5s">
              <div className='service-content text-center' style={{marginLeft:'230px'}}>
                <div className="hexagon"><span><h3 style={{marginTop:'23px',color:'white',fontSize:'20px'}}>Pre-Lancer</h3></span></div>
              </div>
            </div>
            {/*/ End Second service */}
            </div>
            <div className="row">
            <div className='wow fadeInDown' data-wow-delay=".5s"style={{marginLeft:'300px'}}>
              <div className='service-content text-center'>
              <div className="hexagon"><span><h3 style={{marginTop:'23px',color:'white',fontSize:'20px'}}>Incubation</h3></span></div>
              </div>
            </div>
            {/*/ End Third service */}
            <div className='col-md-3 col-sm-3 wow fadeInDown' data-wow-delay=".5s">
              <div className='service-content text-center'>
              <div className="hexagon"><span><h3 style={{marginTop:'23px',color:'white',fontSize:'20px'}}>Assistance</h3></span></div>
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