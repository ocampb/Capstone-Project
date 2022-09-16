import React from "react";
import "./styles/Signup.scss";
import zoom from "../assets/zoom.jpg";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="layout-container">
        <div className="signup-container">
          <div className="protectly-container">
            <Link to="/">
              <h1>Protectly</h1>
            </Link>
          </div>
          <div className="form-container">
            <h1>Get Started</h1>
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
              onClick={() => navigate("/oauth")}
              value="Connect with Calendly"
            />
            <p>
              Already have an account? <a href="/oauth">Login</a>
            </p>
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
