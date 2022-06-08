// importing react into the file
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// this is how we render the app
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
