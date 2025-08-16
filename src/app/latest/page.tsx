'use client';
import Swiper from '../components/Swiper';
import styles from './Latest.module.scss';

export default function LatestSection() {

  return (
    <section className={styles.latestWrapper} id="latest">
      <div>
        <h2>aktuelles</h2>
      </div>
      <Swiper />
    </section>
  );
}