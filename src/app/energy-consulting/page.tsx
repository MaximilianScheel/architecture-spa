'use client';

import Image from 'next/image';
import energyConsulting from '../../data/energy-consulting.json';
import styles from './Energy-consulting.module.scss';

export default function EnergyConsultingSection() {
  return (
    <section
      className={styles.section}
      id="energyConsulting"
    >
      <div className={styles.logoWrapper}>
        <h2 className={styles.heading}>{energyConsulting.heading}</h2>
      </div>

      <div className={styles.textWrapper}>
        <p className={styles.leistungenText}>{energyConsulting.leistungenText}</p>
      </div>

      <Image
          src="/assets/Piktogram_Architektur.webp"
          alt="Profilbild von Jacob Mau"
          width={400}
          height={400}
          className={styles.profileImage}
        />
    </section>
  );
}