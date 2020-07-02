import React, { Component } from 'react'
import Nav from '../nav/nav';
import './ProjectSpace.css';
import Dash from '../dashboard/dash';
import Proposals from './Proposals/Proposals';
import Filter from '../fliter/filter';
import ProjectTab from './ProjectTab/ProjectTab';
import TimelineTab from './TimelineTab/TimelineTab';
import Task from './Task/Task.js';
class ProjectSpace extends Component {
    state={
        activetab:'projects'
    }
    onButtonClick=(activeTab)=>{
        this.setState({
            activetab:activeTab
        })
    }
    componentDidMount(){
        this.setState({
            activetab:'projects'
        })
    }
    render() {
        return (
            <div>
            <Nav/><Dash/><Filter/>
            <div className="container" style={{marginRight:'525px'}}>
            <div className="row justify-content-md-center ">
        <ul className="nav nav-pills">
            <li  id="projects"className="active"><a href="#" className="h" onClick={()=>this.onButtonClick('projects')}>Projects</a></li>
            <li><a id="proposals" href="#" className="h" onClick={()=>this.onButtonClick('proposals')}>Proposals</a></li>
            <li><a   href="#" className="h" onClick={()=>this.onButtonClick('timeline')}>Timeline</a> </li>
            <li><a id="taskmanagement" href="#" className="h" onClick={()=>this.onButtonClick('taskmanagement')}>Task Management</a></li>
            <li><a  href="#" className="h" onClick={()=>this.onButtonClick('team')}>Team</a></li>
            <li><a id="approvals" href="#" className="h" onClick={()=>this.onButtonClick('approvals')}>Approvals</a></li>
        </ul>
        </div>
        </div>
        {this.state.activetab==='projects'?(
            <div>
            <ProjectTab/>
        
  </div>):(<div/>)}
        {
            this.state.activetab==='proposals'?(<Proposals/>):(<div/>)
        }
        {
            this.state.activetab==='timeline'?(<TimelineTab/>):(<div/>)
        }
        {
            this.state.activetab==='taskmanagement'?(<Task/>):(<div/>)
        }
    </div>
        

        
        )
    }
}
export default ProjectSpace;
