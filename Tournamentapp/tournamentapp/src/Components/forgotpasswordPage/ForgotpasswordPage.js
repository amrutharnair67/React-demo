import React from "react";
import "../forgotpasswordPage/ForgotpasswordPage.css"

const ForgotPassword = () => {
    return (
        <div className="forgotcontainer">
            <h2>Forgot Password</h2>
            <form>
                <div className="form-group">
                    <label htmlFor="email">Email Address</label>
                    <input
                        type="email"
                        id="email"
                        placeholder="Enter your registered email"
                        className="form-control"
                    />
                </div>
                <button type="submit" className="btn-submit">
                    Submit
                </button>
            </form>
        </div>
    );
};

export default ForgotPassword;
