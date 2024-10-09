import React, { useState } from "react";
import "./LoginSignup.css";

export const LoginSignup = () => {
  const [state, setState] = useState("Login"); 
  const [formData, setFormData] = useState({
    name: "",
    password: "",
    email: "",
  });

  const changeHandeler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const login = async () => {
    console.log("Executed login function", formData);
    let responseData;
    await fetch("http://localhost:4000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json()) 
      .then((data) => (responseData = data)); 
    if (responseData.success) {
      localStorage.setItem("auth-token", responseData.token);
      window.location.replace("/");
    } else {
      alert(responseData.error);
    }
  };

  const signUp = async () => {
    console.log("Executed Sign Up function", formData);
    let responseData;
    await fetch("http://localhost:4000/signUp", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json()) 
      .then((data) => (responseData = data)); 
    if (responseData.success) {
      localStorage.setItem("auth-token", responseData.token);
      window.location.replace("/");
    } else {
      alert(responseData.error);
    }
  };

  return (
    <div className="loginsignup">
      <div className="login-signup-container">
        <h1>{state}</h1>
        <div className="login-signup-fields">
          {state === "Sign up" ? (
            <input
              name="name"
              value={formData.name}
              onChange={changeHandeler}
              type="text"
              placeholder="Your name"
            />
          ) : (
            <></>
          )}
          <input
            name="email"
            value={formData.email}
            onChange={changeHandeler}
            type="email"
            placeholder="Email Address"
          />
          <input
            name="password"
            value={formData.password}
            onChange={changeHandeler}
            type="password"
            placeholder="Password"
          />
        </div>

        <button
          onClick={() => {
            state === "Login" ? login() : signUp(); // Updated the condition to "Login"
          }}
        >
          Continue
        </button>

        {state === "Sign up" ? (
          <p className="loginsignup-login">
            Already have an account?{" "}
            <span
              onClick={() => {
                setState("Login");
              }}
            >
              Login here
            </span>
          </p>
        ) : (
          <p className="loginsignup-login">
            Create new account?{" "}
            <span
              onClick={() => {
                setState("Sign up");
              }}
            >
              Click here
            </span>
          </p>
        )}

        <div className="loginsignup-agree">
          <input type="checkbox" name="" id="" />
          <p>I agree to the terms of use & privacy policy</p>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
