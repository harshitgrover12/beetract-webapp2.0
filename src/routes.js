import React, { Component } from 'react'
import {BrowserRouter,Route, Switch, HashRouter} from 'react-router-dom';
import Home from './Components/Home/Home';
import SignIn from './Components/SignIn/SignIn';
import User_role from './Components/User-roll/user-role';
 class Routes extends Component {
    render() {
        return (
            <div>
            <BrowserRouter>
                <Switch>
                    <Route exact path='/' render={(props)=><Home{...this.props}/>}/>
                    <Route exact path='/signIn' render={(props)=><SignIn{...this.props}/>}/>
                    <Route path='/roles' render={(props)=><User_role{...this.props}/>}/>
                </Switch>
            </BrowserRouter>
                
            </div>
        )
    }
}
export default Routes;
