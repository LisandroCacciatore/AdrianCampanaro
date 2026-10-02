import { services } from '../data/site.js';
import { Button, Container, Section } from '../components/ui.jsx';

const moduleDetails = {
  conflictos: {
    modulo: 'Módulo 01',
    lead: 'Intervenimos en dinámicas societarias donde los desacuerdos personales o generacionales frenan el crecimiento del negocio.',
    focuses: [
      'Mediación en diferencias de criterio entre socios o miembros del directorio.',
      'Protocolos de convivencia y despersonalización de las discusiones estratégicas.',
      'Clarificación de roles, atribuciones y traspaso generacional sin fricción.',
    ],
    modalidad: 'Intervención Societaria',
    modalidadDesc:
      'Sesiones conjuntas e individuales con protocolo estricto de neutralidad y acuerdos documentados.',
    icon: 'groups',
  },
  liderazgo: {
    modulo: 'Módulo 02',
    lead: 'Acompañamiento individual para dueños y CEOs que enfrentan la soledad de la alta dirección.',
    focuses: [
      'Espacio confidencial de descarga y ordenamiento mental pre-decisiones.',
      'Gestión de la incertidumbre, el estrés directivo y la frustración operativa.',
      'Fortalecimiento de la asertividad y comunicación con mandos medios.',
    ],
    modalidad: 'Mentoría 1 a 1',
    modalidadDesc:
      'Encuentros quincenales orientados al pensamiento reflexivo, evaluación de escenarios y contención ejecutiva.',
    icon: 'schedule',
  },
  alineacion: {
    modulo: 'Módulo 03',
    lead: 'Conectamos los números y metas corporativas con el propósito y valores genuinos de quien lidera.',
    focuses: [
      'Definición de rumbo estratégico con foco en la sostenibilidad humana.',
      'Rediseño de reuniones de seguimiento para que sean ágiles y resolutivas.',
      'Detección temprana de cuellos de botella en la delegación.',
    ],
    modalidad: 'Equipo & Estructura',
    modalidadDesc:
      'Talleres de alineación directiva, rediseño de flujos decisionales y métricas de madurez relacional.',
    icon: 'layers',
  },
};

export default function Services() {
  return (
    <>
      <Section className="bg-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8">
              <span className="eyebrow mb-4">Áreas de Intervención</span>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Servicios de consultoría estratégica y desarrollo del líder
              </h1>
              <p className="text-lg max-w-2xl">
                Acompañamos a dueños de empresas, socios y directores ejecutivos
                a destrabar dinámicas complejas, recuperar la claridad de rumbo
                y tomar decisiones alineadas con la dimensión humana del
                negocio.
              </p>
            </div>
            <aside className="lg:col-span-4 bg-surface-alt rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-10 h-10 rounded-full bg-brand text-white flex items-center justify-center font-semibold">
                  AC
                </span>
                <div>
                  <p className="font-semibold text-ink-title">
                    Adrián Campanaro
                  </p>
                  <p className="text-xs text-ink-body">
                    Práctica confidencial para directores
                  </p>
                </div>
              </div>
              <p className="text-sm">
                Metodología directa, sin delegación en terceros analistas. Cada
                proceso es conducido personalmente con el decisor clave.
              </p>
            </aside>
          </div>
        </Container>
      </Section>

      <Section alt>
        <Container>
          <div className="max-w-[1100px] mx-auto space-y-8">
            {services.map((s) => {
              const d = moduleDetails[s.slug];
              return (
                <article
                  key={s.slug}
                  className="bg-white rounded-xl p-8 md:p-10 shadow-sm transition-shadow hover:shadow-md"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                    <div className="lg:col-span-8 space-y-5">
                      <div className="flex items-center gap-4">
                        <span className="w-12 h-12 rounded-xl bg-surface-alt flex items-center justify-center text-brand">
                          <span className="material-symbols-outlined">
                            {d.icon}
                          </span>
                        </span>
                        <span className="text-xs uppercase text-brand tracking-wider font-semibold">
                          {d.modulo}
                        </span>
                      </div>
                      <h2 className="text-2xl md:text-3xl font-semibold text-ink-title">
                        {s.title}
                      </h2>
                      <p className="text-ink-body">{d.lead}</p>
                      <div className="pt-2">
                        <h3 className="text-xs uppercase tracking-wider text-ink-title font-semibold mb-3">
                          Alcance y focos clave
                        </h3>
                        <ul className="space-y-2.5">
                          {d.focuses.map((f) => (
                            <li
                              key={f}
                              className="flex items-start gap-3 text-ink-body"
                            >
                              <span className="w-1.5 h-1.5 rounded-full bg-brand mt-2.5 shrink-0" />
                              <span>{f}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <div className="lg:col-span-4 bg-surface-alt rounded-xl p-6 flex flex-col justify-between h-full gap-6">
                      <div>
                        <p className="text-xs uppercase tracking-wider text-brand mb-2 font-semibold">
                          Modalidad
                        </p>
                        <p className="font-semibold text-ink-title mb-2">
                          {d.modalidad}
                        </p>
                        <p className="text-sm text-ink-body">
                          {d.modalidadDesc}
                        </p>
                      </div>
                      <Button
                        to="/contacto"
                        variant="secondary"
                        className="w-full !bg-white hover:!bg-surface-muted"
                      >
                        Consultar por este servicio
                      </Button>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </Container>
      </Section>

      <section className="bg-brand-dark text-white py-20 text-center">
        <Container>
          <div className="max-w-[820px] mx-auto">
            <h2 className="text-3xl font-semibold text-white mb-6">
              El crecimiento real comienza cuando el liderazgo se alinea con la
              persona que lo sostiene.
            </h2>
            <p className="text-lg text-white/80 mb-10 max-w-xl mx-auto">
              Conversemos sobre el presente de tu empresa y exploremos cómo
              desbloquear el potencial directivo de forma sostenible.
            </p>
            <Button to="/contacto" variant="dark-cta" className="!px-10 !py-4">
              Agenda tu primer encuentro
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
