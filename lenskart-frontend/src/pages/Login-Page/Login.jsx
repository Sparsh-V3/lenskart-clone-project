import React, { useState } from "react";
import "./login.css";

function Login({ closeModalLogin }) {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const handleInputCapture = (event) => {
    const { name, value } = event.target;
    setUserData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch("http://localhost:8080/api/users/login", {
        method: "POST",
        credentials: "include", // Ensures cookies are sent and received
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userData),
      });

      if (!response.ok) {
        throw new Error("Invalid credentials");
      }

      const data = await response.json();
      console.log("Login Successful.", data);
    } catch (error) {
      console.error("Login error:", error.message);
    }
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit}>
        <div className="login-heading">
          <h1>Login</h1>
          <button onClick={closeModalLogin} className="close-btn">
            X
          </button>
        </div>
        <div className="email inputs">
          <input
            type="email"
            placeholder="Email*"
            name="email"
            value={userData.email}
            onChange={handleInputCapture}
          />
        </div>
        <div className="password inputs">
          <input
            type="password"
            placeholder="Password*"
            name="password"
            value={userData.password}
            onChange={handleInputCapture}
          />
        </div>
        <button id="login">Login</button>
      </form>
    </div>
  );
}

export default Login;
