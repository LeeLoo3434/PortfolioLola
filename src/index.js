import React from 'react';
import { createRoot } from 'react-dom';
import './index.css';
import App from './App';
import { ThemeProvider } from './ThemeContext';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
