'use client';

import { useState, useEffect } from 'react';
import styles from './Start-animation.module.scss';

export default function StartAnimation() {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    // nach 6 Sekunden ausblenden
    const timer = setTimeout(() => setHidden(true), 6000);
    return () => clearTimeout(timer);
  }, []);

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