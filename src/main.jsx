import React from 'react'
import ReactDOM from 'react-dom/client'
import { KindeProvider } from "@kinde-oss/kinde-auth-react";
import App from './App.jsx'
import './index.css'
import { GoogleOAuthProvider } from '@react-oauth/google'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <KindeProvider
      clientId="e595e41eeef94f9aac0c53f5f98c1478" // Here Enter your ClientId from kinde website 
		  domain="https://startconnecthub.kinde.com" // Here Enter your Domain from kinde website 
		  redirectUri="http://localhost:5000"
		  logoutUri="http://localhost:5000"
    >
      <App />
    </KindeProvider>
  </React.StrictMode>,
)
