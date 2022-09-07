import React from "react";
import { createRoot } from "react-dom/client";

const App = () => {
  return <h1>Hello Amanda world</h1>;
};

window.onload = () => {
  const root = createRoot(document.getElementById("root"));

  root.render(<App />);
};
