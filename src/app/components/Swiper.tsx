'use client';

import { useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import type { Swiper as SwiperInstance } from 'swiper';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import styles from './swiper.module.scss';

type Slide = { img: string };

export default function MySwiper({ images, caption }: { images: string[]; caption?: string }) {
  const slides: Slide[] = images.map((img) => ({ img }));
  const resolvedCaption = caption || '';
  const swiperRef = useRef<SwiperInstance | null>(null);

  useEffect(() => {
    // Autoplay erst nach der Startanimation starten
    const timer = setTimeout(() => {
      const swiper = swiperRef.current;
      if (swiper && swiper.autoplay) {
        // sicherstellen, dass wir beim echten ersten Slide starten
        swiper.slideTo(0, 0, false);
        swiper.autoplay.start();
      }
    }, 6000);

    return () => {
      clearTimeout(timer);
      if (swiperRef.current && swiperRef.current.autoplay) {
        swiperRef.current.autoplay.stop();
      }
    };
  }, []);

  return (
    <div className={styles.wrapper}>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        onSwiper={(instance) => {
          swiperRef.current = instance;
          if (instance.autoplay) {
            // Beim Mount zunächst stoppen und explizit auf den ersten Slide setzen
            instance.autoplay.stop();
            instance.slideTo(0, 0, false);
          }
        }}
        loop
        className={styles.container}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className={styles['media-box']}>
              <img
                src={slide.img}
                alt={`Slide ${index + 1}`}
                loading="lazy"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className={styles.caption} aria-live="polite">
        {resolvedCaption}
      </div>
    </div>
  );
}
