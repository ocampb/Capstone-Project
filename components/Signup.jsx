import React from "react";
import "./styles/Signup.scss";
// import zoom from "../assets/zoom.jpg";

const Signup = () => {
  return (
    <div>
      <div className="layout-container">
        <div className="signup-container">
          <div className="form-container">
            <h1>Create an Account</h1>
            <form action="">
              <input type="text" placeholder="Username" />
              <input type="email" placeholder="Email" />
              <input type="password" placeholder="Password" />
              <input type="submit" value="Create account" />
              <input type="submit" value="Connect with Calendly" />
              <p>
                Already have an account? <a href="#">Login in</a>
              </p>
            </form>
          </div>
        </div>
        <div className="login-link-container">
          <div className="dummy-image">
            <h1>Image</h1>
          </div>
          {/* <img src={zoom} alt="Man on online meeting" /> */}
        </div>
      </div>
    </div>
  );
};

export default Signup;
