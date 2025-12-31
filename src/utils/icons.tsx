// Centralized SVG icon components to eliminate duplication across the application
// Icons are reusable components with consistent styling

interface IconProps {
  width?: number;
  height?: number;
  className?: string;
}

/**
 * GitHub Icon Component
 * Used in: Hero, Footer, Skills sections
 */
export const GithubIcon = ({ width = 24, height = 24, className }: IconProps) => (
  <svg viewBox="0 0 24 24" width={width} height={height} fill="currentColor" className={className}>
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
  </svg>
);

/**
 * LinkedIn Icon Component
 * Used in: Hero, Footer sections
 */
export const LinkedinIcon = ({ width = 24, height = 24, className }: IconProps) => (
  <svg viewBox="0 0 24 24" width={width} height={height} fill="currentColor" className={className}>
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.475-2.236-1.986-2.236-1.081 0-1.722.731-2.004 1.438-.103.249-.129.597-.129.946v5.421h-3.554s.05-8.789 0-9.714h3.554v1.375c.428-.66 1.191-1.599 2.894-1.599 2.113 0 3.695 1.381 3.695 4.352v5.586zM5.337 8.855c-1.144 0-1.915-.758-1.915-1.707 0-.951.77-1.708 1.963-1.708 1.192 0 1.915.757 1.937 1.708 0 .949-.745 1.707-1.985 1.707zm1.582 11.597H3.635V9.738h3.284v10.714zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
  </svg>
);

/**
 * Email/Mail Icon Component
 * Used in: Hero, Footer sections
 */
export const EmailIcon = ({ width = 24, height = 24, className }: IconProps) => (
  <svg viewBox="0 0 24 24" width={width} height={height} fill="currentColor" className={className}>
    <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
  </svg>
);

/**
 * Git Icon Component
 * Used in: Skills section
 */
export const GitIcon = ({ width = 24, height = 24, className }: IconProps) => (
  <svg viewBox="0 0 24 24" width={width} height={height} fill="currentColor" className={className}>
    <path d="M23.546 10.93L13.067 1.452c-.604-.603-1.582-.603-2.188 0L8.708 4.323 10.854 6.469c.643-.217 1.381-.072 1.889.434.509.51.651 1.246.434 1.888l2.122 2.122c.643-.217 1.381-.072 1.889.434.709.708.709 1.855 0 2.563-.708.708-1.855.708-2.563 0-.53-.53-.676-1.314-.413-1.979L12.046 8.654v5.053c.173.09.335.202.474.342.709.708.709 1.855 0 2.563-.708.708-1.855.708-2.563 0-.708-.708-.708-1.855 0-2.563.173-.172.37-.305.574-.396V8.366c-.204-.091-.401-.224-.574-.396-.53-.53-.676-1.314-.413-1.979L7.431 4.244 1.454 10.22c-.603.604-.603 1.582 0 2.188l10.479 10.479c.604.603 1.582.603 2.188 0l10.424-10.424c.603-.604.603-1.582 0-2.188" />
  </svg>
);

/**
 * Arrow Up Icon Component
 * Used in: BackToTop button
 */
export const ArrowUpIcon = ({ width = 24, height = 24, className }: IconProps) => (
  <svg viewBox="0 0 24 24" width={width} height={height} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <line x1="12" y1="19" x2="12" y2="5" />
    <polyline points="5 12 12 5 19 12" />
  </svg>
);
