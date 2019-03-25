import React, { Component } from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import MainRouter from "./MainRouter";
import Login from "./admin/Login";

class App extends Component {
  state = {
    authcheck: "false"
  };

  changeAuthState = (authcheck) =>{
    console.log(authcheck)
    this.setState({ authcheck: authcheck });
    if(authcheck === "false"){
      localStorage.removeItem("auth_bbd");
    } else if(authcheck === "true"){
      localStorage.setItem("auth_bbd", "true");
    }
  }

  componentDidMount() {
    let authcheck = localStorage.getItem("auth_bbd") || "false";
    this.changeAuthState(authcheck)
  }

  render() {
   return (this.state.authcheck === "true") ?  (
      <>
        <BrowserRouter>
          <MainRouter changeAuthState={this.changeAuthState}/>
        </BrowserRouter>
      </>
    ) : (<Login changeAuthState={this.changeAuthState}/>)
  }
}

export default App;
