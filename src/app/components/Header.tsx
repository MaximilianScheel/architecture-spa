// Header.tsx

'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './Header.module.scss';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('aktuelles');

  useEffect(() => {
    const sections = document.querySelectorAll('section');

    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.3,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const id = entry.target.getAttribute('id');
        if (id && entry.isIntersecting) {
          setActiveSection(id);
        }
      });
    }, options);

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <header className={styles.header}>
      <div className={styles.headerWrapper}>
        <div className={styles.logo}>
          <Link href="#aktuelles">
            <svg
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 110 110"
              width="96"
              height="96"
              enableBackground="new 0 0 110 110"
              xmlSpace="preserve"
            >
              <style type="text/css">
                {`.st0 { fill: none; stroke: white !important; stroke-miterlimit: 10; }`}
              </style>
              <path className="st0" d="M105,95.9H5V14.5h100V95.9z M18.6,84l10.3-57.6h-3.2L15.4,84H18.6z M32.5,84l10.3-57.6h-3.2L29.3,84H32.5z
              M46.3,84L55,35.3L63.8,84H67L56.6,26.4h-3.2L43.2,84H46.3z M80.8,84L70.5,26.4h-3.2L77.6,84H80.8z M94.7,84L84.4,26.4h-3.2L91.5,84
              H94.7z"/>
            </svg>
          </Link>
        </div>

        <button
          className={styles.burgerBtn}
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? 'Menü schließen' : 'Menü öffnen'}
          aria-expanded={isOpen}
          aria-controls="primary-navigation"
        >
          ☰
        </button>

        <nav
          id="primary-navigation"
          className={`${styles.nav} ${isOpen ? styles.open : ''}`}
          aria-hidden={!isOpen}
        >
          <a
            href="#latest"
            className={`${styles.navLink} ${activeSection === 'latest' ? styles.active : ''}`}
            onClick={() => setIsOpen(false)}
          >
            Aktuelles
          </a>
          <a
            href="#architecture"
            className={`${styles.navLink} ${activeSection === 'architecture' ? styles.active : ''}`}
            onClick={() => setIsOpen(false)}
          >
            Architektur
          </a>
          <a
            href="#energieberatung"
            className={`${styles.navLink} ${activeSection === 'energyConsulting' ? styles.active : ''}`}
            onClick={() => setIsOpen(false)}
          >
            Energieberatung
          </a>
          <a
            href="#about"
            className={`${styles.navLink} ${activeSection === 'about' ? styles.active : ''}`}
            onClick={() => setIsOpen(false)}
          >
            Profil
          </a>
          <a
            href="#contact"
            className={`${styles.navLink} ${activeSection === 'contact' ? styles.active : ''}`}
            onClick={() => setIsOpen(false)}
          >
            Kontakt
          </a>
        </nav>
      </div>
    </header>
  );
}
