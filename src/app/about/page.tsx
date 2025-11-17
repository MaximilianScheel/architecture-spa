'use client';

import aboutData from '../../data/about.json';
import styles from './about.module.scss';

export default function AboutSection() {

  return (
    <section id="about">
      <div>
        <h2>{aboutData.heading}</h2>
      </div>

      <div className={styles['bio-wrapper']}>
        <p>{aboutData.bio}</p>
      </div>

      <div className={styles['timeline-wrapper']}>
        <div className={styles['timeline-row']}>
          <div className={styles['timeline-column']}>
            <div className={styles['timeline-box']}>
              {aboutData.milestones.map((text, i) => (
                <div key={i} className={styles['timeline-item']}>
                  <div className={styles['timeline-content']}>
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
