import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './style.css'
import App from './App.tsx'
import { BrowserRouter } from "react-router";
import {AuthProvider} from "@context/AuthContext.tsx";
import {ConfigProvider} from "@context/ConfigContext.tsx";

createRoot(document.getElementById('root')!).render(
    <AuthProvider>
      <ConfigProvider>
        <StrictMode>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </StrictMode>
      </ConfigProvider>
    </AuthProvider>
)
