'use client';

import MySwiper from './components/Swiper';
import ArchitectureSection from './architecture/page'; 


export default function HomePage() {
  return (
    <>
      {/* Swiper als oberste Sektion */}
      <MySwiper />

      {/* Architektur-Sektion */}
      <ArchitectureSection />

      {/* Hier kannst du weitere Sektionen (z.B. About, Energieberatung, Kontakt) einfügen */}
    </>
  );
}
