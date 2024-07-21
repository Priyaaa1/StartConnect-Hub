import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App'; // Assuming you have an App component
import { GoogleOAuthProvider } from '@react-oauth/google';
import store from './app/store';
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId="1039349867829-5mc9jupnfc21969mbsk1pf4vgovafdhg.apps.googleusercontent.com">
      <Provider store={store}>
        <App /> {/* Render App instead of Preloader */}
      </Provider>
    </GoogleOAuthProvider>
  </React.StrictMode>
);
