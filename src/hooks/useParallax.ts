import { useEffect, useRef } from 'react';

/**
 * Hook personnalisé pour créer un effet parallax
 * @param speed - Vitesse du parallax (0.3 = 30% de la vitesse du scroll)
 */
export const useParallax = (speed: number = 0.3) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;

      const element = ref.current;
      const scrollY = window.scrollY || window.pageYOffset;
      const elementRect = element.getBoundingClientRect();
      const elementTop = elementRect.top;
      const windowHeight = window.innerHeight;

      // Only apply parallax when element is visible in viewport
      if (elementTop < windowHeight && elementTop + element.offsetHeight > 0) {
        // Apply parallax offset that moves slower than scroll
        const offset = scrollY * speed;
        element.style.transform = `translateY(${offset}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Call on mount to set initial state
    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed]);

  return ref;
};
