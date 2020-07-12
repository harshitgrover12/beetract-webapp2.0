import React, { Component } from 'react';
import CSSModules from "react-css-modules";
import style from  './style.css';
import bee from './bee.png'

const Services=()=>{
       
        return (
             
            
         <section  className='service angle'>           
        <div className='container'>
          <div className='row'>
            
          </div>{/* Title row end */}
          <div className='row' >
          
            <div className='wow fadeInLeft' data-wow-delay=".5s">
            <p className="k1" >Things you should know about startups. </p>
              <div className='service-content text-center'>

                <div className="hexagon s1"><span><h3 style={{marginTop:'10px',color:'white',fontSize:'20px'}}>All about Projects</h3></span></div>
               
              </div>
            </div>
            {/*/ End first service */}
            <div className='col-md-3  wow fadeInRight' data-wow-delay=".7s">
            <p className="k2">Your Project posting and Bidding area. </p>
              <div className=' service-content text-center'>
                <div className="hexagon s6"><span><h3 style={{marginTop:'23px',color:'white',fontSize:'20px'}}>Projects</h3></span></div>
              </div>
            </div>
            </div>
            <div className="row" >
            <div className=' wow fadeInLeft' data-wow-delay=".5s">
            <p className="k3">Onboard that Skilled Start-Up lovers for work. </p>
              <div className='service-content text-center'>
                <div className="hexagon s2"><span><h3 style={{marginTop:'23px',color:'white',fontSize:'20px'}}>Hire Talents</h3></span></div>
              </div>
            </div>

            <img src={bee} width={105} height={105} style={{marginLeft:'22px',marginTop:'3px',paddingLeft:'10px'}} ></img>

            <div className=' wow fadeInRight' data-wow-delay=".5s">
            <p className="k4">Form your Team! Get your enthusiastic Prelancer.</p>
              <div className='service-content text-center' >
                <div className="hexagon s3"><span><h3 style={{marginTop:'23px',color:'white',fontSize:'20px'}}>Pre-Lancer</h3></span></div>
              </div>
            </div>
            {/*/ End Second service */}
            </div>
            <div className="row">
            <div className='wow fadeInLeft' data-wow-delay=".5s">
            <p className="k5" >Connect, Apply and Grow your Start-Up. </p>
              <div className='service-content text-center'>
              <div className="hexagon s4"><span><h3 style={{marginTop:'23px',color:'white',fontSize:'20px'}}>Incubation</h3></span></div>
              </div>
            </div>
            {/*/ End Third service */}
            <div className='col-md-3 col-sm-3 wow fadeInRight' data-wow-delay=".5s">
            <p className="k6" >Provide or seek assistance For any Domain.</p>
              <div className='service-content text-center'>
              <div className="hexagon s5"><span><h3 style={{marginTop:'23px',color:'white',fontSize:'20px'}}>Assistance</h3></span></div>
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