/* Application constants */

export const CONTACT_INFO = {
  email: 'jn.drugmand@gmail.com',
  github: 'https://github.com/daddyjanno',
  linkedin: 'https://www.linkedin.com/in/jean-noel-drugmand/',
  location: 'Île-de-France',
};

export const SUBJECT_OPTIONS = [
  'Opportunité professionnelle',
  'Mission freelance',
  'Collaboration',
  'Autre',
] as const;

export const NAVIGATION_ITEMS = [
  { label: 'Accueil', href: '#hero' },
  { label: 'À propos', href: '#about' },
  { label: 'Actualités', href: '#featured' },
  { label: 'Compétences', href: '#skills' },
  { label: 'Projets', href: '#projects' },
  { label: 'Parcours', href: '#timeline' },
  { label: 'Contact', href: '#contact' },
];

export const SOCIAL_LINKS = [
  {
    name: 'GitHub',
    url: CONTACT_INFO.github,
    icon: 'github',
    label: 'Visitez mon profil GitHub',
  },
  {
    name: 'LinkedIn',
    url: CONTACT_INFO.linkedin,
    icon: 'linkedin',
    label: 'Visitez mon profil LinkedIn',
  },
  {
    name: 'Email',
    url: `mailto:${CONTACT_INFO.email}`,
    icon: 'mail',
    label: 'Envoyez-moi un email',
  },
];

export const BREAKPOINTS = {
  mobile: 320,
  tablet: 768,
  desktop: 1024,
  wide: 1280,
};

export const ANIMATION_DURATION = {
  fast: 200,
  normal: 300,
  slow: 500,
};

/* Scroll-based thresholds */
export const SCROLL_THRESHOLDS = {
  backToTop: 300, // Show back-to-top button after 300px scroll
  navbarShow: 0.3, // Show navbar after scrolling 30% of viewport height
};

/* Parallax effects */
export const PARALLAX_SPEEDS = {
  heroBackground: 0.3, // Hero background parallax speed (30% of scroll)
};

/* Form validation patterns */
export const VALIDATION = {
  emailRegex: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
};

/**
 * Get the correct asset path taking into account Vite's base URL configuration
 * This is necessary for GitHub Pages deployment where the base is /Portfolio/
 */
export const getAssetPath = (path: string): string => {
  const base = import.meta.env.BASE_URL;
  // Remove leading slash if present to avoid double slashes
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  return `${base}${cleanPath}`;
};
