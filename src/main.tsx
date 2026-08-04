import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './style.css'
import App from './App.tsx'
import { BrowserRouter } from "react-router";
import {AuthProvider} from "@context/AuthContext.tsx";

createRoot(document.getElementById('root')!).render(
    <AuthProvider>
      <StrictMode>
          <BrowserRouter>
              <App />
          </BrowserRouter>
      </StrictMode>
    </AuthProvider>
)
