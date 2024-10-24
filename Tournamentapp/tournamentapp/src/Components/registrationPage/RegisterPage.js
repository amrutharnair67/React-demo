import React, { useState } from 'react';
import "../registrationPage/RegisterPage.css"

function RegisterPage() {
  const [teamName, setTeamName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [captainFirstName, setCaptainFirstName] = useState('');
  const [captainLastName, setCaptainLastName] = useState('');
  const [player2FirstName, setPlayer2FirstName] = useState('');
  const [player2LastName, setPlayer2LastName] = useState('');
  const [player3FirstName, setPlayer3FirstName] = useState('');
  const [player3LastName, setPlayer3LastName] = useState('');
  const [substitute1FirstName, setSubstitute1FirstName] = useState('');
  const [substitute1LastName, setSubstitute1LastName] = useState('');
  const [teamLogoPath, setTeamLogoPath] = useState(null);
  const [comment, setComment] = useState('');

  const handleFileChange = (e) => {
    setTeamLogoPath(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    console.log({
      teamName,
      email,
      password,
      phoneNumber,
      captainFirstName,
      captainLastName,
      player2FirstName,
      player2LastName,
      player3FirstName,
      player3LastName,
      substitute1FirstName,
      substitute1LastName,
      teamLogoPath,
      comment
    });
  };

  return (
    <div className='maincontainer'>
      <div className="container">
        <h2 className="title">Register Your Team Now</h2>
        <form className="registration-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="teamName">Team Name:</label>
            <input
              type="text"
              id="teamName"
              name="teamName"
              value={teamName}
              onChange={(e) => setTeamName(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="phoneNumber">Phone Number:</label>
            <input
              type="text"
              id="phoneNumber"
              name="phoneNumber"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="captainFirstName">Captain's First Name:</label>
            <input
              type="text"
              id="captainFirstName"
              name="captainFirstName"
              value={captainFirstName}
              onChange={(e) => setCaptainFirstName(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="captainLastName">Captain's Last Name:</label>
            <input
              type="text"
              id="captainLastName"
              name="captainLastName"
              value={captainLastName}
              onChange={(e) => setCaptainLastName(e.target.value)}
            />
          </div>

          {/* Player 2 */}
          <div className="form-group">
            <label htmlFor="player2FirstName">Player 2 First Name:</label>
            <input
              type="text"
              id="player2FirstName"
              name="player2FirstName"
              value={player2FirstName}
              onChange={(e) => setPlayer2FirstName(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="player2LastName">Player 2 Last Name:</label>
            <input
              type="text"
              id="player2LastName"
              name="player2LastName"
              value={player2LastName}
              onChange={(e) => setPlayer2LastName(e.target.value)}
            />
          </div>

          {/* Player 3 */}
          <div className="form-group">
            <label htmlFor="player3FirstName">Player 3 First Name:</label>
            <input
              type="text"
              id="player3FirstName"
              name="player3FirstName"
              value={player3FirstName}
              onChange={(e) => setPlayer3FirstName(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="player3LastName">Player 3 Last Name:</label>
            <input
              type="text"
              id="player3LastName"
              name="player3LastName"
              value={player3LastName}
              onChange={(e) => setPlayer3LastName(e.target.value)}
            />
          </div>

          {/* Substitute 1 */}
          <div className="form-group">
            <label htmlFor="substitute1FirstName">Substitute 1 First Name:</label>
            <input
              type="text"
              id="substitute1FirstName"
              name="substitute1FirstName"
              value={substitute1FirstName}
              onChange={(e) => setSubstitute1FirstName(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="substitute1LastName">Substitute 1 Last Name:</label>
            <input
              type="text"
              id="substitute1LastName"
              name="substitute1LastName"
              value={substitute1LastName}
              onChange={(e) => setSubstitute1LastName(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="teamLogoPath">Team Logo:</label>
            <input
              type="file"
              id="teamLogoPath"
              name="teamLogoPath"
              onChange={handleFileChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="comment">Comment:</label>
            <textarea
              id="comment"
              name="comment"
              rows="3"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            />
          </div>

          <div className="form-group submit-btn">
            <button type="submit">Register</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default RegisterPage;
