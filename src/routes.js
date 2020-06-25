import React, { Component } from 'react'
import {BrowserRouter,Route} from 'react-router-dom';
import Home from './Components/Home/Home';
import SignIn from './Components/SignIn/SignIn';
 class Routes extends Component {
    render() {
        return (
            <div>
            <BrowserRouter>
                <Route exact path='/' render={(props)=><Home{...this.props}/>}/>
                <Route exact path='/signIn' render={(props)=><SignIn{...this.props}/>}/>
            </BrowserRouter>
                
            </div>
        )
    }
}
export default Routes;
