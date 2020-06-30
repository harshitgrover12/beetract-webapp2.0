import React,{Component} from 'react';
import './user-role.css';
import Nav from '../nav/nav';
 const selAll=(e)=>{
        let name=e.name
        let checkboxes = document.getElementsByName(e.name);
        console.log(e);
        for(var i=0, n=checkboxes.length;i<n;i++){
        checkboxes[i].checked = e.checked;
    }
    }
class User_role extends Component{

   
render()

{


    return(
        <div id='user-role-module'>
            <Nav/>
            <div id='title'>Choose Your Role</div>
            <div className='user-role-module-box'>
                
                <div id='role-box'>
                    <div id='role-box-title'>
                        <span id='bold'>Individual</span>
                        <span>Independent | Belong to a company</span>
                    </div>
                    <div id='role-options'>
                        <form>
                        <span id='choose-option'>Choose Purpose</span>
                        <input type="checkbox" onClick={(e)=>selAll(e.target)} id="select-all" name="individual" value="Select All"/>
                            <label for="select-all" >Select All</label>

                        <input type="checkbox" id="Freelancer" name="individual" value="Freelancer"/>
                            <label for="Freelancer">Freelancer</label>

                        <input type="checkbox" id="Prelancer" name="individual" value="other"/>
                            <label for="Prelancer">Prelancer</label>

                        <input type="checkbox" id="Bid on Projects" name="individual" value="other"/>
                            <label for="Bid on Projects">Bid on Projects</label>

                        <input type="checkbox" id="Employee of an Organization" name="individual" value="Employee of an Organization<"/>
                            <label for="Employee of an Organization">Employee of an Organization</label>

                        <input type="checkbox" id="Provide Assistance / Mentoring" name="individual" value="Provide Assistance / Mentoring"/>
                            <label for="Provide Assistance / Mentoring">Provide Assistance / Mentoring</label>

                        <input type="checkbox" id="Seek-Assistance" name="individual" value="Seek Assistance"/>
                            <label for="Seek-Assistance">Seek Assistance</label>

                        <input type="checkbox" id="Seek Incubation" name="individual" value="Seek Incubation"/>
                            <label for="Seek Incubation">Seek Incubation</label>

                        <input type="checkbox" id="Seek Job / Internship" name="individual" value="Seek Job / Internship"/>
                            <label for="Seek Job / Internship">Seek Job / Internship</label>
                    </form>
                    </div>
                </div>


                <div id='role-box'>
                    <div id='role-box-title'>
                        <span id='bold'>Business</span>
                        <span>Start-up | Business</span>
                    </div>
                    <div id='role-options'>
                        <form>
                        <span id='choose-option'>Choose Purpose</span>
                        <input onClick={(e)=>selAll(e.target)} type="checkbox" id="select-all" name="business" value="Select All"/>
                            <label for="select-all">Select All</label>

                        <input type="checkbox" id="Post Projects" name="business" value="Post Projects"/>
                            <label for="Post Projects">Post Projects</label>

                        <input type="checkbox" id="Bid on Projects" name="business" value="Bid on Projects"/>
                            <label for="Bid on Projects">Bid on Projects</label>

                        <input type="checkbox" id="Provide Assistance / Mentoring" name="business" value="Provide Assistance / Mentoring"/>
                            <label for="Provide Assistance / Mentoring">Provide Assistance / Mentoring</label>

                        <input type="checkbox" id="Seek-Assistance" name="business" value="Seek Assistance"/>
                            <label for="Seek-Assistance">Seek Assistance</label>

                        <input type="checkbox" id="Seek Incubation" name="business" value="Seek Incubation"/>
                            <label for="Seek Incubation">Seek Incubation</label>

                    </form>
                    </div>
                </div>

                <div id='role-box'>
                    <div id='role-box-title'>
                        <span id='bold'>Incubator</span>
                    </div>
                    <div id='role-options'>
                        <form>
                        <span id='choose-option'>Choose Purpose</span>
                        <input type="checkbox" id="Provide Incubation" name="incubation" value="Provide Incubation"/>
                            <label for="Provide Incubation">Provide Incubation</label>
                    </form>
                    </div>
                </div>

            </div>
        </div>
    )
}
}
export default User_role;