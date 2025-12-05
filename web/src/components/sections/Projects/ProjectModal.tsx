import { Modal } from '../../common/Modal/Modal';
import { Button } from '../../common/Button/Button';
import type { Project } from '../../../types';
import styles from './ProjectModal.module.scss';

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  return (
    <Modal isOpen={true} onClose={onClose} title={project.title} size="large">
      <div className={styles.modal}>
        <div className={styles.images}>
          <div className={styles.image}>📸 Photo 1</div>
          <div className={styles.image}>📸 Photo 2</div>
        </div>

        <div className={styles.technologies}>
          {project.technologies.map((tech) => (
            <span key={tech} className={styles.tag}>
              {tech}
            </span>
          ))}
        </div>

        <div className={styles.details}>
          <h3>Détails du projet</h3>
          <ul>
            {project.details.map((detail, idx) => (
              <li key={idx}>{detail}</li>
            ))}
          </ul>
        </div>

        <div className={styles.links}>
          {project.demoUrl && project.demoUrl !== '#' && (
            <Button variant="primary" onClick={() => window.open(project.demoUrl)}>
              Visiter le site
            </Button>
          )}
          {project.githubUrl && (
            <Button variant="secondary" onClick={() => window.open(project.githubUrl, '_blank')}>
              Voir le code
            </Button>
          )}
        </div>
      </div>
    </Modal>
  );
};
