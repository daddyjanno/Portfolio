import { useEffect, useState } from 'react';
import { useScrollToElement } from '../../../hooks/useScrollToElement';
import { SCROLL_THRESHOLDS } from '../../../utils/constants';
import { ArrowUpIcon } from '../../../utils/icons';
import styles from './BackToTop.module.scss';

export const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { scrollToTop } = useScrollToElement();

  // Show button when page is scrolled down
  const toggleVisibility = () => {
    setIsVisible(window.scrollY > SCROLL_THRESHOLDS.backToTop);
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
      {/* Arrow up icon - centralized from utils/icons.tsx */}
      <ArrowUpIcon width={20} height={20} />
    </button>
  );
};
