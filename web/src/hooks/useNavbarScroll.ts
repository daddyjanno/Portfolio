import { useEffect, useState } from 'react';
import { NAVIGATION_ITEMS } from '../utils/constants';

export const useNavbarScroll = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('');
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    let scrollTimeout: NodeJS.Timeout;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Show navbar when user has scrolled past the hero section
      // Hero is approximately 100vh tall
      const heroHeight = window.innerHeight;
      if (currentScrollY > heroHeight * 0.8) {
        // Scrolled past hero - show navbar
        setIsVisible(true);
      } else {
        // Still in hero area - hide navbar
        setIsVisible(false);
      }

      setLastScrollY(currentScrollY);

      // Detect active section
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        for (const item of NAVIGATION_ITEMS) {
          const element = document.querySelector(item.href);
          if (element) {
            const rect = element.getBoundingClientRect();
            // Section is active if it's in the viewport or above
            if (rect.top <= 150 && rect.bottom > 0) {
              setActiveSection(item.href);
              break;
            }
          }
        }
      }, 100);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Call once on mount
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(scrollTimeout);
    };
  }, [lastScrollY]);

  return { isVisible, activeSection };
};
