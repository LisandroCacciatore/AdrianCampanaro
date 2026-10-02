import { Link } from 'react-router-dom';
import { services, testimonials } from '../data/site.js';
import { Button, Container, Section } from '../components/ui.jsx';

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="py-20 bg-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-14 items-center">
            <div>
              <span className="eyebrow mb-4">
                Consultoría para dueños de empresas y CEOs
              </span>
              <h1 className="text-4xl md:text-[42px] font-medium text-ink-title mb-6">
                Consultoría estratégica con mirada humana para dueños de
                empresas.
                <strong className="block font-bold mt-1.5">
                  Transforma tu forma de liderar.
                </strong>
              </h1>
              <p className="text-lg text-ink-body mb-9 max-w-[580px]">
                Te ayudamos a enfrentar desafíos y alcanzar un liderazgo más
                consciente. Integramos la realidad del negocio con la dimensión
                personal de quien toma las decisiones.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button to="/contacto">Agenda tu primer encuentro</Button>
                <Button to="/servicios" variant="secondary">
                  Ver servicios
                </Button>
              </div>
            </div>

            <div className="flex justify-center relative">
              {/* TODO(foto real): reemplazar picsum por el retrato de Adrián. */}
              <img
                src="https://picsum.photos/seed/adrian/880/960"
                alt="Adrián Campanaro, consultor estratégico y asesor de liderazgo ejecutivo"
                className="w-full max-w-[440px] h-[480px] object-cover object-top rounded-2xl border border-line shadow-card bg-surface-alt"
              />
              <div className="absolute -bottom-4 left-6 bg-white px-5 py-3 rounded-lg border border-line shadow-subtle flex items-center gap-2.5 text-[13.5px] font-semibold text-ink-title">
                <span className="w-2.5 h-2.5 bg-wa-btn rounded-full" />
                Atención directa y personalizada por Adrián
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* SERVICIOS */}
      <Section alt id="servicios">
        <Container>
          <div className="text-center max-w-[680px] mx-auto mb-13">
            <h2 className="text-3xl md:text-4xl font-semibold mb-4">
              Servicios focalizados en el líder y su impacto
            </h2>
            <p>
              Tres áreas de intervención diseñadas específicamente para resolver
              los cuellos de botella que las metodologías rígidas no logran
              destrabar.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
            {services.map((s) => (
              <article
                key={s.slug}
                className="bg-surface-alt border border-line rounded-card p-9 flex flex-col transition-all hover:border-line-strong hover:shadow-subtle hover:-translate-y-0.5"
              >
                <span className="material-symbols-outlined text-brand text-5xl mb-5">
                  {s.icon}
                </span>
                <h3 className="text-xl font-semibold text-ink-title mb-3">
                  {s.title}
                </h3>
                <p className="text-[15.5px] grow mb-6">{s.description}</p>
                <Link
                  to="/contacto"
                  className="text-sm font-semibold text-accent inline-flex items-center gap-1.5 no-underline"
                >
                  Consultar por este servicio <span aria-hidden>→</span>
                </Link>
              </article>
            ))}
          </div>
        </Container>
      </Section>

      {/* POSICIONAMIENTO */}
      <Section className="bg-white border-y border-line">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-[34px] font-semibold mb-5">
                Liderazgo con Inteligencia Emocional
              </h2>
              <p className="text-[17px] mb-5">
                Te ayudamos a abordar los desafíos más profundos del liderazgo:
                desde conflictos personales hasta decisiones estratégicas.
              </p>
              <p className="text-[17px] mb-5">
                No trabajamos solo sobre la estructura del negocio, sino también
                sobre quien lo lidera. Las organizaciones no cambian por
                decretos ni organigramas: cambian cuando las personas que toman
                las decisiones modifican su forma de vincularse y percibir la
                realidad.
              </p>
              <Button to="/contacto" variant="secondary" className="mt-3">
                Conocer metodología de trabajo
              </Button>
            </div>

            <blockquote className="bg-surface-alt border-l-4 border-brand rounded-r-card p-10">
              <p className="text-[19px] italic text-ink-title leading-snug mb-4">
                "El límite de crecimiento de una empresa nunca es el mercado ni
                los procesos; casi siempre es la capacidad del propio dueño para
                gestionar su incertidumbre y sus relaciones clave."
              </p>
              <footer>
                <div className="text-[14.5px] font-semibold text-brand">
                  Adrián Campanaro
                </div>
                <div className="text-[13px] text-ink-body">
                  Consultor y Mentor Estratégico de Líderes
                </div>
              </footer>
            </blockquote>
          </div>
        </Container>
      </Section>

      {/* DIFERENCIA */}
      <Section alt>
        <Container>
          <div className="bg-white border border-line rounded-container p-14 max-w-[960px] mx-auto shadow-subtle">
            <div className="flex items-center gap-3.5 mb-5">
              <span className="material-symbols-outlined text-brand text-3xl">
                favorite
              </span>
              <h2 className="text-[30px] font-semibold">
                Lo que nos diferencia
              </h2>
            </div>
            <p className="text-lg leading-relaxed">
              En un mundo lleno de fórmulas rápidas y recetas enlatadas,
              nosotros elegimos acompañarte desde otro lugar. No nos enfocamos
              solo en los números, los procesos o las estructuras: trabajamos
              con vos, con tu historia, tus desafíos personales y la forma en
              que esos aspectos influyen directamente en tu empresa.
            </p>
          </div>
        </Container>
      </Section>

      {/* TESTIMONIOS */}
      <Section className="bg-white">
        <Container>
          <div className="text-center max-w-[650px] mx-auto mb-13">
            <h2 className="text-3xl md:text-4xl font-semibold mb-4">
              La experiencia de quienes ya dieron el paso
            </h2>
            <p>
              Dueños de empresas y directores que transformaron sus
              conversaciones difíciles en acuerdos sostenibles.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
            {testimonials.map((t) => (
              <article
                key={t.name}
                className="bg-white border border-line rounded-card p-8 shadow-subtle flex flex-col"
              >
                <div className="text-5xl leading-none font-serif text-brand/40 mb-2">
                  "
                </div>
                <p className="text-[15.5px] grow mb-6">{t.quote}</p>
                <div className="border-t border-line pt-4">
                  <div className="text-[15px] font-bold text-ink-title">
                    {t.name}
                  </div>
                  <div className="text-[13px] text-ink-body">{t.company}</div>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </Section>

      {/* CTA FINAL */}
      <section className="bg-brand-dark text-white py-22 text-center">
        <Container>
          <div className="max-w-[820px] mx-auto">
            <h2 className="text-3xl md:text-[34px] font-semibold text-white leading-snug mb-9">
              El crecimiento real comienza cuando el liderazgo se alinea con la
              persona que lo sostiene.
            </h2>
            <Button
              to="/contacto"
              variant="dark-cta"
              className="!text-sm !px-10 !py-4"
            >
              Agenda tu primer encuentro
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
