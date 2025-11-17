'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import navigationData from '../../data/navigation.json';
import headerData from '../../data/header.json';
import styles from './header.module.scss';

const NAV_ITEMS = navigationData.items;

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

  const LogoSvg = () => (
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox={headerData.logo.viewBox}
      width={headerData.logo.width}
      height={headerData.logo.height}
      shapeRendering="geometricPrecision"
    >
      <style>{`.st0 { fill: none; stroke: white !important; stroke-miterlimit: 10; stroke-width: 1.5; vector-effect: non-scaling-stroke; shape-rendering: geometricPrecision; stroke-linecap: square; stroke-linejoin: miter; }`}</style>
      <path
        className="st0"
        vectorEffect="non-scaling-stroke"
        strokeWidth={1.5}
        d={headerData.logo.path}
      />
    </svg>
  );

  return (
    <header className={styles.header}>
      <div className={styles['header-wrapper']}>
        <div className={styles.logo}>
          {isHome ? (
            <a href="#latest" onClick={() => handleNavClick('latest')} aria-label="Home">
              <LogoSvg />
            </a>
          ) : (
            <Link href="/#latest" scroll={false} onClick={() => handleNavClick('latest')} aria-label="Home">
              <LogoSvg />
            </Link>
          )}
        </div>

        <button
          className={`${styles['burger-btn']} ${isOpen ? styles['burger-btn--open'] : ''}`}
          onClick={() => setIsOpen(o => !o)}
          aria-label={isOpen ? headerData.aria.menuClose : headerData.aria.menuOpen}
          aria-expanded={isOpen}
          aria-controls={headerData.aria.primaryNav}
        >
          <span />
          <span />
          <span />
        </button>

        <nav
          id={headerData.aria.primaryNav}
          className={`${styles.nav} ${isOpen ? styles['nav--open'] : ''}`}
          aria-hidden={!isOpen}
        >
          {NAV_ITEMS.map(({ id, label }) => {
            const isActive = activeSection === id;
            const className = `${styles['nav-link']} ${isActive ? styles['nav-link--active'] : ''}`;

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
