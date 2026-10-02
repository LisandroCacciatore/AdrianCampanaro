import { useState } from 'react';
import { Container, Section } from '../components/ui.jsx';
import { site } from '../data/site.js';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    nombre: '',
    apellido: '',
    email: '',
    telefono: '',
    mensaje: '',
  });

  const handleChange = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  // TODO(backend): hoy el formulario no envia nada, solo muestra el mensaje de
  // exito. Falta conectar un endpoint (Formspree, Netlify Forms, Resend, API
  // propia) antes de publicar. Ver README.
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <Section className="bg-white">
        <Container>
          <div className="max-w-3xl">
            <span className="eyebrow mb-4">Canal Confidencial & Directo</span>
            <h1 className="text-4xl md:text-5xl font-semibold mb-6">
              Contacto directo
            </h1>
            <p className="text-lg">
              Conversemos sobre los desafíos actuales de tu empresa. Sin
              intermediarios, con total confidencialidad y una respuesta
              personalizada.
            </p>
          </div>
        </Container>
      </Section>

      <Section alt>
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* FORMULARIO */}
            <div className="lg:col-span-7 bg-white p-8 md:p-10 rounded-xl shadow-sm border border-line">
              <div className="mb-8 pb-4 border-b border-line">
                <h2 className="text-xl font-semibold mb-1">
                  Enviá tu consulta ejecutiva
                </h2>
                <p className="text-sm text-ink-body">
                  Completá los campos para recibir un diagnóstico preliminar sin
                  compromiso.
                </p>
              </div>

              {submitted ? (
                <div
                  role="status"
                  className="p-5 bg-brand-soft rounded-lg text-sm flex items-start gap-3"
                >
                  <span className="material-symbols-outlined text-brand">
                    check_circle
                  </span>
                  <span>
                    Gracias por contactar. Tu mensaje fue recibido y recibirás
                    una respuesta directa en menos de 2 horas hábiles.
                  </span>
                </div>
              ) : (
                <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <Field
                      label="Nombre"
                      name="nombre"
                      value={form.nombre}
                      onChange={handleChange}
                      required
                    />
                    <Field
                      label="Apellido"
                      name="apellido"
                      value={form.apellido}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <Field
                    label="Correo electrónico"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="nombre@empresa.com"
                    required
                  />
                  <Field
                    label="Teléfono / WhatsApp (opcional)"
                    name="telefono"
                    type="tel"
                    value={form.telefono}
                    onChange={handleChange}
                    placeholder="+54 9 341 000 0000"
                  />

                  <div>
                    <label
                      htmlFor="mensaje"
                      className="block text-xs font-semibold text-ink-title mb-2"
                    >
                      Mensaje o motivo de la consulta{' '}
                      <span className="text-red-600">*</span>
                    </label>
                    <textarea
                      id="mensaje"
                      name="mensaje"
                      rows={5}
                      required
                      value={form.mensaje}
                      onChange={handleChange}
                      placeholder="Contanos brevemente qué situación o desafío estás atravesando..."
                      className="w-full bg-white text-ink-title placeholder:text-ink-muted/70 px-4 py-3 rounded-lg border border-line focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all resize-y"
                    />
                  </div>

                  <button type="submit" className="btn btn-primary w-full">
                    Enviar consulta
                    <span className="material-symbols-outlined text-sm">
                      arrow_forward
                    </span>
                  </button>

                  <p className="text-xs text-ink-muted flex items-start gap-2">
                    <span className="material-symbols-outlined text-sm">
                      shield
                    </span>
                    Tus datos son tratados bajo estricto secreto profesional y
                    confidencialidad.
                  </p>
                </form>
              )}
            </div>

            {/* INFO LATERAL */}
            <aside className="lg:col-span-5 flex flex-col gap-6">
              <div className="bg-surface-alt rounded-xl p-6 md:p-8 border border-brand/20">
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-10 h-10 rounded-full bg-wa-btn/20 flex items-center justify-center text-wa-icon">
                    <span className="material-symbols-outlined">chat</span>
                  </span>
                  <div>
                    <h3 className="font-semibold text-ink-title">
                      Atención directa por WhatsApp
                    </h3>
                    <span className="text-xs font-semibold text-wa-action flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-wa-btn animate-pulse" />
                      Disponible ahora
                    </span>
                  </div>
                </div>
                <p className="text-sm mb-6">
                  Para consultas inmediatas entre reuniones o coordinar una
                  llamada ejecutiva de 20 minutos sin formularios.
                </p>
                <a
                  href={`https://wa.me/${site.whatsapp}?text=${encodeURIComponent(
                    'Hola Adrián, vengo de la página de Contacto y quería consultarte por un tema de liderazgo en mi empresa.'
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-wa-btn hover:bg-[#1EBE5D] text-wa-icon font-semibold uppercase tracking-wider text-[13.5px] py-3.5 px-5 rounded-btn flex items-center justify-center gap-2 no-underline"
                >
                  Iniciar conversación directa
                  <span className="material-symbols-outlined text-base">
                    outgoing_mail
                  </span>
                </a>
              </div>

              <div className="bg-white rounded-xl p-6 md:p-8 shadow-sm border border-line">
                <h3 className="font-semibold text-ink-title pb-3 mb-5 border-b border-line">
                  Datos de contacto
                </h3>
                <ul className="list-none space-y-4">
                  <li className="flex items-start gap-4">
                    <span className="w-10 h-10 rounded-lg bg-surface-alt flex items-center justify-center text-brand shrink-0">
                      <span className="material-symbols-outlined">mail</span>
                    </span>
                    <div>
                      <span className="text-xs uppercase text-ink-muted font-semibold block">
                        Correo directo
                      </span>
                      <a
                        href={`mailto:${site.email}`}
                        className="text-accent font-medium no-underline"
                      >
                        {site.email}
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="w-10 h-10 rounded-lg bg-surface-alt flex items-center justify-center text-brand shrink-0">
                      <span className="material-symbols-outlined">call</span>
                    </span>
                    <div>
                      <span className="text-xs uppercase text-ink-muted font-semibold block">
                        Teléfono
                      </span>
                      <a
                        href={`tel:${site.phoneRaw}`}
                        className="text-accent font-medium no-underline"
                      >
                        {site.phone}
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="w-10 h-10 rounded-lg bg-surface-alt flex items-center justify-center text-brand shrink-0">
                      <span className="material-symbols-outlined">
                        location_on
                      </span>
                    </span>
                    <div>
                      <span className="text-xs uppercase text-ink-muted font-semibold block">
                        Sede y cobertura
                      </span>
                      <p className="text-sm">{site.location}</p>
                      <p className="text-xs text-ink-muted mt-0.5">
                        Atención presencial u online a toda Latinoamérica y
                        Europa.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </aside>
          </div>
        </Container>
      </Section>
    </>
  );
}

function Field({ label, name, type = 'text', required, ...rest }) {
  return (
    <div>
      <label
        htmlFor={name}
        className="block text-xs font-semibold text-ink-title mb-2"
      >
        {label} {required && <span className="text-red-600">*</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="w-full bg-white text-ink-title placeholder:text-ink-muted/70 px-4 py-3 rounded-lg border border-line focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all"
        {...rest}
      />
    </div>
  );
}
