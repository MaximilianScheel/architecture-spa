'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const slides = [
  { img: '/assets/BER_123.jpg', caption: 'Slide 1' },
  { img: '/assets/BER_234.jpg', caption: 'Slide 2' },
  { img: '/assets/BER_345.jpg', caption: 'Slide 3' }
];

export default function MySwiper() {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={30}
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      loop
      style={{ width: '100%', height: 'auto' }}
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index}>
          <img
            src={slide.img}
            alt={slide.caption}
            style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
