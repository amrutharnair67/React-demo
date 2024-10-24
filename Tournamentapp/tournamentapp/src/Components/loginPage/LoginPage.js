import React, { Component } from "react";
import "../loginPage/LoginPage.css";

export default class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      emailError: "",
    };
  }

  validateEmail = (email) => {
    const emailPattern = /^[a-zA-Z0-9]+([._%+-]?[a-zA-Z0-9]+)*@[a-zA-Z]+\.[a-zA-Z]{2,}$/;
    return emailPattern.test(email);
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { email } = this.state;
    
    if (!email) {
      this.setState({ emailError: "Email is required." });
    } else if (!this.validateEmail(email)) {
      this.setState({ emailError: "Invalid email format." });
    } else {
      this.setState({ emailError: "" });
      // Proceed with form submission or further actions
    }
  };

  render() {
    const { email, emailError } = this.state;

    return (
      <div className="background">
        <div className="login-container">
          <h3>Login</h3>
          <form onSubmit={this.handleSubmit}>
            <div>
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={this.handleChange}
              />
              {emailError && <div className="error">{emailError}</div>}
            </div>
            <div>
              <label htmlFor="password">Password:</label>
              <input type="password" id="password" name="password" />
            </div>
            <button  className="button-container"type="submit">Log In</button>
            <div className="forgot-password">
              <a href="/forgotpassword">Forgot Password?</a>
            </div>
            <div className="register-link">
              <p>
                Not registered? <a href="/register">Create an account</a>
              </p>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
