import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import { useState, useEffect } from "react";
import { applyMiddleware, createStore } from "redux";
import rootReducer from "../reducers/rootReducer";
import "./styles/App.scss";
import Navbar from "./Navbar";
import Signup from "./Signup";
import Dashboard from "./Dashboard";
import Settings from "./Settings";
import logger from "redux-logger";
import LandingNavbar from "./LandingNavbar";
import CancelMessage from "./CancelMessage";
import calendar from "../assets/calendar.png";

const App = () => {
  const [login, setLogin] = useState(false);
  const isUserLoggedIn = async () => {
    const result = await fetch("/api/dashboard/login", {
      method: "GET",
    });
    if (result.status === 200) {
      setLogin((prev) => true);
    }
  };
  useEffect(() => {
    isUserLoggedIn();
  }, []);

  return (
    <div>
      {login ? <Navbar /> : <LandingNavbar />}
      {/* Section 1 */}
      <div className="landing-section-one">
        <div className="heading-container">
          <h1>Secure your Calendly links and let us do the heavy lifting</h1>
          <h3>
            Protectly will automatically cancel meetings that are not on your
            approved list.
          </h3>
          <a href="/oauth" className="get-started-link">
            Get Started
          </a>
        </div>
        <div className="heading-picture-container">
          <img src={calendar} alt="Calendar illustration" />
        </div>
      </div>

      {/* Section 2 */}
      <div className="landing-section-two">
        <h1>How Protectly Works</h1>
        <div className="landing-cards">
          <div className="card">
            <h3>Connect</h3>
            <p>
              Connect your Calendly Account to Protectly and automatically
              create your Protectly account.
            </p>
          </div>
          <div className="card">
            <h3>Authorize</h3>
            <p>
              Tell Protectly who is allowed to schedule meetings with you. List
              out the email addresses and let Protectly do the work.
            </p>
          </div>
          <div className="card">
            <h3>Rest Easy</h3>
            <p>
              Rest easy knowing that Protectly protects your calendar and your
              Calendly links by automatically canceling meetings with
              unauthorized users.
            </p>
          </div>
        </div>
      </div>
      {/* Section three */}
      <div className="landing-section-three">
        <h1>Why People Choose Protectly</h1>
      </div>
    </div>
  );
};

window.onload = () => {
  const store = createStore(rootReducer, applyMiddleware(logger));
  const root = createRoot(document.getElementById("root"));
  root.render(
    <React.StrictMode>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </React.StrictMode>
  );
};
