import { Outlet, Link, useNavigate, useLocation } from 'react-router-dom';
import { site } from '../data/site';

const NAV_ITEMS = [
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'publications', label: 'Publications' },
];

function Layout() {
  const navigate = useNavigate();
  const location = useLocation();

  function goToSection(id) {
    if (location.pathname === '/') {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      navigate('/', { state: { scrollTo: id } });
    }
  }

  return (
    <div className="mx-auto flex min-h-screen w-full max-w-[44rem] flex-col px-5 sm:px-6">
      <header className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 border-b border-rule py-5">
        <Link
          to="/"
          className="font-serif text-[1.05rem] font-medium tracking-tight text-ink hover:text-accent"
          style={{ fontFamily: 'var(--font-serif)' }}
        >
          Virum Ranka
        </Link>
        <nav className="flex flex-wrap items-baseline gap-x-4 gap-y-1 text-[0.82rem] text-ink-soft sm:gap-x-6">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => goToSection(item.id)}
              className="cursor-pointer hover:text-accent"
            >
              {item.label}
            </button>
          ))}
          <a
            href={site.resumeUrl}
            target="_blank"
            rel="noreferrer"
            className="hover:text-accent"
          >
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
