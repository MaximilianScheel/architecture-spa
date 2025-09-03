'use client';
import Swiper from '../components/Swiper';
import styles from './Latest.module.scss';
import latest from '../../data/latest.json';

export default function LatestSection() {
  const parowerImages = [
    '/assets/Slider_Parower_1.webp',
    '/assets/Slider_Parower_2.webp',
    '/assets/Slider_Parower_3.webp',
  ];

  const apfelwegImages = [
    '/assets/Slider_Apfelweg_1.webp',
    '/assets/Slider_Apfelweg_2.webp',
    '/assets/Slider_Apfelweg_3.webp',
    '/assets/Slider_Apfelweg_4.webp',
  ];

  const captionOne = (latest as any).sliderCaptionOne || '';
  const captionTwo = (latest as any).sliderCaptionTwo || '';

  return (
    <section className={styles.latestWrapper} id="latest">
      <div>
        <h1>{(latest as any).heading}</h1>
      </div>

      <div className={styles.sliderBlock}>
        <Swiper images={parowerImages} caption={captionOne} />
      </div>
      <div className={styles.sliderBlock}>
        <Swiper images={apfelwegImages} caption={captionTwo} />
      </div>
    </section>
  );
}