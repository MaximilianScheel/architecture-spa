'use client';

import MySwiper from './components/Swiper';
import ArchitectureSection from './architecture/page'; 
import EnergyConsultingSection from './energy-consulting/page';
import AboutSection from './about/page';
import ContactSection from './contact/page';


export default function HomePage() {
  return (
    <>
      {/* Swiper-Komponente ganz oben */}
      <MySwiper />

      {/* Architektur-Sektion */}
      <ArchitectureSection />

      {/* Energieberatung-Sektion */}
      <EnergyConsultingSection />

      <AboutSection />
      <ContactSection />


      {/* Profil-Sektion */}
    </>
  );
}
