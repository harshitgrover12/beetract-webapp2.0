import React, { Component } from 'react'
import CSSModules from "react-css-modules";
import style from  './style.css';
import img from './BeeTract_Home1.png';
    const Intro=()=>{
        return (
          
      <section id="home" className="p-0">
        <div id="main-slide" className="cd-hero">
          <ul className="cd-hero-slider">
            <li className="selected">
              <div className="overlay2">
                <img className src={img} alt="slider" />
              </div>
              {/* .cd-full-width */}
            </li>
          </ul>
          {/*/ cd-hero-slider */}
          {/* .cd-slider-nav */}
        </div>
        {/*/ Main slider end */}
      </section>
        )
    }

export default CSSModules(Intro,style,{allowMultiple: true});