


import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";

const Login: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  // const [isLoggedIn, setIsLoggedIn] = useState(false); // Manage login state
  const navigate = useNavigate();

  const handleSignUpClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    navigate("/signup"); // Navigate to the signup page
  };

  const handleLogin = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setErrorMessage(""); // Clear previous error message

    const data = { username, password };

    try {
      const response = await fetch("http://localhost:5000/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        console.log("Login successful:", result);
        // setIsLoggedIn(true); // Set logged-in state to true
        localStorage.setItem("token", result.token); // Save token if needed
        navigate("/homepage"); // Navigate to the homepage after successful login
      } else {
        setErrorMessage(result.error || "Login failed");
      }
    } catch (error) {
      setErrorMessage("An error occurred. Please try again.");
      console.error("Error:", error);
    }
  };

  return (
    <div className="container">
      <div className="form-containersssss">
        <img src="./logo.jpg" alt="Logo" className="logo" width="500px" height="500px" />
        <h3 className="heading">Welcome!</h3>
        <input
          type="text"
          placeholder="Username"
          className="input"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="input"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {errorMessage && <div className="error-message">{errorMessage}</div>}
        <button className="button" onClick={handleLogin}>
          Login
        </button>
        <p className="text">OR</p>
        <p className="text">Don't have an account?</p>
        <button className="button-secondary" onClick={handleSignUpClick}>
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default Login;

