'use client';

import Image from 'next/image';
import energyConsultingData from '../../data/energy-consulting.json';
import styles from './energy-consulting.module.scss';

export default function EnergyConsultingSection() {
  return (
    <section id="energy-consulting">
      <div>
        <h2>{energyConsultingData.heading}</h2>
      </div>

      <div className={styles['text-wrapper']}>
        <p
          className={styles['services-text']}
          dangerouslySetInnerHTML={{ __html: energyConsultingData.leistungenText }}
        />
      </div>
      
      <div className={styles['image-wrapper']}>
        <Image
          src="/assets/Piktogramm_Energieberatung.webp"
          alt="Energieberatung Piktogramm"
          width={400}
          height={400}
        />
      </div>
    </section>
  );
}