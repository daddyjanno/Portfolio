import { useState } from 'react';
import { Modal } from '../../common/Modal/Modal';
import { Button } from '../../common/Button/Button';
import { Slideshow } from './Slideshow';
import type { Project } from '../../../types';
import styles from './ProjectModal.module.scss';

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  return (
    <Modal isOpen={true} onClose={onClose} title={project.title} size="large">
      <div className={styles.modal}>
        {/* Slideshow */}
        {project.images && project.images.length > 0 ? (
          <Slideshow
            images={project.images}
            title={project.title}
            currentIndex={currentImageIndex}
            onIndexChange={setCurrentImageIndex}
            onImageClick={() => setIsLightboxOpen(true)}
          />
        ) : (
          <div className={styles.noImage}>📸 Pas d'image disponible</div>
        )}

        {/* Lightbox Modal */}
        {isLightboxOpen && project.images && (
          <Modal
            isOpen={isLightboxOpen}
            onClose={() => setIsLightboxOpen(false)}
            // title={`Image ${currentImageIndex + 1}/${project.images.length}`}
            size="large"
          >
            <div className={styles.lightboxContainer}>
              <img
                src={project.images[currentImageIndex]}
                alt={`${project.title} - Image ${currentImageIndex + 1}`}
                className={styles.lightboxImage}
              />
            </div>
          </Modal>
        )}

        {/* Project Description */}
        {project.description && (
          <div className={styles.description}>
            <p>{project.description}</p>
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
            {project.details.map((detail, idx) => {
              // Extract URL from markdown link format [text](url)
              const linkMatch = detail.match(/\[(.*?)\]\((.*?)\)/);

              if (linkMatch) {
                return (
                  <a
                    key={idx}
                    href={linkMatch[2]}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: 'none', color: 'inherit' }}
                  >
                    <li style={{ color: 'var(--color-primary)', cursor: 'pointer' }}>
                      {linkMatch[1]}
                    </li>
                  </a>
                );
              }

              return <li key={idx}>{detail}</li>;
            })}
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
