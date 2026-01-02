import type { Skill, SoftSkill } from '../types';
import { SkillLogos } from '../utils/skillLogos';
import { GitIcon, GithubIcon } from '../utils/icons';
import { getAssetPath } from '../utils/constants';
import styles from './skills.module.scss';

export const SKILLS: Skill[] = [
  {
    category: 'Frontend',
    skills: [
      {
        name: 'HTML5 / CSS3',
        icon: (
          <div className={styles.iconGroup}>
            {SkillLogos.html5}
            {SkillLogos.css3}
          </div>
        ),
      },
      { name: 'JavaScript (ES6+)', icon: SkillLogos.javascript },
      { name: 'TypeScript', icon: SkillLogos.typescript },
      { name: 'React', icon: SkillLogos.react },
      { name: 'Redux / Redux Toolkit', icon: SkillLogos.redux },
      { name: 'SASS', icon: SkillLogos.sass },
      { name: 'Styled-Components', icon: SkillLogos.styledComponents },
      { name: 'Tailwind CSS', icon: SkillLogos.tailwindcss },
    ],
  },
  {
    category: 'Backend',
    skills: [
      { name: 'Node.js', icon: SkillLogos.nodejs },
      { name: 'Express', icon: SkillLogos.express },
      { name: 'Ruby', icon: SkillLogos.ruby },
      { name: 'Ruby on Rails', icon: SkillLogos.rails },
      { name: 'SQL / PostgreSQL', icon: SkillLogos.postgresql },
      { name: 'MongoDB', icon: SkillLogos.mongodb },
      { name: 'MySQL', icon: SkillLogos.mysql },
    ],
  },
  {
    category: 'Tools',
    skills: [
      {
        name: 'Git / GitHub',
        icon: (
          <div className={styles.iconGroup}>
            {/* Icon components - centralized from utils/icons.tsx */}
            <a href="https://git-scm.com/" target="_blank" rel="noreferrer" aria-label="Git - Version control system" className={styles.iconLink}>
              <GitIcon width={24} height={24} />
            </a>
            <a href="https://github.com/" target="_blank" rel="noreferrer" aria-label="GitHub - Code repository platform" className={styles.iconLink}>
              <GithubIcon width={24} height={24} />
            </a>
          </div>
        ),
      },
      {
        name: 'Jest / TDD',
        icon: (
          <a href="https://jestjs.io/" target="_blank" rel="noreferrer" aria-label="Jest - Testing framework" className={styles.iconLink}>
            <img src={getAssetPath('/jest-svgrepo-com.svg')} alt="Jest" />
          </a>
        ),
      },
      {
        name: 'ESLint / Prettier',
        icon: (
          <div className={styles.iconGroup}>
            {/* ESLint icon */}
            <a href="https://eslint.org/" target="_blank" rel="noreferrer" aria-label="ESLint - Code linter" className={styles.iconLink}>
              <img src={getAssetPath('/eslint-svgrepo-com.svg')} alt="ESLint" />
            </a>
            {/* Prettier icon */}
            <a href="https://prettier.io/" target="_blank" rel="noreferrer" aria-label="Prettier - Code formatter" className={styles.iconLink}>
              <img src={getAssetPath('/prettier-svgrepo-com.svg')} alt="Prettier" />
            </a>
          </div>
        ),
      },
      {
        name: 'Vite / Webpack',
        icon: (
          <div className={styles.iconGroup}>
            {/* Vite icon */}
            <a href="https://vitejs.dev/" target="_blank" rel="noreferrer" className={styles.iconLink}>
              <img src={getAssetPath('/vite.svg')} alt="Vite" />
            </a>
            {/* Webpack icon */}
            <a href="https://webpack.js.org/" target="_blank" rel="noreferrer" aria-label="Webpack - Module bundler" className={styles.iconLink}>
              <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                <path d="M22.67 11.5l-10-6v4.43l5.57 3.22-5.57 3.22v4.43l10-6zM1.33 11.5l10-6v4.43L5.76 13.15l5.57 3.22v4.43l-10-6zm9.34-9L2 6.5v11l8.67 5.5V2.5z" />
              </svg>
            </a>
          </div>
        ),
      },
      {
        name: 'Claude Code / Windsurf',
        icon: (
          <div className={styles.iconGroup}>
            {/* Claude Code icon */}
            <a href="https://claude.ai/code" target="_blank" rel="noreferrer" className={styles.iconLink}>
              <img src={getAssetPath('/claude-ai-icon.svg')} alt="Claude Code" />
            </a>
            {/* Windsurf icon */}
            <a href="https://codeium.com/windsurf" target="_blank" rel="noreferrer" className={`${styles.iconLink} ${styles.windSurfIcon}`}>
              <img src={getAssetPath('/windsurf-icon.svg')} alt="Windsurf" />
            </a>
          </div>
        ),
      },
    ],
  },
  {
    category: 'Creative',
    skills: [
      { name: 'After Effects', icon: SkillLogos.aftereffects },
      { name: 'Photoshop', icon: SkillLogos.photoshop },
      { name: 'Figma', icon: SkillLogos.figma },
      {
        name: 'Premiere Pro / Final Cut',
        icon: (
          <div className={styles.iconGroup}>
            {SkillLogos.premierepro}
            {SkillLogos.finalcut}
          </div>
        ),
      },
      { name: 'Avid', icon: SkillLogos.avid },
    ],
  },
];

export const SOFT_SKILLS: SoftSkill[] = [
  {
    name: 'Rigueur',
    description: 'Exigence de qualité et politique "zéro bug"',
  },
  {
    name: 'Autonomie',
    description: '9 ans en freelance, gestion de projets',
  },
  {
    name: "Esprit d'équipe",
    description: 'Management de 17 collaborateurs chez Eurosport',
  },
  {
    name: 'Pilotage de projets',
    description: 'Pilotage des projets de diffusions, analyse des besoins clients',
  },
];
