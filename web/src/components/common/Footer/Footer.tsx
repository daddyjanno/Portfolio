import { GithubIcon, LinkedinIcon, EmailIcon } from '../../../utils/icons';
import styles from './Footer.module.scss';

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.socials}>
            {/* Icon components - centralized from utils/icons.tsx */}
            <a href="mailto:jn.drugmand@gmail.com" aria-label="Email">
              <EmailIcon width={24} height={24} />
            </a>

            <a
              href="https://github.com/daddyjanno"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <GithubIcon width={24} height={24} />
            </a>

            <a
              href="https://linkedin.com/in/jean-noel-drugmand"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <LinkedinIcon width={24} height={24} />
            </a>
          </div>
          <p className={styles.copyright}>&copy; 2025 Jean-Noël Drugmand. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
