'use client';

import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

export default function ScrollHandler() {
  const pathname = usePathname();

  useEffect(() => {
    // Wenn URL einen Hash enthält, scroll zum entsprechenden Element
    const hash = window.location.hash;
    if (hash) {
      const id = hash.substring(1);
      const el = document.getElementById(id);
      if (el) {
        // kurze Verzögerung, damit die Seite komplett gerendert ist
        setTimeout(() => el.scrollIntoView({ behavior: 'smooth' }), 50);
      }
    }
  }, [pathname]);

  return null;
}