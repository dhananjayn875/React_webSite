
import { useState, useEffect } from "react";

const NAV_LINKS = [
  { label: "Projects", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleSpanTransform = (index) => {
    if (!menuOpen) return "";
    if (index === 0) return "translate-y-1.5 rotate-45";
    if (index === 1) return "opacity-0 scale-x-0";
    if (index === 2) return "-translate-y-1.5 -rotate-45";
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 px-8 h-16 flex items-center justify-between transition-all duration-300 border-b border-red-500/10 ${scrolled
        ? "bg-black/60 backdrop-blur-xl"
        : "bg-transparent"
        }`}
    >
      {/* Logo */}
      <a href="#" className="flex items-center gap-2 select-none">
        <div className="w-1.5 h-1.5 rounded-full bg-lime-400 animate-pulse" />
        <span className="text-2xl font-bold tracking-widest text-stone-100">Dhananjay</span>
      </a>

      {/* Desktop Links */}
      <ul className="hidden md:flex items-center gap-1 list-none">
        {NAV_LINKS.map((link) => (
          <li key={link.label}>
            <a
              href={link.href}
              onClick={() => setActiveLink(link.label)}
              className={`relative block px-3.5 py-1.5 text-xs font-medium tracking-widest uppercase transition-colors duration-300 ${activeLink === link.label
                ? "text-stone-100 bg-lime-400/10"
                : "text-stone-400 hover:text-stone-100 hover:bg-lime-400/10"
                }`}
            >
              {link.label}
              <span
                className={`absolute bottom-0.5 left-3.5 right-3.5 h-px bg-lime-400 transition-transform duration-300 origin-left ${activeLink === link.label
                  ? "scale-x-100"
                  : "scale-x-0"
                  }`}
              />
            </a>
          </li>
        ))}
      </ul>

      {/* CTA Button and Hamburger */}
      <div className="flex items-center gap-4">
        <button className="hidden md:block bg-lime-400 text-black px-5 py-2 text-xs font-semibold tracking-wider rounded transition-all duration-300 hover:opacity-90 active:translate-y-0.5">
          Get in touch →
        </button>

        {/* Hamburger */}
        <button
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle menu"
          className="md:hidden flex flex-col justify-center gap-1.5 w-9 h-9 bg-transparent border border-red-500/10 rounded p-2 cursor-pointer transition-colors duration-300 hover:border-lime-400"
        >
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              className={`block h-0.5 bg-stone-100 rounded-full transition-all duration-300 ${handleSpanTransform(i)
                } ${i === 0 || i === 2 ? "w-full" : "w-full"}`}
            />
          ))}
        </button>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`fixed top-16 left-0 right-0 z-40 bg-black/95 backdrop-blur-2xl px-8 py-8 flex flex-col gap-2 border-t border-red-500/10 transition-all duration-300 ${menuOpen
          ? "translate-y-0 opacity-100 pointer-events-auto"
          : "-translate-y-full opacity-0 pointer-events-none"
          }`}
      >
        {NAV_LINKS.map((link) => (
          <a
            key={link.label}
            href={link.href}
            onClick={() => setMenuOpen(false)}
            className="text-4xl font-bold tracking-wide text-stone-400 hover:text-lime-400 transition-colors duration-300 py-1"
          >
            {link.label}
          </a>
        ))}
        <button className="w-full bg-lime-400 text-black px-5 py-3 mt-6 text-sm font-semibold tracking-wider rounded transition-all duration-300 hover:opacity-90">
          Get in touch →
        </button>
      </div>
    </nav>
  );
}