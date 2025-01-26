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
    console.log('Beobachtete Sektionen:', sections); // Debugging

    const options = {
      root: null, // Beobachtet den Viewport
      rootMargin: '0px',
      threshold: 0.3, // Reduzierter Threshold von 0.6 auf 0.3
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const id = entry.target.getAttribute('id');
        if (id) {
          console.log(`Sektion ${id} isIntersecting: ${entry.isIntersecting}, intersectionRatio: ${entry.intersectionRatio}`); // Debugging
          if (entry.isIntersecting) {
            setActiveSection(id);
          }
        }
      });
    }, options);

    sections.forEach((section) => {
      observer.observe(section);
      console.log(`Beobachte Sektion: ${section.getAttribute('id')}`); // Debugging
    });

    return () => {
      if (sections) {
        sections.forEach((section) => {
          observer.unobserve(section);
          console.log(`Unbeobachte Sektion: ${section.getAttribute('id')}`); // Debugging
        });
      }
    };
  }, []);

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link href="#aktuelles">
          <img src="/assets/logo_white.png" alt="Logo" />
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
          href="/"
          className={`${styles.navLink} ${
            activeSection === 'aktuelles' ? styles.active : ''
          }`}
          onClick={() => setIsOpen(false)}
        >
          Aktuelles
        </a>
        <a
          href="#architecture"
          className={`${styles.navLink} ${
            activeSection === 'architecture' ? styles.active : ''
          }`}
          onClick={() => setIsOpen(false)}
        >
          Architektur
        </a>
        <a
          href="#energieberatung"
          className={`${styles.navLink} ${
            activeSection === 'energieberatung' ? styles.active : ''
          }`}
          onClick={() => setIsOpen(false)}
        >
          Energieberatung
        </a>
        <a
          href="#about"
          className={`${styles.navLink} ${
            activeSection === 'about' ? styles.active : ''
          }`}
          onClick={() => setIsOpen(false)}
        >
          Profil
        </a>
        <a
          href="#contact"
          className={`${styles.navLink} ${
            activeSection === 'contact' ? styles.active : ''
          }`}
          onClick={() => setIsOpen(false)}
        >
          Kontakt
        </a>
      </nav>
    </header>
  );
}
