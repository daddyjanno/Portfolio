import type { Skill, SoftSkill } from '../types';
import { SkillLogos } from '../utils/skillLogos';

export const SKILLS: Skill[] = [
  {
    category: 'Frontend',
    skills: [
      {
        name: 'HTML5 / CSS3',
        icon: (
          <div style={{ display: 'flex', gap: '0.5rem' }}>
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
          <div style={{ display: 'flex', gap: '0.5rem' }}>
            {/* Git icon */}
            <a href="https://git-scm.com/" target="_blank" rel="noreferrer">
              <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                <path d="M23.546 10.93L13.067 1.452c-.604-.603-1.582-.603-2.188 0L8.708 4.323 10.854 6.469c.643-.217 1.381-.072 1.889.434.509.51.651 1.246.434 1.888l2.122 2.122c.643-.217 1.381-.072 1.889.434.709.708.709 1.855 0 2.563-.708.708-1.855.708-2.563 0-.53-.53-.676-1.314-.413-1.979L12.046 8.654v5.053c.173.090.335.202.474.342.709.708.709 1.855 0 2.563-.708.708-1.855.708-2.563 0-.708-.708-.708-1.855 0-2.563.173-.172.37-.305.574-.396V8.366c-.204-.091-.401-.224-.574-.396-.530-.53-.676-1.314-.413-1.979L7.431 4.244 1.454 10.22c-.603.604-.603 1.582 0 2.188l10.479 10.479c.604.603 1.582.603 2.188 0l10.424-10.424c.603-.604.603-1.582 0-2.188" />
              </svg>
            </a>
            {/* GitHub icon */}
            <a href="https://github.com/" target="_blank" rel="noreferrer">
              <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
          </div>
        ),
      },
      {
        name: 'Jest / TDD',
        icon: (
          <a href="https://jestjs.io/" target="_blank" rel="noreferrer">
            <img src="/jest-svgrepo-com.svg" alt="Jest" style={{ width: '24px', height: '24px' }} />
          </a>
        ),
      },
      {
        name: 'ESLint / Prettier',
        icon: (
          <div style={{ display: 'flex', gap: '0.5rem' }}>
            {/* ESLint icon */}
            <a href="https://eslint.org/" target="_blank" rel="noreferrer">
              <img
                src="/eslint-svgrepo-com.svg"
                alt="ESLint"
                style={{ width: '24px', height: '24px' }}
              />
            </a>
            {/* Prettier icon */}
            <a href="https://prettier.io/" target="_blank" rel="noreferrer">
              <img
                src="/prettier-svgrepo-com.svg"
                alt="Prettier"
                style={{ width: '24px', height: '24px' }}
              />
            </a>
          </div>
        ),
      },
      {
        name: 'Vite / Webpack',
        icon: (
          <div style={{ display: 'flex', gap: '0.5rem' }}>
            {/* Vite icon */}
            <a href="https://vitejs.dev/" target="_blank" rel="noreferrer">
              <img src="/vite.svg" alt="Vite" style={{ width: '24px', height: '24px' }} />
            </a>
            {/* Webpack icon */}
            <a href="https://webpack.js.org/" target="_blank" rel="noreferrer">
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
          <div style={{ display: 'flex', gap: '0.5rem' }}>
            {/* Claude Code icon */}
            <a href="https://claude.ai/code" target="_blank" rel="noreferrer">
              <img
                src="/claude-ai-icon.svg"
                alt="Claude Code"
                style={{ width: '24px', height: '24px' }}
              />
            </a>
            {/* Windsurf icon */}
            <a href="https://codeium.com/windsurf" target="_blank" rel="noreferrer">
              <img
                src="/windsurf-icon.svg"
                alt="Windsurf"
                style={{ width: '24px', height: '24px', filter: 'var(--windsurf-filter)' }}
              />
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
          <div style={{ display: 'flex', gap: '0.5rem' }}>
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
