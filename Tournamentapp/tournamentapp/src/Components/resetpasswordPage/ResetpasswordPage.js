import React, { useState, useEffect } from "react";
import axios from "axios"; // Import Axios for making HTTP requests
import "../resetpasswordPage/Resetpasswordpage.css";
import { useNavigate } from 'react-router-dom';


const ResetPassword = () => {
    const [newPassword, setNewPassword] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [successMessage, setSuccessMessage] = useState("");
    const [loading, setLoading] = useState(false);
    const [token, setToken] = useState(null);
    const navigate= useNavigate();

    
    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

   
    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        const resetToken = urlParams.get("token");
        setToken(resetToken);
        
    }, []);

    const handlePasswordChange = (e) => {
        const password = e.target.value;
        setNewPassword(password);
        
        if (passwordPattern.test(password)) {
            setPasswordError("");
        } else {
            setPasswordError("Password must be at least 8 characters long and include uppercase, lowercase, number, and special character.");
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (passwordError || !token) {
            return;
        }

        setLoading(true);
        setSuccessMessage("");
        setPasswordError("");

        try {
            // Send request to the backend to update the password
            const response = await axios.post("http://localhost:8080/api/users/resetpassword", {
                token: token,
                newPassword: newPassword,
            }, {
                headers: {
                    'Content-Type': 'application/json',
                }
            });

            setSuccessMessage(response.data.message || "Password changed successfully!");
            navigate("/login");
        } catch (error) {
            if (error.response) {
                setPasswordError(error.response.data.message || "Failed to reset password.");
            } else {
                setPasswordError("An error occurred: " + error.message);
            }
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="resetpassword-container">
            <h2>Reset Password</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label className="resetlabel" htmlFor="newPassword">New Password</label>
                    <input
                        type="password"
                        id="newPassword"
                        placeholder="Enter your new password"
                        className="form-control"
                        value={newPassword}
                        onChange={handlePasswordChange}
                        required
                    />
                    {passwordError && <span className="error-message">{passwordError}</span>}
                </div>
                <button type="submit" className="btn-submit" disabled={loading}>
                    {loading ? "Resetting..." : "Reset Password"}
                </button>
                {successMessage && <div className="success-message">{successMessage}</div>}
            </form>
        </div>
    );
};

export default ResetPassword;
