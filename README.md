# Adrián Campanaro — Sitio Web

Sitio de consultoría estratégica con mirada humana. Construido con **React + Vite + Tailwind CSS**.

## Stack

- **React 18** + **Vite 5**
- **React Router 6** (navegación SPA)
- **Tailwind CSS 3** (sistema de diseño personalizado en `tailwind.config.js`)
- **Montserrat** + **Material Symbols** (Google Fonts)

## Instalación local

```bash
git clone https://github.com/LisandroCacciatore/AdrianCampanaro.git
cd AdrianCampanaro
npm install
npm run dev
```

Abrí http://localhost:5173

## Build de producción

```bash
npm run build     # genera dist/
npm run preview   # sirve dist/ local para verificar
```

## Verificación de render

`npm run check:render` ejecuta el árbol **real** de componentes por las 7 rutas
(las 6 vistas + la 404) y afirma contenido esperado en cada una. Sin navegador y sin
permisos. Falla con código distinto de cero si alguna ruta no renderiza o le falta
contenido.

```bash
npm run check:render
```

Un `HTTP 200` no prueba que la app monte: un import roto deja la página vacía con status
200. Este check es lo que prueba que el DOM se produce de verdad.

## ⚠️ Pendientes antes de publicar

Hay valores de relleno que **tienen que reemplazarse** o el sitio sale a producción
con datos falsos. Están marcados con `TODO` en el código.

| Qué | Dónde | Estado |
|---|---|---|
| **Teléfono y WhatsApp** | `src/data/site.js` (`phone`, `phoneRaw`, `whatsapp`) | Relleno: `5491100000000`. Formato: solo dígitos con código de país |
| **LinkedIn** | `src/data/site.js` (`linkedin`) | Relleno: `https://linkedin.com` |
| **Fotos** | `Home.jsx`, `About.jsx`, `src/data/blog.js` | Relleno: `picsum.photos`. Reemplazar por fotos reales |
| **Testimonios** | `src/data/site.js` (`testimonials`) | **Nombres y citas inventados.** Reemplazar por testimonios reales y autorizados, o borrar la sección |
| **Número de matrícula** | `src/pages/About.jsx` | Sin confirmar. Verificar o quitar |
| **Cuerpo de los artículos** | `src/pages/BlogPost.jsx` | Hoy es el mismo texto provisorio para los cuatro posts |
| **Sede** | `site.location` dice Rosario, `About.jsx` dice CABA | Contradicción. Definir cuál es la correcta |
| **Envío del formulario** | `src/pages/Contact.jsx` (`handleSubmit`) | No envía nada: solo muestra el mensaje de éxito. Falta conectar un endpoint |

## Deploy

### Opción A: Vercel / Netlify (recomendado)
Importá el repo desde vercel.com/new o netlify.com. Detecta Vite automáticamente.
No hay que tocar `vite.config.js`.

### Opción B: GitHub Pages

1. En `vite.config.js`, cambiá `base: '/'` por `base: '/AdrianCampanaro/'`.
2. `public/404.html` ya está incluido con el truco de redirección SPA, y
   `src/main.jsx` lo completa leyendo `sessionStorage.redirect`. Las dos partes
   son necesarias: sin la de `main.jsx`, toda URL profunda cae en el home.
3. Agregá este workflow en `.github/workflows/deploy.yml`:

```yaml
name: Deploy
on:
  push:
    branches: [main]
permissions:
  contents: read
  pages: write
  id-token: write
jobs:
  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
      - run: npm ci
      - run: npm run build
      - uses: actions/configure-pages@v4
      - uses: actions/upload-pages-artifact@v3
        with:
          path: ./dist
      - id: deployment
        uses: actions/deploy-pages@v4
```

4. En GitHub → **Settings → Pages** → Source: **GitHub Actions**.

## Personalización

| Qué | Dónde |
|---|---|
| Datos de contacto, navegación, servicios, testimonios | `src/data/site.js` |
| Posts del blog | `src/data/blog.js` |
| Colores, tipografía, espaciados | `tailwind.config.js` |

### Sobre los espaciados

`tailwind.config.js` extiende la escala de espaciado con `13`, `15`, `22`, `4.5` y
`13.5`. Son necesarios: Tailwind **no** trae esos valores por defecto, y sin ellos
clases usadas en el código como `mb-13`, `gap-15` o `py-22` no generan ningún CSS y
el layout queda sin el espacio previsto, en silencio.

## Accesibilidad

- Contraste WCAG 2.1 AA verificado en la paleta (el verde de WhatsApp usa ícono
  oscuro `#0B3B2E` a propósito: el ícono blanco daría 1,98:1, por debajo del mínimo)
- Anillo de foco visible en todos los elementos interactivos
- Etiquetas de formulario visibles y asociadas con `htmlFor` / `id` (no solo placeholder)
- ARIA en navegación, filtros del blog y estado del formulario
- Navegación por teclado completa

## Seguridad — advisories conocidos y por qué no se actualizó

`npm audit` reporta 4 vulnerabilidades (3 moderate, 1 high) al 2/10/2026. **No se
corrieron con `npm audit fix --force` a propósito**, porque los fixes disponibles son
saltos de versión mayor: `vite` 5 → 8 y `react-router-dom` 6 → 7. Eso es un trabajo con
sus propias pruebas, no un `--force` sobre un proyecto recién migrado.

Estado real de exposición:

| Paquete | Severidad | De qué es | Exposición en este proyecto |
|---|---|---|---|
| `vite` | high | 4 advisories: path traversal en deps optimizadas, `launch-editor` NTLMv2 vía UNC, bypass de `server.fs.deny` en rutas alternativas de Windows, y esbuild | **Ninguna en producción.** Los cuatro son del *servidor de desarrollo*. El `dist/` desplegado es HTML/CSS/JS estáticos: no hay servidor Vite corriendo. Sí aplica al entorno local de desarrollo, sobre todo en Windows |
| `esbuild` | moderate | Enviar requests al dev server y leer la respuesta | Igual: sólo dev server |
| `react-router` | moderate | (a) open redirect vía backslash en `<Link>`/`useNavigate`; (b) inyección de constructor vía `deserializeErrors()` en SSR hydration | **Ninguna.** Verificado con `grep`: el único valor dinámico del proyecto es `post.slug`, que sale de un array estático en `src/data/blog.js` y se usa para un `.find()`. Nunca entra a un `<Link to=>`. `useNavigate` no se usa. No hay código de SSR hydration en lo que se despliega |
| `react-router-dom` | moderate | Arrastra de `react-router` | Igual |

Mitigación vigente sin cambiar versiones: el dev server de Vite escucha sólo en
localhost (no hay `--host` en ningún script), así que no es alcanzable desde la red.

**Pendiente recomendado:** planificar el salto `vite` 5 → 8 y `react-router-dom` 6 → 7
como tarea aparte, con `npm run check:render` como red de seguridad y una prueba visual
de las 7 rutas antes y después.

## Licencia

© 2026 Adrián Campanaro. Todos los derechos reservados.
