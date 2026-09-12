import { Outlet, Link, useLocation } from 'react-router-dom';
import { site } from '../data/site';

function Layout() {
  const location = useLocation();
  const isHome = location.pathname === '/';

  if (isHome) {
    return <Outlet />;
  }

  return (
    <div className="mx-auto flex min-h-screen w-full max-w-[46rem] flex-col px-5 sm:px-6">
      <header className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 border-b border-rule py-5">
        <Link to="/" className="font-serif text-[1.05rem] font-medium tracking-tight hover:text-accent">
          Virum Ranka
        </Link>
        <nav className="flex flex-wrap items-baseline gap-x-4 gap-y-1 text-[0.82rem] text-ink-soft sm:gap-x-6">
          <Link to="/" state={{ scrollTo: 'experience' }} className="hover:text-accent">
            Experience
          </Link>
          <Link to="/" state={{ scrollTo: 'projects' }} className="hover:text-accent">
            Projects
          </Link>
          <Link to="/" state={{ scrollTo: 'publications' }} className="hover:text-accent">
            Publications
          </Link>
          <a href={site.resumeUrl} target="_blank" rel="noreferrer" className="hover:text-accent">
            Résumé
          </a>
        </nav>
      </header>

      <main className="flex-1">
        <Outlet />
      </main>

      <footer className="border-t border-rule py-8 text-[0.82rem] text-ink-faint">
        <div className="flex flex-wrap items-baseline justify-between gap-3">
          <span>© {new Date().getFullYear()} Virum Ranka</span>
          <span className="flex gap-4">
            <a href={`mailto:${site.email}`} className="hover:text-accent">
              {site.email}
            </a>
            <a href={site.github} target="_blank" rel="noreferrer" className="hover:text-accent">
              GitHub
            </a>
            <a href={site.linkedin} target="_blank" rel="noreferrer" className="hover:text-accent">
              LinkedIn
            </a>
          </span>
        </div>
      </footer>
    </div>
  );
}

export default Layout;
