import React from "react";
import { createRoot } from "react-dom/client";

const App = () => {
  return (
    <div>
      <h1>Hello world</h1>
      <h1>Stacy</h1>
      <h1>Hello Amanda world</h1>
    </div>
  );
};

window.onload = () => {
  const root = createRoot(document.getElementById("root"));

  root.render(<App />);
};
