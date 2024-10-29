import React, { useState } from "react";
import axios from "axios";
import "../registrationPage/RegisterPage.css";
import { useNavigate } from "react-router-dom";

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
    teamLogo: null,
    comment: "",
    username: "",
    teamLogoPath: ""
  });

  const [errors, setErrors] = useState({});
  const [serverMessage, setServerMessage] = useState({ type: "", message: "" });
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    validateField(name, value); 
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const validTypes = ["image/png", "image/jpeg", "image/jpg"];
      if (validTypes.includes(file.type)) {
        setFormData({
          ...formData,
          teamLogo: file,
        });
        setErrorMessage(""); 
      } else {
        setErrorMessage("Only PNG and JPG images are allowed.");
      }
    }
  };

  const validateEmail = (email) => {
    const emailPattern = /^[a-z]+([.]?[a-z0-9]+)*@[a-z]+\.[a-z]{2,}$/;
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

  const validateField = (name, value) => {
    let error = "";
    switch (name) {
      case "teamName":
        if (!value) error = "Team Name is required.";
        else if (!validateName(value))
          error = "Team Name must only contain letters.";
        break;
      case "email":
        if (!value) error = "Email is required.";
        else if (!validateEmail(value)) error = "Invalid email format.";
        break;
      case "password":
        if (!value) error = "Password is required.";
        else if (!validatePassword(value))
          error =
            "Password must be 8+ chars, with 1 uppercase, 1 lowercase, 1 number & 1 special char.";
        break;
      case "phoneNumber":
        if (!value) error = "Phone Number is required.";
        else if (!validatePhoneNumber(value))
          error = "Phone Number must be 10 digits.";
        break;
      case "captainFirstName":
      case "captainLastName":
      case "player2FirstName":
      case "player2LastName":
      case "player3FirstName":
      case "player3LastName":
      case "substitute1FirstName":
      case "substitute1LastName":
        if (!value) error = `${name.replace(/[0-9]/g, "")} is required.`;
        else if (!validateName(value))
          error = `${name.replace(/[0-9]/g, "")} must only contain letters.`;
        break;
      default:
        break;
    }

    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: error,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if there are any validation errors
    const hasErrors = Object.values(errors).some((error) => error !== "");
    if (hasErrors) {
      setServerMessage({
        type: "error",
        message: "Please fix the errors before submitting the form.",
      });
      return;
    }

    try {

      const formDataToSend = new FormData();

      
      for (const key in formData) {
        formDataToSend.append(key, formData[key]);
      }

      
      const response = await axios.post(
        "http://localhost:8080/api/users/register",
        formDataToSend,
        {
          headers: {
            "Content-Type": "multipart/form-data", 
          },
        }
      );

      setServerMessage({
        type: "success",
        message: response.data.message || "Registration successful!",
      });

    
      setTimeout(() => {
        navigate("/login");
      }, 2000);

    } catch (error) {
      
      let errorMessage;
      if (error.response) {
       
        if (error.response.status === 409) {
          errorMessage = "User is already registered. Please log in.";
        } else if (error.response.data && typeof error.response.data === "object") {
         
          const errorDetails = Object.values(error.response.data).join(", ");
          errorMessage = errorDetails || "Registration failed. Please try again.";
        } else {
          errorMessage = error.response.data.message || "Registration failed. Please try again.";
        }
      } else {
        errorMessage = "Network error. Please check your connection and try again.";
      }

      setServerMessage({ type: "error", message: errorMessage });
      console.error("Registration failed:", errorMessage);
    }
  };
  return (
    <div className="maincontainer">
      <div className="container">
        <h2 className="title">Register Your Team Now</h2>

        {serverMessage.message && (
          <div
            className={
              serverMessage.type === "error" ? "error-box" : "success-box"
            }
          >
            {serverMessage.message}
          </div>
        )}

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

          <div>
            <label style={{color :"white"}}>Team Logo</label>
            <input
              type="file"
              accept="image/png, image/jpeg, image/jpg"
              onChange={handleFileChange}
            />

            {errorMessage && (
              <p style={{ color: "#d9534f", fontSize: "10px" }}>
                {errorMessage}
              </p>
            )}
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
          <div className="form-group">
            <label htmlFor="username">Username:</label>
            <textarea
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
            ></textarea>
          </div>
          <div className="form-group">
            <label htmlFor="teamLogoPath">teamLogoPath:</label>
            <textarea
              id="teamLogoPath"
              name="teamLogoPath"
              value={formData.teamLogoPath}
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
