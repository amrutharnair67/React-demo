import React, { useState } from "react";
import "../registrationPage/RegisterPage.css";

function RegisterPage() {
  const [formData, setFormData] = useState({
    teamName: "",
    email: "",
    password: "",
    phoneNumber: "",
    captainFirstName: "",
    captainLastName: "",
    player2FirstName: "",
    player2LastName: "",
    player3FirstName: "",
    player3LastName: "",
    substitute1FirstName: "",
    substitute1LastName: "",
    teamLogoPath: null,
    comment: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    setErrors({
      ...errors,
      [name]: "",
    });
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      teamLogoPath: e.target.files[0],
    });
  };

  const validateEmail = (email) => {
    const emailPattern =
      /^[a-z]+([.]?[a-z0-9]+)*@[a-z]+\.[a-z]{2,}$/;
    return emailPattern.test(email);
  };

  const validatePhoneNumber = (phone) => {
    const phonePattern = /^\d{10}$/;
    return phonePattern.test(phone);
  };

  const validatePassword = (password) => {
    const passwordPattern =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return passwordPattern.test(password);
  };

  const validateName = (name) => {
    const namePattern = /^[A-Za-z]+$/;
    return namePattern.test(name);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const errors = {};
    if (!formData.teamName) errors.teamName = "Team Name is required.";
    else if (!validateName(formData.teamName))
      errors.teamName = "Team Name must only contain letters.";
    if (!formData.email) {
      errors.email = "Email is required.";
    } else if (!validateEmail(formData.email)) {
      errors.email = "Invalid email format.";
    }
    if (!formData.password) {
      errors.password = "Password is required.";
    } else if (!validatePassword(formData.password)) {
      errors.password =
        "Password must be 8+ chars, with 1 uppercase, 1 lowercase, 1 number & 1 special char.";
    }
    if (!formData.phoneNumber) {
      errors.phoneNumber = "Phone Number is required.";
    } else if (!validatePhoneNumber(formData.phoneNumber)) {
      errors.phoneNumber = "Phone Number must be 10 digits.";
    }
    if (!formData.captainFirstName)
      errors.captainFirstName = "Captain's First Name is required.";
    else if (!validateName(formData.captainFirstName))
      errors.captainFirstName =
        "Captain's First Name must only contain letters.";
    if (!formData.captainLastName)
      errors.captainLastName = "Captain's Last Name is required.";
    else if (!validateName(formData.captainLastName))
      errors.captainLastName = "Captain's Last Name must only contain letters.";
    if (!formData.player2FirstName)
      errors.player2FirstName = "Player 2 First Name is required.";
    else if (!validateName(formData.player2FirstName))
      errors.player2FirstName =
        "Player 2 First Name must only contain letters.";
    if (!formData.player2LastName)
      errors.player2LastName = "Player 2 Last Name is required.";
    else if (!validateName(formData.player2LastName))
      errors.player2LastName = "Player 2 Last Name must only contain letters.";
    if (!formData.player3FirstName)
      errors.player3FirstName = "Player 3 First Name is required.";
    else if (!validateName(formData.player3FirstName))
      errors.player3FirstName =
        "Player 3 First Name must only contain letters.";
    if (!formData.player3LastName)
      errors.player3LastName = "Player 3 Last Name is required.";
    else if (!validateName(formData.player3LastName))
      errors.player3LastName = "Player 3 Last Name must only contain letters.";
    if (!formData.substitute1FirstName)
      errors.substitute1FirstName = "Substitute 1 First Name is required.";
    else if (!validateName(formData.substitute1FirstName))
      errors.substitute1FirstName =
        "Substitute 1 First Name must only contain letters.";
    if (!formData.substitute1LastName)
      errors.substitute1LastName = "Substitute 1 Last Name is required.";
    else if (!validateName(formData.substitute1LastName))
      errors.substitute1LastName =
        "Substitute 1 Last Name must only contain letters.";

    if (Object.keys(errors).length) {
      setErrors(errors);
      return;
    }

    console.log("Registration success:", formData);
  };

  return (
    <div className="maincontainer">
      <div className="container">
        <h2 className="title">Register Your Team Now</h2>
        <form className="registration-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="teamName">Team Name:</label>
            <input
              type="text"
              id="teamName"
              name="teamName"
              value={formData.teamName}
              onChange={handleChange}
            />
            {errors.teamName && <p className="error">{errors.teamName}</p>}
          </div>

          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <p className="error">{errors.email}</p>}
          </div>

          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
            {errors.password && <p className="error">{errors.password}</p>}
          </div>

          <div className="form-group">
            <label htmlFor="phoneNumber">Phone Number:</label>
            <input
              type="text"
              id="phoneNumber"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
            />
            {errors.phoneNumber && (
              <p className="error">{errors.phoneNumber}</p>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="captainFirstName">Captain's First Name:</label>
            <input
              type="text"
              id="captainFirstName"
              name="captainFirstName"
              value={formData.captainFirstName}
              onChange={handleChange}
            />
            {errors.captainFirstName && (
              <p className="error">{errors.captainFirstName}</p>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="captainLastName">Captain's Last Name:</label>
            <input
              type="text"
              id="captainLastName"
              name="captainLastName"
              value={formData.captainLastName}
              onChange={handleChange}
            />
            {errors.captainLastName && (
              <p className="error">{errors.captainLastName}</p>
            )}
          </div>

          {/* Player 2 */}
          <div className="form-group">
            <label htmlFor="player2FirstName">Player 2 First Name:</label>
            <input
              type="text"
              id="player2FirstName"
              name="player2FirstName"
              value={formData.player2FirstName}
              onChange={handleChange}
            />
            {errors.player2FirstName && (
              <p className="error">{errors.player2FirstName}</p>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="player2LastName">Player 2 Last Name:</label>
            <input
              type="text"
              id="player2LastName"
              name="player2LastName"
              value={formData.player2LastName}
              onChange={handleChange}
            />
            {errors.player2LastName && (
              <p className="error">{errors.player2LastName}</p>
            )}
          </div>

          {/* Player 3 */}
          <div className="form-group">
            <label htmlFor="player3FirstName">Player 3 First Name:</label>
            <input
              type="text"
              id="player3FirstName"
              name="player3FirstName"
              value={formData.player3FirstName}
              onChange={handleChange}
            />
            {errors.player3FirstName && (
              <p className="error">{errors.player3FirstName}</p>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="player3LastName">Player 3 Last Name:</label>
            <input
              type="text"
              id="player3LastName"
              name="player3LastName"
              value={formData.player3LastName}
              onChange={handleChange}
            />
            {errors.player3LastName && (
              <p className="error">{errors.player3LastName}</p>
            )}
          </div>

          {/* Substitute 1 */}
          <div className="form-group">
            <label htmlFor="substitute1FirstName">
              Substitute 1 First Name:
            </label>
            <input
              type="text"
              id="substitute1FirstName"
              name="substitute1FirstName"
              value={formData.substitute1FirstName}
              onChange={handleChange}
            />
            {errors.substitute1FirstName && (
              <p className="error">{errors.substitute1FirstName}</p>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="substitute1LastName">Substitute 1 Last Name:</label>
            <input
              type="text"
              id="substitute1LastName"
              name="substitute1LastName"
              value={formData.substitute1LastName}
              onChange={handleChange}
            />
            {errors.substitute1LastName && (
              <p className="error">{errors.substitute1LastName}</p>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="teamLogoPath">Team Logo:</label>
            <input
              type="file"
              id="teamLogoPath"
              name="teamLogoPath"
              accept="image/*"
              onChange={handleFileChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="comment">Comment:</label>
            <textarea
              id="comment"
              name="comment"
              value={formData.comment}
              onChange={handleChange}
            ></textarea>
          </div>

          <button type="submit" className="register-button">
            Register
          </button>
        </form>
      </div>
    </div>
  );
}

export default RegisterPage;
