import React, { Component } from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import MainRouter from "./MainRouter";
import Login from "./admin/Login";

import firebase from 'firebase';

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
    this.changeAuthState(authcheck);

    // firebase.initializeFirebase();
    const config = {
      apiKey: "AIzaSyARXJnsMCgrlq2ZEbjRokBZhxxvtpt99EY",
      authDomain: "bbdnepal-f5d92.firebaseapp.com",
      databaseURL: "https://bbdnepal-f5d92.firebaseio.com",
      projectId: "bbdnepal-f5d92",
      storageBucket: "bbdnepal-f5d92.appspot.com",
      messagingSenderId: "558448678081"
    };
    firebase.initializeApp(config);
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
