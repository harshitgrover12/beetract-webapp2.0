import React from 'react'
import Nav from '../nav/nav'
import Dash from '../dashboard/dash'
import './dashb.css'
const Dashboard=()=>{
    return(
        <div className='dash-page'>
            <Nav/>
            <Dash/>
            <div className='dash-page-container'>
                <div id='dash-box'>
                    <span id='dash-box-title'>
                        Posted Projects
                    </span>
                    <ul>                    
                        <li><span id='dash-box-details'>Projects Posted</span><span id='dash-de-num'>##</span></li>
                        <li><span id='dash-box-details'>Projects Completed</span><span id='dash-de-num'>##</span></li>
                        <li><span id='dash-box-details'>Ongoing Projects</span><span id='dash-de-num'>##</span></li>
                        <li><span id='dash-box-details'>Freelancers Worked</span><span id='dash-de-num'>##</span></li>
                        <li><span id='dash-box-details'>Prelancers Worked</span><span id='dash-de-num'>##</span></li>
                        <li><span id='dash-box-details'>Projects category wise</span></li>
                    </ul>
                </div>
                <div id='dash-box'>
                <span id='dash-box-title'>
                        Bided Projects
                    </span>
                    <ul>                    
                        <li><span id='dash-box-details'>Bids Placed</span><span id='dash-de-num'>##</span></li>
                        <li><span id='dash-box-details'>Bids Won</span><span id='dash-de-num'>##</span></li>
                        <li><span id='dash-box-details'>Ongoing Projects</span><span id='dash-de-num'>##</span></li>
                        <li><span id='dash-box-details'>Clients Worked with</span><span id='dash-de-num'>##</span></li>
                        <li><span id='dash-box-details'>Completed Projects</span><span id='dash-de-num'>##</span></li>
                        <li><span id='dash-box-details'>Bids - Project category wise</span></li>
                    </ul>
                </div>
                <div id='dash-box'>
                <span id='dash-box-title'>
                        Finance
                    </span>
                    <ul>                    
                        <li><span id='dash-box-details'>Total Spent on project</span><span id='dash-de-num'>##</span></li>
                        <li><span id='dash-box-details'>Amount split on category wise</span><span id='dash-de-num'>##</span></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Dashboard;