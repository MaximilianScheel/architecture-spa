'use client';

import LatestSection from './latest/page';
import ArchitectureSection from './architecture/page'; 
import EnergyConsultingSection from './energy-consulting/page';
import AboutSection from './about/page';
import ContactSection from './contact/page';
import FooterSection from './footer/page';


export default function HomePage() {
  return (
    <>
      <LatestSection />
      <ArchitectureSection />
      <EnergyConsultingSection />
      <AboutSection />
      <ContactSection />
    </>
  );
}
