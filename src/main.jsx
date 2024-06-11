import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Preloader from './Components/Preloader/Preloader.jsx'
import { GoogleOAuthProvider } from '@react-oauth/google'
import store from './app/store'
import { Provider } from 'react-redux'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId="1039349867829-5mc9jupnfc21969mbsk1pf4vgovafdhg.apps.googleusercontent.com">
      <Provider store={store}>
        <Preloader/>
      </Provider>
    </GoogleOAuthProvider>
  </React.StrictMode>,
)
