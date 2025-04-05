'use client';

import Image from 'next/image';
import styles from './About.module.scss';

export default function AboutSection() {
  return (
    <section className={`${styles.architecture}`} id="about">
      {/* Logo-Wrapper */}
      <div className={styles.logoWrapper}>
        <h2 className={styles.companyDescription}>Profil</h2>
      </div>

      {/* Image-Wrapper */}
      <div className={styles.imgWrapper}>
        <p className={styles.descriptionBio}>
          alle müssen wohnen & jeder ort ist anders.
          mit den individuellen anforderungen der auftraggebenden und den
          spezifischen gegebenheiten des jeweiligen ortes zeitgemäße
          architektur zu gestalten, habe ich mir zur aufgabe gemacht.
        </p>
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
              {/* Bildungs- und Berufserfahrung */}
              <div className={styles.educationContent}>
                <div className={styles.content}>
                  <p>2023 Eintragung in die Liste der Energieeffizienz-Experten</p>
                </div>
              </div>

              <div className={styles.educationContent}>
                <div className={styles.content}>
                  <p>2022 Bauvorlageberechtigt</p>
                </div>
              </div>

              <div className={styles.educationContent}>
                <div className={styles.content}>
                  <p>seit 2021 Selbstständig als Architekt</p>
                </div>
              </div>

              <div className={styles.educationContent}>
                <div className={styles.content}>
                  <p>2018 Master Studium Architektur, Beuth Hochschule Berlin</p>
                </div>
              </div>

              <div className={styles.educationContent}>
                <div className={styles.content}>
                  <p>
                    2016 - 2021 Mitarbeiter koopX architekten, Berlin, LPH 1- 8 (bis
                    2018 als Werkstudent)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
