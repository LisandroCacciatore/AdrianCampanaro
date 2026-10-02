import { Link } from 'react-router-dom';
import { nav, site } from '../data/site.js';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-line pt-16 pb-8">
      <div className="container-page">
        <div className="grid grid-cols-1 md:grid-cols-[1.4fr_1fr] gap-15 mb-12">
          <div>
            <div className="text-[13px] font-bold uppercase tracking-[0.08em] text-ink-title mb-4.5">
              Contacto
            </div>
            <ul className="list-none space-y-3">
              <li className="flex items-center gap-3 text-[15px] text-ink-body">
                <span className="material-symbols-outlined text-brand">
                  mail
                </span>
                <a
                  href={`mailto:${site.email}`}
                  className="text-ink-body font-medium hover:text-accent no-underline"
                >
                  {site.email}
                </a>
              </li>
              <li className="flex items-center gap-3 text-[15px] text-ink-body">
                <span className="material-symbols-outlined text-brand">
                  call
                </span>
                <a
                  href={`tel:${site.phoneRaw}`}
                  className="text-ink-body font-medium hover:text-accent no-underline"
                >
                  {site.phone}
                </a>
              </li>
              <li className="flex items-center gap-3 text-[15px] text-ink-body">
                <span className="material-symbols-outlined text-brand">
                  business_center
                </span>
                <a
                  href={site.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-ink-body font-medium hover:text-accent no-underline"
                >
                  LinkedIn / Adrian-Campanaro
                </a>
              </li>
            </ul>
          </div>

          <div>
            <div className="text-[13px] font-bold uppercase tracking-[0.08em] text-ink-title mb-4.5">
              Navegación
            </div>
            <ul className="list-none grid grid-cols-2 gap-3">
              {nav.map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    className="text-[15px] font-medium text-ink-body no-underline hover:text-ink-title"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-line pt-6 flex flex-col md:flex-row justify-between items-center gap-3 text-[13.5px] text-ink-muted">
          <div>
            Copyright © {new Date().getFullYear()} {site.name}. Todos los
            derechos reservados.
          </div>
          <div>{site.tagline}</div>
        </div>
      </div>
    </footer>
  );
}
