import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
// import { Toaster } from 'sonner'
import { Toaster } from "@/components/ui/toaster";
import { HelmetProvider } from "react-helmet-async";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <HelmetProvider>
        <App />
        <Toaster />
      </HelmetProvider>
    </BrowserRouter>
  </StrictMode>
);
