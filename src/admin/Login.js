import React, { Component } from "react";

class Login extends Component {
  state = {
    email: "",
    password: ""
  };

  submitLogin = e => {
    e.preventDefault();
    if (
      this.state.email === "admin@bbdnepal.com" ||
      this.state.password === "bbdnepal12345"
    ) {
      this.props.changeAuthState("true");
    } else {
      alert("Incorrect Email or password");
      this.setState({ email: "", password: "" });
    }
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div className="login-dark">
        <form className="login-form" onSubmit={this.submitLogin}>
          <div className="illustration">
            <i className="icon ion-ios-locked-outline" />
          </div>
          <div className="form-group">
            <input
              type="email"
              className="form-control"
              placeholder="email"
              name="email"
              onChange={this.handleChange}
              value={this.state.email}
              required
            />
          </div>

          <div className="form-group">
            <input
              type="password"
              className="form-control"
              placeholder="password"
              name="password"
              onChange={this.handleChange}
              value={this.state.password}
              required
            />
          </div>
          <div className="form-group">
            <button className="btn btn-primary btn-block" type="submit">
              Log In
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default Login;
