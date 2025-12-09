import { useState } from 'react';
import { Modal } from '../../common/Modal/Modal';
import { Button } from '../../common/Button/Button';
import type { Project } from '../../../types';
import styles from './ProjectModal.module.scss';

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);
  return (
    <Modal isOpen={true} onClose={onClose} title={project.title} size="large">
      <div className={styles.modal}>
        <div className={styles.images}>
          {project.images && project.images.length > 0 ? (
            project.images.map((image, idx) => (
              <div
                key={idx}
                className={styles.image}
                onClick={() => setSelectedImageIndex(idx)}
              >
                <img
                  src={image}
                  alt={`${project.title} - Image ${idx + 1}`}
                  className={styles.projectImage}
                />
              </div>
            ))
          ) : (
            <div className={styles.image}>📸 Pas d'image disponible</div>
          )}
        </div>

        {/* Lightbox for enlarged image */}
        {selectedImageIndex !== null && project.images && (
          <div
            className={styles.lightbox}
            onClick={() => setSelectedImageIndex(null)}
          >
            <div className={styles.lightboxContent}>
              <img
                src={project.images[selectedImageIndex]}
                alt={`${project.title} - Image ${selectedImageIndex + 1}`}
                className={styles.lightboxImage}
              />
              <button
                className={styles.lightboxClose}
                onClick={() => setSelectedImageIndex(null)}
                aria-label="Fermer"
              >
                ✕
              </button>
            </div>
          </div>
        )}

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
