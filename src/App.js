import React, { Component } from 'react'
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {compose} from 'redux';
import Routes from './routes';
class App extends Component {
    render() {
        return (
            <div>
               <Routes {...this.props}/> 
            </div>
        )
    }
}
const mapStateToProps = state => {
  return {
     isauthenticated:state.isauthenticated,
     roles:state.roles,
     token:state.token,
    
  };
};

const mapDispatchToProps = dispatch => {
  return {
    changelogin: (isauthenticated) => dispatch({
      type:'LOGIN',
      isauthenticated:isauthenticated
    }),
    changeroles:(roles)=>dispatch({
      type:'ROLES',
      roles:roles
    }),
    changetoken:(token)=>dispatch({
      type:'TOKEN',
      token:token
    })
    }}
export default compose(
  withRouter,
  connect(mapStateToProps,mapDispatchToProps)

  
) (App);
