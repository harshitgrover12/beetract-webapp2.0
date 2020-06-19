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
            <p style={{float:'left',fontSize:'20px',width:'200px',marginTop:'50px',fontWeight:'bold',color:'black'}}>Things you should know about startups. </p>
              <div className='service-content text-center'style={{marginLeft:'300px'}}>

                <div className="hexagon"><span><h3 style={{marginTop:'23px',color:'white',fontSize:'20px'}}>All about Projects</h3></span></div>
               
              </div>
            </div>
            {/*/ End first service */}
            <div className='col-md-3  wow fadeInDown' data-wow-delay=".7s">
            <p style={{float:'right',fontSize:'20px',width:'200px',marginTop:'50px',marginRight:'-200px',fontWeight:'bold'}}>Your Project posting and Bidding area. </p>
              <div className=' service-content text-center'>
                <div className="hexagon"><span><h3 style={{marginTop:'23px',color:'white',fontSize:'20px'}}>Projects</h3></span></div>
              </div>
            </div>
            </div>
            <div className="row" >
            <div className=' wow fadeInDown' data-wow-delay=".5s">
            <p style={{float:'left',fontSize:'20px',width:'230px',marginTop:'50px',marginLeft:'-100px',fontWeight:'bold'}}>Onboard that Skilled Start-Up lovers for work. </p>
              <div className='service-content text-center'style={{marginLeft:'190px'}}>
                <div className="hexagon"><span><h3 style={{marginTop:'23px',color:'white',fontSize:'20px'}}>Hire Talents</h3></span></div>
              </div>
            </div>

            <h3 style={{fontWeight:'bold',marginLeft:'22px',marginTop:'70px',marginRight:'-20px',fontSize:'20px'}}>Our Solutions </h3>

            <div className=' wow fadeInDown' data-wow-delay=".5s">
            <p style={{float:'right',fontSize:'20px',width:'230px',marginTop:'50px',marginRight:'-300px',fontWeight:'bold'}}>Form your Team! Get your enthusiastic Prelancer.</p>
              <div className='service-content text-center' style={{marginLeft:'45px'}}>
                <div className="hexagon"><span><h3 style={{marginTop:'23px',color:'white',fontSize:'20px'}}>Pre-Lancer</h3></span></div>
              </div>
            </div>
            {/*/ End Second service */}
            </div>
            <div className="row">
            <div className='wow fadeInDown' data-wow-delay=".5s"style={{marginLeft:'300px'}}>
            <p style={{float:'left',fontSize:'20px',width:'200px',marginTop:'50px',marginLeft:'-300px',fontWeight:'bold'}}>Connect, Apply and Grow your Start-Up. </p>
              <div className='service-content text-center'>
              <div className="hexagon"><span><h3 style={{marginTop:'23px',color:'white',fontSize:'20px'}}>Incubation</h3></span></div>
              </div>
            </div>
            {/*/ End Third service */}
            <div className='col-md-3 col-sm-3 wow fadeInDown' data-wow-delay=".5s">
            <p style={{float:'right',fontSize:'20px',width:'230px',marginTop:'50px',marginRight:'-250px',fontWeight:'bold'}}>Provide or seek assistance For any Domain.</p>
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