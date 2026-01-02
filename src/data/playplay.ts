import type { Project } from '../types';
import { getAssetPath } from '../utils/constants';

// PlayPlay Experience - Creative Developer
export const PLAYPLAY_EXPERIENCE: Project = {
  id: 'playplay',
  title: 'PlayPlay - Creative Developer',
  shortDescription: 'La plateforme vidéo des entreprises',
  description:
    "En tant que Creative Developer chez PlayPlay, je travaille sur le développement de composants et d'assets réutilisables et interactifs et d'expériences visuelles immersives.\n La mission principale est de créer des éléments d'interface innovants et engageants, en combinant des animations fluides avec des performances optimales. \nExpertise en motion design, rendu 2D haute performance et intégration créative de maquettes complexes.",
  technologies: ['TypeScript', 'JavaScript', 'Vue.js', 'Pixi.js', 'Anime.js'],
  category: 'Fullstack',
  images: [getAssetPath('/actual/PP1.webp'), getAssetPath('/actual/PP2.webp'), getAssetPath('/actual/PP3.webp')],
  details: [
    'Conception et implémentation de composants interactifs avec animations avancées',
    "Création d'expériences visuelles dynamiques et engageantes avec motion design",
    "Intégration d'animations avancées avec Anime.js et timelines complexes",
    'Utilisation de Pixi.js pour le rendu 2D haute performance et optimisation GPU',
    'Développement TypeScript avec typage strict et architecture scalable',
    "Composants Vue.js réactifs avec gestion d'état synchronisée",
    'Optimisation des outils de développement',
    'Rédaction des tests automatisés et conduite des phases de recette',
    'Gestion des performances visuelles et optimization des animations à 60fps',
    'Collaboration design-développement avec implémentation pixel-perfect',
  ],
  demoUrl: 'https://playplay.com/fr',
  githubUrl: '#',
  featured: false,
};
