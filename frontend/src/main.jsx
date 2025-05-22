import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import 'non.geist';
// import { Toaster } from 'sonner'
import { Toaster } from "@/components/ui/toaster"
 

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <App />
    <Toaster />
    </BrowserRouter>
  </StrictMode>,
)
