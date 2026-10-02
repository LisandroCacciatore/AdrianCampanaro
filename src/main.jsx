import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import './index.css';

// BASE_URL es '/' en local y en Vercel/Netlify, y '/AdrianCampanaro/' en GitHub
// Pages. BrowserRouter quiere el basename sin barra final.
const basename = import.meta.env.BASE_URL.replace(/\/+$/, '');

// Restaura la ruta original cuando el hosting sirvio public/404.html (GitHub
// Pages no tiene fallback de SPA: un deep link devuelve 404.html, que guarda la
// URL y redirige a la raiz). Sin esto, toda URL profunda termina en el home.
const redirect = sessionStorage.getItem('redirect');
if (redirect) {
  sessionStorage.removeItem('redirect');
  try {
    const url = new URL(redirect);
    // La URL guardada incluye el base y el router lo vuelve a agregar, asi que
    // hay que quitarlo antes de restaurar, o la ruta queda duplicada.
    let path = url.pathname;
    if (basename && path.startsWith(basename)) {
      path = path.slice(basename.length);
    }
    window.history.replaceState(
      null,
      '',
      (path || '/') + url.search + url.hash
    );
  } catch {
    /* si el valor no es una URL valida, seguimos con la ruta actual */
  }
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename={basename}>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
