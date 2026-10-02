import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// GitHub Pages sirve el sitio en /<repo>/, Vercel y Netlify en la raiz.
// El workflow de Pages define DEPLOY_TARGET=ghpages; en local y en Vercel queda
// en '/'. Asi no hay que editar este archivo al cambiar de destino.
// `src/main.jsx` lee import.meta.env.BASE_URL para el basename del router, asi
// que este unico valor alcanza para los dos destinos.
const base = process.env.DEPLOY_TARGET === 'ghpages' ? '/AdrianCampanaro/' : '/';

// Mientras el sitio tenga datos de relleno (testimonios de ejemplo, telefono
// sin confirmar) NO tiene que indexarse. El default es no indexar: hay que
// pedir lo contrario a proposito, asi un olvido deja el sitio afuera de Google
// en vez de adentro con datos falsos.
//
// Para habilitar el indexado cuando los datos sean reales:
//   PUBLIC_SITE=true npm run build      (y agregarlo al env del workflow)
const META_NOINDEX =
  '    <meta name="robots" content="noindex, nofollow" />\n';

function noindexHastaPublicar() {
  return {
    name: 'noindex-hasta-publicar',
    transformIndexHtml(html) {
      if (process.env.PUBLIC_SITE === 'true') {
        console.log('[noindex] PUBLIC_SITE=true -> el sitio se puede indexar');
        return html;
      }
      console.log('[noindex] bloqueando indexado (falta PUBLIC_SITE=true)');
      return html.replace('</head>', META_NOINDEX + '  </head>');
    },
  };
}

export default defineConfig({
  plugins: [react(), noindexHastaPublicar()],
  base,
});
