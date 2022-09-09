import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "../reducers/rootReducer";
import { useSelector, useDispatch } from "react-redux";
import "./styles/App.scss";
// import Button from "@mui/material/Button";
import Navbar from "./Navbar";
import Login from "./Login";
import Signup from "./Signup";
import Dashboard from "./Dashboard";
import Settings from "./Settings";

const App = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter);
  return (
    <div>
      <h1>Hello world</h1>
      <h1>Stacy</h1>
      <h1>Hello Amanda world</h1>
      <h1> OLIVIA </h1>
      <a href="/oauth">Login with Calendly</a>
      {/* <h1>Counter: {counter}</h1> */}
      {/* <button onClick={() => dispatch({ type: "DUMMY_CASE" })}>
        Increment
      </button> */}
      {/* <Button variant="outlined">MUI Works</Button> */}
    </div>
  );
};

window.onload = () => {
  const store = createStore(rootReducer);
  const root = createRoot(document.getElementById("root"));

  root.render(
    <React.StrictMode>
      <Provider store={store}>
        <BrowserRouter>
          <Navbar />
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
