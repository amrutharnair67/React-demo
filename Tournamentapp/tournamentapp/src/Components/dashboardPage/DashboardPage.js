import React, { Component } from 'react';
import '../dashboardPage/Dashboardpage.css';

export default class DashboardPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      teamName: "", 
    };
  }

  componentDidMount() {
    
    const userData = JSON.parse(localStorage.getItem('user'));
    
    if (!userData) {
     
      window.location.href = '/login';
    } else if (userData.teamName) {
     
      this.setState({ teamName: userData.teamName });
    }

    
    window.history.pushState(null, null, window.location.href);
    window.onpopstate = () => {
      
      window.history.pushState(null, null, window.location.href);
    };
  }

  handleLogout = () => {
 
    localStorage.removeItem('user');

   
    window.location.href = '/login';

   
    window.history.pushState(null, null, window.location.href);
    window.onpopstate = () => {
      window.history.pushState(null, null, window.location.href);
    };
  };
  render() {
    const { teamName } = this.state;

    return (
      <div className="dashboard-container">
        <h1>Welcome to the Dashboard</h1>
        <p>You have successfully logged in!</p>
        
        
        {teamName && <h2>Your Team: {teamName}</h2>}

        
        <a href="/login" onClick={this.handleLogout} className="logout-link">
          Logout
        </a>
      </div>
    );
  }
}
