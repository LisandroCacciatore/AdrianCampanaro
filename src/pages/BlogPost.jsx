import { Link, useParams } from 'react-router-dom';
import { blogPosts } from '../data/blog.js';
import { Button, Container } from '../components/ui.jsx';

export default function BlogPost() {
  const { slug } = useParams();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <Container className="py-20 text-center">
        <h1 className="text-3xl font-semibold mb-4">Artículo no encontrado</h1>
        <Link to="/blog" className="text-accent font-semibold no-underline">
          ← Volver al blog
        </Link>
      </Container>
    );
  }

  return (
    <article className="py-16">
      <Container>
        <div className="max-w-3xl mx-auto">
          <Link
            to="/blog"
            className="text-sm font-semibold text-accent no-underline mb-6 inline-block"
          >
            ← Volver al blog
          </Link>

          <span className="eyebrow mb-4">{post.category}</span>
          <h1 className="text-4xl md:text-5xl font-semibold mb-6">
            {post.title}
          </h1>
          <div className="flex items-center gap-4 text-sm text-ink-muted mb-10 pb-6 border-b border-line">
            <span className="flex items-center gap-1.5">
              <span className="material-symbols-outlined text-[18px]">
                person
              </span>
              Por Adrián Campanaro
            </span>
            <span>·</span>
            <span className="flex items-center gap-1.5">
              <span className="material-symbols-outlined text-[18px]">
                schedule
              </span>
              {post.readingTime} de lectura
            </span>
          </div>

          <img
            src={post.image}
            alt={post.title}
            className="w-full aspect-[16/9] object-cover rounded-xl mb-10"
          />

          {/* TODO(contenido real): este cuerpo es provisorio y hoy es identico
              para los cuatro articulos. Reemplazar por el texto de cada nota. */}
          <div className="prose prose-lg max-w-none text-ink-body leading-relaxed">
            <p className="text-lg mb-6">{post.excerpt}</p>
            <p className="mb-6">
              En el ejercicio empresarial, el control representa mucho más que
              una función administrativa: es una extensión del yo y una fantasía
              de predictibilidad que, mal canalizada, congela a la organización.
            </p>
            <p className="mb-6">
              Este artículo explora cómo las dinámicas inconscientes condicionan
              las decisiones clave en los directorios, y ofrece herramientas
              concretas para desactivar esos bloqueos.
            </p>

            <blockquote className="border-l-4 border-brand bg-surface-alt p-6 my-8 italic text-ink-title">
              "El síntoma organizacional casi nunca reside donde la empresa cree
              que está fallando."
            </blockquote>

            <p className="mb-6">
              Si querés profundizar en este tema aplicado a tu propia empresa,
              podés agendar una primera conversación confidencial.
            </p>
          </div>

          <div className="mt-12 p-8 bg-surface-alt rounded-xl text-center">
            <h3 className="text-xl font-semibold mb-3">
              ¿Querés debatir estos temas aplicados a tu empresa?
            </h3>
            <p className="text-ink-body mb-6">
              La consultoría estratégica con enfoque humano propone un espacio
              confidencial, sin recetas rígidas.
            </p>
            <Button to="/contacto">Conversar con Adrián</Button>
          </div>
        </div>
      </Container>
    </article>
  );
}
