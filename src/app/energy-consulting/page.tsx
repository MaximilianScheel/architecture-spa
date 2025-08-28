'use client';

import Image from 'next/image';
import energyConsulting from '../../data/energy-consulting.json';
import styles from './Energy-consulting.module.scss';

export default function EnergyConsultingSection() {
  return (
    <section
      className={styles.section}
      id="energy-consulting"
    >
      <div className={styles.logoWrapper}>
        <h2 className={styles.heading}>{energyConsulting.heading}</h2>
      </div>

      <div className={styles.textWrapper}>
        <p
          className={styles.leistungenText}
          dangerouslySetInnerHTML={{ __html: energyConsulting.leistungenText }}
        />
      </div>
      <div className={styles.imgWrapper}>
        <Image
          src="/assets/Piktogramm_Energieberatung.webp"
          alt="Profilbild von Jacob Mau"
          width={400}
          height={400}
          className={styles.profileImage}
        />
      </div>
    </section>
  );
}