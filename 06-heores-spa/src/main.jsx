import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { HeoresApp } from "./HeoresApp";
import "./styles.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* con el useEffect y estando en el modo strictMode se dispara dos veces */}
    <BrowserRouter>
      <HeoresApp />
    </BrowserRouter>
  </React.StrictMode>
);
