import { useParallax } from '../../../hooks/useParallax';
import { useScrollToElement } from '../../../hooks/useScrollToElement';
import { Button } from '../../common/Button/Button';
import { SOCIAL_LINKS, PARALLAX_SPEEDS } from '../../../utils/constants';
import { GithubIcon, LinkedinIcon, EmailIcon } from '../../../utils/icons';
import styles from './Hero.module.scss';

export const Hero = () => {
  const parallaxRef = useParallax(PARALLAX_SPEEDS.heroBackground);
  const { scrollToSection } = useScrollToElement();

  return (
    <section id="hero" className={styles.hero}>
      {/* Background Image Layer with Parallax */}
      <div className={styles.heroBackground} ref={parallaxRef}>
        <img src="/Hero.webp" alt="Hero background" loading="lazy" />
      </div>

      {/* Content Layer */}
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.avatar}>
            <picture>
              <source srcSet="/jnd-avatar.webp" type="image/webp" />
              <img src="/jnd-avatar.webp" alt="Jean-Noël Drugmand" className={styles.avatarImage} />
            </picture>
          </div>
          <h1 className={styles.title}>Jean-Noël Drugmand</h1>
          <p className={styles.subtitle}>Creative Developer | Fullstack JavaScript</p>
          <p className={styles.description}>
            Développeur fullstack passionné par la création d'expériences web performantes et
            engageantes
          </p>

          <div className={styles.ctas}>
            <Button variant="primary" size="large" onClick={() => scrollToSection('projects')}>
              Voir mes projets
            </Button>
            <Button variant="secondary" size="large" onClick={() => scrollToSection('contact')}>
              Me contacter
            </Button>
          </div>

          <div className={styles.socials}>
            {SOCIAL_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                title={link.label}
              >
                {/* Icon components - centralized from utils/icons.tsx */}
                {link.icon === 'github' && <GithubIcon width={24} height={24} />}
                {link.icon === 'linkedin' && <LinkedinIcon width={24} height={24} />}
                {link.icon === 'mail' && <EmailIcon width={24} height={24} />}
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className={styles.scrollIndicator}>
        <img src="/scroll-down.svg" alt="Scroll down" className={styles.scrollIcon} />
      </div>
    </section>
  );
};
