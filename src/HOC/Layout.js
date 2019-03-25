import React, { Component } from "react";
import {Link} from 'react-router-dom';
class Layout extends Component {
  render() {
    return (
     <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <Link className="navbar-brand" to="/">
          ADMIN BBD NEPAL
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarColor01"
          aria-controls="navbarColor01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navbarColor01">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link className="nav-link" to="/">
                Home <span className="sr-only">(current)</span>
              </Link>
            </li>
            <ul className="navbar-nav ml-auto">
                <li className="nav-item dropdown navbar-nav ml-auto">
                    <a className="nav-link dropdown-toggle" href={"/"} id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                       Requests
                    </a>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                        <Link className="dropdown-item" to="/contact">Contact</Link>
                        <Link className="dropdown-item" to="/application">Application</Link>
                    </div>
                </li>
            </ul>
          </ul>
          <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                    <Link className="nav-link" onClick={()=> this.props.changeAuthState("false")} to="/">Logout</Link>
                </li>
                
            </ul>
        </div>
      </nav>
      <div className="container">
       {this.props.children}
      </div>
      </>
    );
  }
}

export default Layout;