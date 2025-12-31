# Portfolio - Jean-Noël Drugmand

Portfolio professionnel moderne mettant en avant les projets web développés, compétences techniques et expérience professionnelle.

## 🚀 Démarrage rapide

### Installation

```bash
npm install
```

### Développement

```bash
npm run dev
```

Lance le serveur Vite à `http://localhost:5173`

### Build production

```bash
npm run build
```

Construit un bundle optimisé avec compilation TypeScript.

### Aperçu du build

```bash
npm run preview
```

Affiche un aperçu du build production localement.

### Vérification du code

```bash
npm run lint
```

Lance ESLint pour vérifier la qualité du code.

## 🛠 Stack technologique

- **React 19** avec TypeScript
- **Vite** - Outil de build haute performance
- **SCSS** - Styles modulaires avec CSS modules
- **react-hook-form** - Gestion des formulaires et validation
- **Google reCAPTCHA v3** - Sécurité des formulaires
- **Hooks React personnalisés** - Parallax, dark mode, animations au scroll

## 📁 Structure du projet

```
src/
├── components/        # Composants réutilisables et sections
│   ├── common/       # Button, Card, Modal, Navbar, Footer, BackToTop
│   └── sections/     # Hero, About, Featured, Skills, Projects, Timeline, Contact
├── data/             # Données des projets, timeline, compétences
├── hooks/            # Hooks React personnalisés (useDarkMode, useParallax, etc.)
├── utils/            # Utilitaires, icônes, logos, constantes
└── styles/           # Styles globaux et variables CSS
```

## ✨ Fonctionnalités principales

### Section Hero
- Animation parallax en arrière-plan
- Avatar avec liens sociaux (GitHub, LinkedIn, Email)
- Boutons d'appel à l'action

### Section À propos
- Présentation professionnelle et narratif de carrière
- Transition de l'audiovisuel au développement web

### Projets en vedette
- Vitrine de 4 meilleurs projets
- Aperçu rapide avec liens

### Section Compétences
- Compétences techniques organisées par catégorie
- Logos et badges technologiques

### Galerie de projets
- Fiches projet détaillées avec modales
- Carrousel d'images avec navigation circulaire
- Fonctionnalités, réalisations, stack technique
- Liens vers démo et GitHub

### Section Timeline
- Poste actuel (PlayPlay - Creative Developer)
- 3 diplômes/formations
- Expériences professionnelles précédentes

### Section Contact
- Formulaire de contact professionnel
- Validation des formulaires avec react-hook-form
- Protection par Google reCAPTCHA
- Intégration clients email

### Mode sombre
- Support complet thème clair/sombre
- Préférence utilisateur sauvegardée dans localStorage
- Transitions de thème fluides

### Navigation
- Navbar collante avec smooth scroll
- Bouton toggle mode sombre
- Menu mobile réactif

## 🎨 Styles

- **SCSS Modules** pour styles scopés par composant
- **Variables CSS** pour système de design (couleurs, typographie, espacement, ombres)
- **Design Responsive** (approche mobile-first)
- **Palette de couleurs accessible** avec contraste approprié

## 📦 Dépendances principales

- `react` (19.x) - Bibliothèque UI
- `react-hook-form` - Gestion des formulaires
- `react-google-recaptcha` - Intégration reCAPTCHA
- Outils de développement: ESLint, Prettier, TypeScript

## 🌐 Déploiement

Prêt à être déployé sur GitHub Pages ou tout hébergement statique :

```bash
npm run build
# Déployer le dossier dist/ sur votre plateforme d'hébergement
```

## 📝 Variables d'environnement

Créer `.env.local` pour reCAPTCHA :

```env
VITE_RECAPTCHA_SITE_KEY=your_recaptcha_site_key
```

## 🎯 Objectif du projet

Site de portfolio professionnel démontrant les bonnes pratiques de développement web moderne et mettant en avant les projets réalisés lors du programme d'alternance OpenClassrooms. Sert à la fois de vitrine de portfolio et de porte d'entrée pour les contacts de potentiels clients et employeurs.

## 📄 Licence

© 2025 Jean-Noël Drugmand. Tous droits réservés.
