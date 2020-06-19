import React, { Component } from 'react'
import Services from './Services';
import AboutUs from './AboutUs';
import img from './clouds.png';
import img1 from './beetractlogo.png';

import Intro from './Intro'
class Home extends Component {
    render() {
        return (
            <div id="body">
             {/*==========================
    Top Bar
  ============================*/}
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
            <h1> <a href="#body" className="scrollto"><img src={img1} height={120} width={140} style={{position:'absolute',left:'20px',top:'-8px'}}/> </a></h1>
            </div>
            <nav id="nav-menu-container">
              <ul className="nav-menu"  style={{position:'relative',left:'70%',padding:'10px'}}>
                <li className="menu-active"><a href="#body">Home</a></li>
                <li><a href="#ourSolutions">Solutions</a></li>
                <li><a href="#about">About Us</a></li>
                <li><a href="#portfolio">Get Support</a></li>
                <li><a href="#pricing">SignIn/SignUp</a></li>	
              </ul>
            </nav>{/* #nav-menu-container */}
          </div>
        </header>{/* #header */}
        <section id="intro">
        <Intro/>
          
        </section>{/* #intro */}
        <main id="main">
          {/*==========================
      Services Section
    ============================*/}
          <section id="services">
          <div className="container">
              <div className="section-header">
              <h2 style={{fontSize:'56px',marginTop:'100px'}}>How It works</h2>
              </div>
              <div className="row">
                <div className="col-lg-4">
                  <div className="box wow fadeInLeft">
                    <div className="icon"><i className="fa fa-folder-open" /></div>
                    <h4 className="title"><a href>PROJECTS</a></h4>
                    <p className="description" ><span style={{fontWeight:'1000'}}>Companies</span> can post projects and bid on projects.<span style={{fontWeight:'1000'}}> Prelancers</span> and<span style={{fontWeight:'1000'}}> Freelancers</span> can bid on projects and form teams. Agreed Timelines and Payments along with <span style={{fontWeight:'1000'}}>Progressive Project Stages</span>. Get <span style={{fontWeight:'1000'}}>Unlimited</span> qualified proposals.</p>
                  </div>
                </div>
                <div className="col-lg-4">
                <div className="box wow fadeInRight" style={{marginLeft:'200px'}}>
                    <div className="icon"><i className="fa fa-diamond" /></div>
                    <h4 className="title"><a href>PRELANCERS</a></h4>
                    <p className="description"><span style={{fontWeight:'1000'}}>Freelancers</span> can pick team members and work collaboratively. They can also facilitate certifications.<span style={{fontWeight:'1000'}}> Prelancerss</span> get real time<span style={{fontWeight:'1000'}}>Work Experience, Certification</span> and<span style={{fontWeight:'1000'}}> Quality Portfolio.</span></p>
                  </div>
                </div>
                </div>
                <div className="row">
                <div className="col-lg-4">
                  <div className="box wow fadeInLeft" data-wow-delay="0.2s">
                    <div className="icon"><i className="fa fa-handshake-o" /></div>
                    <h4 className="title"><a href>ASSISTANCE</a></h4>
                    <p className="description">Both <span style={{fontWeight:'1000'}}>Company</span> and <span style={{fontWeight:'1000'}}>Individual </span>can seek as well as provide assistance.<span style={{fontWeight:'1000'}}> Get Mentor</span> for your ideas and <span style={{fontWeight:'1000'}}>Grow your Connections.</span></p>
                  </div>
                </div>
                <div className="col-lg-4" style={{marginLeft:'200px'}}>
                  <div className="box wow fadeInLeft">
                    <div className="icon"><i className="fa fa-binoculars" /></div>
                    <h4 className="title"><a href>HIRE TALENTS</a></h4>
                    <p className="description">Provides a platform for <span style={{fontWeight:'1000'}}>Startups</span> to hire skillful interns, manage applications and get Notifications. As an <span style={{fontWeight:'1000'}}>Individual</span> , you get to land <span style={{fontWeight:'1000'}}>Jobs</span>  and <span style={{fontWeight:'1000'}}>Internships</span>  in startups and high exposure to cross functional works. </p>
                  </div>
                </div>
                </div>
                <div className="row">
                <div className="col-lg-4">
                  <div className="box wow fadeInRight">
                    <div className="icon"><i className="fa fa-briefcase" /></div>
                    <h4 className="title"><a href>INCUBATION</a></h4>
                    <p className="description"><span style={{fontWeight:'1000'}}>Startups</span> can apply for <span style={{fontWeight:'1000'}}>Incubation</span> , get selected and <span style={{fontWeight:'1000'}}>Grow their Startup</span>. <span style={{fontWeight:'1000'}}>Incubators</span> can register themselves and recieve applications from various Startups.</p>
                  </div>
                </div>
                <div className="col-lg-4" style={{marginLeft:'200px'}}>
                  <div className="box wow fadeInLeft" data-wow-delay="0.2s">
                    <div className="icon"><i className="fa fa-dropbox" /></div>
                    <h4 className="title"><a href>INCUBATION</a></h4>
                    <p className="description">For <span style={{fontWeight:'1000'}}>Entrepreneurs</span> and <span style={{fontWeight:'1000'}}>Aspiring Entrepreneurs</span>  here is everything you need to know for building <span style={{fontWeight:'1000'}}>Innovative</span> , better, <span style={{fontWeight:'1000'}}>Sustainable</span> and <span style={{fontWeight:'1000'}}>Disruptive</span> startup.</p>
                    
                  </div>

                </div>
              </div>
            </div>
                
          </section>{/* #services */}
          {/*==========================
     Service Section
    ============================*/}
     <section id="ourSolutions" className="wow fadeInUp">
     <div className="section-header">

      <Services/>
      </div>
     </section>
        
            {/* #about */}
          {/*==========================
      Clients Section
    ============================*/}

          <section id="about" className="wow fadeInUp">
            <div className="container">
              <div className="section-header">
              <h2 style={{fontSize:'56px',marginTop:'100px'}}>Company Profile</h2>
                <AboutUs/>
              </div>
             
              </div>
              </section>
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
         {/* #portfolio */}
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
          <section id="pricing" className="pricing-table">
            <div className="container">
              <div className="section-header">
                <h2>Pricing Table</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores quae porro consequatur aliquam, incidunt fugiat culpa esse aute nulla. nulla duis fugiat culpa esse aute nulla ipsum velit export irure minim illum fore</p>
              </div>
            </div>
            <div className="container">
              <div className="row justify-content-md-center">
                <div className="col-md-5 col-lg-4">
                  <div className="item">
                    <div className="heading">
                      <h3>RESIDENTIAL</h3>
                    </div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <div className="features">
                      <ul className="list">
                        <li><span>Interior Design</span></li>
                        <li>Project Discussion</li>
                        <li>Space Planning</li>
                        <li>Online Consultation</li>
                      </ul>
                    </div>
                    <div className="price">
                      <h4>$25</h4>
                    </div>
                    <button className="btn btn-block btn-outline-primary" type="submit">BUY NOW</button>
                  </div>
                </div>
                <div className="col-md-5 col-lg-4">
                  <div className="item">
                    <div className="ribbon">Best</div>
                    <div className="heading">
                      <h3>COMMERCIAL</h3>
                    </div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <div className="features">
                      <ul className="list">
                        <li><span>Interior Design</span></li>
                        <li>Project Discussion</li>
                        <li>Space Planning</li>
                        <li>Online Consultation</li>
                      </ul>
                    </div>
                    <div className="price">
                      <h4>$50</h4>
                    </div>
                    <button className="btn btn-block btn-primary" type="submit">BUY NOW</button>
                  </div>
                </div>
                <div className="col-md-5 col-lg-4">
                  <div className="item">
                    <div className="heading">
                      <h3>PROFESSIONAL</h3>
                    </div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <div className="features">
                      <ul className="list">
                        <li><span>Interior Design</span></li>
                        <li>Project Discussion</li>
                        <li>Space Planning</li>
                        <li>Online Consultation</li>
                      </ul>
                    </div>
                    <div className="price">
                      <h4>$150</h4>
                    </div>
                    <button className="btn btn-block btn-outline-primary" type="submit">BUY NOW</button>
                  </div>
                </div>
              </div>
            </div> 
          </section>
          {/*==========================
      Call To Action Section
    ============================*/}
         
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
            <div className="container mb-4 map">
              <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d387191.33750346623!2d-73.979681!3d40.6974881!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew+York%2C+NY%2C+USA!5e0!3m2!1sen!2sin!4v1541477355474" width="100%" height={350} frameBorder={0} style={{border: 0}} allowFullScreen /> 
            </div>
          </section>{/* #contact */}
        </main>
        {/*==========================
    Footer
  ============================*/}
        <footer id="footer">
          <div className="container">
            <div className="copyright">
              © Copyright <strong>Housing</strong>. All Rights Reserved
            </div>
            <div className="credits"> 
              Template by <a href="https://webthemez.com/consulting/">WebThemez</a>
            </div>
          </div>
        </footer>{/* #footer */}
        <a href="#" className="back-to-top"><i className="fa fa-chevron-up" /></a>
      </div>
        )
    }
}
export default Home;