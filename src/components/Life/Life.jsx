import { ExternalLink } from 'lucide-react';
import { lifeConfig } from '../../config/lifeConfig';
import { heroConfig } from '../../config/heroConfig';

export default function Life() {
  const socials = Object.values(heroConfig.social || {});

  return (
    <section className="w-full px-6 pb-6 pt-16 md:px-12 md:pt-20 md:pb-8">
      <div className="mx-auto max-w-6xl p-2 md:p-4">
        <div className="mb-12 flex flex-wrap justify-center gap-4">
          {lifeConfig.cta?.playWithMe && (
            <a
              href={lifeConfig.cta.playWithMe.href}
              className="rounded-2xl border border-white/30 bg-white/10 px-10 py-4 text-base font-semibold tracking-wide text-white transition hover:bg-white/15"
              target="_blank"
              rel="noopener noreferrer"
            >
              Book a call →
            </a>
          )}
          {lifeConfig.cta?.hireMe && (
            <a
              href={lifeConfig.cta.hireMe.href}
              className="rounded-2xl border border-violet-300/70 bg-violet-500/30 px-10 py-4 text-base font-semibold tracking-wide text-white transition hover:bg-violet-500/40"
              target="_blank"
              rel="noopener noreferrer"
            >
              {lifeConfig.cta.hireMe.label} →
            </a>
          )}
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-10">
          <div className="w-full space-y-4 text-sm text-zinc-300">
            <div>
              <p className="text-zinc-500">Email</p>
              <a className="text-base text-zinc-100 transition hover:text-violet-300" href={`mailto:${heroConfig.contact?.email}`}>
                {heroConfig.contact?.email}
              </a>
            </div>
            <div>
              <p className="text-zinc-500">Location</p>
              <p className="text-base text-zinc-100">{heroConfig.contact?.location}</p>
            </div>
          </div>

          <div className="w-full">
            <p className="mb-3 text-zinc-500">Social</p>
            <ul className="space-y-2">
              {socials.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.url}
                    target={item.url.startsWith('mailto:') ? '_self' : '_blank'}
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 border-b border-white/20 pb-2 text-2xl text-zinc-100 transition hover:text-violet-300"
                  >
                    <span>{item.label}</span>
                    <ExternalLink size={18} />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="w-full flex flex-col justify-between">
            <div className="text-zinc-200">
              <p className="text-3xl leading-tight">
                Designed and Developed
                <br />
                by{' '}
                <span className="gradient-text">
                  {lifeConfig.footer?.designedBy ?? heroConfig.name}
                </span>
              </p>
              <p className="mt-4 text-sm text-zinc-500">© {lifeConfig.footer?.year ?? new Date().getFullYear()}</p>
            </div>
            <a
              href={heroConfig.resumeUrl}
              download={heroConfig.resumeFileName}
              className="mt-8 inline-flex w-fit rounded-full border border-white/20 px-5 py-2 text-xs uppercase tracking-[0.18em] text-zinc-200 transition hover:bg-white/10"
            >
              Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
