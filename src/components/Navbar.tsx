import Link from 'next/link';

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Portfolio', path: '/portfolio' },
  { name: 'Blog', path: '/blog' },
  { name: 'Contact', path: '/contact' },
];

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center py-6 pointer-events-none">
      <div className="flex items-center gap-8 rounded-full border border-white/10 bg-black/60 px-8 py-3 backdrop-blur-[12px] shadow-lg pointer-events-auto transition-all hover:bg-black/70 hover:border-white/20">
        {navItems.map((item) => (
          <Link
            key={item.path}
            href={item.path}
            className="text-sm font-medium text-secondary transition-colors hover:text-foreground hover:scale-105 active:scale-95"
          >
            {item.name}
          </Link>
        ))}
      </div>
    </nav>
  );
}
