import React from "react";
import "../resetpasswordPage/Resetpasswordpage.css";

const ResetPassword = () => {
    return (
        <div className="resetpassword-container">
            <h2>Reset Password</h2>
            <form>
                <div className="form-group">
                    <label htmlFor="newPassword">New Password</label>
                    <input
                        type="password"
                        id="newPassword"
                        placeholder="Enter your new password"
                        className="form-control"
                    />
                </div>
                <button type="submit" className="btn-submit">
                    Reset Password
                </button>
            </form>
        </div>
    );
};

export default ResetPassword;
