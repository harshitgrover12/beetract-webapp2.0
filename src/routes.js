import React, { Component } from 'react'
import {BrowserRouter,Route, Switch, HashRouter} from 'react-router-dom';
import Home from './Components/Home/Home';
import SignIn from './Components/SignIn/SignIn';
import User_role from './Components/User-roll/user-role';
import ProjectSpace from './Components/ProjectSpace/ProjectSpace';
import Dashboard from './Components/dash/dash';
import Ui_roles from './Components/User-roll/ui-role';
import Projectdetails from './Components/ProjectSpace/ProjectDetails';
import ProjectDetails from './Components/ProjectSpace/ProjectDetails';

 class Routes extends Component {
    render() {
        return (
            <div>
            
                <Switch>
                    <Route exact path='/' render={(props)=><Home{...this.props}/>}/>
                    <Route exact path='/signIn' render={(props)=><SignIn{...this.props}/>}/>
                    <Route path='/roles' render={(props)=><Ui_roles{...this.props}/>}/>
                    <Route path='/projects' render={(props)=><ProjectSpace{...this.props}/>}/>
                    <Route path='/dash' render={(props)=><Dashboard{...this.props}/>}/>
                    <Route path='/projectdetails' render={(props)=><ProjectDetails{...this.props}/>}/>
                </Switch>
            
                
            </div>
        )
    }
}
export default Routes;
