import React, { Component } from "react";
import "../loginPage/LoginPage.css"; 

export default class LoginPage extends Component {
  render() {
    return (
      <div className="background">
        <div className="login-container">
          <h3>Login</h3>
          <form>
            <div>
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" />
            </div>
            <div>
              <label htmlFor="password">Password:</label>
              <input type="password" id="password" name="password" />
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
