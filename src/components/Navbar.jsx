import { Link, NavLink } from 'react-router-dom';
import { nav, site } from '../data/site.js';
import { Button } from './ui.jsx';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-line h-[76px] flex items-center">
      <div className="container-page flex items-center justify-between w-full">
        <Link
          to="/"
          className="flex items-center gap-2.5 no-underline"
          aria-label={`${site.name} - Consultor Estratégico`}
        >
          <span className="w-8 h-8 rounded bg-brand text-white flex items-center justify-center text-sm font-bold">
            AC
          </span>
          <span className="text-lg font-bold tracking-[0.08em] text-ink-title">
            ADRIÁN CAMPANARO
          </span>
        </Link>

        <nav aria-label="Navegación principal">
          <ul className="hidden md:flex items-center gap-8 list-none">
            {nav.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  className={({ isActive }) =>
                    `text-[15px] no-underline transition-colors ${
                      isActive
                        ? 'text-ink-title font-semibold'
                        : 'text-ink-body font-medium hover:text-ink-title'
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <Button
          to="/contacto"
          className="!px-5 !py-2.5 !min-h-[42px] !text-[12.5px]"
        >
          Consultar
        </Button>
      </div>
    </header>
  );
}
