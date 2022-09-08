import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "../reducers/rootReducer";
import { useSelector, useDispatch } from "react-redux";
import "./styles/App.scss";
import Button from "@mui/material/Button";

const App = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter);
  return (
    <div>
      <h1>Hello world</h1>
      <h1>Stacy</h1>
      <h1>Hello Amanda world</h1>
      <h1> OLIVIA </h1>
      {/* <h1>Counter: {counter}</h1> */}
      {/* <button onClick={() => dispatch({ type: "DUMMY_CASE" })}>
        Increment
      </button> */}
      <Button variant="outlined">MUI Works</Button>
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
          <Routes>
            <Route path="/" element={<App />} />
            {/* Other nav tabs to be added */}
          </Routes>
        </BrowserRouter>
      </Provider>
    </React.StrictMode>
  );
};
