import React from 'react';
import ReactDOM from 'react-dom/client';
import '/startup.css';
import Slide from './Slider';
import '/slider.css' ;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Slide />
  </React.StrictMode>
);