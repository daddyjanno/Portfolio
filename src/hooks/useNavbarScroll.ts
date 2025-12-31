import { useEffect, useState } from 'react';
import { NAVIGATION_ITEMS, SCROLL_THRESHOLDS } from '../utils/constants';

export const useNavbarScroll = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('');
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    let scrollTimeout: ReturnType<typeof setTimeout>;

    const getNavbarHeight = (): number => {
      // Get the navbar element and calculate its height dynamically
      const navbar = document.querySelector('nav');
      if (navbar) {
        const height = navbar.getBoundingClientRect().height;
        return height;
      }
      // Fallback if navbar not found
      return 60;
    };

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Show navbar when user has scrolled past the hero section
      // Hero is approximately 100vh tall
      const heroHeight = window.innerHeight;
      if (currentScrollY > heroHeight * SCROLL_THRESHOLDS.navbarShow) {
        // Scrolled past hero - show navbar
        setIsVisible(true);
      } else {
        // Still in hero area - hide navbar
        setIsVisible(false);
      }

      setLastScrollY(currentScrollY);

      // Detect active section - find which section is closest to viewport top
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        const navbarHeight = getNavbarHeight();
        let closestSection: string | null = null;
        let closestDistance = Infinity;

        // Find which section is closest to the top of viewport (accounting for navbar)
        for (const item of NAVIGATION_ITEMS) {
          const element = document.querySelector(item.href);
          if (element) {
            const rect = element.getBoundingClientRect();
            // Section must be at least partially visible (top < window height and bottom > navbar height)
            if (rect.bottom > navbarHeight) {
              // Distance from navbar bottom to section start
              const distance = Math.max(0, rect.top - navbarHeight);
              // Keep track of section closest to navbar
              if (distance < closestDistance) {
                closestDistance = distance;
                closestSection = item.href;
              }
            }
          }
        }

        if (closestSection) {
          setActiveSection(closestSection);
        }
      }, 10);
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
