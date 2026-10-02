import { Link } from 'react-router-dom';
import { useMemo, useState } from 'react';
import { blogPosts } from '../data/blog.js';
import { Container, Section } from '../components/ui.jsx';

const categories = [
  { id: 'all', label: 'Todos' },
  { id: 'Psicoanálisis & Empresa', label: 'Psicoanálisis & Empresa' },
  { id: 'Toma de Decisiones', label: 'Toma de Decisiones' },
  { id: 'Gestión del Cambio & Control', label: 'Gestión del Cambio' },
  { id: 'Vínculos & Empresas Familiares', label: 'Empresas Familiares' },
];

export default function Blog() {
  const [filter, setFilter] = useState('all');

  const filtered = useMemo(
    () =>
      filter === 'all'
        ? blogPosts
        : blogPosts.filter((p) => p.category === filter),
    [filter]
  );

  return (
    <>
      <Section className="bg-white">
        <Container>
          <div className="max-w-3xl">
            <span className="eyebrow mb-4">Blog & Publicaciones</span>
            <h1 className="text-4xl md:text-5xl font-semibold mb-6">
              Artículos y reflexiones sobre liderazgo, inconsciente y dinámica
              empresarial
            </h1>
            <p className="text-lg">
              Perspectivas profundas para directores, dueños de empresas y CEOs
              que buscan entender los factores invisibles que condicionan las
              decisiones clave.
            </p>
          </div>

          <div
            role="toolbar"
            aria-label="Filtros por temáticas"
            className="mt-10 flex flex-wrap gap-2.5"
          >
            {categories.map((c) => {
              const active = filter === c.id;
              return (
                <button
                  key={c.id}
                  onClick={() => setFilter(c.id)}
                  aria-pressed={active}
                  className={`px-5 py-2.5 rounded text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer ${
                    active
                      ? 'bg-brand text-white'
                      : 'bg-surface-alt text-ink-body hover:bg-surface-muted hover:text-ink-title'
                  }`}
                >
                  {c.label}
                </button>
              );
            })}
          </div>
        </Container>
      </Section>

      <Section alt>
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((post) => (
              <article
                key={post.slug}
                className="bg-white rounded-xl overflow-hidden shadow-sm flex flex-col transition-all hover:shadow-md hover:-translate-y-1"
              >
                <Link to={`/blog/${post.slug}`} className="block">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full aspect-[16/10] object-cover"
                  />
                </Link>
                <div className="p-6 flex flex-col grow">
                  <span className="text-xs uppercase tracking-wider font-semibold text-brand mb-3">
                    {post.category}
                  </span>
                  <h3 className="text-lg font-semibold text-ink-title mb-3">
                    <Link
                      to={`/blog/${post.slug}`}
                      className="text-ink-title no-underline hover:text-brand"
                    >
                      {post.title}
                    </Link>
                  </h3>
                  <p className="text-sm text-ink-body grow mb-6">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between pt-4 border-t border-line">
                    <span className="text-xs text-ink-muted flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-[16px]">
                        schedule
                      </span>
                      {post.readingTime}
                    </span>
                    <Link
                      to={`/blog/${post.slug}`}
                      className="text-xs uppercase tracking-wider font-semibold text-accent inline-flex items-center gap-1 no-underline"
                    >
                      Leer artículo <span aria-hidden>→</span>
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
