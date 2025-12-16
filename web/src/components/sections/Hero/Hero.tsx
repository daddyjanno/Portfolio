import { useParallax } from '../../../hooks/useParallax';
import { Button } from '../../common/Button/Button';
import { SOCIAL_LINKS } from '../../../utils/constants';
import styles from './Hero.module.scss';

export const Hero = () => {
  const parallaxRef = useParallax(0.3); // Parallax speed: 30% of scroll

  const handleScroll = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    section?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className={styles.hero}>
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
            <Button variant="primary" size="large" onClick={() => handleScroll('projects')}>
              Voir mes projets
            </Button>
            <Button variant="secondary" size="large" onClick={() => handleScroll('contact')}>
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
                {/* GitHub Icon */}
                {link.icon === 'github' && (
                  <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                )}
                {/* LinkedIn Icon */}
                {link.icon === 'linkedin' && (
                  <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.475-2.236-1.986-2.236-1.081 0-1.722.731-2.004 1.438-.103.249-.129.597-.129.946v5.421h-3.554s.05-8.789 0-9.714h3.554v1.375c.428-.66 1.191-1.599 2.894-1.599 2.113 0 3.695 1.381 3.695 4.352v5.586zM5.337 8.855c-1.144 0-1.915-.758-1.915-1.707 0-.951.77-1.708 1.963-1.708 1.192 0 1.915.757 1.937 1.708 0 .949-.745 1.707-1.985 1.707zm1.582 11.597H3.635V9.738h3.284v10.714zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
                  </svg>
                )}
                {/* Email Icon */}
                {link.icon === 'mail' && (
                  <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                    <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                  </svg>
                )}
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
