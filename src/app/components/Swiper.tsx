'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import styles from './Swiper.module.scss';

type Slide = { img: string };

export default function MySwiper({ images, caption }: { images: string[]; caption?: string }) {
  const slides: Slide[] = images.map((img) => ({ img }));
  const resolvedCaption = caption || '';

  return (
    <div className={styles.wrapper}>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop
        className={styles.container}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className={styles.mediaBox}>
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
