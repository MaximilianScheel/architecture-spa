'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './Header.module.scss';

const NAV_ITEMS = [
  { id: 'latest', label: 'Aktuelles' },
  { id: 'architecture', label: 'Architektur' },
  { id: 'energy-consulting', label: 'Energieberatung' },
  { id: 'about', label: 'Profil' },
  { id: 'contact', label: 'Kontakt' },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('latest');

  const pathname = usePathname();
  const isHome = pathname === '/';

  // IntersectionObserver nur auf der Home-Page
  useEffect(() => {
    if (!isHome) return;
    const sections = document.querySelectorAll<HTMLElement>('section[id]');
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3 }
    );
    sections.forEach(sec => observer.observe(sec));
    return () => sections.forEach(sec => observer.unobserve(sec));
  }, [isHome]);

  const closeMenu = () => setIsOpen(false);
  const handleNavClick = (id: string) => {
    setActiveSection(id);
    closeMenu();
  };

  return (
    <header className={styles.header}>
      <div className={styles.headerWrapper}>
        {/* Logo */}
        <div className={styles.logo}>
          {isHome ? (
            <a href="#latest" onClick={() => handleNavClick('latest')}>
              {/* Dein SVG-Logo hier */}
              <svg
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 110 110"
                width="96"
                height="96"
              >
                <style>{`.st0 { fill: none; stroke: white !important; stroke-miterlimit: 10; }`}</style>
                <path
                  className="st0"
                  d="M105,95.9H5V14.5h100V95.9z
                     M18.6,84l10.3-57.6h-3.2L15.4,84H18.6z
                     M32.5,84l10.3-57.6h-3.2L29.3,84H32.5z
                     M46.3,84L55,35.3L63.8,84H67L56.6,26.4h-3.2L43.2,84H46.3z
                     M80.8,84L70.5,26.4h-3.2L77.6,84H80.8z
                     M94.7,84L84.4,26.4h-3.2L91.5,84H94.7z"
                />
              </svg>
            </a>
          ) : (
            <Link href="/#latest" scroll={false} onClick={() => handleNavClick('latest')}>
              {/* Dein SVG-Logo hier */}
              <svg
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 110 110"
                width="96"
                height="96"
              >
                <style>{`.st0 { fill: none; stroke: white !important; stroke-miterlimit: 10; }`}</style>
                <path
                  className="st0"
                  d="M105,95.9H5V14.5h100V95.9z
                     M18.6,84l10.3-57.6h-3.2L15.4,84H18.6z
                     M32.5,84l10.3-57.6h-3.2L29.3,84H32.5z
                     M46.3,84L55,35.3L63.8,84H67L56.6,26.4h-3.2L43.2,84H46.3z
                     M80.8,84L70.5,26.4h-3.2L77.6,84H80.8z
                     M94.7,84L84.4,26.4h-3.2L91.5,84H94.7z"
                />
              </svg>
            </Link>
          )}
        </div>

        {/* Burger-Button mit drei Bars */}
        <button
          className={`${styles.burgerBtn} ${isOpen ? styles.open : ''}`}
          onClick={() => setIsOpen(o => !o)}
          aria-label={isOpen ? 'Menü schließen' : 'Menü öffnen'}
          aria-expanded={isOpen}
          aria-controls="primary-navigation"
        >
          <span />
          <span />
          <span />
        </button>

        {/* Navigation */}
        <nav
          id="primary-navigation"
          className={`${styles.nav} ${isOpen ? styles.open : ''}`}
          aria-hidden={!isOpen}
        >
          {NAV_ITEMS.map(({ id, label }) => {
            const isActive = activeSection === id;
            const className = `${styles.navLink} ${isActive ? styles.active : ''}`;

            return isHome ? (
              <a
                key={id}
                href={`#${id}`}
                className={className}
                onClick={() => handleNavClick(id)}
              >
                {label}
              </a>
            ) : (
              <Link
                key={id}
                href={`/#${id}`}
                scroll={false}
                className={className}
                onClick={() => handleNavClick(id)}
              >
                {label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
