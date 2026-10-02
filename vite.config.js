import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Si vas a deployar en GitHub Pages, cambiá base por '/AdrianCampanaro/'.
// Para Vercel / Netlify, dejalo en '/'.
export default defineConfig({
  plugins: [react()],
  base: '/',
});
