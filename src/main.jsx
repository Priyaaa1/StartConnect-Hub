import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { GoogleOAuthProvider } from '@react-oauth/google'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId="1039349867829-5mc9jupnfc21969mbsk1pf4vgovafdhg.apps.googleusercontent.com">
    <App />
    </GoogleOAuthProvider>
    
  </React.StrictMode>,
)
