import React from "react";
import "./styles/Signup.scss";

const Signup = () => {
  return (
    <div>
      <div className="layout-container">
        <div className="signup-container">
          <h1>Create an Account</h1>
          <div className="form-container">
            <form action="">
              <input type="text" placeholder="Username" />
              <input type="email" placeholder="Email" />
              <input type="password" placeholder="Password" />
            </form>
          </div>
        </div>
        <div className="login-link-container">
          <div className="login-text-container">
            <h3>Already have an account?</h3>
            <a href="#">Login</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
