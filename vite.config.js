import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// GitHub Pages sirve el sitio en /<repo>/, Vercel y Netlify en la raiz.
// El workflow de Pages define DEPLOY_TARGET=ghpages; en local y en Vercel queda
// en '/'. Asi no hay que editar este archivo al cambiar de destino.
// `src/main.jsx` lee import.meta.env.BASE_URL para el basename del router, asi
// que este unico valor alcanza para los dos destinos.
const base = process.env.DEPLOY_TARGET === 'ghpages' ? '/AdrianCampanaro/' : '/';

export default defineConfig({
  plugins: [react()],
  base,
});
