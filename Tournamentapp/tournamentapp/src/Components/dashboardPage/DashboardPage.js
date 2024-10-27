import React, { Component } from 'react';

export default class DashboardPage extends Component {
  
  handleLogout = () => {
    // Clear user data from local storage (or session storage)
    localStorage.removeItem('user');
    
    // Redirect to the login page
    window.location.href = '/login';
  };

  render() {
    return (
      <div className="dashboard-container">
        <h1>Welcome to the Dashboard</h1>
        <p>You have successfully logged in!</p>
        
        {/* Logout link */}
        <a href="/login" onClick={this.handleLogout} className="logout-link">
          Logout
        </a>
      </div>
    );
  }
}
