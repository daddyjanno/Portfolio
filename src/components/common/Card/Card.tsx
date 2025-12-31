import React from 'react';
import styles from './Card.module.scss';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  hoverable?: boolean;
  padding?: 'small' | 'medium' | 'large';
  children: React.ReactNode;
}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, hoverable = false, padding = 'medium', children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={`${styles.card} ${hoverable ? styles.hoverable : ''} ${styles[`padding-${padding}`]} ${className || ''}`}
        {...props}
      >
        {children}
      </div>
    );
  },
);

Card.displayName = 'Card';
