'use client';

import Image from 'next/image';
import { useState } from 'react';
import styles from './About.module.scss';

type AboutData = {
  heading: string;
  bio: string;
  milestones: string[];
};

const FALLBACK: AboutData = {
  heading: 'Profil',
  bio:
    'Mit Ihren individuellen Anforderungen und den spezifischen Gegebenheiten des jeweiligen Ortes zeitgemäße und ressourcenschonende Architektur zu gestalten, habe ich mir zur Aufgabe gemacht.', 
  milestones: [
    '2024		Ausrichtung auf ökologisches Bauen, hauptsächlich Holzbau',
    '2023 Eintragung in die Liste der Energieeffizienz-Experten',
    '2022 Bauvorlageberechtigt',
    'seit 2021 Selbstständig als Architekt',
    '2018 Master Studium Architektur, Beuth Hochschule Berlin',
    '2016 - 2021 Mitarbeiter koopX architekten, Berlin, LPH 1- 8 (bis 2018 als Werkstudent)',
  ],
};

export default function AboutSection() {
  const [data] = useState<AboutData>(FALLBACK);

  return (
    <section className={`${styles.architecture}`} id="about">
      {/* Logo-Wrapper */}
      <div className={styles.logoWrapper}>
        <h2 className={styles.companyDescription}>{data.heading}</h2>
      </div>

      <div className={styles.imgWrapper}>
        <p className={styles.descriptionBio}>{data.bio}</p>
      </div>

      {/* Wrapper-Content */}
      <div className={styles.wrapperContent}>
        <div className={`${styles.educationRow} ${styles.animate}`}>
          <div className={styles.educationColumn}>
            <div className={styles.educationBox}>
              {data.milestones.map((text, i) => (
                <div key={i} className={styles.educationContent}>
                  <div className={styles.content}>
                    <p>{text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
