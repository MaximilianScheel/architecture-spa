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
    'alle müssen wohnen & jeder ort ist anders. mit den individuellen anforderungen der auftraggebenden und den spezifischen gegebenheiten des jeweiligen ortes zeitgemäße architektur zu gestalten, habe ich mir zur aufgabe gemacht.',
  milestones: [
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

      {/* Image-Wrapper */}
      <div className={styles.imgWrapper}>
        <p className={styles.descriptionBio}>{data.bio}</p>
        <Image
          src="/assets/profile.png"
          alt="Profilbild von Jacob Mau"
          width={400}
          height={400}
          className={styles.profileImage}
        />
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
