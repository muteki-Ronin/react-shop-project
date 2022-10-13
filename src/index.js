// CORE
import React from "react";
import ReactDOM from "react-dom/client";
// PARTS
import App from "./App";
// STYLE
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("react-root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
