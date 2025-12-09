import { useEffect, useRef, useState } from 'react';

// Initialize theme on first load without triggering multiple renders
const initializeTheme = () => {
  if (typeof window === 'undefined') return { isDark: false, theme: 'light' };

  const saved = localStorage.getItem('theme');
  if (saved) {
    return { isDark: saved === 'dark', theme: saved };
  }

  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const theme = prefersDark ? 'dark' : 'light';
  localStorage.setItem('theme', theme);
  return { isDark: prefersDark, theme };
};

export const useDarkMode = () => {
  const [isDark, setIsDark] = useState(() => initializeTheme().isDark);
  const isInitialized = useRef(false);

  useEffect(() => {
    // Apply theme to DOM
    const theme = isDark ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', theme);
    isInitialized.current = true;
  }, [isDark]);

  const toggleDarkMode = () => {
    const newDark = !isDark;
    setIsDark(newDark);
    const theme = newDark ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  };

  return { isDark, toggleDarkMode };
};
