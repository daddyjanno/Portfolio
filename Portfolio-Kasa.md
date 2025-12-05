![Kasa Banner](https://user.oc-static.com/upload/2023/04/03/1680512368252_Kasa%20logo.png)

# Kasa - Plateforme de Location d'Appartements

> **Application web moderne pour la location d'appartements entre particuliers avec interface réactive et gestion complète des annonces**

---

## 🏠 Aperçu du Projet

Kasa est une single-page application (SPA) moderne développée en tant que freelance pour une plateforme de location d'appartements entre particuliers. L'application offre une expérience utilisateur fluide avec navigation client-side, galerie interactive et composants collapse.

**[🌐 Voir la démo live](https://daddyjanno.github.io/Projet5-Kasa/)** | **[📐 Maquettes Figma](https://www.figma.com/design/2BZEoBhyxt5IwZgRn0wGsL/Kasa_FR?node-id=0-1&p=f&t=75iiPNeBrmFlPMoF-0)**

---

## 📋 Contexte

Une startup de location entre particuliers avait besoin d'une plateforme web performante et moderne pour présenter ses annonces de manière attractive. L'enjeu principal était de combiner une interface utilisateur fluide avec une navigation côté client, tout en respectant les contraintes de design spécifiques et implémenter une galerie interactive avec des règles précises de navigation.

---

## 🎯 Objectifs

- Développer une single page application (SPA) performante avec React et TypeScript
- Implémenter une galerie interactive avec navigation circulaire
- Créer des composants collapse réutilisables et accessibles
- Mettre en place le routing multi-pages avec React Router
- Structurer le projet pour scalabilité et maintenabilité
- Déployer sur GitHub Pages en production
- Respecter les contraintes UX spécifiques des maquettes

---

## 🛠️ Stack Technique Utilisée

![React](https://img.shields.io/badge/React%2019-%2361DAFB.svg?style=for-the-badge&logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-%233178C6.svg?style=for-the-badge&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)
![SCSS](https://img.shields.io/badge/SCSS-%23C6538C.svg?style=for-the-badge&logo=sass&logoColor=white)
![React Router](https://img.shields.io/badge/React%20Router%20v7-%23F27121.svg?style=for-the-badge&logo=react-router&logoColor=white)
![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-%23222222.svg?style=for-the-badge&logo=github-pages&logoColor=white)
![Git](https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white)

---

## 💡 Compétences développées

### Frontend Avancé

- Architecture composants React (composants fonctionnels + hooks)
- Gestion d'état avec React hooks (useState, useEffect, useContext)
- Routing côté client avec React Router v7
- Programmation TypeScript (interfaces, types génériques)
- Styling avancé avec SCSS (mixins, variables, nesting)

### Expérience Utilisateur

- Galerie interactive avec navigation circulaire
- Composants collapse avec animations fluides
- Responsive design et accessibilité
- Gestion des cas limites (une seule image, données vides)

### DevOps et Build

- Vite pour un bundling ultra-optimisé
- Pipeline de déploiement GitHub Pages automatisé
- Linting et code quality avec ESLint
- Build TypeScript optimisé pour production

### Transverses

- Intégration précise de maquettes Figma
- Respect des contraintes fonctionnelles
- Code organisation et scalabilité

---

## ✨ Fonctionnalités Principales

### 1. **Galerie Interactive (Slideshow)**

- Navigation bidirectionnelle (suivant/précédent)
- **Comportement circulaire**: première image ↔ dernière image
- Masquage automatique des contrôles si une seule image
- Images coupées et centrées à hauteur fixe
- Numérotation dynamique (ex: "3/8")

### 2. **Composants Collapse**

- État fermé par défaut à l'initialisation
- Toggle entre ouvert/fermé
- Contenu dynamique et flexible
- Animations CSS fluides

### 3. **Navigation Multi-Pages**

- Page d'accueil (Home) avec listings
- Page détail d'annonce (Rental)
- Page À propos (About)
- Page 404 (ErrorPage)

### 4. **Système de Cartes (Card)**

- Affichage des annonces en grille
- Liens internes vers les détails
- Images responsive

### 5. **Système d'Évaluation (Rating)**

- Affichage étoiles (5 niveaux)
- Composant réutilisable

### 6. **Composants Utility**

- Header/Footer persistants
- Banner/Hero sections
- Avatar propriétaire
- Tags pour les caractéristiques
- Layout wrapper

---

## 📊 Résultats et Livrables

| Aspect          | Résultat                             |
| --------------- | ------------------------------------ |
| **Type**        | Single-Page Application (SPA)        |
| **Pages**       | 4 pages (Home, Rental, About, Error) |
| **Composants**  | 10+ composants React réutilisables   |
| **Langage**     | TypeScript 100% type-safe            |
| **Performance** | Vite optimisation (build < 1s)       |
| **Déploiement** | Live on GitHub Pages                 |
| **Maquettes**   | 100% conformité design Figma         |
| **Linting**     | ESLint configuré et strict           |

---

## 🔧 Perspectives d'Amélioration

### Frontend

- **Animations**: Ajouter Framer Motion pour des transitions plus riches
- **Tests**: Implémenter des tests unitaires (Vitest) et e2e (Cypress)
- **Performance**: Ajouter lazy loading des images et code splitting
- **Accessibility**: Améliorer l'a11y avec aria-labels et keyboard navigation
- **State Management**: Intégrer Redux ou Zustand si complexité croissante

### Features

- **Filtres avancés**: Recherche, tri, filtrage par prix/localisation
- **Pagination**: Paginer les résultats au lieu de tout charger
- **Backend**: Remplacer JSON statique par une API REST
- **Réservation**: Système de réservation/booking intégré
- **Authentification**: Compte utilisateur et profil propriétaire

### DevOps

- **CI/CD**: Actions GitHub pour tests automatiques
- **Analytics**: Intégrer Google Analytics
- **SEO**: SSR (Server-Side Rendering) avec Next.js
- **PWA**: Transformer en Progressive Web App
- **Optimisation**: Image optimization avec WebP

---

## 📚 Ressources

### Repository et Documentation

- **[Repository GitHub](https://github.com/daddyjanno/Projet5-Kasa)** - Code source complet
- **[Démo Live](https://daddyjanno.github.io/Projet5-Kasa/)** - Application en production
- **[Maquettes Figma](https://www.figma.com/design/2BZEoBhyxt5IwZgRn0wGsL/Kasa_FR?node-id=0-1&p=f&t=75iiPNeBrmFlPMoF-0)** - Design du projet

### Structure du Projet

```
Projet5-Kasa/
├── src/
│   ├── components/          # Composants React réutilisables
│   │   ├── Header/          # Navigation header
│   │   ├── Footer/          # Footer persistant
│   │   ├── Slideshow/       # Galerie interactive
│   │   ├── Collapse/        # Composant collapse
│   │   ├── Card/            # Carte annonce
│   │   ├── Rating/          # Système étoiles
│   │   ├── Avatar/          # Avatar propriétaire
│   │   ├── Tag/             # Tags caractéristiques
│   │   ├── Banner/          # Hero section
│   │   └── ...
│   ├── pages/               # Pages de l'application
│   │   ├── Home/            # Accueil
│   │   ├── Rental/          # Détail annonce
│   │   ├── About/           # À propos
│   │   └── ErrorPage/       # 404
│   ├── layouts/             # Layouts de mise en page
│   ├── datas/               # Fichiers JSON statiques
│   ├── assets/              # Images et ressources
│   ├── style/               # Styles SCSS globaux
│   ├── main.tsx             # Entry point
│   └── vite-env.d.ts        # Types Vite
│
├── package.json
├── tsconfig.json
├── vite.config.ts
├── eslint.config.js
└── README.md
```

---

## 🎨 Contraintes Fonctionnelles Respectées

### Galerie (Slideshow)

- ✅ Navigation circulaire (première ↔ dernière image)
- ✅ Masquage des contrôles pour image unique
- ✅ Images coupées et centrées à hauteur fixe
- ✅ Numérotation dynamique

### Collapse

- ✅ Fermés par défaut à l'initialisation
- ✅ Toggle fluide entre états
- ✅ Contenus masqués/visibles

---

## 👨‍💻 Développé par

**Jean-Noël Drugmand** - Développeur Frontend Freelance

### Outils Utilisés

- Visual Studio Code - Éditeur de code
- Git/GitHub - Gestion de versions
- Figma - Spécifications design
- Vite - Build tool
- TypeScript - Langage typed

---

## 📝 Statut du Projet

✅ **Complété et en Production** - Déployé sur GitHub Pages, tous les objectifs atteints.
