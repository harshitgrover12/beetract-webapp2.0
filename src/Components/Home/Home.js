import React, { Component } from 'react'
import Services from './Services';
import AboutUs from './AboutUs';
import img from './clouds.png';
import img1 from './beetractlogo.png';
import img2 from './BeeTract_Home1.png';
import Intro from './Intro';

class Home extends Component {
    render() {
        return (
         <div id="body">
        <section id="topbar" className="d-none d-lg-block">
          <div className="container clearfix">
            <div className="contact-info float-left">
              <i className="fa fa-envelope-o" /> <a href="mailto:contact@example.com">name@websitename.com</a>
              <i className="fa fa-phone" /> +1 2345 67855 22
            </div>
            <div className="social-links float-right">
              <a href="#" className="twitter"><i className="fa fa-twitter" /></a>
              <a href="#" className="facebook"><i className="fa fa-facebook" /></a>
              <a href="#" className="google-plus"><i className="fa fa-google-plus" /></a>
              <a href="#" className="linkedin"><i className="fa fa-linkedin" /></a>
              <a href="#" className="instagram"><i className="fa fa-instagram" /></a>
            </div>
          </div>
        </section>
        {/*==========================
    Header
  ============================*/}
        <header id="header">
          <div className="container">
            <div id="logo" className="pull-left">
              <a href="#body" className="scrollto"> <img src={img1} width={150} height={70}style={{marginTop:'-10px'}}/></a>
              {/* <a href="#body"><img src="img/logo.png" alt="" title="" /></a>*/}
            </div>
            <nav id="nav-menu-container">
              <ul className="nav-menu">
                <li className="menu-active"><a href="#body">Home</a></li>
                <li><a href="#ourSolutions">Solutions</a></li>
                <li><a href="#about">About Us</a></li>
                <li><a href="#portfolio">Get Support</a></li>
                <li><a href="/signIn">SignIn/SignUp</a></li>	
                
              </ul>
            </nav>{/* #nav-menu-container */}
          </div>
        </header>{/* #header */}
        {/*==========================
    Intro Section
  ============================*/}
        <section id="intro">
        <h1 className="hello" >Home To <br/><span className="hello1">Opportunities</span></h1>
        <h1 className="hello5 wow fadeInLeft" data-wow-delay='1s'>Commission-Free<br/><span>Platform!</span></h1>
        <div className="hello3 wow fadeInLeft" data-wow-delay='1s'><img src={img} width={250} height={270}/></div>
        <div className="hello4 wow fadeInRight"data-wow-delay='1s'><img src={img} width={190} height={180}/></div>
          <div className="hello2 wow fadeInUp" data-wow-delay='1s' >
          <a href="#howItWorks"><div className="gradient-border wow fadeInUp" id="box"><i>How it works</i> </div></a>
          <a href="#"><div className="gradient-border wow fadeInUp" id="box"><i>Get Started</i> </div></a>
          <a href="#"><div className="gradient-border wow fadeInUp" id="box"><i>Projects</i> </div></a>
          </div>
          
          <div id="intro-carousel" className="owl-carousel">
            <div className="item"  />
            
          </div>
        </section>{/* #intro */}
        <main id="main">
          {/*==========================
      Services Section
    ============================*/}
    <section id="howItWorks" className="pricing-table">
            <div className="container">
              <div className="section-header">
                <h2>How It works</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores quae porro consequatur aliquam, incidunt fugiat culpa esse aute nulla. nulla duis fugiat culpa esse aute nulla ipsum velit export irure minim illum fore</p>
              </div>
            </div>
            <div className="container " >
              <div className="row justify-content-md-center ">
                <div className="col-md-5 wow anim fadeInLeft" style={{width:'400px'}} >
                  <div className="item " >
                    <div className="heading" >
                      <h3>Projects</h3>
                    </div>
                    <div className="features">
                    <div className="row" >
                    <div className="column" style={{width:'50%',borderRight:'1px solid rgba(0,0,0,0.1)'}}>
                      <ul>
                      <p style={{textAlign:'center',borderBottom:'1px solid rgba(0,0,0,0.1)',position:'relative',fontSize:'15px',padding:'0px',marginTop:'0px',color:'black',fontWeight:'700'}}>Company</p>
                        <li ><i class="fa fa-check" aria-hidden="true"style={{color:'#a521bd'}}></i><span>Post a Project </span></li>
                        <li><i class="fa fa-check" aria-hidden="true"style={{color:'#a521bd'}}></i>Bid on a Project</li>
                        <li ><i class="fa fa-check" aria-hidden="true"style={{color:'#a521bd'}}></i>Get Unlimited Qualified Proposals</li>
                        
                      </ul>
                    </div>
                      <div className="column" style={{width:'48%'}}>
                       <ul>
                       <p style={{textAlign:'center',borderBottom:'1px solid rgba(0,0,0,0.1)',position:'relative',fontSize:'15px',padding:'0px',marginTop:'0px',marginLeft:'-10px',marginRight:'3px',color:'black',fontWeight:'600'}}>FreeLancer and PreLancer</p>
                        <li><i class="fa fa-check" aria-hidden="true"style={{color:'#a521bd'}}></i><span>Bid on a project of your interest</span></li>
                        <li><i class="fa fa-check" aria-hidden="true"style={{color:'#a521bd'}}></i>Form a team with freelancers</li>
                        
                      </ul>
                      </div>
                    </div>
                  </div>
                  <div className="features" style={{borderTop:'1px solid rgba(0,0,0,0.1)'}}>
                  <p style={{position:'relative',fontSize:'15px',padding:'0px',marginTop:'0px',color:'black',fontWeight:'700',borderBottom:'1px solid rgba(0,0,0,0.1)'}}>Both</p>
                  <ul>
                  <li><i class="fa fa-check" aria-hidden="true"style={{color:'#a521bd'}}></i><span>Parallel payment and project completion</span></li>
                        <li><i class="fa fa-check" aria-hidden="true"style={{color:'#a521bd'}}></i>Make means of payment on your use</li>
                        <li><i class="fa fa-check" aria-hidden="true"style={{color:'#a521bd'}}></i>Agreed Timelines and payments</li>
                        <li><i class="fa fa-check" aria-hidden="true"style={{color:'#a521bd'}}></i>Progressive Project Stages</li>
                  </ul>
                  </div>

                </div>
                </div>
               <div className="col-md-5 wow fadeInRight" style={{width:'400px'}}>
                  <div className="item">
                    <div className="heading">
                      <h3>PreLancers</h3>
                    </div>
                    <div style={{borderBottom:'1px solid rgba(0,0,0,0.1)'}}>
                    <span className="ps"style={{color:'black'}}>They are the skilled minds aspiring to be part of real-time projects with Freelancers.
                                                          The No-pay enthusiasts need experience and certification in return.
                  </span>
                  </div>
                  <div style={{paddingBottom:'72px',borderBottom:'1px solid rgba(0,0,0,0.1)'}}/>
                    <div className="features">
                    <div className="row" >
                    <div className="column" style={{width:'50%',borderRight:'1px solid rgba(0,0,0,0.1)'}}>
                      <ul>
                      <p style={{textAlign:'center',borderBottom:'1px solid rgba(0,0,0,0.1)',position:'relative',fontSize:'15px',padding:'0px',marginTop:'0px',color:'black',fontWeight:'700'}}>Freelancers Get</p>
                        <li><i class="fa fa-check" aria-hidden="true"style={{color:'#a521bd'}}></i><span>Pick Your team members </span></li>
                        <li><i class="fa fa-check" aria-hidden="true"style={{color:'#a521bd'}}></i>Assign Tasks</li>
                        <li><i class="fa fa-check" aria-hidden="true"style={{color:'#a521bd'}}></i>Work Collaboratively</li>
                        <li><i class="fa fa-check" aria-hidden="true"style={{color:'#a521bd'}}></i>Facilitate their certification</li>
                      </ul>
                    </div>
                      <div className="column" style={{width:'50%'}}>
                       <ul>
                       <p style={{textAlign:'center',borderBottom:'1px solid rgba(0,0,0,0.1)',position:'relative',fontSize:'15px',padding:'0px',marginTop:'0px',marginLeft:'-10px',marginRight:'12px',color:'black',fontWeight:'600'}}>Prelancers Get</p>
                        <li><i class="fa fa-check" aria-hidden="true"style={{color:'#a521bd'}}></i><span>Real Time Work Experience</span></li>
                        <li><i class="fa fa-check" aria-hidden="true"style={{color:'#a521bd'}}></i>certification</li>
                        <li><i class="fa fa-check" aria-hidden="true"style={{color:'#a521bd'}}></i>Quality Portfolio</li>
                        
                      </ul>
                      </div>
                    </div>
                  </div>
                  
                  </div>
                  
                </div>
                 <div className="col-md-5 wow fadeInLeft" style={{width:'400px'}}>
                  <div className="item">
                    <div className="heading">
                      <h3>Assistance</h3>
                    </div>
                    <div className="features">
                    <div className="row" style={{borderBottom:'1px solid rgba(0,0,0,0.1)',marginLeft:0,marginRight:'0px'}} >
                    <div className="column" style={{width:'50%',borderRight:'1px solid rgba(0,0,0,0.1)'}}>
                      <ul>
                      <p style={{textAlign:'center',borderBottom:'1px solid rgba(0,0,0,0.1)',position:'relative',fontSize:'15px',padding:'0px',marginTop:'0px',color:'black',fontWeight:'700',marginLeft:'-10px'}}>For Company</p>
                        <li ><i class="fa fa-check" aria-hidden="true"style={{color:'#a521bd'}}></i><span>Seek Assistance </span></li>
                        <li><i class="fa fa-check" aria-hidden="true"style={{color:'#a521bd'}}></i>Provide Assistance</li>
                        <li ><i class="fa fa-check" aria-hidden="true"style={{color:'#a521bd'}}></i>Brainstorm with experts</li>
                        <li ><i class="fa fa-check" aria-hidden="true"style={{color:'#a521bd'}}></i>Sort out issues in the best way</li>
                      </ul>
                    </div>
                      <div className="column" style={{width:'48%'}}>
                       <ul>
                       <p style={{textAlign:'center',borderBottom:'1px solid rgba(0,0,0,0.1)',position:'relative',fontSize:'15px',padding:'0px',marginTop:'0px',marginLeft:'-10px',marginRight:'-10px',color:'black',fontWeight:'600'}}>Individual</p>
                        <li><i class="fa fa-check" aria-hidden="true"style={{color:'#a521bd'}}></i><span>Provide Assistance </span></li>
                        <li><i class="fa fa-check" aria-hidden="true"style={{color:'#a521bd'}}></i>Seek Assistance</li>
                        <li><i class="fa fa-check" aria-hidden="true"style={{color:'#a521bd'}}></i>Get mentors for your ideas</li>
                        <li><i class="fa fa-check" aria-hidden="true"style={{color:'#a521bd'}}></i>Grow your connections</li>
                      </ul>
                      </div>
                    </div>
                    <div style={{paddingBottom:'70px'}}/>
                  </div>
                  

                </div>
                </div>
                 <div className="col-md-5 wow fadeInRight" style={{width:'400px'}}>
                  <div className="item">
                    <div className="heading">
                      <h3>Hire Talents</h3>
                    </div>
                    <div className="features">
                    <div className="row" >
                    <div className="column" style={{width:'50%',borderRight:'1px solid rgba(0,0,0,0.1)'}}>
                      <ul>
                      <p style={{textAlign:'center',borderBottom:'1px solid rgba(0,0,0,0.1)',position:'relative',fontSize:'15px',padding:'0px',marginTop:'0px',color:'black',fontWeight:'700'}}>For Startup</p>
                        <li ><i class="fa fa-check" aria-hidden="true"style={{color:'#a521bd'}}></i><span>Hire Startup friendly talents </span></li>
                        <li><i class="fa fa-check" aria-hidden="true"style={{color:'#a521bd'}}></i>Hire skillful interns</li>
                        <li ><i class="fa fa-check" aria-hidden="true"style={{color:'#a521bd'}}></i>Manage Application and get notifications</li>
                        
                      </ul>
                    </div>
                      <div className="column" style={{width:'48%'}}>
                       <ul>
                       <p style={{textAlign:'center',borderBottom:'1px solid rgba(0,0,0,0.1)',position:'relative',fontSize:'15px',padding:'0px',marginTop:'0px',marginLeft:'-10px',marginRight:'12px',color:'black',fontWeight:'600'}}>For Individual</p>
                        <li><i class="fa fa-check" aria-hidden="true"style={{color:'#a521bd'}}></i><span>Immense learning while working in startups</span></li>
                        <li><i class="fa fa-check" aria-hidden="true"style={{color:'#a521bd'}}></i>Jobs and Internships in startups</li>
                        <li><i class="fa fa-check" aria-hidden="true"style={{color:'#a521bd'}}></i>Startups:place for your innovations</li>
                        <li><i class="fa fa-check" aria-hidden="true"style={{color:'#a521bd'}}></i>High exposure to cross functional works</li>
                      </ul>
                      </div>
                    </div>
                  </div>
                </div>
                </div>
                <div className="col-md-5 wow fadeInLeft" style={{width:'400px'}}>
                  <div className="item">
                    <div className="heading">
                      <h3>Incubation</h3>
                    </div>
                    <div className="features">
                    <div className="row" style={{borderBottom:'1px solid rgba(0,0,0,0.1)',marginLeft:0,marginRight:'0px'}} >
                    <div className="column" style={{width:'50%',borderRight:'1px solid rgba(0,0,0,0.1)'}}>
                      <ul>
                      <p style={{textAlign:'center',borderBottom:'1px solid rgba(0,0,0,0.1)',position:'relative',fontSize:'15px',padding:'0px',marginTop:'0px',color:'black',fontWeight:'700',marginLeft:'-10px'}}>For Company</p>
                        <li ><i class="fa fa-check" aria-hidden="true"style={{color:'#a521bd'}}></i><span>Seek Assistance </span></li>
                        <li><i class="fa fa-check" aria-hidden="true"style={{color:'#a521bd'}}></i>Provide Assistance</li>
                        <li ><i class="fa fa-check" aria-hidden="true"style={{color:'#a521bd'}}></i>Brainstorm with experts</li>
                        <li ><i class="fa fa-check" aria-hidden="true"style={{color:'#a521bd'}}></i>Sort out issues in the best way</li>
                      </ul>
                    </div>
                      <div className="column" style={{width:'48%'}}>
                       <ul>
                       <p style={{textAlign:'center',borderBottom:'1px solid rgba(0,0,0,0.1)',position:'relative',fontSize:'15px',padding:'0px',marginTop:'0px',marginLeft:'-10px',marginRight:'-10px',color:'black',fontWeight:'600'}}>Individual</p>
                        <li><i class="fa fa-check" aria-hidden="true"style={{color:'#a521bd'}}></i><span>Provide Assistance </span></li>
                        <li><i class="fa fa-check" aria-hidden="true"style={{color:'#a521bd'}}></i>Seek Assistance</li>
                        <li><i class="fa fa-check" aria-hidden="true"style={{color:'#a521bd'}}></i>Get mentors for your ideas</li>
                        <li><i class="fa fa-check" aria-hidden="true"style={{color:'#a521bd'}}></i>Grow your connections</li>
                      </ul>
                      </div>
                    </div>
                    <div className="row"  >
                   
                      <ul>
                      <p style={{textAlign:'center',borderBottom:'1px solid rgba(0,0,0,0.1)',position:'relative',fontSize:'15px',padding:'0px',marginTop:'0px',color:'black',fontWeight:'700',marginRight:'13px'}}>For Entrepreneurs and Aspiring Entrepreneurs</p>
                        <p style={{color:'black',marginLeft:'10px',marginRight:'15px',fontSize:'18px'}}>Here is everything you need to know for building innovative, better, sustainable and disruptive startup</p>
                      </ul>
                    
                    
                      
                    </div>
                   
                  </div>
                </div>
                </div>
               
                </div>
              </div>
            
          </section>


<section id="ourSolutions">
            <div className="container">
              <Services/>
            </div>
          </section>

          {/*==========================
          
      About Section
    ============================*/}
          <section id="about" className="wow fadeInUp">
            <div className="container">
              <div className="section-header">
                <h2>About Us</h2>
              </div>
              <AboutUs/>
            </div>
          </section>{/* #about */}
          {/*==========================
      Clients Section
    ============================*/}
          <section id="clients" className="wow fadeInUp">
            <div className="container">
              <div className="section-header">
                <h2>Clients</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores quae porro consequatur aliquam, incidunt fugiat culpa esse aute nulla. duis fugiat culpa esse aute nulla ipsum velit export irure minim illum fore</p>
              </div>
              <div className="owl-carousel clients-carousel">
                <img src="img/clients/client-1.png" alt="" />
                <img src="img/clients/client-2.png" alt="" />
                <img src="img/clients/client-3.png" alt="" />
                <img src="img/clients/client-4.png" alt="" />
                <img src="img/clients/client-5.png" alt="" />
                <img src="img/clients/client-6.png" alt="" />
              </div>
            </div>
          </section>{/* #clients */}
          {/*==========================
      Our Portfolio Section
    ============================*/}
          <section id="portfolio" className="wow fadeInUp">
            <div className="container">
              <div className="section-header">
                <h2>Our Portfolio</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores quae porro consequatur aliquam, incidunt fugiat culpa esse aute nulla. nulla duis fugiat culpa esse aute nulla ipsum velit export irure minim illum fore</p>
              </div>
            </div>
            <div className="container-fluid">
              <div className="row no-gutters">
                <div className="col-lg-3 col-md-4">
                  <div className="portfolio-item wow fadeInUp">
                    <a href="img/portfolio/1.jpg" className="portfolio-popup">
                      <img src="img/portfolio/1.jpg" alt="" />
                      <div className="portfolio-overlay">
                        <div className="portfolio-info"><h2 className="wow fadeInUp">Portfolio Name</h2></div>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="col-lg-3 col-md-4">
                  <div className="portfolio-item wow fadeInUp">
                    <a href="img/portfolio/2.jpg" className="portfolio-popup">
                      <img src="img/portfolio/2.jpg" alt="" />
                      <div className="portfolio-overlay">
                        <div className="portfolio-info"><h2 className="wow fadeInUp">Portfolio Name</h2></div>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="col-lg-3 col-md-4">
                  <div className="portfolio-item wow fadeInUp">
                    <a href="img/portfolio/3.jpg" className="portfolio-popup">
                      <img src="img/portfolio/3.jpg" alt="" />
                      <div className="portfolio-overlay">
                        <div className="portfolio-info"><h2 className="wow fadeInUp">Portfolio Name</h2></div>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="col-lg-3 col-md-4">
                  <div className="portfolio-item wow fadeInUp">
                    <a href="img/portfolio/4.jpg" className="portfolio-popup">
                      <img src="img/portfolio/4.jpg" alt="" />
                      <div className="portfolio-overlay">
                        <div className="portfolio-info"><h2 className="wow fadeInUp">Portfolio Name</h2></div>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="col-lg-3 col-md-4">
                  <div className="portfolio-item wow fadeInUp">
                    <a href="img/portfolio/5.jpg" className="portfolio-popup">
                      <img src="img/portfolio/5.jpg" alt="" />
                      <div className="portfolio-overlay">
                        <div className="portfolio-info"><h2 className="wow fadeInUp">Portfolio Name</h2></div>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="col-lg-3 col-md-4">
                  <div className="portfolio-item wow fadeInUp">
                    <a href="img/portfolio/6.jpg" className="portfolio-popup">
                      <img src="img/portfolio/6.jpg" alt="" />
                      <div className="portfolio-overlay">
                        <div className="portfolio-info"><h2 className="wow fadeInUp">Portfolio Name </h2></div>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="col-lg-3 col-md-4">
                  <div className="portfolio-item wow fadeInUp">
                    <a href="img/portfolio/7.jpg" className="portfolio-popup">
                      <img src="img/portfolio/7.jpg" alt="" />
                      <div className="portfolio-overlay">
                        <div className="portfolio-info"><h2 className="wow fadeInUp">Portfolio Name </h2></div>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="col-lg-3 col-md-4">
                  <div className="portfolio-item wow fadeInUp">
                    <a href="img/portfolio/8.jpg" className="portfolio-popup">
                      <img src="img/portfolio/8.jpg" alt="" />
                      <div className="portfolio-overlay">
                        <div className="portfolio-info"><h2 className="wow fadeInUp">Portfolio Name</h2></div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>{/* #portfolio */}
          {/*==========================
      Testimonials Section
    ============================*/}
          <section id="testimonials" className="wow fadeInUp">
            <div className="container">
              <div className="section-header">
                <h2>Testimonials</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores quae porro consequatur aliquam, incidunt fugiat culpa esse aute nulla. duis fugiat culpa esse aute nulla ipsum velit export irure minim illum fore</p>
              </div>
              <div className="owl-carousel testimonials-carousel">
                <div className="testimonial-item">
                  <p>Dolores quae porro consequatur aliquam, incidunt fugiat culpa esse aute nulla. duis fugiat culpa esse aute nulla ipsum velit export irure minim illum fore
                  </p> 
                  <h3>Mrio James</h3>
                  <h4>CEO &amp; Founder</h4>
                </div>
                <div className="testimonial-item">
                  <p>
                    Dolores quae porro consequatur aliquam, incidunt fugiat culpa esse aute nulla. duis fugiat culpa esse aute nulla ipsum velit export irure minim illum fore
                  </p> 
                  <h3>Finton Gofnes</h3>
                  <h4>CTO</h4>
                </div>
                <div className="testimonial-item">
                  <p>
                    Dolores quae porro consequatur aliquam, incidunt fugiat culpa esse aute nulla. duis fugiat culpa esse aute nulla ipsum velit export irure minim illum fore
                  </p> 
                  <h3>Marcus Kell</h3>
                  <h4>Marketing</h4>
                </div>
                <div className="testimonial-item">
                  <p>
                    Dolores quae porro consequatur aliquam, incidunt fugiat culpa esse aute nulla. duis fugiat culpa esse aute nulla ipsum velit export irure minim illum fore
                  </p> 
                  <h3>Williams Belly</h3>
                  <h4>Accounts</h4>
                </div>
                <div className="testimonial-item">
                  <p>
                    Dolores quae porro consequatur aliquam, incidunt fugiat culpa esse aute nulla. duis fugiat culpa esse aute nulla ipsum velit export irure minim illum fore
                  </p> 
                  <h3>Larry Hanson</h3>
                  <h4>Investor</h4>
                </div>
              </div>
            </div>
          </section>{/* #testimonials */}
          
          {/*==========================
      Call To Action Section
    ============================*/}
          <section id="call-to-action" className="wow fadeInUp">
            <div className="container">
              <div className="row">
                <div className="col-lg-9 text-center text-lg-left">
                  <h3 className="cta-title">Get Our Service</h3>
                  <p className="cta-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores quae porro consequatur aliquam, incidunt fugiat culpa esse aute nulla cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
                <div className="col-lg-3 cta-btn-container text-center">
                  <a className="cta-btn align-middle" href="#contact">Contact Us</a>
                </div>
              </div>
            </div>
          </section>{/* #call-to-action */}
          {/*==========================
      Our Team Section
    ============================*/}
          <section id="team" className="wow fadeInUp">
            <div className="container">
              <div className="section-header">
                <h2>Our Team</h2>
              </div>
              <div className="row">
                <div className="col-lg-3 col-md-6">
                  <div className="member">
                    <div className="pic"><img src="img/team1.jpg" alt="" /></div>
                    <div className="details">
                      <h4>James Smith</h4>
                      <span>Chief Executive Officer</span>
                      <div className="social">
                        <a href><i className="fa fa-twitter" /></a>
                        <a href><i className="fa fa-facebook" /></a>
                        <a href><i className="fa fa-google-plus" /></a>
                        <a href><i className="fa fa-linkedin" /></a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6">
                  <div className="member">
                    <div className="pic"><img src="img/team2.jpg" alt="" /></div>
                    <div className="details">
                      <h4>Michell Kellon</h4>
                      <span>Technical Manager</span>
                      <div className="social">
                        <a href><i className="fa fa-twitter" /></a>
                        <a href><i className="fa fa-facebook" /></a>
                        <a href><i className="fa fa-google-plus" /></a>
                        <a href><i className="fa fa-linkedin" /></a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6">
                  <div className="member">
                    <div className="pic"><img src="img/team3.jpg" alt="" /></div>
                    <div className="details">
                      <h4>French Lincon</h4>
                      <span>Financial Manager</span>
                      <div className="social">
                        <a href><i className="fa fa-twitter" /></a>
                        <a href><i className="fa fa-facebook" /></a>
                        <a href><i className="fa fa-google-plus" /></a>
                        <a href><i className="fa fa-linkedin" /></a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6">
                  <div className="member">
                    <div className="pic"><img src="img/team4.jpg" alt="" /></div>
                    <div className="details">
                      <h4>Amanda Jepson</h4>
                      <span>Accountant</span>
                      <div className="social">
                        <a href><i className="fa fa-twitter" /></a>
                        <a href><i className="fa fa-facebook" /></a>
                        <a href><i className="fa fa-google-plus" /></a>
                        <a href><i className="fa fa-linkedin" /></a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>{/* #team */}
          {/*==========================
      Contact Section
    ============================*/}
          <section id="contact" className="wow fadeInUp">
            <div className="container">
              <div className="section-header">
                <h2>Contact Us</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores quae porro consequatur aliquam, incidunt fugiat culpa esse aute nulla. malis nulla duis fugiat culpa esse aute nulla ipsum velit export irure minim illum fore</p>
              </div>
              <div className="row contact-info">
                <div className="col-lg-5"> 
                  <div className="contact-address">
                    <i className="ion-ios-location-outline" />
                    <h3>Address</h3>
                    <address>MN-12 Lincon Street, NewYork 12356, USA</address>
                  </div> 
                  <div className="contact-phone">
                    <i className="ion-ios-telephone-outline" />
                    <h3>Phone Number</h3>
                    <p><a href="tel:+155895548855">+1 2345 67890 12</a></p>
                  </div> 
                  <div className="contact-email">
                    <i className="ion-ios-email-outline" />
                    <h3>Email</h3>
                    <p><a href="mailto:info@example.com">name@website.com</a></p>
                  </div> 
                </div>
                <div className="col-lg-7">
                  <div className="container">
                    <div className="form"> 
                      {/* Form itself */}
                      <form name="sentMessage" className="well" id="contactForm" noValidate> 
                        <div className="control-group">
                          <div className="form-group">
                            <input type="text" className="form-control" placeholder="Full Name" id="name" required data-validation-required-message="Please enter your name" />
                            <p className="help-block" />
                          </div>
                        </div> 	
                        <div className="form-group">
                          <div className="controls">
                            <input type="email" className="form-control" placeholder="Email" id="email" required data-validation-required-message="Please enter your email" />
                          </div>
                        </div> 	
                        <div className="form-group">
                          <div className="controls">
                            <textarea rows={10} cols={100} className="form-control" placeholder="Message" id="message" required data-validation-required-message="Please enter your message" minLength={5} data-validation-minlength-message="Min 5 characters" maxLength={999} style={{resize: 'none'}} defaultValue={""} />
                          </div>
                        </div> 		 
                        <div id="success"> </div> {/* For success/fail messages */}
                        <button type="submit" className="btn btn-primary pull-right">Send</button><br />
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
          </section>{/* #contact */}
        </main>
        {/*==========================
    Footer
  ============================*/}
        
      </div>   
       
        )
    }
}

export default Home;