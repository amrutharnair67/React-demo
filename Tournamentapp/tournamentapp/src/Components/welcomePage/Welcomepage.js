import React, { Component } from "react";
import "../welcomePage/Welcomepage.css";

export default class Welcomepage extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <div className="welcome-message">
            <h1>Welcome to Mega Tournament Registration</h1>
            <p>
              Get started by registering your team or logging in if you already
              have an account.
            </p>
          </div>

          <div className="features-row">
            <div className="feature-box">
              <p>Compete for Grand Cash Prizes!</p>
            </div>

            <div className="feature-box">
              <p>Win the Ever-Rolling Championship Trophy!</p>
            </div>

            <div className="feature-box">
              <p>Showcase Your Team’s Talent & Skills!</p>
            </div>
          </div>

          <div className="marqueemessage" >
           <marquee>Join the Ultimate Tournament and Make History! Register Now and
           Compete with the Best!</marquee> 
          </div>
        </div>
      </div>
    );
  }
}
