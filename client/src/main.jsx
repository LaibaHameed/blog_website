// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './router';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppRouter />
  </React.StrictMode>
);
