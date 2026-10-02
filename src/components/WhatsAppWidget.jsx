import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { site, waMessages } from '../data/site.js';

export default function WhatsAppWidget() {
  const [open, setOpen] = useState(true);
  const { pathname } = useLocation();

  const message =
    waMessages[pathname] ||
    'Hola Adrián, vengo del sitio web y quería consultarte por un tema de liderazgo en mi empresa.';
  const waHref = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <aside
      aria-label="Contacto directo por WhatsApp"
      className="fixed bottom-6 right-7 z-[9999] flex flex-col items-end"
    >
      {open && (
        <div
          className="w-[290px] bg-white rounded-xl shadow-widget border border-line overflow-hidden mb-3.5"
          style={{ animation: 'waSlideUp 0.3s cubic-bezier(0.16, 1, 0.3, 1)' }}
        >
          <div className="bg-wa-header p-4 text-white flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-white text-wa-header font-bold flex items-center justify-center text-sm shrink-0">
              AC
            </div>
            <div className="grow">
              <div className="text-[14.5px] font-bold leading-tight">
                {site.name}
              </div>
              <div className="text-[12px] text-[#E0F2F1] flex items-center gap-1.5 mt-0.5">
                <span className="w-[7px] h-[7px] bg-wa-btn rounded-full" />
                <span>Responde en el día</span>
              </div>
            </div>
          </div>

          <div
            className="p-4"
            style={{
              backgroundColor: '#E5DDD5',
              backgroundImage:
                'radial-gradient(rgba(0,0,0,0.05) 1px, transparent 0)',
              backgroundSize: '12px 12px',
            }}
          >
            <div className="bg-white rounded-tl-none rounded-tr-[10px] rounded-br-[10px] rounded-bl-[10px] px-3.5 py-3 text-[13.5px] leading-snug text-ink-title shadow-sm">
              {message}
              <div className="text-[11px] text-[#8C9BA5] text-right mt-1">
                En línea
              </div>
            </div>
          </div>

          <div className="p-3 bg-white border-t border-[#ECECEC]">
            <a
              href={waHref}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full bg-wa-action hover:bg-wa-actionHover text-white !text-[13.5px] font-semibold py-3 rounded-btn min-h-[44px] no-underline"
            >
              Abrir WhatsApp
            </a>
          </div>
        </div>
      )}

      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label="Contactar a Adrián Campanaro directamente por WhatsApp"
        aria-expanded={open}
        title="Contactar por WhatsApp"
        className="w-14 h-14 bg-wa-btn rounded-full flex items-center justify-center shadow-[0_4px_14px_rgba(0,0,0,0.2)] transition-transform hover:scale-105 cursor-pointer border-none"
      >
        <svg
          className="w-[30px] h-[30px]"
          viewBox="0 0 24 24"
          aria-hidden="true"
          fill="#0B3B2E"
        >
          <path d="M19.05 4.91A9.816 9.816 0 0 0 12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01zm-7.01 15.24c-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.19 8.19 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.25-8.24 2.2 0 4.27.86 5.82 2.42a8.18 8.18 0 0 1 2.41 5.83c.02 4.54-3.68 8.23-8.23 8.23zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.12-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-1.99-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.02-.38.11-.51.11-.11.25-.29.37-.43.12-.14.17-.25.25-.41.08-.17.04-.31-.02-.43s-.56-1.34-.76-1.84c-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31-.22.25-.86.84-.86 2.05s.88 2.38 1 2.55c.13.17 1.74 2.65 4.21 3.72.59.25 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.15-1.18-.07-.12-.23-.19-.48-.31z" />
        </svg>
      </button>

      <style>{`
        @keyframes waSlideUp {
          from { opacity: 0; transform: translateY(12px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </aside>
  );
}
