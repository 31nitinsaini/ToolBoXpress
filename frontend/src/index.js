import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'crypto-browserify';
import 'stream-browserify';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


