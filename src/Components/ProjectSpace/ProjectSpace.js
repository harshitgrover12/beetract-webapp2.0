import React, { Component } from 'react'
import Nav from '../nav/nav';
import './ProjectSpace.css';
class ProjectSpace extends Component {
    render() {
        return (
            <div>
            <Nav/>
        <div className="container" style={{marginRight:'525px'}}>
            <div className="row justify-content-md-center ">
        <ul className="nav nav-pills">
            <li className="active"><a href="#" className="h">Projects</a></li>
            <li><a href="#" className="h">Proposals</a></li>
            <li><a href="#" className="h">Timeline</a> </li>
            <li><a href="#" className="h">Task Management</a></li>
            <li><a href="#" className="h">Team</a></li>
            <li><a href="#" className="h">Approvals</a></li>
        </ul>
        </div>
        </div>
        <section className="pricing-table1">
        <div className="container" >
            <div className="row justify-content-md-center ">
                <div className="wow anim fadeInLeft" style={{width:'960px'}} >
                    <div className="item "style={{border:'1px solid grey'}}  >
                
                    
                    <div className="features">
                    <div className="row" >
                    <div className="column">
                    <ul>
                    
                        <li ><span>Project Name </span></li>
                        <li>Objective</li>
                        <li >INR</li>
                        <li >Skills required</li>
                    </ul>
                    <div className="rightside">
                    <span>Bid ends in _ _ _ _ _</span>
                    <br/>
                    15,000-25,000

                    </div>
                    <div className="rightside1">
                    <span><a style={{color:'black',fontSize:'20px',textDecoration:'underline'}} href="#">More</a></span>
                    </div>
                    </div>
                    </div>
                    </div>
                    </div>
                    <div className="wow anim fadeInLeft" style={{width:'960px',marginRight:'100px',paddingTop:'10px'}} >
                    <div className="item "style={{border:'1px solid grey'}}  >
                
                    
                    <div className="features">
                    <div className="row" >
                    <div className="column">
                    <div style={{marginTop:'10px'}}>
                    <button className="button1">Upgrade</button>
                    </div>
                    <div style={{marginTop:'10px'}}>
                    <p className="para">Pay 15 per day extension<br/>
                    Month extension – 400/month<br/>
                    Urgent requirement, then highlight your post by paying 500rs./month
                    </p> 
                    </div>
                    
                    </div>
                    </div>
                    </div>
                    </div>
                    
                </div>
                    
                </div>
                
                    <div className="col-md-1 wow anim fadeInLeft" >
                        
                            <select id="action" name="actions" className="selecto">
                            <option id="edit">edit</option>
                            </select>
                    
                    <div className="side wow anim fadeInLeft" style={{width:'200px'}} >
                    <div className="item "style={{border:'1px solid grey'}}  >
                
                    
                    <div className="features">
                    <div className="row" >
                    <div className="column">
                    <ul>
                    
                        <li ><span>About </span></li>
                        <li>Location</li>
                        <li >Details</li>
                        <li >__________</li>
                        <li >Verification</li>
                        <button className="button2">Verify</button>
                        
                            
                            
                            
                        <li> __________</li>
                        <li> Badge </li>
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
}
export default ProjectSpace;
