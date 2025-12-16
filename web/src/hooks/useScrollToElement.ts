// Custom hook to handle smooth scrolling to elements
// Centralizes scroll logic to eliminate duplication across components

/**
 * Hook that provides smooth scroll functions
 * Eliminates duplicate scroll logic in Hero, Navbar, and BackToTop components
 */
export const useScrollToElement = () => {
  /**
   * Scroll to a specific section by ID
   * @param sectionId - The ID of the section to scroll to
   */
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  /**
   * Scroll to the top of the page
   */
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return { scrollToSection, scrollToTop };
};
