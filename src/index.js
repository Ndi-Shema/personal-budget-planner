import React from 'react';
import ReactDOM from 'react-dom/client'; // Update to use createRoot
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root')); // Create root
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);