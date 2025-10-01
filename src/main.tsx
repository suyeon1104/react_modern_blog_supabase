import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./css/index.css";
import App from "./App.tsx";
import { BrowserRouter } from "react-router";
import AuthBootStrap from "./components/AuthBootstrap.tsx"

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <AuthBootStrap />
      <App />
    </BrowserRouter>
  </StrictMode>
);
