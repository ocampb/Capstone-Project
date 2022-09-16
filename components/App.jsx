import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import rootReducer from "../reducers/rootReducer";
import "./styles/App.scss";
import Navbar from "./Navbar";
import Login from "./Login";
import Signup from "./Signup";
import Dashboard from "./Dashboard";
import Settings from "./Settings";
import logger from "redux-logger";

const App = () => {
  return (
    <div>
      {/* Change this to landing navbar */}
      <Navbar />
      <h1 className="content-under-nav">App</h1>
      <a href="/oauth">Login with Calendly</a>
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
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </React.StrictMode>
  );
};
