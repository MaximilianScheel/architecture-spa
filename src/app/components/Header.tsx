'use client';

import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import styles from './Header.module.scss';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  function isActive(path: string) {
    return pathname === path;
  }

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link href="/">
          <img src="/assets/logo_white.png" alt="Logo" />
        </Link>
      </div>

      <button
        className={styles.burgerBtn}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle Menu"
      >
        ☰
      </button>

      <nav className={`${styles.nav} ${isOpen ? styles.open : ''}`}>
        <Link
          href="/architecture"
          className={isActive('/architecture') ? styles.active : ''}
        >
          Architektur
        </Link>
        <Link
          href="/energy-consulting"
          className={isActive('/energy-consulting') ? styles.active : ''}
        >
          Energieberatung
        </Link>
        <Link
          href="/about"
          className={isActive('/about') ? styles.active : ''}
        >
          Profil
        </Link>
        <Link
          href="/contact"
          className={isActive('/contact') ? styles.active : ''}
        >
          Kontakt
        </Link>
      </nav>
    </header>
  );
}
