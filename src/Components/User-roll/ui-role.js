import React from 'react'
import ReactDOM from 'react-dom'
import ind from './undraw_working_remotely_jh40.svg'
import bus from './undraw_business_shop_qw5t.svg'
import incu from './undraw_factory_dy0a.svg'
import logo from './undraw_selection_92i4.svg'
import './ui-role.css'
import Nav from '../nav/nav'

const Individual=()=>{
    const selAll=(e)=>{
        console.log(e);
        let name=e.name
        let checkboxes = document.getElementsByName(e.name);
        for(var i=0, n=checkboxes.length;i<n;i++){
        checkboxes[i].checked = e.checked;
    }
    }
    return(
        <div id='individual'>
            <div id='role-options-ui'>
                        <form>
                        <div id='choose-option-ui'>Choose Purpose</div>
                            <input type='checkbox' onClick={(e)=>selAll(e.target)}/><label>Select All</label>
                            <input type='checkbox' name='Freelancer'/><label>Freelancer</label>
                            <input type='checkbox' name='Prelancer'/><label>Prelancer</label>
                            <input type='checkbox' name='Bid on Projects'/><label>Bid on Projects</label>
                            <input type='checkbox' name='Employee of an Organization'/><label>Employee of an Organization</label>
                            <input type='checkbox' name='Provide Assistance / Mentoring'/><label>Provide Assistance / Mentoring</label>
                            <input type='checkbox' name='Seek Assistance'/><label>Seek Assistance</label>
                            <input type='checkbox' name='Seek Incubation'/><label>Seek Incubation</label>
                            <input type='checkbox' name='Seek Job / Internship'/><label>Seek Job / Internship</label>
                            <button id='option-button'>Submit</button>
                    </form>
                    </div>
        </div>
    )
}



const Business=()=>{
    const selAll=(e)=>{
        let name=e.name
        let checkboxes = document.getElementsByName(e.name);
        for(var i=0, n=checkboxes.length;i<n;i++){
        checkboxes[i].checked = e.checked;
    }
    }
    return(
        <div id='business'>
            <div id='role-options-ui'>
                        <form>
                        <div id='choose-option-ui'>Choose Purpose</div>
                            <input type='checkbox' onClick={(e)=>selAll(e.target)}/><label>Select All</label>
                            <input type='checkbox'/><label>Post Projects</label>
                            <input type='checkbox'/><label>Bid on Projects</label>
                            <input type='checkbox'/><label>Hire Talents</label>
                            <input type='checkbox'/><label>Provide Assistance / Mentoring</label>
                            <input type='checkbox'/><label>Seek Incubation</label>
                            <input type='checkbox'/><label>Seek Assistance</label>
                            <button id='option-button'>Submit</button>
                    </form>
                </div>
        </div>
    )
}
const Incubation=()=>{
    return(
        <div id='incubation'>
            <div id='role-options-ui'>
                        <form>
                        <div id='choose-option-ui'>Choose Purpose</div>
                            <input type='checkbox'/><label>Provide Incubation</label>
                            <button id='option-button'>Submit</button>
                    </form>
                </div>
        </div>
    )
}


const Ui_roles=()=>{
    

    const reset=()=>{
        document.getElementById('ui-title-options-ind').style.display='none'   
        document.getElementById('ui-title-options-bus').style.display='none'   
        document.getElementById('ui-title-options-inc').style.display='none'   
    }
    return (
        <div className='ui-role'>
            <Nav/>
            <div className='ui-main-title'>
                <div id='ui-roles-title'>
                    CHOOSE YOUR <span style={{color:'#A5215D'}}>ROLE</span>
                </div>
                {/* <div id='ui-roles-title-art'>
                    <img id='ui-logo' src={logo} alt=''/>
                </div> */}
            </div>
            <div id='ui-roles-options' >
                <div id='ui-roles-box' onMouseOver={e=>{
                    document.getElementById('ui-title-options-ind').style.display='block'
                }} onMouseOut={reset}>
                    <img src={ind} alt=''/>
                    <span id='ui-role-span'>Individual</span>
                    <div id='ui-title-options-ind'>
                        <Individual/>
                    </div>
                </div>
                <div id='ui-roles-box' onMouseOver={e=>{
                    document.getElementById('ui-title-options-bus').style.display='block'
                }} onMouseOut={reset}>
                    <img src={bus} alt=''/>
                    <span id='ui-role-span'>Business</span>
                    <div id='ui-title-options-bus'>
                        <Business/>
                    </div>
                </div>
                <div id='ui-roles-box' onMouseOver={e=>{
                    document.getElementById('ui-title-options-inc').style.display='block'
                }} onMouseOut={reset}>
                    <img src={incu} alt=''/>
                    <span id='ui-role-span'>Incubator</span>
                    <div id='ui-title-options-inc'>
                        <Incubation/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Ui_roles;