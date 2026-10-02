export const site = {
  name: 'Adrián Campanaro',
  tagline: 'Consultoría Estratégica con Inteligencia Emocional',
  email: 'info@adriancampanaro.com',

  // TODO(datos reales): telefono y WhatsApp son valores de relleno.
  // Hay que reemplazar los tres antes de publicar. Formato de `whatsapp`
  // y `phoneRaw`: solo digitos con codigo de pais, sin + ni espacios.
  phone: '+54 9 11 0000-0000',
  phoneRaw: '5491100000000',
  whatsapp: '5491100000000',

  // TODO(datos reales): URL de LinkedIn de relleno. La real es
  // https://www.linkedin.com/in/adrian-campanaro-consultant/
  linkedin: 'https://linkedin.com',

  location: 'Rosario, Argentina',
};

export const nav = [
  { label: 'Inicio', to: '/' },
  { label: 'Servicios', to: '/servicios' },
  { label: 'Quiénes somos', to: '/quienes-somos' },
  { label: 'Blog', to: '/blog' },
  { label: 'Contacto', to: '/contacto' },
];

export const services = [
  {
    slug: 'conflictos',
    title: 'Resolución de conflictos',
    description:
      'Intervenimos en dinámicas empresariales que generan tensión y estancamiento. Especialmente en empresas familiares y directorios con visiones encontradas.',
    icon: 'groups',
  },
  {
    slug: 'liderazgo',
    title: 'Liderazgo personal',
    description:
      'Trabajamos las habilidades blandas, la autoconfianza y la claridad decisional para sostener la exigencia diaria sin perder el equilibrio personal.',
    icon: 'schedule',
  },
  {
    slug: 'alineacion',
    title: 'Alineación estratégica',
    description:
      'Alineamos los objetivos del negocio con los valores del líder, asegurando coherencia entre la dirección corporativa y las motivaciones de fondo.',
    icon: 'layers',
  },
];

// TODO(datos reales): los tres testimonios son de ejemplo, no de clientes.
// Reemplazar por testimonios reales y autorizados, o eliminar la seccion.
// Se renderizan en src/pages/Home.jsx.
export const testimonials = [
  {
    name: 'Esteban Morán',
    company: 'Director General · Metalúrgica Morán & Hijos',
    quote:
      'Logramos ordenar la toma de decisiones en el directorio familiar sin romper vínculos personales de años. La claridad con la que Adrián guía las reuniones evitó un desgaste irreversible.',
  },
  {
    name: 'Silvina Rossi',
    company: 'Fundadora y CEO · Logística del Centro',
    quote:
      'Creía que el problema de mi empresa era de procesos comerciales, pero el cuello de botella era mi dificultad para delegar y comunicar prioridades con tranquilidad. El cambio fue inmediato.',
  },
  {
    name: 'Martín Benítez',
    company: 'Socio Gerente · Agroquímica Pampeana',
    quote:
      'Adrián tiene la capacidad poco común de entender la urgencia de los números del negocio sin perder jamás de vista lo que te pasa como persona al frente de 80 empleados.',
  },
];

export const waMessages = {
  '/': 'Hola Adrián, vengo del sitio web y quería consultarte por un tema de liderazgo en mi empresa.',
  '/servicios':
    'Hola Adrián, vengo de la página de Servicios y quería consultarte por un tema de liderazgo en mi empresa.',
  '/quienes-somos':
    'Hola Adrián, leí sobre su propuesta en la página Quiénes Somos y me gustaría hacerle una consulta.',
  '/blog':
    'Hola Adrián, estuve leyendo tus artículos en el Blog y me gustaría consultarte sobre una situación de liderazgo en mi empresa.',
  '/contacto':
    'Hola Adrián, vengo de la página de Contacto y quería consultarte por un tema de liderazgo en mi empresa.',
};
