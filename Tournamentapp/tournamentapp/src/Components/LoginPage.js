import React, { Component } from "react";
import "./LoginPage.css"; // Import your CSS file for styling

export default class LoginPage extends Component {
  render() {
    return (
      <div className="background">
      <div className="login-container">
        <h2>Login</h2>
        <form>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
             
            />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
          
            />
          </div>
          <button type="submit">Log In</button>
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
