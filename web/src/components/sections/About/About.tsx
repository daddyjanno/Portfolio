import { useIntersectionObserver } from '../../../hooks/useIntersectionObserver';
import styles from './About.module.scss';

export const About = () => {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.3 });

  return (
    <section id="about" className={styles.about} ref={ref}>
      <div className={styles.container}>
        <div className={`${styles.content} ${isVisible ? styles.visible : ''}`}>
          <h2 className={styles.title}>À propos</h2>

          <div className={styles.text}>
            <p>
              Creative Developer passionné par le développement web moderne, actuellement en
              alternance chez PlayPlay où je développe des composants et assets avec TypeScript,
              PixiJS et AnimeJS, et optimise l'expérience utilisateur.
            </p>

            <p>
              Mon parcours atypique combine 3 ans en management chez Eurosport (coordination
              d'équipes de 17 personnes, gestion de 1000+ diffusions live/mois), 4 ans en direction
              technique pour les contenus digitaux et 9 ans en création audiovisuelle freelance.
            </p>

            <p>
              Cette reconversion dans le développement web me permet d'allier rigueur
              opérationnelle, esprit d'équipe et créativité technique. J'applique au code les mêmes
              exigences de qualité et de performance que dans mes précédentes expériences.
            </p>

            <p>
              Formé au Wagon et chez OpenClassrooms, je maîtrise la stack JavaScript moderne (React,
              TypeScript, Node.js) et applique une approche "zero bug" dans mes développements.
            </p>
          </div>

          <div className={styles.timeline}>
            <div className={styles.item}>
              <div className={styles.marker}>🎬</div>
              <div>
                <h3>Audiovisuel & Création</h3>
                <p>15 ans d'expérience</p>
              </div>
            </div>

            <div className={styles.arrow}>→</div>

            <div className={styles.item}>
              <div className={styles.marker}>📚</div>
              <div>
                <h3>Formations Tech</h3>
                <p>Le Wagon, OpenClassrooms</p>
              </div>
            </div>

            <div className={styles.arrow}>→</div>

            <div className={styles.item}>
              <div className={styles.marker}>💻</div>
              <div>
                <h3>Creative Developer</h3>
                <p>PlayPlay, Aujourd'hui</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
