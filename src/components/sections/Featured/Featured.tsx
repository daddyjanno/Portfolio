import { useState } from 'react';
import { useIntersectionObserver } from '../../../hooks/useIntersectionObserver';
import { Button } from '../../common/Button/Button';
import { Slideshow } from '../Projects/Slideshow';
import { PLAYPLAY_EXPERIENCE } from '../../../data/playplay';
import styles from './Featured.module.scss';

export const Featured = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.3 });

  return (
    <section id="featured" className={styles.featured} ref={ref}>
      <div className={styles.container}>
        <div className={`${styles.content} ${isVisible ? styles.visible : ''}`}>
          <h2 className={styles.title}>Actualités</h2>

          {/* Short Description */}
          {PLAYPLAY_EXPERIENCE.shortDescription && (
            <div className={styles.shortDescriptionWrapper}>
              <img src="/PlayPlay.svg" alt="PlayPlay" className={styles.playplayIcon} />
              <h3 className={styles.shortDescription}>{PLAYPLAY_EXPERIENCE.shortDescription}</h3>
            </div>
          )}

          {/* Slideshow */}
          <div className={styles.slideshowWrapper}>
            {PLAYPLAY_EXPERIENCE.images && PLAYPLAY_EXPERIENCE.images.length > 0 ? (
              <Slideshow
                images={PLAYPLAY_EXPERIENCE.images}
                title={PLAYPLAY_EXPERIENCE.title}
                currentIndex={currentImageIndex}
                onIndexChange={setCurrentImageIndex}
              />
            ) : (
              <div className={styles.noImage}>📸 Pas d'image disponible</div>
            )}
          </div>

          {/* Project Title */}
          <h3 className={styles.projectTitle}>{PLAYPLAY_EXPERIENCE.title}</h3>

          {/* Description */}
          {PLAYPLAY_EXPERIENCE.description && (
            <div className={styles.description}>
              <p>{PLAYPLAY_EXPERIENCE.description}</p>
            </div>
          )}

          {/* Technologies */}
          <div className={styles.technologies}>
            {PLAYPLAY_EXPERIENCE.technologies.map((tech) => (
              <span key={tech} className={styles.tag}>
                {tech}
              </span>
            ))}
          </div>

          {/* Details */}
          <div className={styles.details}>
            <h4>Points clés de l'expérience</h4>
            <ul>
              {PLAYPLAY_EXPERIENCE.details.map((detail, idx) => (
                <li key={idx}>{detail}</li>
              ))}
            </ul>
          </div>

          {/* Demo Button */}
          {PLAYPLAY_EXPERIENCE.demoUrl && PLAYPLAY_EXPERIENCE.demoUrl !== '#' && (
            <div className={styles.cta}>
              <Button
                variant="primary"
                onClick={() => window.open(PLAYPLAY_EXPERIENCE.demoUrl)}
              >
                Visiter le site
              </Button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
