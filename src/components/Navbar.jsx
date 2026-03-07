
import { Menu, X } from 'lucide-react'
import { useState, useEffect } from "react";

const NAV_LINKS = [
    { label: "Work", href: "#work" },
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
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

    return (
        <>
            <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:wght@300;400;500&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        :root {
          --surface: #111111;
          --border: rgba(192, 0, 0, 0.07);
          --text: #f0ede8;
          --muted: rgba(240,237,232,0.45);
          --accent: #c8f542;
          --accent-dim: rgba(200,245,66,0.12);
          --font-display: 'Bebas Neue', sans-serif;
          --font-body: 'DM Sans', sans-serif;
          --radius: 2px;
          --transition: 0.22s cubic-bezier(0.4, 0, 0.2, 1);
        }
    
        /* ── Navbar ── */
        .navbar {
          position: fixed;
          top: 0; left: 0; right: 0;
          z-index: 100;
          padding: 0 32px;
          height: 64px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          transition: background var(--transition), border-color var(--transition), backdrop-filter var(--transition);
          border-bottom: 2px solid;
        }

        .navbar--scrolled {
          background: rgba(10, 10, 10, 0.88);
          backdrop-filter: blur(20px) saturate(140%);
          -webkit-backdrop-filter: blur(20px) saturate(140%);
          border-bottom-color: var(--border);
        }

        /* Logo */
        .navbar__logo {
          font-family: var(--font-display);
          font-size: 26px;
          letter-spacing: 0.08em;
          color: var(--text);
          text-decoration: none;
          display: flex;
          align-items: center;
          gap: 8px;
          user-select: none;
        }

        .navbar__logo-dot {
          width: 7px; height: 7px;
          border-radius: 50%;
          background: var(--accent);
          display: inline-block;
          animation: pulse 2.6s ease-in-out infinite;
        }

        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(0.75); }
        }

        /* Desktop links */
        .navbar__links {
          display: flex;
          align-items: center;
          gap: 4px;
          list-style: none;
        }

        .navbar__links li a {
          position: relative;
          text-decoration: none;
          color: var(--muted);
          font-size: 13px;
          font-weight: 500;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          padding: 6px 14px;
          border-radius: var(--radius);
          transition: color var(--transition), background var(--transition);
          display: block;
        }

        .navbar__links li a::after {
          content: '';
          position: absolute;
          bottom: 2px; left: 14px; right: 14px;
          height: 1px;
          background: var(--accent);
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.28s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .navbar__links li a:hover,
        .navbar__links li a.active {
          color: var(--text);
          background: var(--accent-dim);
        }

        .navbar__links li a:hover::after,
        .navbar__links li a.active::after {
          transform: scaleX(1);
        }

        /* CTA Button */
        .navbar__cta {
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .btn-cta {
          background: var(--accent);
          color: #0a0a0a;
          border: none;
          padding: 9px 20px;
          font-family: var(--font-body);
          font-size: 13px;
          font-weight: 500;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          border-radius: var(--radius);
          cursor: pointer;
          transition: opacity var(--transition), transform var(--transition);
          white-space: nowrap;
        }

        .btn-cta:hover {
          opacity: 0.88;
          transform: translateY(-1px);
        }

        .btn-cta:active {
          transform: translateY(0);
        }

        /* Hamburger */
        .navbar__hamburger {
          display: none;
          flex-direction: column;
          justify-content: center;
          gap: 5px;
          width: 36px;
          height: 36px;
          background: none;
          border: 1px solid var(--border);
          border-radius: var(--radius);
          cursor: pointer;
          padding: 0 8px;
          transition: border-color var(--transition);
        }

        .navbar__hamburger:hover { border-color: var(--accent); }

        .navbar__hamburger span {
          display: block;
          height: 1.5px;
          background: var(--text);
          border-radius: 2px;
          transition: transform 0.28s ease, opacity 0.2s ease, width 0.2s ease;
          transform-origin: center;
        }

        .navbar__hamburger.open span:nth-child(1) {
          transform: translateY(6.5px) rotate(45deg);
        }
        .navbar__hamburger.open span:nth-child(2) {
          opacity: 0;
          transform: scaleX(0);
        }
        .navbar__hamburger.open span:nth-child(3) {
          transform: translateY(-6.5px) rotate(-45deg);
        }

        /* Mobile drawer */
        .navbar__drawer {
          position: fixed;
          inset: 64px 0 0 0;
          z-index: 99;
          background: rgba(10, 10, 10, 0.97);
          backdrop-filter: blur(24px);
          -webkit-backdrop-filter: blur(24px);
          padding: 32px 32px 48px;
          display: flex;
          flex-direction: column;
          gap: 8px;
          transform: translateY(-100%);
          opacity: 0;
          pointer-events: none;
          transition: transform 0.36s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.28s ease;
          border-top: 1px solid var(--border);
        }

        .navbar__drawer.open {
          transform: translateY(0);
          opacity: 1;
          pointer-events: all;
        }

        .navbar__drawer a {
          font-family: var(--font-display);
          font-size: 48px;
          letter-spacing: 0.04em;
          color: var(--muted);
          text-decoration: none;
          line-height: 1.1;
          transition: color var(--transition);
          display: block;
          padding: 4px 0;
        }

        .navbar__drawer a:hover { color: var(--accent); }

        .navbar__drawer .drawer-cta {
          margin-top: 24px;
        }

        .navbar__drawer .drawer-cta .btn-cta {
          width: 100%;
          padding: 14px;
          font-size: 14px;
          text-align: center;
        }

        /* Responsive */
        @media (max-width: 768px) {
          .navbar__links,
          .navbar__cta .btn-cta {
            display: none;
          }
          .navbar__hamburger {
            display: flex;
          }
          .navbar {
            padding: 0 20px;
          }
        }
      `}</style>

            <div className="navbar-demo">
                {/* ── Navbar ── */}
                <nav className={`navbar${scrolled ? " navbar--scrolled" : ""}`}>
                    <a className="navbar__logo" href="#">
                        <span className="navbar__logo-dot" />
                        VOLT
                    </a>

                    <ul className="navbar__links">
                        {NAV_LINKS.map((link) => (
                            <li key={link.label}>
                                <a
                                    href={link.href}
                                    className={activeLink === link.label ? "active" : ""}
                                    onClick={() => setActiveLink(link.label)}
                                >
                                    {link.label}
                                </a>
                            </li>
                        ))}
                    </ul>

                    <div className="navbar__cta">
                        <button className="btn-cta">Get Started →</button>
                        <button
                            className={`navbar__hamburger${menuOpen ? " open" : ""}`}
                            onClick={() => setMenuOpen((v) => !v)}
                            aria-label="Toggle menu"
                        >
                            <span />
                            <span />
                            <span />
                        </button>
                    </div>
                </nav>

                {/* ── Mobile Drawer ── */}
                <div className={`navbar__drawer${menuOpen ? " open" : ""}`}>
                    {NAV_LINKS.map((link) => (
                        <a
                            key={link.label}
                            href={link.href}
                            onClick={() => setMenuOpen(false)}
                        >
                            {link.label}
                        </a>
                    ))}
                    <div className="drawer-cta">
                        <button className="btn-cta">Get Started →</button>
                    </div>
                </div>
            </div>
        </>
    );
}