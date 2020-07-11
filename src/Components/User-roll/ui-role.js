import React,{Component} from 'react'
import ReactDOM from 'react-dom'
import ind from './undraw_working_remotely_jh40.svg'
import bus from './undraw_business_shop_qw5t.svg'
import incu from './undraw_factory_dy0a.svg'
import logo from './undraw_selection_92i4.svg'
import './ui-role.css';
import Nav from '../nav/nav';
import axios from 'axios';
  
const Individual=(props)=>{
    console.log(props);
    const selAll=(e)=>{
        console.log(e);
        let name=e.name
        let checkboxes = document.getElementsByName(e.name);
        for(var i=0, n=checkboxes.length;i<n;i++){
        checkboxes[i].checked = e.checked;
    }
    }
    const handleChange=(e)=>{
        console.log(e.checked);
        let roles=[...props.roles];
        let sid=e.id;
        let digit=0;
        if(sid.length===1)
        {
            digit=sid[0]-'0';
        }
        else
        {
            digit=(sid[0]-'0')*10 +(sid[1]-'0');
        }
        
        if(e.checked)
        {
         roles=[...props.roles,digit];
         props.changeroles(roles);
        }
        else
        {let roles1=[];
            roles.map((value)=>{
                if(value!==(digit))
                {
                    roles1=[...roles1,value]
                }
            })

            props.changeroles(roles1);
        }
        
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(props.roles);
        axios({
    method: "POST",
    url: `https://beetract.herokuapp.com/users/select-roles/`,
    data: {
        roles: props.roles
    },
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Token ${props.token}`,
    },
  })
  .then((res)=>console.log(res))
  .catch((err)=>alert(err))
    }
  
    return(
        <div id='individual'>
            <div id='role-options-ui'>
                        <form>
                        <div id='choose-option-ui'>Choose Purpose</div>
                            <input type='checkbox' onClick={(e)=>selAll(e.target)}/><label>Select All</label>
                            <input type='checkbox'id={7}name='Freelancer' onChange={(e)=>handleChange(e.target)}/><label>Freelancer</label>
                            <input type='checkbox'id={8} name='Prelancer'onChange={(e)=>handleChange(e.target)}/><label>Prelancer</label>
                            <input type='checkbox'id={9} name='Bid on Projects'onChange={(e)=>handleChange(e.target)}/><label>Bid on Projects</label>
                            <input type='checkbox'id={10} name='Employee of an Organization'onChange={(e)=>handleChange(e.target)}/><label>Employee of an Organization</label>
                            <input type='checkbox'id={11} name='Provide Assistance / Mentoring'onChange={(e)=>handleChange(e.target)}/><label>Provide Assistance / Mentoring</label>
                            <input type='checkbox'id={12}name='Seek Assistance'onChange={(e)=>handleChange(e.target)}/><label>Seek Assistance</label>
                            <input type='checkbox'id={13} name='Seek Incubation'onChange={(e)=>handleChange(e.target)}/><label>Seek Incubation</label>
                            <input type='checkbox'id={14}name='Seek Job / Internship' onChange={(e)=>handleChange(e.target)}/><label>Seek Job / Internship</label>
                            <button id='option-button' onClick={(e)=>handleSubmit(e)}>Submit</button>
                    </form>
                    </div>
        </div>
    )
}



const Business=(props)=>{
    const selAll=(e)=>{
        let name=e.name
        let checkboxes = document.getElementsByName(e.name);
        for(var i=0, n=checkboxes.length;i<n;i++){
        checkboxes[i].checked = e.checked;
    }
    }
       const handleChange=(e)=>{
        console.log(e.checked);
        let roles=[...props.roles];
        if(e.checked)
        {
         roles=[...props.roles,e.id];
         props.changeroles(roles);
        }
        else
        {let roles1=[];
            roles.map((value)=>{
                if(value!==e.id)
                {
                    roles1=[...roles1,value]
                }
            })
            props.changeroles(roles1);
        }
        
    }
      const handleSubmit=(e)=>{
          e.preventDefault();
        axios.post('https://beetract.herokuapp.com/users/select-roles/',
       { roles:props.roles
       },
        {
            Authorization:"Token "+props.token
        }
        ).then((res)=>console.log(res)).catch((err)=>alert(err));
    }
    return(
        <div id='business'>
            <div id='role-options-ui'>
                        <form>
                        <div id='choose-option-ui'>Choose Purpose</div>
                            <input type='checkbox' onClick={(e)=>selAll(e.target)}/><label>Select All</label>
                            <input type='checkbox'id={1} onChange={(e)=>handleChange(e.target)}/><label>Post Projects</label>
                            <input type='checkbox'id={2} onChange={(e)=>handleChange(e.target)}/><label>Bid on Projects</label>
                            <input type='checkbox'id={3} onChange={(e)=>handleChange(e.target)}/><label>Hire Talents</label>
                            <input type='checkbox'id={4} onChange={(e)=>handleChange(e.target)}/><label>Provide Assistance / Mentoring</label>
                            <input type='checkbox' id={6} onChange={(e)=>handleChange(e.target)}/><label>Seek Incubation</label>
                            <input type='checkbox'id={5}  onChange={(e)=>handleChange(e.target)}/><label>Seek Assistance</label>
                            <button id='option-button'onClick={(e)=>handleSubmit(e)}>Submit</button>
                    </form>
                </div>
        </div>
    )
}
const Incubation=(props)=>{
         const handleChange=(e)=>{
        console.log(e.checked);
        let roles=[...props.roles];
        if(e.checked)
        {
         roles=[...props.roles,e.id];
         props.changeroles(roles);
        }
        else
        {let roles1=[];
            roles.map((value)=>{
                if(value!==e.id)
                {
                    roles1=[...roles1,value]
                }
            })
            props.changeroles(roles1);
        }
        
    }
      const handleSubmit=(e)=>{
          e.preventDefault();
        axios.post('https://beetract.herokuapp.com/users/select-roles/',
       { roles:props.roles
       },
        {
            Authorization:"Token "+props.token
        }
        ).then((res)=>console.log(res)).catch((err)=>alert(err));
    }
    return(
        <div id='incubation'>
            <div id='role-options-ui'>
                        <form>
                        <div id='choose-option-ui'>Choose Purpose</div>
                            <input type='checkbox' id={15} onChange={(e)=>handleChange(e.target)}/><label>Provide Incubation</label>
                            <button id='option-button'onClick={(e)=>handleSubmit(e)}>Submit</button>
                    </form>
                </div>
        </div>
    )
}

 const reset=()=>{
        document.getElementById('ui-title-options-ind').style.display='none'   
        document.getElementById('ui-title-options-bus').style.display='none'   
        document.getElementById('ui-title-options-inc').style.display='none'   
    }
class Ui_roles extends Component{
    state={
        roles:[],
    }
    render()
    {
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
                        <Individual {...this.props}/>
                    </div>
                </div>
                <div id='ui-roles-box' onMouseOver={e=>{
                    document.getElementById('ui-title-options-bus').style.display='block'
                }} onMouseOut={reset}>
                    <img src={bus} alt=''/>
                    <span id='ui-role-span'>Business</span>
                    <div id='ui-title-options-bus'>
                        <Business{...this.props}/>
                    </div>
                </div>
                <div id='ui-roles-box' onMouseOver={e=>{
                    document.getElementById('ui-title-options-inc').style.display='block'
                }} onMouseOut={reset}>
                    <img src={incu} alt=''/>
                    <span id='ui-role-span'>Incubator</span>
                    <div id='ui-title-options-inc'>
                        <Incubation{...this.props}/>
                    </div>
                </div>
            </div>
        </div>
    )
    }
}

export default Ui_roles;