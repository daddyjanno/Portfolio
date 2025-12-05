import { Card } from '../../common/Card/Card';
import type { Project } from '../../../types';
import styles from './ProjectCard.module.scss';

interface ProjectCardProps {
  project: Project;
  onOpen: () => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onOpen }) => {
  return (
    <Card hoverable onClick={onOpen} className={styles.card} role="button" tabIndex={0} onKeyPress={(e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        onOpen();
      }
    }}>
      <div className={styles.image}>
        <div className={styles.placeholder}>📸</div>
      </div>

      <div className={styles.content}>
        <h3 className={styles.title}>{project.title}</h3>
        <p className={styles.description}>{project.shortDescription}</p>

        <div className={styles.technologies}>
          {project.technologies.slice(0, 3).map((tech) => (
            <span key={tech} className={styles.tag}>
              {tech}
            </span>
          ))}
          {project.technologies.length > 3 && (
            <span className={styles.tag}>+{project.technologies.length - 3}</span>
          )}
        </div>

        <div className={styles.footer}>
          <span className={styles.cta}>Voir le projet →</span>
        </div>
      </div>
    </Card>
  );
};
