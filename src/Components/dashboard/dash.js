import React from 'react';
import './dash.css';
import { Link } from 'react-router-dom';

const Dash=()=>{
    return(
        <div className='dashboard'>
            <ul><li className='dash-normal'>
                    <span>Dashboard</span>
                </li>
                <li className='dash-option'>
                    <Link to="/projects"><a>My Project</a></Link>
                </li>
                <li className='dash-option'>
                    <Link><a>Bids Received</a></Link>
                </li>
                <li className='dash-option'>
                    <Link><a>Bid on a project</a></Link>
                </li>   
                <li className='dash-normal'>
                    <button>
                        Post a Project
                    </button>
                </li>
            </ul>
        </div>
    )
}

export default Dash;