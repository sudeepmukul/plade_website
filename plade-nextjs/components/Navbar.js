'use client';

import { useEffect, useState } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className={`nav${scrolled ? ' scrolled' : ''}`} id="main-nav" role="navigation" aria-label="Main navigation">
      <a href="#hero" className="nav-logo" aria-label="PLADE Home">
        PL<span>A</span>DE
      </a>

      {/* Hamburger button — mobile only */}
      <button
        className={`nav-hamburger${menuOpen ? ' active' : ''}`}
        onClick={toggleMenu}
        aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        aria-expanded={menuOpen}
        aria-controls="nav-menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <ul className={`nav-links${menuOpen ? ' open' : ''}`} id="nav-menu">
        <li><a href="#features" onClick={closeMenu}>Features</a></li>
        <li><a href="#how-it-works" onClick={closeMenu}>Gameplay</a></li>
        <li><a href="#tech" onClick={closeMenu}>Tech Stack</a></li>
        <li><a href="#download" onClick={closeMenu}>Download</a></li>
      </ul>

      <a href="#download" className={`nav-cta${menuOpen ? ' open' : ''}`} onClick={closeMenu}>
        Download Now
      </a>
    </nav>
  );
}
