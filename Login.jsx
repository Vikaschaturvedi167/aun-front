import React, { useContext, useState, useEffect } from "react";
import { AppContext } from "../authcontext/AppContext";
import { Link, useNavigate } from "react-router-dom";
import "./Styling/Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { authdetails, login, logout } = useContext(AppContext);
  const navigate = useNavigate();

  // Check if token is expired after one hour
  useEffect(() => {
    const tokenExpiry = localStorage.getItem("tokenExpiry");
    if (tokenExpiry) {
      const expiryTime = new Date(tokenExpiry).getTime();
      const currentTime = new Date().getTime();
      const timeElapsed = currentTime - expiryTime;
      if (timeElapsed > 0 && timeElapsed <= 3600000) {
        // If token expired but within one hour, automatically logout
        logout();
      }
    }
  }, [logout]);

  const handleLogin = async () => {
    const userDetails = {
      email,
      password,
    };

    try {
      const response = await fetch(`http://localhost:5000/api/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userDetails),
      });

      const data = await response.json();

      if (response.ok) {
        const tokenExpiry = new Date().getTime() + 3600000; // One hour expiry time
        login(data.token, data.userId);
        localStorage.setItem("tokenExpiry", tokenExpiry);
        localStorage.setItem("userEmail", email);
        navigate("/");
      } else {
        console.error("Login failed:", data.error);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleLogout = () => {
    logout();
  };

  return (
    <div className="login-container">
      <p className="if">If login time is more then 1 hour please login again!</p>
      {authdetails.authState ? (
        <button className="login-btn" onClick={handleLogout}>
          Logout
        </button>
      ) : (
        <div>
          <h1 className="head">Login</h1>
          <input
            className="input-field"
            id="bb"
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            className="input-field"
            id="nmn"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button className="login-btn" onClick={handleLogin}>
            Login
          </button>

          <div className="register-link">
            <p>
              Don't have an account? <Link to="/signup">Register here</Link>.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;
