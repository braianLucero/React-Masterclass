import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import "./styles.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* con el useEffect y estando en el modo strictMode se dispara dos veces */}
    <App />
  </React.StrictMode>
);
