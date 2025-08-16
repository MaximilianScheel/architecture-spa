'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import styles from './Swiper.module.scss';

const slides = [
  { img: '/assets/Slider_Apfelweg_1.webp', caption: 'Slide 1' },
  { img: '/assets/Slider_Apfelweg_2.webp', caption: 'Slide 2' },
  { img: '/assets/Slider_Apfelweg_3.webp', caption: 'Slide 3' },
  { img: '/assets/Slider_Apfelweg_4.webp', caption: 'Slide 4' }
];

export default function MySwiper() {
  return (
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
          <img
            src={slide.img}
            alt={slide.caption}
            loading="lazy"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
