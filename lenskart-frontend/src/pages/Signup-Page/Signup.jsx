import React, { useState } from "react";
import "./signup.css";

function Signup({ closeModalSignup, openLogin }) {
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
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
      const response = await fetch("https://lenskart-clone-project.onrender.com/api/users/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
        credentials: "include",
      });

      // Check if response is OK before parsing JSON
      if (!response.ok) {
        throw new Error(
          `Signup failed: ${response.status} ${response.statusText}`
        );
      }

      const data = await response.json();
      console.log("Signup response:", data);

      // Reset form fields
      setUserData({
        firstName: "",
        lastName: "",
        phoneNumber: "",
        email: "",
        password: "",
      });
    } catch (error) {
      console.error("Error encountered while signing-up : ", error.message);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="signup-container">
        <div className="signup-heading">
          <h1>Create an Account</h1>
          <button onClick={closeModalSignup} className="close-btn">
            X
          </button>
        </div>
        <div className="firstName inputs">
          <input
            type="text"
            placeholder="First Name*"
            name="firstName"
            value={userData.firstName}
            onChange={handleInputCapture}
          />
        </div>
        <div className="lastName inputs">
          <input
            type="text"
            placeholder="Last Name*"
            name="lastName"
            value={userData.lastName}
            onChange={handleInputCapture}
          />
        </div>
        <div className="phoneNumber inputs">
          <input
            type="number"
            placeholder="Mobile*"
            name="phoneNumber"
            value={userData.phoneNumber}
            onChange={handleInputCapture}
          />
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
        <button id="signup">Create an Account</button>
        <div className="have-account">
          <p>Already have an account? then </p>
          <span
            className="login-link"
            onClick={() => {
              openLogin();
              closeModalSignup();
            }}
          >
            Login
          </span>
        </div>
      </form>
    </>
  );
}

export default Signup;
