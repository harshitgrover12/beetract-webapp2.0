import React, { Component } from 'react'
import {BrowserRouter,Route, Switch, HashRouter} from 'react-router-dom';
import Home from './Components/Home/Home';
import SignIn from './Components/SignIn/SignIn';
import User_role from './Components/User-roll/user-role';
import ProjectSpace from './Components/ProjectSpace/ProjectSpace';

 class Routes extends Component {
    render() {
        return (
            <div>
            
                <Switch>
                    <Route exact path='/' render={(props)=><Home{...this.props}/>}/>
                    <Route exact path='/signIn' render={(props)=><SignIn{...this.props}/>}/>
                    <Route path='/roles' render={(props)=><User_role{...this.props}/>}/>
                    <Route path='/projects' render={(props)=><ProjectSpace{...this.props}/>}/>
                </Switch>
            
                
            </div>
        )
    }
}
export default Routes;
