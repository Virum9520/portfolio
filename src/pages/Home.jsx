import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { site, experience, publications, education, skills } from '../data/site';
import { projects, moreProjects } from '../data/projects';

function SectionHeading({ id, children }) {
  return (
    <h2 id={id} className="section-label scroll-mt-20 pb-5">
      {children}
    </h2>
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
    <div>
      {/* Intro */}
      <section className="pb-12 pt-12 sm:pt-16">
        <h1 className="font-serif text-[2.1rem] font-medium leading-tight tracking-tight sm:text-[2.5rem]">
          {site.name}
        </h1>
        <p className="mt-2 font-mono text-[0.8rem] tracking-wide text-accent">
          {site.headline}
        </p>
        <p className="mt-5 max-w-[36rem] text-ink-soft">{site.intro}</p>
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
          <span className="text-ink-faint">{site.location}</span>
        </p>
      </section>

      {/* Experience */}
      <section className="border-t border-rule py-12">
        <SectionHeading id="experience">Experience</SectionHeading>
        <div className="flex flex-col gap-10">
          {experience.map((job) => (
            <article key={job.id}>
              <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                <h3 className="text-[1rem] font-semibold">
                  {job.role} · {job.company}
                </h3>
                <span className="font-mono text-[0.72rem] text-ink-faint">{job.dates}</span>
              </div>
              <p className="mt-2 text-ink-soft">{job.summary}</p>
              <ul className="mt-2 flex list-disc flex-col gap-1 pl-5 text-[0.9rem] text-ink-soft marker:text-ink-faint">
                {job.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
              <p className="mt-2.5 font-mono text-[0.7rem] text-ink-faint">
                {job.tags.join(' · ')}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* Publications */}
      <section className="border-t border-rule py-12">
        <SectionHeading id="publications">Publications</SectionHeading>
        <div className="flex flex-col gap-8">
          {publications.map((pub) => (
            <article key={pub.id}>
              <h3 className="font-serif text-[1.05rem] font-medium leading-snug">
                <a href={pub.link} target="_blank" rel="noreferrer" className="hover:text-accent">
                  {pub.title}
                </a>
              </h3>
              <p className="mt-1 text-[0.85rem] text-ink-faint">
                {pub.authors} — {pub.venue}
              </p>
              <p className="mt-1.5 text-[0.9rem] text-ink-soft">{pub.note}</p>
              <a
                href={pub.link}
                target="_blank"
                rel="noreferrer"
                className="prose-link mt-1 inline-block font-mono text-[0.72rem]"
              >
                {pub.linkLabel}
              </a>
            </article>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section className="border-t border-rule py-12">
        <SectionHeading id="projects">Projects</SectionHeading>
        <div className="flex flex-col gap-9">
          {projects.map((p) => (
            <article key={p.slug}>
              <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                <h3 className="text-[1rem] font-semibold">
                  <Link to={`/projects/${p.slug}`} className="hover:text-accent">
                    {p.title}
                  </Link>
                </h3>
                <span className="font-mono text-[0.72rem] text-ink-faint">{p.year}</span>
              </div>
              <p className="mt-1.5 text-[0.92rem] text-ink-soft">{p.oneLiner}</p>
              <p className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-[0.82rem]">
                <Link to={`/projects/${p.slug}`} className="prose-link">
                  Read more
                </Link>
                {p.github && (
                  <a href={p.github} target="_blank" rel="noreferrer" className="prose-link">
                    GitHub
                  </a>
                )}
                {p.live && (
                  <a href={p.live} target="_blank" rel="noreferrer" className="prose-link">
                    Live demo
                  </a>
                )}
                <span className="font-mono text-[0.7rem] text-ink-faint">
                  {p.stack.join(' · ')}
                </span>
              </p>
            </article>
          ))}
        </div>

        <div className="mt-10 border-t border-rule pt-6">
          <p className="text-[0.85rem] text-ink-faint">More on GitHub:</p>
          <ul className="mt-2 flex flex-col gap-1.5 text-[0.88rem]">
            {moreProjects.map((p) => (
              <li key={p.title}>
                <a href={p.github} target="_blank" rel="noreferrer" className="prose-link">
                  {p.title}
                </a>{' '}
                <span className="text-ink-soft">— {p.note}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Education */}
      <section className="border-t border-rule py-12">
        <SectionHeading id="education">Education</SectionHeading>
        <div className="flex flex-col gap-6">
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

      {/* Skills */}
      <section className="border-t border-rule py-12">
        <SectionHeading id="skills">Skills</SectionHeading>
        <dl className="flex flex-col gap-3">
          {skills.map((s) => (
            <div key={s.group} className="sm:grid sm:grid-cols-[9rem_1fr] sm:gap-4">
              <dt className="text-[0.85rem] font-semibold">{s.group}</dt>
              <dd className="m-0 text-[0.88rem] text-ink-soft">{s.items}</dd>
            </div>
          ))}
        </dl>
      </section>

      {/* Contact */}
      <section className="border-t border-rule py-12">
        <SectionHeading id="contact">Contact</SectionHeading>
        <p className="max-w-[34rem] text-ink-soft">
          The fastest way to reach me is email —{' '}
          <a href={`mailto:${site.email}`} className="prose-link">
            {site.email}
          </a>
          . I read everything. Also on{' '}
          <a href={site.linkedin} target="_blank" rel="noreferrer" className="prose-link">
            LinkedIn
          </a>
          .
        </p>
      </section>
    </div>
  );
}

export default Home;
