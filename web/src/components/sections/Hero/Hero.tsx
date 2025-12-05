import { Button } from '../../common/Button/Button';
import { SOCIAL_LINKS } from '../../../utils/constants';
import styles from './Hero.module.scss';

export const Hero = () => {
  const handleScroll = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    section?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.avatar}>
            <img
              src="/jnd-avatar.png"
              alt="Jean-Noël Drugmand"
              className={styles.avatarImage}
            />
          </div>
          <h1 className={styles.title}>Jean-Noël Drugmand</h1>
          <p className={styles.subtitle}>Creative Developer | Fullstack JavaScript</p>
          <p className={styles.description}>
            Développeur fullstack passionné par la création d'expériences web performantes et engageantes
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
                {link.name}
              </a>
            ))}
          </div>
        </div>

        <div className={styles.scrollIndicator}>
          <div className={styles.dot} />
        </div>
      </div>
    </section>
  );
};
