import React, { useState } from "react";
import "../resetpasswordPage/Resetpasswordpage.css";

const ResetPassword = () => {
    const [newPassword, setNewPassword] = useState("");
    const [error, setError] = useState("");

    const validatePassword = (password) => {
        const passwordPattern =
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        return passwordPattern.test(password);
    };

    const handlePasswordChange = (e) => {
        const password = e.target.value;
        setNewPassword(password);
        
        if (validatePassword(password)) {
            setError("");
        } else {
            setError("Password must be at least 8 characters long and include uppercase, lowercase, number, and special character.");
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validatePassword(newPassword)) {
            // Proceed with password reset logic
            console.log("Password reset successfully!");
        } else {
            setError("Please enter a valid password.");
        }
    };

    return (
        <div className="resetpassword-container">
            <h2>Reset Password</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="newPassword">New Password</label>
                    <input
                        type="password"
                        id="newPassword"
                        placeholder="Enter your new password"
                        className="form-control"
                        value={newPassword}
                        onChange={handlePasswordChange}
                    />
                    {error && <span className="error-message">{error}</span>}
                </div>
                <button type="submit" className="btn-submit">
                    Reset Password
                </button>
            </form>
        </div>
    );
};

export default ResetPassword;
