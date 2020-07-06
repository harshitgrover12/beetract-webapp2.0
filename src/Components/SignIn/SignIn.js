import React, { Component } from 'react'
import './SignIn.css';
import axios from 'axios';
class SignIn extends Component {
    constructor(props){
        super(props);
        console.log(this.props);
    this.state={
            active:false
    }
    }
    handleChange=(e)=>{
      
        this.setState({
          [e.target.id]:e.target.value
        })
      
    }
     handleLoginSubmit=(e)=>{
       e.preventDefault();
        
       alert(this.state.email);
       
        
 
axios.post('https://beetract.herokuapp.com/auth/login/', {
    email: this.state.email,
    password:this.state.password
  })
  .then(data=>{
    console.log(data); 
this.props.changelogin(true);
this.props.history.push('/roles');
   
  }).catch((err)=>{
      alert(err);
  });
     
    }
    handleRegisterSubmit=(e)=>{
   
   
  e.preventDefault();
  
   console.log(this.state.email);

  axios.post('http://beetract.herokuapp.com/auth/registration/', {
    email: this.state.email,
    password1:this.state.password1,
    password2:this.state.password2,
  })
  .then((response)=>{
   console.log(response);
   this.props.history.push('/roles');
  }).catch((err)=>alert(err));
      
    
    
  }
    
    handleLoginClick=(e)=>{

            e.preventDefault();
            this.setState({
                active:true
            });
        }
        handleRegisterClick=(e)=>{

            e.preventDefault();
            this.setState({
                active:false
            });
        }
    render() {
        
        return (
         
        <div className='SignIn'>
              <div className="container-fluid px-1 px-md-5 px-lg-1 px-xl-5 py-5 mx-auto">
        <div className="card card0 border-0">
          <div className="row d-flex">
            <div className="col-lg-6">
              <div className="card1 pb-5">
                <div className="row"> <img src="https://i.imgur.com/CXQmsmF.png" className="logo" /> </div>
                <div className="row px-3 justify-content-center mt-4 mb-5 border-line"> <img src="https://i.imgur.com/uNGdWHi.png" className="image" /> </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="card2 card border-0 px-4 py-5">
                <div className="row mb-4 px-3">
                {this.state.active?(
                  <h6 className="mb-0 mr-4 mt-2">Sign in with</h6>
                ):
                (<h6 className="mb-0 mr-4 mt-2">Register with</h6>)
                }
                  <div className="facebook text-center mr-3">
                    <div className="fa fa-google" />
                  </div>
                  
                  <div className="linkedin text-center mr-3">
                    <div className="fa fa-linkedin" />
                  </div>
                </div>
                <div className="row px-3 mb-4">
                  <div className="line" /> <small className="or text-center">Or</small>
                  <div className="line" />
                </div>
                {this.state.active?(
                    <div>
                <div className="row px-3"> <label className="mb-1">
                    <h6 className="mb-0 text-sm">Email</h6>
                  </label> <input className="mb-4" id="email" type="text" name="email" placeholder="Enter your Email" ref={(input)=>this.email=input} onChange={this.handleChange}/> </div>
                <div className="row px-3"> <label className="mb-1">
                    <h6 className="mb-0 text-sm">Password</h6>
                  </label> <input id="password" type="password" name="password" placeholder="Enter password" ref={(input)=>this.password=input}onChange={this.handleChange} /> </div>
                <div className="row px-3 mb-4">
                  <div className="custom-control custom-checkbox custom-control-inline"> <input id="chk1" type="checkbox" name="chk" className="custom-control-input" /> <label htmlFor="chk1" className="custom-control-label text-sm">Remember me</label> </div> <a href="#" className="ml-auto mb-0 text-sm">Forgot Password?</a>
                </div>
                <div className="row mb-3 px-3"> <button type="submit" className="btn btn-blue text-center" onClick={this.handleLoginSubmit}>Login</button> </div>
                <div className="row mb-4 px-3"> <small className="font-weight-bold">Don't have an account? <a className="text-danger " onClick={this.handleRegisterClick}>Register</a></small> </div>
              </div>):
              ( <div>
              
              
                <div className="row px-3"> <label className="mb-1">
                    <h6 className="mb-0 text-sm">Email Address</h6>
                  </label> <input id="email" className="mb-4" type="text" name="email" placeholder="Enter a valid email address" ref={(input)=>this.email=input} onChange={this.handleChange} /> </div>
                <div className="row px-3"> <label className="mb-1">
                    <h6 className="mb-0 text-sm">Password</h6>
                  </label> <input id="password1" type="password" name="password1" placeholder="Enter password" ref={(input)=>this.password1=input} onChange={this.handleChange} /> </div>
                   <div className="row px-3"> <label className="mb-1">
                    <h6 className="mb-0 text-sm">Password</h6>
                  </label> <input id="password2" type="password" name="password2" placeholder="Confirmpassword" ref={(input)=>this.password2=input} onChange={this.handleChange} /> </div>
                <div className="row px-3 mb-4">
                  <div className="custom-control custom-checkbox custom-control-inline"> <input id="chk1" type="checkbox" name="chk" className="custom-control-input" /> <label htmlFor="chk1" className="custom-control-label text-sm">Remember me</label> </div> 
                </div>
                <div className="row mb-3 px-3"> <button type="submit" className="btn btn-blue text-center" onClick={this.handleRegisterSubmit}>Register</button> </div>
                <div className="row mb-4 px-3"> <small className="font-weight-bold">Already have an account? <a className="text-danger" onClick={this.handleLoginClick}>Login</a></small> </div>
              </div>)}
              </div>
            </div>
          </div>
         
        </div>
      </div>
      </div>
        )
    }
}
export default SignIn;