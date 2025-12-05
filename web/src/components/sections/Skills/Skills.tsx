import { useIntersectionObserver } from '../../../hooks/useIntersectionObserver';
import { SKILLS, SOFT_SKILLS } from '../../../data/skills';
import { Card } from '../../common/Card/Card';
import styles from './Skills.module.scss';

export const Skills = () => {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.2 });

  return (
    <section id="skills" className={styles.skills} ref={ref}>
      <div className={styles.container}>
        <h2 className={styles.title}>Compétences</h2>

        {/* Hard Skills */}
        <div className={styles.skillsGrid}>
          {SKILLS.map((skillGroup, idx) => (
            <Card
              key={skillGroup.category}
              className={`${styles.skillCard} ${isVisible ? styles.visible : ''}`}
              style={{ transitionDelay: `${idx * 100}ms` }}
            >
              <h3 className={styles.category}>{skillGroup.category}</h3>
              <ul className={styles.skillList}>
                {skillGroup.skills.map((skill) => (
                  <li key={skill.name} className={styles.skillItem}>
                    <div className={styles.skillContent}>
                      {skill.icon && <span className={styles.skillIcon}>{skill.icon}</span>}
                      <span className={styles.name}>{skill.name}</span>
                    </div>
                    <span className={`${styles.level} ${styles[skill.level.toLowerCase()]}`}>
                      {skill.level}
                    </span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>

        {/* Soft Skills */}
        <div className={styles.softSkillsSection}>
          <h3 className={styles.softSkillsTitle}>Soft Skills</h3>
          <div className={styles.softSkillsGrid}>
            {SOFT_SKILLS.map((skill, idx) => (
              <Card
                key={skill.name}
                className={`${styles.softSkillCard} ${isVisible ? styles.visible : ''}`}
                style={{ transitionDelay: `${(SKILLS.length + idx) * 100}ms` }}
              >
                <h4>{skill.name}</h4>
                <p>{skill.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
