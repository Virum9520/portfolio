import { useMemo, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { navigationConfig } from '../../config/navigationConfig';
import { heroConfig } from '../../config/heroConfig';

export default function Navbar({ activeSection, onNavigate }) {
  const [isOpen, setIsOpen] = useState(false);
  const currentId = useMemo(() => activeSection || 'home', [activeSection]);

  const onItemClick = (id) => {
    onNavigate(id, { fast: true });
    setIsOpen(false);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-[#02010a] shadow-[0_12px_28px_rgba(2,1,10,0.75)]">
      <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-7 md:h-20 md:px-10">
        <button
          type="button"
          className="overflow-hidden rounded-full bg-transparent transition duration-300 hover:scale-105"
          onClick={() => onItemClick('home')}
        >
          <img
            src={heroConfig.profileImage}
            alt={heroConfig.name}
            className="h-10 w-10 object-cover md:h-12 md:w-12"
          />
        </button>
        <nav
          className={`${
            isOpen ? 'flex' : 'hidden'
          } absolute left-7 right-7 top-20 flex-col gap-4 rounded-2xl bg-[#02010a] p-6 md:static md:flex md:flex-row md:items-center md:gap-10 md:bg-transparent md:p-0`}
        >
          {navigationConfig.navItems.map((item) => (
            <button
              key={item.id}
              type="button"
              className={`rounded-full px-2 py-1 text-left text-lg font-semibold uppercase tracking-[0.14em] transition-all duration-300 md:text-base ${
                currentId === item.id
                  ? 'text-violet-200'
                  : 'text-white hover:-translate-y-0.5 hover:text-violet-200 hover:drop-shadow-[0_0_16px_rgba(196,128,252,0.55)]'
              }`}
              onClick={() => onItemClick(item.id)}
            >
              {item.label}
            </button>
          ))}
          {navigationConfig.cta?.show && (
            <a
              href={navigationConfig.cta.href}
              className="mt-2 inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-3 text-sm font-semibold uppercase tracking-[0.14em] text-zinc-100 transition-all duration-200 hover:scale-105 hover:bg-white/10 md:mt-0"
              download
            >
              {navigationConfig.cta.text}
            </a>
          )}
        </nav>
        <button
          className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-transparent text-zinc-100 md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>
    </header>
  );
}
