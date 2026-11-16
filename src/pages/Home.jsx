import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { site, education, skills } from '../data/site';
import { experience } from '../data/experience';
import { publications } from '../data/publications';
import { projects, moreProjects } from '../data/projects';

function Row({ to, title, meta, blurb }) {
  return (
    <Link
      to={to}
      className="group -mx-3 block rounded-md px-3 py-3.5 transition-colors hover:bg-[#f1efe9]"
    >
      <div className="flex flex-wrap items-baseline justify-between gap-x-4">
        <h3 className="text-[0.98rem] font-semibold group-hover:text-accent">{title}</h3>
        {meta && <span className="font-mono text-[0.72rem] text-ink-faint">{meta}</span>}
      </div>
      <p className="mt-1 text-[0.9rem] text-ink-soft">{blurb}</p>
      <p className="mt-1.5 text-[0.8rem] text-accent opacity-70 transition-opacity group-hover:opacity-100">
        Full write-up →
      </p>
    </Link>
  );
}

function Home() {
  const location = useLocation();

  useEffect(() => {
    const target = location.state?.scrollTo;
    if (target) {
      document.getElementById(target)?.scrollIntoView({ block: 'start' });
      window.history.replaceState({}, '');
    }
  }, [location.state]);

  return (
    <div className="mx-auto min-h-screen w-full max-w-[96rem] px-6 sm:px-10 lg:grid lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-x-20 xl:px-16">
      {/* Left: identity + publications (sticky on desktop) */}
      <aside className="flex flex-col pb-6 pt-12 lg:sticky lg:top-0 lg:h-screen lg:justify-between lg:overflow-y-auto lg:pb-14 lg:pt-20">
        <div>
          <h1 className="font-serif text-[2.4rem] font-medium leading-tight tracking-tight sm:text-[3rem]">
            {site.name}
          </h1>
          <p className="mt-3 font-mono text-[0.8rem] tracking-wide text-accent">{site.headline}</p>
          <p className="mt-5 max-w-[30rem] text-ink-soft">{site.intro}</p>
          <p className="mt-5 flex flex-wrap gap-x-5 gap-y-1 text-[0.85rem]">
            <a href={`mailto:${site.email}`} className="prose-link">
              {site.email}
            </a>
            <a href={site.github} target="_blank" rel="noreferrer" className="prose-link">
              GitHub
            </a>
            <a href={site.linkedin} target="_blank" rel="noreferrer" className="prose-link">
              LinkedIn
            </a>
            <a href={site.resumeUrl} target="_blank" rel="noreferrer" className="prose-link">
              Résumé (PDF)
            </a>
          </p>

          <section id="publications" className="mt-12 border-t border-rule pt-8">
            <h2 className="section-label pb-4">Publications</h2>
            <div className="flex flex-col gap-1">
              {publications.map((pub) => (
                <Link
                  key={pub.id}
                  to={`/publications/${pub.id}`}
                  className="group -mx-3 block rounded-md px-3 py-3 transition-colors hover:bg-[#f1efe9]"
                >
                  <h3 className="font-serif text-[1rem] font-medium leading-snug group-hover:text-accent">
                    {pub.title}
                  </h3>
                  <p className="mt-1 font-mono text-[0.7rem] text-ink-faint">{pub.venueShort}</p>
                  <p className="mt-1.5 text-[0.85rem] text-ink-soft">{pub.oneLiner}</p>
                  <p className="mt-1.5 text-[0.8rem] text-accent opacity-70 transition-opacity group-hover:opacity-100">
                    Full write-up →
                  </p>
                </Link>
              ))}
            </div>
          </section>
        </div>

        <p className="mt-10 hidden text-[0.78rem] text-ink-faint lg:block">
          Click any item for the full story. · © {new Date().getFullYear()} Virum Ranka ·{' '}
          {site.location}
        </p>
      </aside>

      {/* Right: scrolling content */}
      <main className="pb-14 pt-4 lg:pt-20">
        <p className="mb-2 text-[0.85rem] italic text-ink-faint lg:hidden">
          Click any item for the full story.
        </p>

        <section id="experience" className="scroll-mt-8 border-t border-rule pt-8 lg:border-t-0 lg:pt-0">
          <h2 className="section-label pb-4">Experience</h2>
          <div className="flex flex-col gap-1">
            {experience.map((job) => (
              <Row
                key={job.id}
                to={`/experience/${job.id}`}
                title={`${job.role} · ${job.company}`}
                meta={job.dates}
                blurb={job.oneLiner}
              />
            ))}
          </div>
        </section>

        <section id="projects" className="mt-12 scroll-mt-8 border-t border-rule pt-8">
          <h2 className="section-label pb-4">Projects</h2>
          <div className="flex flex-col gap-1">
            {projects.map((p) => (
              <Row key={p.slug} to={`/projects/${p.slug}`} title={p.title} meta={p.year} blurb={p.oneLiner} />
            ))}
          </div>
          <p className="mt-4 text-[0.85rem] text-ink-faint">
            More on{' '}
            <a href={site.github} target="_blank" rel="noreferrer" className="prose-link">
              GitHub
            </a>
            :{' '}
            {moreProjects.map((p, i) => (
              <span key={p.title}>
                <a href={p.github} target="_blank" rel="noreferrer" className="prose-link">
                  {p.title}
                </a>
                {i < moreProjects.length - 1 ? ' · ' : ''}
              </span>
            ))}
          </p>
        </section>

        <section id="education" className="mt-12 scroll-mt-8 border-t border-rule pt-8">
          <h2 className="section-label pb-4">Education</h2>
          <div className="flex flex-col gap-5">
            {education.map((edu) => (
              <article key={edu.id}>
                <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                  <h3 className="text-[0.95rem] font-semibold">{edu.school}</h3>
                  <span className="font-mono text-[0.72rem] text-ink-faint">{edu.dates}</span>
                </div>
                <p className="mt-0.5 text-[0.9rem] text-ink-soft">{edu.degree}</p>
                <p className="mt-0.5 text-[0.82rem] text-ink-faint">{edu.detail}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="skills" className="mt-12 scroll-mt-8 border-t border-rule pt-8">
          <h2 className="section-label pb-4">Skills</h2>
          <dl className="flex flex-col gap-3">
            {skills.map((s) => (
              <div key={s.group} className="sm:grid sm:grid-cols-[9rem_1fr] sm:gap-4">
                <dt className="text-[0.85rem] font-semibold">{s.group}</dt>
                <dd className="m-0 text-[0.88rem] text-ink-soft">{s.items}</dd>
              </div>
            ))}
          </dl>
        </section>

        <p className="mt-12 border-t border-rule pt-6 text-[0.82rem] text-ink-faint lg:hidden">
          © {new Date().getFullYear()} Virum Ranka · {site.location} ·{' '}
          <a href={`mailto:${site.email}`} className="prose-link">
            {site.email}
          </a>
        </p>
      </main>
    </div>
  );
}

export default Home;
