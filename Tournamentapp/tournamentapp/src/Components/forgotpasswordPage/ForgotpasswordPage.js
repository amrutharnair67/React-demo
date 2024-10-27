import React, { useState } from "react";
import axios from "axios"; // Import Axios for making HTTP requests
import "../forgotpasswordPage/ForgotpasswordPage.css";

const ForgotPassword = () => {
    const [email, setEmail] = useState("");
    const [loading, setLoading] = useState(false);
    const [successMessage, setSuccessMessage] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const handleChange = (event) => {
        setEmail(event.target.value);
        setErrorMessage(""); 
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        setLoading(true);
        setSuccessMessage("");
        setErrorMessage("");

        try {
            const response = await axios.post("http://localhost:8080/api/users/forgotpassword", {
                email,
            });

            setSuccessMessage(response.data.message || "Check your email for reset instructions.");
        } catch (error) {
            setLoading(false);
            if (error.response) {
                setErrorMessage(error.response.data.message || "Failed to send reset email.");
            } else {
                setErrorMessage("An error occurred: " + error.message);
            }
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="forgotcontainer">
            <h2>Forgot Password</h2>
            <form onSubmit={handleSubmit}>
                <div className="forgtform-group">
                    <label className="forgotlabel" htmlFor="email">Email Address</label>
                    <input
                        type="email"
                        id="email"
                        placeholder="Enter your registered email"
                        className="form-control"
                        value={email}
                        onChange={handleChange}
                    />
                </div>
                <button type="submit" className="forgotbtn-submit" disabled={loading}>
                    {loading ? "Submitting..." : "Submit"}
                </button>

                {/* Message Box for Error and Success Messages */}
                {errorMessage && (
                    <div className="message-box error-box">
                        <p>{errorMessage}</p>
                    </div>
                )}
                {successMessage && (
                    <div className="message-box success-box">
                        <p>{successMessage}</p>
                    </div>
                )}
            </form>
        </div>
    );
};

export default ForgotPassword;
