import { useEffect } from 'react';
import { Link, useParams, Navigate } from 'react-router-dom';
import { experience } from '../data/experience';

function ExperiencePage() {
  const { id } = useParams();
  const job = experience.find((j) => j.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!job) {
    return <Navigate to="/" replace />;
  }

  return (
    <article className="py-12 sm:py-16">
      <Link to="/" className="prose-link text-[0.85rem]">
        ← Back to home
      </Link>

      <p className="section-label mt-8">Experience</p>
      <h1 className="mt-2 font-serif text-[1.9rem] font-medium leading-tight tracking-tight sm:text-[2.2rem]">
        {job.role} · {job.company}
      </h1>
      <p className="mt-3 border-b border-rule pb-6 font-mono text-[0.75rem] text-ink-faint">
        {job.dates} · {job.location}
      </p>

      <section className="mt-8">
        <h2 className="section-label pb-4">Highlights</h2>
        <ul className="flex list-disc flex-col gap-1.5 pl-5 text-[0.92rem] text-ink-soft marker:text-ink-faint">
          {job.highlights.map((h) => (
            <li key={h}>{h}</li>
          ))}
        </ul>
      </section>

      <section className="mt-10">
        <h2 className="section-label pb-4">The work</h2>
        <div className="flex max-w-[38rem] flex-col gap-4">
          {job.writeup.map((para) => (
            <p key={para.slice(0, 40)} className="text-ink-soft">
              {para}
            </p>
          ))}
        </div>
      </section>

      <p className="mt-8 font-mono text-[0.72rem] text-ink-faint">{job.tags.join(' · ')}</p>

      <p className="mt-12 border-t border-rule pt-6 text-[0.85rem]">
        <Link to="/" className="prose-link">
          ← Back to home
        </Link>
      </p>
    </article>
  );
}

export default ExperiencePage;
