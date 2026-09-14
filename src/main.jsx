import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@fontsource-variable/golos-text";
import "@fontsource/pt-serif/400.css";
import "@fontsource/pt-serif/700.css";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
