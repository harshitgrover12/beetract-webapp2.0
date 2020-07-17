import React, { Component } from 'react'
import Nav from '../nav/nav';
import './ProjectSpace.css';
import Dash from '../dashboard/dash';
import {Divider} from '@material-ui/core';
import { green } from '@material-ui/core/colors';
import Box from '@material-ui/core/Box';
import ReactStars from "react-rating-stars-component";
import project from './comp.png';

const ProjectDetails=()=>{
    return(
        <div>
            <Nav/><Dash/>
        <section className="pricing-table1">
        
        <div className="container" >
        <div className="projectdetailbox">
            <button className="projectdetailbutton">Details</button>
            <button className="projectdetailbutton">Proposals</button>

        </div>
            <div className="row justify-content-md-start" style={{marginLeft:'5px',marginRight:'5px'}}>
            
                <div className="wow anim fadeInLeft" style={{width:'1100px',marginTop:'15px'}} >
                    <div className="item ">
                    <div className="features2">

                   
                    
                    <ul style={{paddingTop:"30px",fontSize:"25px"}}>
                        Project Details
                
                    </ul>
                    
                    <div className="rightside1">
                    <ul>
                    <span>$10.00 - 100.00 USD</span>
                    <br/>
                    <li><i class="fa fa-clock-o"></i>  Bidding ends in 5 days,19 hours</li>
                    </ul>
                    </div>

                    <Divider/>
                    <p style={{marginTop:'10px',paddingLeft:"10px",marginLeft:"10px"}}>What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry's standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book it has?</p>

                    <div style={{fontSize:"18px",fontWeight:"bold",paddingLeft:"10px",marginLeft:"10px"}}>Skills Required</div>

                    <div className="skillbox">
                        <ul>
                            <li>Marketing</li>
                            <li>Business Plans</li>
                            <li>Marketing Strategy</li>
                        </ul>
                    </div>

                    <div style={{marginLeft:'15px',fontWeight:'bold',fontSize:'14px',marginBottom:'10px',paddingBottom:'20px'}}>
                     <button className="button10">Place Bid</button>
                    </div>
                    
                    </div>
                    
                    </div>
                    
                    <div className="wow anim fadeInLeft" style={{width:'1100px',marginRight:'100px',marginBottom:'0px'}} >
                    
                    <div style={{paddingBottom:'60px'}} className="item ">
                    <div className="features2">
                    <div style={{paddingTop:'10px',textAlign:'start',paddingLeft:'15px'}}>
                    <p>You will be able to bid until project is awarded to someone.</p>
                    </div>
                    <div style={{marginTop:'10px',marginLeft:'20px',fontWeight:'bold',fontSize:'18px',marginBottom:'10px',paddingTop:'10px'}}>
                    Bid Details
                    </div>
                    <div style={{marginTop:'5px',marginLeft:'20px',fontWeight:'bold',fontSize:'14px',marginBottom:'10px',paddingTop:'5px',display:'inline-block'}}>
                    Bid Amount
                    </div>
                    <div style={{marginTop:'5px',marginLeft:'135px',fontWeight:'bold',fontSize:'14px',marginBottom:'10px',paddingTop:'5px',display:'inline-block'}}>
                    Additional charges
                    </div>
                    <div style={{marginTop:'5px',marginLeft:'20px',fontWeight:'bold',fontSize:'14px',marginBottom:'10px',paddingTop:'5px'}}>
                    <input type="text" placeholder="Your bid" style={{display:'inline-block',fontWeight:"normal"}}></input>
                    <input type="text"  placeholder="Description" style={{display:'inline-block',marginLeft:'20px',width:'300px',fontWeight:"normal"}}></input>
                    <p style={{marginTop:'10px'}}> paid to you:$55.0 fee=49.5$</p>
                    </div>
                    <div style={{marginTop:'5px',marginLeft:'20px',fontWeight:'bold',fontSize:'14px',marginBottom:'10px',paddingTop:'5px'}}>
                     Describe Your Proposal
                    </div>
                    <div style={{marginTop:'5px',marginLeft:'20px',fontWeight:'bold',fontSize:'14px',marginBottom:'10px',paddingTop:'5px'}}>
                     <textarea class="form-control" id="describeProposal" rows="7" placeholder="What makes you the best candidate for this project? " style={{border:'2px solid #e9eaea',width:'900px'}}></textarea>
                    </div>
                    <div style={{marginTop:'5px',marginLeft:'20px',fontWeight:'bold',fontSize:'14px',marginBottom:'10px',paddingTop:'5px',display:'inline-block'}}>
                    Start date
                    </div>
                    <div style={{marginTop:'5px',marginLeft:'135px',fontWeight:'bold',fontSize:'14px',marginBottom:'10px',paddingTop:'5px',display:'inline-block'}}>
                    Payment mode
                    </div>
                    <div style={{marginTop:'5px',marginLeft:'20px',fontWeight:'bold',fontSize:'14px',marginBottom:'10px',paddingTop:'5px'}}>
                    <input type="date" placeholder="Your bid" style={{display:'inline-block'}}></input>
                    <select style={{display:'inline-block',marginLeft:'20px',width:'300px',height:"27px",fontWeight:"normal"}}>
                        <option>Milestones</option>
                        <option>Full Project</option>
                    </select>
                    </div>
                    <div style={{marginTop:'5px',marginLeft:'20px',fontWeight:'bold',fontSize:'14px',marginBottom:'10px',paddingTop:'5px'}}>
                     Obtained mandatory skills
                    </div>
                    <div style={{marginTop:'5px',marginLeft:'20px',fontWeight:'normal',fontSize:'14px',marginBottom:'10px',paddingTop:'5px'}}>
                     <textarea class="form-control" id="describeProposal" rows="1" placeholder="Skills possesed... " style={{border:'2px solid #e9eaea',width:'900px'}}></textarea>
                    </div>
                    <div style={{marginTop:'5px',marginLeft:'20px',fontWeight:'bold',fontSize:'14px',marginBottom:'10px',paddingTop:'5px'}}>
                     Comlpetion Plan
                    </div>
                    <div style={{marginTop:'5px',marginLeft:'20px',fontWeight:'normal',fontSize:'14px',marginBottom:'10px',paddingTop:'5px'}}>
                     <textarea class="form-control" id="describeProposal" rows="5" placeholder="Breif note on completion plan... " style={{border:'2px solid #e9eaea',width:'900px'}}></textarea>
                    </div>
                    <div style={{marginTop:'5px',marginLeft:'20px',fontWeight:'bold',fontSize:'14px',marginBottom:'10px',paddingTop:'5px'}}>
                     Other concerns
                    </div>
                    <div style={{marginTop:'5px',marginLeft:'20px',fontWeight:'normal',fontSize:'14px',marginBottom:'10px',paddingTop:'5px'}}>
                     <textarea class="form-control" id="describeProposal" rows="1"  style={{border:'2px solid #e9eaea',width:'900px'}}></textarea>
                    </div>
                    <div style={{marginTop:'5px',marginLeft:'20px',fontWeight:'bold',fontSize:'14px',marginBottom:'10px',paddingTop:'5px'}}>
                     Additional perks
                    </div>
                    <div style={{marginTop:'5px',marginLeft:'20px',fontWeight:'normal',fontSize:'14px',marginBottom:'10px',paddingTop:'5px'}}>
                     <textarea class="form-control" id="describeProposal" rows="1" placeholder="Other benefits... " style={{border:'2px solid #e9eaea',width:'900px'}}></textarea>
                    </div>
                    <div style={{marginTop:'5px',marginLeft:'20px',fontWeight:'bold',fontSize:'14px',marginBottom:'10px',paddingTop:'5px',display:'inline-block'}}>
                    Contact mail id
                    </div>
                    <div style={{marginTop:'5px',marginLeft:'135px',fontWeight:'bold',fontSize:'14px',marginBottom:'10px',paddingTop:'5px',display:'inline-block'}}>
                    Contact number
                    </div>
                    <div style={{marginTop:'5px',marginLeft:'100px',fontWeight:'bold',fontSize:'14px',marginBottom:'10px',paddingTop:'5px',display:'inline-block'}}>
                    Location of work
                    </div>
                    <div style={{marginTop:'5px',marginLeft:'20px',fontWeight:'bold',fontSize:'14px',marginBottom:'10px',paddingTop:'5px'}}>
                    <input type="email"  style={{display:'inline-block',fontWeight:"normal"}}></input>
                    <input type="number"   style={{display:'inline-block',marginLeft:'20px',width:'200px',fontWeight:"normal"}}></input>
                    <select style={{display:'inline-block',marginLeft:'20px',width:'200px',height:"27px",fontWeight:"normal"}}>
                        <option>Virtual</option>
                        <option>City</option>
                        
                    </select>
                    </div>
                    <div style={{marginTop:'5px',marginLeft:'20px',fontWeight:'bold',fontSize:'14px',marginBottom:'10px',paddingTop:'5px'}}>
                     Suggest milestones of the Project
                    </div>
                    <div style={{marginTop:'5px',marginLeft:'20px',fontWeight:'bold',fontSize:'14px',marginBottom:'10px',paddingTop:'5px'}}>
                     <p> Define the milestones that you will acheive to complete this project.</p>
                    </div>
                    <div style={{marginTop:'5px',marginLeft:'20px',fontWeight:'bold',fontSize:'14px',marginBottom:'10px',paddingTop:'5px'}}>
                    <input type="text" placeholder="Milestone" style={{display:'inline-block'}}></input>
                    <input type="date" style={{display:'inline-block',marginLeft:'20px'}}></input>
                    <input type="number" placeholder="Pay" style={{display:'inline-block',marginLeft:'20px'}}></input>
                    </div>
                    <div style={{marginTop:'5px',marginLeft:'20px',fontWeight:'bold',fontSize:'14px',marginBottom:'10px',paddingTop:'5px'}}>
                     <button className="button9"> Add another milestone</button>
                    </div>
                    
                    <div style={{marginTop:'5px',marginLeft:'20px',fontWeight:'bold',fontSize:'14px',marginBottom:'10px',paddingTop:'5px'}}>
                     Are these details correct?
                    </div>
                    <div style={{height:'220px',width:'70%',border:'2px solid #e9eaea', marginLeft:'20px',paddingBottom:'10px'}}>
                    <div style={{marginTop:'30px',paddingLeft:'30px',width:'30%'}}>
                        <img src={project}/>
                        <p style={{fontWeight:'bold',marginBottom:'5px',paddingTop:'5px'}}>PROJECT NAME</p>
                        <p>$10.00 - 100.00 USD</p>
                        
                    </div>
                    
    
                    <div className="rightside2">
                        <p>Build me web application</p>
                        <p style={{fontWeight:'normal',marginBottom:'5px',paddingTop:'5px'}}>In need of a web application for e-learning</p>
                    
                    <div className="skillbox1">
                        <ul>
                            <li>HTML</li>
                            <li>Web Designer</li>
                            <li>PHP</li>
                            <li>Graphic design</li>
                            <li>Javascript</li>
                        </ul>
                    </div>
                    <div style={{position:'relative',left:"-300px",top:'-38px'}}>
                    <button className="button11">Yes, Place the bid</button>
                    <button className="button11">View/Edit Details</button>
                    </div>
                    </div>
                    
                    </div>
                    
                    </div>
                    </div>
                </div>
                    
                </div>
                
                    <div className="col-md-1 wow anim fadeInLeft" >
                        
                            <div className="selecto1" style={{marginTop:'15px'}}>
                            <div className="features3">
                            
                            <ul>
                            About Employer
                            <Divider/>
                            <li><i class="fa fa-globe" ></i> India </li>
                            <li><i class="fa fa-anchor"></i> 2 projects completed</li>
                            <li><i class="fa fa-user"></i><span style={{display:"inline-block",paddingLeft:"5px",position:"relative",top:"11px",paddingRight:"5px"}}><ReactStars count={5} size={20} activeColor="#ffd700" value={3.5} /></span>(2 reviews)</li>
                            <li><i class="fa fa-tags"></i> Member since Oct 21,2019</li>
                            </ul>

                            <ul>
                                Employer Verification
                                <Divider/>
                                <li><i class="fa fa-id-badge" style={{ color: green[500]}} ></i>  Identity Verified</li>
                                <li><i class="fa fa-black-tie" style={{ color: green[500]}} ></i> Profile Completed</li>
                                <li><i class="fa fa-phone" style={{ color: green[500]}} ></i> Phone No. Verified</li>
                            </ul>
                            </div>
                    
                            </div>
                    
                    <div className="side wow anim fadeInLeft" style={{width:'343px',marginBottom:'10px'}} >
                    <div className="item " style={{marginRight:'0px'}}>
                
                    
                    <div className="features1">
                    <div className="row" >
                    <div className="column">
                    <ul>
                    
                        <li ><span>Bids Left </span></li>
                        <li>Until Next Bid</li>
                        <li >Refresh Speed</li>
                        <li >Average Bid</li>
                        
                        <div className="rightside">
                        <ul>
                        <li>24/100</li>
                        <li>6 hours</li>
                        <li>1x</li>
                        <li>$120 USD</li>
                        </ul>
                        </div>
                        
                            
                            
                            
                        
                    </ul>
                    </div>
                    </div>
                    </div>
                    </div>
                    
                </div>

                <div className="side wow anim fadeInLeft" style={{width:'343px',marginBottom:'10px'}} >
                    <div className="item " style={{marginRight:'0px'}}>
                
                    
                    <div className="selecto1" style={{marginTop:'5px',height:"500px"}}>
                            <div className="features3">
                            
                            <ul>
                            How to write winning bid
                            <Divider/>
                            </ul>
                            <div style={{fontSize:"100px",position:"relative",left:"110px",top:"-180px",marginBottom:"10px",color:"#A4215d"}}>
                            <i class="fa fa-trophy"></i>
                            </div>
                            <div style={{position:"relative",top:"-200px",paddingRight:"5px",paddingLeft:"5px",textAlign:"center"}}>
                            <p>You should always read and reread the job description, taking the time to understand what the client actually wants from you.The job description is a great place to see how the client feels about the project.You should always read and reread the job description, taking the time to understand what the client actually wants from you.The job description is a great place to see how the client feels about the project.</p>
                            
                            </div>
                            </div>
                    </div>
                    
                </div>

                </div>
                    
        </div>
        
    </div>
    </div>
        </section>
        </div>
    )
}
export default ProjectDetails;
