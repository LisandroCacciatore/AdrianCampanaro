import { Button, Container, Section } from '../components/ui.jsx';

export default function About() {
  return (
    <>
      <Section className="bg-white">
        <Container>
          <div className="max-w-3xl">
            <span className="eyebrow mb-4">Quiénes Somos & Propuesta</span>
            <h1 className="text-4xl md:text-5xl font-semibold tracking-tight mb-6">
              Integrando la dimensión psicológica con la estrategia empresarial.
            </h1>
            <p className="text-lg text-ink-body max-w-2xl">
              Intervenimos donde lo técnico se entrelaza con lo emocional y lo
              humano: toda evolución empresarial real comienza con una
              transformación interna genuina del liderazgo.
            </p>
          </div>
        </Container>
      </Section>

      <Section alt>
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5">
              <div className="relative overflow-hidden rounded-xl shadow-card">
                {/* TODO(foto real): reemplazar picsum por el retrato de Adrián. */}
                <img
                  src="https://picsum.photos/seed/adrian-about/800/1000"
                  alt="Adrián Campanaro, psicólogo psicoanalista y consultor estratégico"
                  className="w-full h-[520px] object-cover object-top"
                />
                <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-brand-dark/90 to-transparent text-white">
                  {/* TODO(dato real): verificar numero de matricula y años de
                      trayectoria antes de publicar. No estan confirmados. */}
                  <p className="text-xs text-white/80 uppercase tracking-widest mb-1 font-semibold">
                    Matrícula Profesional 7118
                  </p>
                  <p className="text-lg font-semibold mb-1">Adrián Campanaro</p>
                  <p className="text-sm text-white/80">
                    Psicólogo Psicoanalista & Consultor de Dirección. Más de 15
                    años acompañando a dueños y CEOs.
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="bg-white p-8 md:p-10 rounded-xl shadow-sm">
                <span className="eyebrow mb-3">Nuestra Propuesta</span>
                <h2 className="text-3xl font-semibold mb-6">
                  Desarrollo directivo con arraigo en la psicología profunda
                </h2>
                <p className="mb-6">
                  Somos una consultora especializada en desarrollo personal
                  empresarial. Ayudamos a dueños de empresas, líderes de equipos
                  y directores a tomar decisiones sostenibles desde una
                  perspectiva emocional, estratégica y profundamente humana.
                </p>
                <p className="mb-8">
                  Las planillas de cálculo, los planes de negocio y los
                  organigramas quedan inertes si no se atiende la subjetividad,
                  los miedos, la soledad y las lealtades invisibles que rigen el
                  comportamiento de quien toma las decisiones decisivas.
                </p>

                <ul className="space-y-4">
                  {[
                    {
                      icon: 'psychology',
                      t: 'Resolución de tensiones internas y desacuerdos societarios',
                      d: 'Desactivamos fricciones estructurales entre socios y mandos mediante inteligencia emocional aplicada.',
                    },
                    {
                      icon: 'balance',
                      t: 'Claridad y templanza frente a la soledad directiva',
                      d: 'Un espacio reflexivo y confidencial donde validar escenarios complejos sin la urgencia reactiva.',
                    },
                    {
                      icon: 'lock_open',
                      t: 'Superación de bloqueos y resistencias inconscientes',
                      d: 'Identificamos los límites invisibles del propio fundador que operan como techos de cristal.',
                    },
                    {
                      icon: 'family_restroom',
                      t: 'Liderazgo consciente y continuidad generacional',
                      d: 'Facilitamos transiciones de mando y profesionalización en pymes familiares.',
                    },
                  ].map((item) => (
                    <li
                      key={item.t}
                      className="flex items-start gap-4 p-4 rounded-xl bg-surface-alt"
                    >
                      <span className="w-9 h-9 rounded-lg bg-brand text-white flex items-center justify-center shrink-0">
                        <span className="material-symbols-outlined text-xl">
                          {item.icon}
                        </span>
                      </span>
                      <div>
                        <h4 className="text-base font-semibold text-ink-title mb-1">
                          {item.t}
                        </h4>
                        <p className="text-sm">{item.d}</p>
                      </div>
                    </li>
                  ))}
                </ul>

                <div className="mt-8 pt-6 flex flex-wrap items-center gap-4">
                  <Button to="/contacto">Conocer la Metodología</Button>
                  {/* TODO(dato real): la sede declarada acá (CABA) no coincide con
                      site.location (Rosario). Definir cuál es la correcta. */}
                  <span className="text-xs text-ink-muted">
                    Intervención presencial en CABA / Remoto a nivel
                    internacional
                  </span>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section className="bg-white">
        <Container>
          <div className="max-w-[1100px] mx-auto">
            <div className="text-center max-w-xl mx-auto mb-12">
              <span className="eyebrow mb-3">Principios Rectores</span>
              <h3 className="text-3xl font-semibold">
                Valores que guían cada consultoría
              </h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  n: '01',
                  t: 'Bienestar Integral',
                  d: 'Un empresario emocionalmente saludable lidera con mayor lucidez, cuida a sus colaboradores y sostiene la rentabilidad con serenidad.',
                  icon: 'spa',
                },
                {
                  n: '02',
                  t: 'Empatía y Escucha Profunda',
                  d: 'Entendemos los desafíos reales, los silencios y las presiones que no se muestran en un balance contable.',
                  icon: 'hearing',
                },
                {
                  n: '03',
                  t: 'Determinación y Sostén',
                  d: 'Acompañamos procesos complejos y conversaciones difíciles con constancia inquebrantable y rigor ético.',
                  icon: 'security',
                },
              ].map((v) => (
                <div
                  key={v.t}
                  className="bg-surface-alt p-8 rounded-xl shadow-sm flex flex-col"
                >
                  <span className="material-symbols-outlined text-brand text-3xl mb-5">
                    {v.icon}
                  </span>
                  <span className="text-xs uppercase text-ink-muted tracking-wider font-semibold mb-1">
                    Principio {v.n}
                  </span>
                  <h4 className="text-lg font-semibold text-ink-title mb-3">
                    {v.t}
                  </h4>
                  <p className="text-ink-body">{v.d}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      <section className="bg-brand-dark text-white py-20 text-center">
        <Container>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-semibold text-white mb-6">
              El crecimiento real comienza cuando el liderazgo se alinea con la
              persona que lo sostiene.
            </h2>
            <Button to="/contacto" variant="dark-cta" className="!px-10 !py-4">
              Agenda tu primer encuentro
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
