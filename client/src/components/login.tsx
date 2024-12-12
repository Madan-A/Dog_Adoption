// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import "./login.css";

// const Login: React.FC = () => {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [errorMessage, setErrorMessage] = useState("");
//   const navigate = useNavigate();

//   const handleSignUpClick = (e: React.MouseEvent<HTMLButtonElement>) => {
//     e.preventDefault();
//     navigate("/signup"); // Navigate to the signup page
//   };

//   const handleLogin = async (e: React.MouseEvent<HTMLButtonElement>) => {
//     e.preventDefault();
//     setErrorMessage(""); // Clear previous error message

//     const data = { username, password };

//     try {
//       const response = await fetch("http://localhost:5000/api/login", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(data),
//       });

//       if (response.ok) {
//         const result = await response.json();
//         console.log("Login successful:", result);

//         // Navigate to the homepage after successful login
//         navigate("/home");
//       } else {
//         const errorResult = await response.json();
//         setErrorMessage(errorResult.error || "Login failed");
//       }
//     } catch (error) {
//       setErrorMessage("An error occurred. Please try again.");
//       console.error("Error:", error);
//     }
//   };

//   return (
//     <div className="container">
//       <div className="form-container">
//         <img src="/logo.png" alt="Logo" className="logo" />
//         <h3 className="heading">Welcome!</h3>
//         <input
//           type="text"
//           placeholder="Username"
//           className="input"
//           value={username}
//           onChange={(e) => setUsername(e.target.value)}
//         />
//         <input
//           type="password"
//           placeholder="Password"
//           className="input"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//         />
//         {errorMessage && <div className="error-message">{errorMessage}</div>}
//         <button className="button" onClick={handleLogin}>
//           Login
//         </button>
//         <p className="text">OR</p>
//         <p className="text">Don't have an account?</p>
//         <button className="button-secondary" onClick={handleSignUpClick}>
//           Sign Up
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Login;


import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";

const Login: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
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
        // Save token (if applicable) and navigate to home
        localStorage.setItem("token", result.token);
        navigate("/home");
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
      <div className="form-container">
        <img src="/logo.png" alt="Logo" className="logo" />
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
