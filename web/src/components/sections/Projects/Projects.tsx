import { useState } from 'react';
import { useIntersectionObserver } from '../../../hooks/useIntersectionObserver';
import { PROJECTS } from '../../../data/projects';
import { ProjectCard } from './ProjectCard';
import { ProjectModal } from './ProjectModal';
import styles from './Projects.module.scss';

export const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<string | null>(null);
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.1 });

  const currentProject = PROJECTS.find((p) => p.id === selectedProject);

  return (
    <section id="projects" className={styles.projects} ref={ref}>
      <div className={styles.container}>
        <h2 className={styles.title}>Projets</h2>

        {/* Projects Grid */}
        <div className={styles.grid}>
          {PROJECTS.map((project, idx) => (
            <div
              key={project.id}
              className={`${styles.gridItem} ${isVisible ? styles.visible : ''}`}
              style={{ transitionDelay: `${idx * 100}ms` }}
            >
              <ProjectCard project={project} onOpen={() => setSelectedProject(project.id)} />
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {currentProject && (
        <ProjectModal project={currentProject} onClose={() => setSelectedProject(null)} />
      )}
    </section>
  );
};
