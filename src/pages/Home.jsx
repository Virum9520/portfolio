import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { site, education, skills } from '../data/site';
import { experience } from '../data/experience';
import { publications } from '../data/publications';
import { projects, moreProjects } from '../data/projects';

function SectionHeading({ id, children }) {
  return (
    <h2 id={id} className="section-label scroll-mt-20 pb-5">
      {children}
    </h2>
  );
}

function OverviewRow({ to, title, meta, blurb }) {
  return (
    <Link to={to} className="group -mx-3 block rounded-md px-3 py-3 transition-colors hover:bg-[#f1efe9]">
      <div className="flex flex-wrap items-baseline justify-between gap-x-4">
        <h3 className="text-[0.98rem] font-semibold group-hover:text-accent">{title}</h3>
        {meta && <span className="font-mono text-[0.72rem] text-ink-faint">{meta}</span>}
      </div>
      <p className="mt-1 text-[0.9rem] text-ink-soft">{blurb}</p>
      <p className="mt-1.5 text-[0.8rem] text-accent opacity-70 transition-opacity group-hover:opacity-100">
        Read more →
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
    <div>
      {/* Intro */}
      <section className="pb-12 pt-12 sm:pt-16">
        <h1 className="font-serif text-[2.1rem] font-medium leading-tight tracking-tight sm:text-[2.5rem]">
          {site.name}
        </h1>
        <p className="mt-2 font-mono text-[0.8rem] tracking-wide text-accent">{site.headline}</p>
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

      {/* Experience overview */}
      <section className="border-t border-rule py-10">
        <SectionHeading id="experience">Experience</SectionHeading>
        <div className="flex flex-col gap-1">
          {experience.map((job) => (
            <OverviewRow
              key={job.id}
              to={`/experience/${job.id}`}
              title={`${job.role} · ${job.company}`}
              meta={job.dates}
              blurb={job.oneLiner}
            />
          ))}
        </div>
      </section>

      {/* Publications overview */}
      <section className="border-t border-rule py-10">
        <SectionHeading id="publications">Publications</SectionHeading>
        <div className="flex flex-col gap-1">
          {publications.map((pub) => (
            <OverviewRow
              key={pub.id}
              to={`/publications/${pub.id}`}
              title={pub.title}
              meta={pub.venueShort}
              blurb={pub.oneLiner}
            />
          ))}
        </div>
      </section>

      {/* Projects overview */}
      <section className="border-t border-rule py-10">
        <SectionHeading id="projects">Projects</SectionHeading>
        <div className="flex flex-col gap-1">
          {projects.map((p) => (
            <OverviewRow
              key={p.slug}
              to={`/projects/${p.slug}`}
              title={p.title}
              meta={p.year}
              blurb={p.oneLiner}
            />
          ))}
        </div>
        <p className="mt-4 px-0 text-[0.85rem] text-ink-faint">
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

      {/* Education */}
      <section className="border-t border-rule py-10">
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
      <section className="border-t border-rule py-10">
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
      <section className="border-t border-rule py-10">
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
