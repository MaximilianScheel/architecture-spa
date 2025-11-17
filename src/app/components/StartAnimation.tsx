'use client';

import { useState, useEffect } from 'react';
import styles from './start-animation.module.scss';

export default function StartAnimation() {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    // nach 6 Sekunden ausblenden
    const timer = setTimeout(() => setHidden(true), 6000);
    return () => clearTimeout(timer);
  }, []);

  // Force page background to black while animation is active to avoid any frame
  useEffect(() => {
    const cls = 'start-anim-active';
    if (!hidden) {
      document.documentElement.classList.add(cls);
    } else {
      document.documentElement.classList.remove(cls);
    }
    return () => {
      document.documentElement.classList.remove(cls);
    };
  }, [hidden]);

  if (hidden) return null;

  return (
    <div className={styles.overlay}>
      <img
        src="/assets/start-animation/animation_1.webp"
        alt="Intro Hell"
        className={`${styles.image} ${styles.image1}`}
      />
      <img
        src="/assets/start-animation/animation_2.webp"
        alt="Intro Logo"
        className={`${styles.image} ${styles.image2}`}
      />
      <img
        src="/assets/start-animation/animation_3.webp"
        alt="Intro Dunkel"
        className={`${styles.image} ${styles.image3}`}
      />
    </div>
  );
}