import React, { Component } from "react";
import axios from "axios"; 
import { ToastContainer, toast } from "react-toastify"; 
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "react-toastify/dist/ReactToastify.css"; 
import "../loginPage/LoginPage.css";

// Wrapper functional component
const LoginPageWrapper = () => {
    const navigate = useNavigate(); // Use the useNavigate hook

    return <LoginPage navigate={navigate} />; // Pass navigate as a prop
};

// Your original LoginPage class component
class LoginPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            emailError: "",
            passwordError: "",
            loading: false,
        };
    }

    validateEmail = (email) => {
        const emailPattern = /^[a-zA-Z0-9]+([._%+-]?[a-zA-Z0-9]+)*@[a-zA-Z]+\.[a-zA-Z]{2,}$/;
        return emailPattern.test(email);
    };

    validateField = (name, value) => {
        if (name === "email") {
            if (!value) {
                this.setState({ emailError: "Email is required." });
            } else if (!this.validateEmail(value)) {
                this.setState({ emailError: "Invalid email format." });
            } else {
                this.setState({ emailError: "" });
            }
        }

        if (name === "password") {
            if (!value) {
                this.setState({ passwordError: "Password is required." });
            } else {
                this.setState({ passwordError: "" });
            }
        }
    };

    handleChange = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    };

    handleSubmit = async (event) => {
        event.preventDefault();
        const { email, password } = this.state;

        let isValid = true;

        if (!email) {
            this.setState({ emailError: "Email is required." });
            isValid = false;
        } else if (!this.validateEmail(email)) {
            this.setState({ emailError: "Invalid email format." });
            isValid = false;
        } else {
            this.setState({ emailError: "" });
        }

        if (!password) {
            this.setState({ passwordError: "Password is required." });
            isValid = false;
        } else {
            this.setState({ passwordError: "" });
        }

        if (isValid) {
            this.setState({ loading: true });

            try {
                const response = await axios.post("http://localhost:8080/api/users/login", {
                    email,
                    password,
                });

                toast.success(response.data.message || "Login successful!"); // Show success message in toaster only
                
                console.log("Login successful!");
                this.setState({ loading: false });
                
                setTimeout(() => {
                  this.props.navigate("/dashboard"); // Use the navigate prop to redirect
              }, 2000); 
            } catch (error) {
                this.setState({ loading: false });

                if (error.response && error.response.data) {
                    const errorMessage = error.response.data.error || "Login failed.";
                    toast.error(errorMessage); // Show backend error message in toaster only
                } else {
                    const errorMessage = "An error occurred: " + error.message;
                    toast.error(errorMessage); // Show error message in toaster only
                }
            }
        }
    };

    render() {
        const { email, password, emailError, passwordError, loading } = this.state;

        return (
            <div className="background">
                <div className="login-container">
                    <h3>Login</h3>
                    <form onSubmit={this.handleSubmit}>
                        <div>
                            <label htmlFor="email">Email:</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={email}
                                onChange={this.handleChange}
                                onBlur={(e) => this.validateField(e.target.name, e.target.value)} 
                            />
                            {emailError && <div className="error">{emailError}</div>}
                        </div>
                        <div>
                            <label htmlFor="password">Password:</label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                value={password}
                                onChange={this.handleChange}
                                onBlur={(e) => this.validateField(e.target.name, e.target.value)} 
                            />
                            {passwordError && <div className="error">{passwordError}</div>}
                        </div>
                        <button className="button-container" type="submit" disabled={loading}>
                            {loading ? "Logging in..." : "Log In"}
                        </button>
                        <div className="forgot-password">
                            <a href="/forgotpassword">Forgot Password?</a>
                        </div>
                        <div className="register-link">
                            <p>
                                Not registered? <a href="/register">Create an account</a>
                            </p>
                        </div>
                    </form>
                </div>
                <ToastContainer /> {/* Add ToastContainer */}
            </div>
        );
    }
}

// Export the wrapped LoginPage
export default LoginPageWrapper;
