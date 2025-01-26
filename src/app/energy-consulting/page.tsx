'use client';

import Image from 'next/image';
import energyConsulting from '../../data/energy-consulting.json';
import styles from './Energy-consulting.module.scss';

export default function EnergyConsultingSection() {
  return (
    <section
      className={styles.section}
      id="energieberatung"
    >
      <div className={styles.logoWrapper}>
        <Image
          src={energyConsulting.logo}
          alt="Logo"
          width={100}
          height={100}
          className={styles.logo}
        />
        <span className={styles.heading}>{energyConsulting.heading}</span>
      </div>

      <div className={styles.imgWrapper}>
        <Image
          src={energyConsulting.piktogramm}
          alt="Piktogramm Energieberatung"
          width={600}
          height={400}
          className={styles.piktogramm}
        />
      </div>

      <div className={styles.textWrapper}>
        <h2 className={styles.leistungenTitle}>{energyConsulting.leistungenTitle}</h2>
        <p className={styles.leistungenText}>{energyConsulting.leistungenText}</p>
      </div>
    </section>
  );
}