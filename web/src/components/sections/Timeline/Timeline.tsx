import { useIntersectionObserver } from '../../../hooks/useIntersectionObserver';
import { TIMELINE } from '../../../data/timeline';
import styles from './Timeline.module.scss';

export const Timeline = () => {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.2 });

  return (
    <section id="timeline" className={styles.timeline} ref={ref}>
      <div className={styles.container}>
        <h2 className={styles.title}>Parcours</h2>

        <div className={styles.timelineWrapper}>
          <div className={styles.line} />

          <div className={styles.events}>
            {TIMELINE.map((item, idx) => (
              <div
                key={item.id}
                className={`${styles.event} ${idx % 2 === 0 ? styles.left : styles.right} ${isVisible ? styles.visible : ''}`}
                style={{ transitionDelay: `${idx * 150}ms` }}
              >
                <div className={styles.dot} />

                <div className={styles.content}>
                  <div className={styles.type}>{item.type}</div>
                  <h3 className={styles.eventTitle}>{item.title}</h3>
                  {item.company && <p className={styles.company}>{item.company}</p>}

                  <p className={styles.period}>
                    {item.startDate}
                    {item.endDate && ` - ${item.endDate}`}
                  </p>

                  <p className={styles.description}>{item.description}</p>

                  {item.stack && item.stack.length > 0 && (
                    <div className={styles.stack}>
                      {item.stack.map((tech) => (
                        <span key={tech} className={styles.badge}>
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
