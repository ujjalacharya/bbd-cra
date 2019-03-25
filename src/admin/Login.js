import React, { Component } from "react";

class Login extends Component {

 state = {
  email: "",
  password: ""
 }

 submitLogin = (e) => {
    e.preventDefault();
    if(this.state.email === "admin@bbdnepal.com" || this.state.password === "bbdnepal12345"){
     this.props.changeAuthState("true");
     window.location.reload();
    }
    else{
     alert("Incorrect Email or password");
     this.setState({email: "", password: ""})
    }
 }

 handleChange = (e) =>{
  this.setState({[e.target.name]: e.target.value})
 }


  render() {
   console.log(this.state);
    return (
      <div className="login-body">
        <div className="login-page">
          <div className="form">
            <form className="login-form" onSubmit={this.submitLogin}>
              <h1 style={{ textAlign: "center" }}>Admin Login</h1>
              <input type="email" placeholder="email" name="email" onChange={this.handleChange} value={this.state.email} required/>
              <input type="password" placeholder="password" name="password" onChange={this.handleChange} value={this.state.password} required/>
              <button>login</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
