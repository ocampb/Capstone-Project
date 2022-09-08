import React from "react";
import { createRoot } from "react-dom/client";
import "./styles/App.scss";

const App = () => {
  return (
    <div>
      <h1>Hello world</h1>
      <h1>Stacy</h1>
      <h1>Hello Amanda world</h1>
      <h1> OLIVIA </h1>
    </div>
  );
};

window.onload = () => {
  const root = createRoot(document.getElementById("root"));

  root.render(<App />);
};
