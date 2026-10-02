// Verificacion de render: ejecuta el arbol REAL de componentes por cada ruta y
// afirma strings esperados. Cualquier error de render lo hace fallar.
//
//   node node_modules/vite/bin/vite.js build --ssr src/ssr-check.jsx --outDir ssr-dist
//   node ssr-dist/ssr-check.js
import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import App from './App.jsx';

globalThis.window = {
  matchMedia: () => ({ matches: false }),
  scrollTo: () => {},
  history: { replaceState: () => {} },
};
globalThis.localStorage = { getItem: () => null, setItem: () => {} };
globalThis.sessionStorage = {
  getItem: () => null,
  setItem: () => {},
  removeItem: () => {},
};

const rutas = [
  {
    path: '/',
    seccion: 'Home',
    espera: [
      'Consultoría estratégica con mirada humana',
      'Transforma tu forma de liderar',
      'Resolución de conflictos',
      'Liderazgo con Inteligencia Emocional',
      'Lo que nos diferencia',
      'La experiencia de quienes ya dieron el paso',
      'El crecimiento real comienza',
      'Servicios focalizados en el líder',
    ],
  },
  {
    path: '/servicios',
    seccion: 'Servicios',
    espera: [
      'Servicios de consultoría estratégica y desarrollo del líder',
      'Módulo 01',
      'Módulo 02',
      'Módulo 03',
      'Alcance y focos clave',
      'Modalidad',
    ],
  },
  {
    path: '/quienes-somos',
    seccion: 'Quienes somos',
    espera: [
      'Integrando la dimensión psicológica con la estrategia empresarial',
      'Nuestra Propuesta',
      'Principios Rectores',
      'Bienestar Integral',
      'Matrícula Profesional',
    ],
  },
  {
    path: '/blog',
    seccion: 'Blog',
    espera: [
      'Artículos y reflexiones sobre liderazgo',
      'Decisiones empresariales e inconsciente',
      'Conversaciones no resueltas',
      'Filtros por temáticas',
      'Leer artículo',
    ],
  },
  {
    path: '/blog/miedo-a-cambiar',
    seccion: 'BlogPost',
    espera: [
      'Miedo a cambiar',
      'Por Adrián Campanaro',
      'Volver al blog',
      'Conversar con Adrián',
    ],
  },
  {
    path: '/contacto',
    seccion: 'Contacto',
    espera: [
      'Contacto directo',
      'Enviá tu consulta ejecutiva',
      'Enviar consulta',
      'Atención directa por WhatsApp',
      'Iniciar conversación directa',
    ],
  },
  {
    path: '/ruta-que-no-existe',
    seccion: '404',
    espera: ['404', 'Página no encontrada', 'Volver al inicio'],
  },
];

// Elementos del Layout que tienen que estar en TODAS las rutas
const comunes = [
  'ADRIÁN CAMPANARO',
  'Navegación principal',
  'Contacto directo por WhatsApp',
  'wa.me/',
  'Responde en el día',
  'Abrir WhatsApp',
];

let fallos = 0;
const lineas = [];

for (const r of rutas) {
  let html = '';
  try {
    html = renderToString(
      React.createElement(
        StaticRouter,
        { location: r.path },
        React.createElement(App)
      )
    );
  } catch (e) {
    fallos++;
    lineas.push(`FALLA  ${r.seccion.padEnd(14)} error de render: ${e.message}`);
    continue;
  }

  const faltan = r.espera.filter((s) => !html.includes(s));
  const faltanComunes = comunes.filter((s) => !html.includes(s));

  if (faltan.length || faltanComunes.length) {
    fallos++;
    lineas.push(
      `FALLA  ${r.seccion.padEnd(14)} ${html.length} chars | falta propio: ${
        faltan.join(' | ') || 'ninguno'
      } | falta comun: ${faltanComunes.join(' | ') || 'ninguno'}`
    );
  } else {
    lineas.push(
      `OK     ${r.seccion.padEnd(14)} ${String(html.length).padStart(
        6
      )} chars | ${r.espera.length} aserciones propias + ${comunes.length} del layout`
    );
  }

  // Marca de seccion para poder inspeccionar el HTML si hace falta
  if (process.env.DUMP) {
    process.stdout.write(
      `\n<section data-render="${r.seccion}" data-path="${r.path}">\n${html}\n</section>\n`
    );
  }
}

console.log(lineas.join('\n'));
console.log(
  `\n${fallos === 0 ? 'TODAS LAS RUTAS RENDERIZAN' : `${fallos} RUTA(S) CON FALLA`}`
);
process.exit(fallos === 0 ? 0 : 1);
