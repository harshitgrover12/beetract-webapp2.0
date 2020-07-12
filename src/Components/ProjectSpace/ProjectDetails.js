import React, { Component } from 'react'
import Nav from '../nav/nav';
import './ProjectSpace.css';
import Dash from '../dashboard/dash';
import {Divider} from '@material-ui/core';
import { green } from '@material-ui/core/colors';
import Box from '@material-ui/core/Box';

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
                    
                    <div className="wow anim fadeInLeft" style={{width:'1100px',marginRight:'100px'}} >
                    
                    <div className="item ">
                    
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
                    This project will be delivered in
                    </div>
                    <div style={{marginTop:'5px',marginLeft:'20px',fontWeight:'bold',fontSize:'14px',marginBottom:'10px',paddingTop:'5px'}}>
                    <input type="text" placeholder="Your bid" style={{display:'inline-block'}}></input>
                    <input type="text"  style={{display:'inline-block',marginLeft:'20px',width:'300px'}}></input>
                    <p style={{marginTop:'10px'}}> paid to you:$55.0 fee=49.5$</p>
                    </div>
                    <div style={{marginTop:'5px',marginLeft:'20px',fontWeight:'bold',fontSize:'14px',marginBottom:'10px',paddingTop:'5px'}}>
                     Describe Your Proposal
                    </div>
                    <div style={{marginTop:'5px',marginLeft:'20px',fontWeight:'bold',fontSize:'14px',marginBottom:'10px',paddingTop:'5px'}}>
                     <textarea class="form-control" id="describeProposal" rows="7" placeholder="What makes you the best candidate for this project? " style={{border:'2px solid #e9eaea',width:'900px'}}></textarea>
                    </div>
                    <div style={{marginTop:'5px',marginLeft:'20px',fontWeight:'bold',fontSize:'14px',marginBottom:'10px',paddingTop:'5px'}}>
                     Suggest a milestone
                    </div>
                    <div style={{marginTop:'5px',marginLeft:'20px',fontWeight:'bold',fontSize:'14px',marginBottom:'10px',paddingTop:'5px'}}>
                     <p> Define the tasks that you will complete for this</p>
                    </div>
                    <div style={{marginTop:'5px',marginLeft:'20px',fontWeight:'bold',fontSize:'14px',marginBottom:'10px',paddingTop:'5px'}}>
                    <input type="text" placeholder="Project Milestone" style={{display:'inline-block'}}></input>
                    <input type="text" placeholder="Your bid" style={{display:'inline-block',marginLeft:'20px'}}></input> 
                    </div>
                    <div style={{marginTop:'5px',marginLeft:'20px',fontWeight:'bold',fontSize:'14px',marginBottom:'10px',paddingTop:'5px'}}>
                     <button className="button9"> Add another milestone</button>
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
                            <li><i class="fa fa-user"></i>   (2 reviews)</li>
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
                </div>
                    
        </div>
        
    </div>
        </section>
        </div>
    )
}
export default ProjectDetails;
