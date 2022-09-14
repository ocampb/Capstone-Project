import React from "react";
import "./styles/Signup.scss";
import zoom from "../assets/zoom.jpg";

const Signup = () => {
  return (
    <div>
      <div className="layout-container">
        <div className="signup-container">
          <div className="protectly-container">
            <h1>Protectly</h1>
          </div>
          <div className="form-container">
            <h1>Get Started</h1>
            <form action="">
              {/* <input type="text" placeholder="Username" />
              <input type="email" placeholder="Email" />
              <input type="password" placeholder="Password" /> */}
              <ul>
                <li>
                  By clicking "Connect with Calendly", Protectly will
                  automatically create an account for you using your Calendly
                  credentials
                </li>
                <li>
                  <i>
                    Please note, while Protectly is free to use, a paid Calendly
                    Account is required on the Professional Tier to use this
                    service. Please visit Calendly's Pricing Page for more
                    information
                  </i>
                </li>
              </ul>
              <input
                type="submit"
                className="form-button"
                value="Connect with Calendly"
              />
              {/* <input
                type="submit"
                className="form-button"
                id="calendly-button"
                value="Connect with Calendly"
              /> */}
              <p>
                Already have an account? <a href="#">Login</a>
              </p>
            </form>
          </div>
        </div>
        <div className="login-link-container">
          <img src={zoom} alt="Man on online meeting" />
        </div>
      </div>
    </div>
  );
};

export default Signup;
