'use client';

import Swiper from '../components/Swiper';
import latestData from '../../data/latest.json';
import styles from './latest.module.scss';

export default function LatestSection() {
  return (
    <section className={styles['latest-wrapper']} id="latest">
      <div>
        <h1>{latestData.heading}</h1>
      </div>

      {latestData.projects.map((project) => (
        <div key={project.id} className={styles['slider-block']}>
          <Swiper images={project.images} caption={project.caption} />
        </div>
      ))}
    </section>
  );
}