import { useState } from 'react';
import { useIntersectionObserver } from '../../../hooks/useIntersectionObserver';
import { PROJECTS } from '../../../data/projects';
import { ProjectCard } from './ProjectCard';
import { ProjectModal } from './ProjectModal';
import styles from './Projects.module.scss';

type Category = 'Tous' | 'Frontend' | 'Backend' | 'Fullstack';

const CATEGORIES: Category[] = ['Tous', 'Frontend', 'Backend', 'Fullstack'];

export const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState<Category>('Tous');
  const [selectedProject, setSelectedProject] = useState<string | null>(null);
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.1 });

  // Map old categories to new ones for filtering
  const getCategoryFilter = (category: string): string => {
    const categoryMap: Record<string, string> = {
      React: 'Frontend',
      Fullstack: 'Fullstack',
      Optimisation: 'Frontend',
    };
    return categoryMap[category] || category;
  };

  const filteredProjects =
    selectedCategory === 'Tous'
      ? PROJECTS
      : PROJECTS.filter((p) => getCategoryFilter(p.category) === selectedCategory);

  const currentProject = PROJECTS.find((p) => p.id === selectedProject);

  return (
    <section id="projects" className={styles.projects} ref={ref} role="region" aria-labelledby="projects-heading">
      <div className={styles.container}>
        <h2 id="projects-heading" className={styles.title}>Projets</h2>

        {/* Filter */}
        <div className={styles.filterContainer}>
          {CATEGORIES.map((category) => (
            <button
              key={category}
              className={`${styles.filterBtn} ${selectedCategory === category ? styles.active : ''}`}
              onClick={() => setSelectedCategory(category)}
              aria-pressed={selectedCategory === category}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className={styles.grid}>
          {filteredProjects.map((project, idx) => (
            <div
              key={project.id}
              className={`${styles.gridItem} ${isVisible ? styles.visible : ''}`}
              style={{ transitionDelay: `${idx * 100}ms` }}
            >
              <ProjectCard project={project} onOpen={() => setSelectedProject(project.id)} />
            </div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className={styles.empty}>
            <p>Aucun projet trouvé dans cette catégorie.</p>
          </div>
        )}
      </div>

      {/* Modal */}
      {currentProject && (
        <ProjectModal project={currentProject} onClose={() => setSelectedProject(null)} />
      )}
    </section>
  );
};
