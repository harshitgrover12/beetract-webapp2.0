import React, { Component } from 'react'
import Nav from '../nav/nav';
import './ProjectSpace.css';
import Dash from '../dashboard/dash';
import {Divider} from '@material-ui/core';
import { green } from '@material-ui/core/colors';

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
            
                <div className="wow anim fadeInLeft" style={{width:'1150px',marginTop:'15px'}} >
                    <div className="item " >
                    <div className="features2">

                    <div className="row" >
                    <div className="column">
                    
                    <ul>
                        Project Details
                        
                    </ul>
                    
                    <div className="rightside">
                        <ul>
                    <span>$10.00 - 100.00 USD</span>
                    
                    <br/>
                    
                    <li><i class="fa fa-clock-o"></i>  Bidding ends in 5 days,19 hours</li>
                    </ul>
                    
                    </div>
                    <p style={{marginTop:'10px'}}>What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry's standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book it has?</p>
                    </div>
                    </div>
                    </div>
                    </div>
                    
                    <div className="wow anim fadeInLeft" style={{width:'1150px',marginRight:'100px',paddingTop:'10px'}} >
                    
                    <div className="item ">
                    
                    <div className="features2">
                    
                    
                    <div style={{marginTop:'10px',marginLeft:'20px',fontWeight:'bold',fontSize:'20px',marginBottom:'10px',paddingTop:'10px'}}>
                    Place a Bid on this Project
                    </div>
                    </div>
                    <Divider/>
                    <div style={{paddingTop:'10px',textAlign:'start',paddingLeft:'15px'}}>
                    <p>You will be able to bid until project is awarded to someone.</p>
                    </div>
                    <div style={{marginTop:'10px',marginLeft:'20px',fontWeight:'bold',fontSize:'18px',marginBottom:'10px',paddingTop:'10px'}}>
                    Bid Details
                    </div>
                    </div>
                    
                </div>
                    
                </div>
                
                    <div className="col-md-1 wow anim fadeInLeft" >
                        
                            <div className="selecto1" style={{marginTop:'15px'}}>
                            <div className="features1">
                            
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
                                <li><i class="fa fa-credit-card-alt" style={{ color: green[500]}} ></i>  Payment Method Verified</li>
                                <li><i class="fa fa-btc"  style={{ color: green[500]}} ></i>  Deposit Made</li>
                                <li><i class="fa fa-envelope" style={{ color: green[500]}} ></i> Email Address Verified</li>
                                <li><i class="fa fa-black-tie" style={{ color: green[500]}} ></i> Profile Completed</li>
                                <li><i class="fa fa-phone" style={{ color: green[500]}} ></i> Phone No. Verified</li>
                            </ul>
                            </div>
                    
                            </div>
                    
                    <div className="side wow anim fadeInLeft" style={{width:'290px',marginBottom:'10px'}} >
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
