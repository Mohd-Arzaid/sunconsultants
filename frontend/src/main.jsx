import { StrictMode } from "react";
import { createRoot, hydrateRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
// import { Toaster } from 'sonner'
import { Toaster } from "@/components/ui/toaster";
import { HelmetProvider } from "react-helmet-async";

const container = document.getElementById("root");
const app = (
  <StrictMode>
    <BrowserRouter>
      <HelmetProvider>
        <App />
        <Toaster />
      </HelmetProvider>
    </BrowserRouter>
  </StrictMode>
);

if (container.hasChildNodes()) {
  hydrateRoot(container, app);
} else {
  createRoot(container).render(app);
}
