import React, { Component } from 'react';
import './LoginPage.css'; // Import your CSS file for styling

export default class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    // Here you can implement your login logic
    console.log('Email:', this.state.email);
    console.log('Password:', this.state.password);
  };

  render() {
    return (
      <div className="login-container">
        <h2>Login</h2>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
            />
          </div>
          <button type="submit">Log In</button>
          <div className="forgot-password">
            <a href="/forgotpassword">Forgot Password?</a>
          </div>
          <div className="register-link">
            <p>Not registered? <a href="/register">Create an account</a></p>
          </div>
        </form>
      </div>
    );
  }
}

