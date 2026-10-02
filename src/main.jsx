import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import './index.css';

// Restaura la ruta original cuando GitHub Pages sirvio public/404.html.
// 404.html guarda location.href en sessionStorage y redirige a '/', asi que
// sin este bloque toda URL profunda terminaria siempre en el home.
const redirect = sessionStorage.getItem('redirect');
if (redirect) {
  sessionStorage.removeItem('redirect');
  try {
    const url = new URL(redirect);
    window.history.replaceState(null, '', url.pathname + url.search + url.hash);
  } catch {
    /* si el valor no es una URL valida, seguimos con la ruta actual */
  }
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
