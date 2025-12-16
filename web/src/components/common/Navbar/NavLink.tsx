import React from 'react';
import styles from './Navbar.module.scss';

interface NavLinkProps {
  href: string;
  label: string;
  isActive: boolean;
  onClick: (href: string) => void;
  variant?: 'desktop' | 'mobile';
}

/**
 * NavLink component - Reusable navigation link with active state highlighting
 * Eliminates duplication between desktop and mobile navigation
 * @param href - The section to scroll to
 * @param label - The display text
 * @param isActive - Whether this link's section is currently active
 * @param onClick - Callback when clicked
 * @param variant - 'desktop' for underline style, 'mobile' for highlight style
 */
export const NavLink: React.FC<NavLinkProps> = ({
  href,
  label,
  isActive,
  onClick,
  variant = 'desktop',
}) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    onClick(href);
  };

  return (
    <a
      href={href}
      className={`${isActive ? styles.active : ''} ${variant === 'mobile' ? styles.mobileLink : ''}`}
      onClick={handleClick}
    >
      {label}
    </a>
  );
};
