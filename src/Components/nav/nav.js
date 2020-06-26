import React from 'react';
import img1 from './beetractlogo.png';

const Nav=()=>{
    return(
        <header id="header">
          <div className="container">
            <div id="logo" className="pull-left">
              <a href="#body" className="scrollto"> <img src={img1} width={150} height={70}style={{marginTop:'-10px'}}/></a>
              {/* <a href="#body"><img src="img/logo.png" alt="" title="" /></a>*/}
            </div>
            <nav id="nav-menu-container">
              <ul className="nav-menu">
                <li className="menu-active"><a href="/">Home</a></li>
                <li><a href="/ourSolutions">Solutions</a></li>
                <li><a href="/about">About Us</a></li>
                <li><a href="/portfolio">Get Support</a></li>
                <li><a href="/signIn">SignIn/SignUp</a></li>	
              </ul>
            </nav>{/* #nav-menu-container */}
          </div>
        </header>
    )
}

export default Nav;