import { useEffect, useState } from 'react';
import styles from './BackToTop.module.scss';

export const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down
  const toggleVisibility = () => {
    setIsVisible(window.scrollY > 300);
  };

  // Scroll to top smoothly
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  if (!isVisible) return null;

  return (
    <button
      className={styles.backToTop}
      onClick={scrollToTop}
      aria-label="Back to top"
      title="Back to top"
    >
      {/* Arrow up SVG icon */}
      <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
        <path d="M7 14l5-5 5 5z" />
      </svg>
    </button>
  );
};
