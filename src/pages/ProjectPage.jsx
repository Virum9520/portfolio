import { useEffect } from 'react';
import { Link, useParams, Navigate } from 'react-router-dom';
import { projects } from '../data/projects';

function ProjectPage() {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!project) {
    return <Navigate to="/" replace />;
  }

  return (
    <article className="py-12 sm:py-16">
      <Link to="/" className="prose-link text-[0.85rem]">
        ← Back to home
      </Link>

      <h1 className="mt-6 font-serif text-[1.9rem] font-medium leading-tight tracking-tight sm:text-[2.2rem]">
        {project.title}
      </h1>
      <p className="mt-3 text-ink-soft">{project.oneLiner}</p>

      <p className="mt-4 flex flex-wrap items-baseline gap-x-5 gap-y-1 border-b border-rule pb-6 text-[0.85rem]">
        {project.github && (
          <a href={project.github} target="_blank" rel="noreferrer" className="prose-link">
            View on GitHub
          </a>
        )}
        {project.live && (
          <a href={project.live} target="_blank" rel="noreferrer" className="prose-link">
            Live demo
          </a>
        )}
        <span className="font-mono text-[0.72rem] text-ink-faint">
          {project.year} · {project.stack.join(' · ')}
        </span>
      </p>

      <section className="mt-8">
        <h2 className="section-label pb-4">Highlights</h2>
        <ul className="flex list-disc flex-col gap-1.5 pl-5 text-[0.92rem] text-ink-soft marker:text-ink-faint">
          {project.highlights.map((h) => (
            <li key={h}>{h}</li>
          ))}
        </ul>
      </section>

      <section className="mt-10">
        <h2 className="section-label pb-4">About this project</h2>
        <div className="flex max-w-[38rem] flex-col gap-4">
          {project.writeup.map((para) => (
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

export default ProjectPage;
