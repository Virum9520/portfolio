import { useEffect } from 'react';
import { Link, useParams, Navigate } from 'react-router-dom';
import { publications } from '../data/publications';

function PublicationPage() {
  const { id } = useParams();
  const pub = publications.find((p) => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!pub) {
    return <Navigate to="/" replace />;
  }

  return (
    <article className="py-12 sm:py-16">
      <Link to="/" className="prose-link text-[0.85rem]">
        ← Back to home
      </Link>

      <p className="section-label mt-8">Publication</p>
      <h1 className="mt-2 font-serif text-[1.7rem] font-medium leading-tight tracking-tight sm:text-[2rem]">
        {pub.title}
      </h1>
      <p className="mt-3 text-[0.9rem] text-ink-faint">
        {pub.authors} — {pub.venue}
      </p>
      <p className="mt-2 border-b border-rule pb-6">
        <a
          href={pub.link}
          target="_blank"
          rel="noreferrer"
          className="prose-link font-mono text-[0.75rem]"
        >
          {pub.linkLabel}
        </a>
      </p>

      <section className="mt-8">
        <h2 className="section-label pb-4">About this paper</h2>
        <div className="flex max-w-[38rem] flex-col gap-4">
          {pub.writeup.map((para) => (
            <p key={para.slice(0, 40)} className="text-ink-soft">
              {para}
            </p>
          ))}
        </div>
      </section>

      <p className="mt-12 border-t border-rule pt-6 text-[0.85rem]">
        <Link to="/" className="prose-link">
          ← Back to home
        </Link>
      </p>
    </article>
  );
}

export default PublicationPage;
