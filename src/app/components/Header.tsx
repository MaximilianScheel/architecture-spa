'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './Header.module.scss';

const NAV_ITEMS = [
  { id: 'latest', label: 'aktuelles' },
  { id: 'architecture', label: 'architektur' },
  { id: 'energy-consulting', label: 'energieberatung' },
  { id: 'about', label: 'profil' },
  { id: 'contact', label: 'kontakt' },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('latest');

  const pathname = usePathname();
  const isHome = pathname === '/';

  // IntersectionObserver nur auf der Home-Page
  useEffect(() => {
    if (!isHome) return;

    const ids = NAV_ITEMS.map(i => i.id);
    const getHeaderHeight = () => {
      const raw = getComputedStyle(document.documentElement)
        .getPropertyValue('--header-height')
        .trim();
      const parsed = parseInt(raw, 10);
      return Number.isFinite(parsed) ? parsed : 96;
    };

    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const headerH = getHeaderHeight();
        const offset = headerH + 8; // kleiner Puffer unter dem Header
        const lineYAbs = window.scrollY + offset; // absolute Dokumentposition der Linie

        // finde die Section, die diese Linie "enthält" (Top/Bottom in Dokumentkoordinaten)
        let current = ids[0];
        const positions = ids
          .map(id => {
            const el = document.getElementById(id);
            if (!el) return null;
            const rect = el.getBoundingClientRect();
            const top = rect.top + window.scrollY; // absolute Dokumentkoordinate
            const height = el.offsetHeight;
            const bottom = top + height;
            return { id, top, bottom };
          })
          .filter(Boolean) as { id: string; top: number; bottom: number }[];

        // wenn oberhalb der ersten Section
        if (positions.length) {
          const first = positions[0];
          const second = positions[1];
          if (second && lineYAbs < second.top) {
            current = first.id; // bis zur zweiten Section bleibt 'latest'
          } else if (lineYAbs < first.top + 1) {
            current = first.id;
          } else {
          for (const p of positions) {
            if (lineYAbs >= p.top && lineYAbs < p.bottom) {
              current = p.id;
              break;
            }
            if (lineYAbs >= p.bottom) {
              current = p.id; // wir sind darunter, gehe weiter
            }
          }
          }
        }
        setActiveSection(current);
        ticking = false;
      });
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    onScroll(); // initial bestimmen
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
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
                shapeRendering="geometricPrecision"
              >
                <style>{`.st0 { fill: none; stroke: white !important; stroke-miterlimit: 10; stroke-width: 1.5; vector-effect: non-scaling-stroke; shape-rendering: geometricPrecision; stroke-linecap: square; stroke-linejoin: miter; }`}</style>
                <path
                  className="st0"
                  vectorEffect="non-scaling-stroke"
                  strokeWidth={1.5}
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
                shapeRendering="geometricPrecision"
              >
                <style>{`.st0 { fill: none; stroke: white !important; stroke-miterlimit: 10; stroke-width: 1.5; vector-effect: non-scaling-stroke; shape-rendering: geometricPrecision; }`}</style>
                <path
                  className="st0"
                  vectorEffect="non-scaling-stroke"
                  strokeWidth={1.5}
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
          className={`${styles.burgerBtn} ${isOpen ? styles.burgerBtnOpen : ''}`}
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
          className={`${styles.nav} ${isOpen ? styles.navOpen : ''}`}
          aria-hidden={!isOpen}
        >
          {NAV_ITEMS.map(({ id, label }) => {
            const isActive = activeSection === id;
            const className = `${styles.navLink} ${isActive ? styles.navLinkActive : ''}`;

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
