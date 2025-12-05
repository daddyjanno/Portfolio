# Mon Vieux Grimoire - Plateforme de Notation de Livres

> **Application web complète full-stack pour partager et noter des livres avec système d'authentification, galerie d'images et base de données cloud**

---

## 📚 Aperçu du Projet

![Technologies Badge](https://img.shields.io/badge/Stack-React%20%7C%20TypeScript%20%7C%20Express%20%7C%20MongoDB-blue?style=for-the-badge)

Mon Vieux Grimoire est une plateforme social permettant aux utilisateurs de découvrir, noter, et partager leurs collections de livres. L'application combine une interface React intuitive avec une API backend robuste en TypeScript, stockée dans MongoDB Atlas.

---

## 🛠️ Stack Technique

### Frontend - React Moderne
![React](https://img.shields.io/badge/React%2018-%2361DAFB.svg?style=for-the-badge&logo=react&logoColor=black)
![JavaScript](https://img.shields.io/badge/JavaScript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![React Router](https://img.shields.io/badge/React%20Router%20v6-%23F27121.svg?style=for-the-badge&logo=react-router&logoColor=white)
![Axios](https://img.shields.io/badge/Axios-%235A29E4.svg?style=for-the-badge&logo=axios&logoColor=white)
![React Hook Form](https://img.shields.io/badge/React%20Hook%20Form-%23EC5990.svg?style=for-the-badge&logo=react-hook-form&logoColor=white)
![FontAwesome](https://img.shields.io/badge/FontAwesome-%23228AE6.svg?style=for-the-badge&logo=font-awesome&logoColor=white)

**Architecture**:
- **Framework**: React 18 (dernière version)
- **Routing**: React Router v6 pour navigation SPA
- **Formulaires**: React Hook Form pour gestion efficace
- **HTTP Client**: Axios pour communication avec API
- **UI Icons**: FontAwesome SVG icons
- **Styling**: CSS standard
- **Testing**: Jest + React Testing Library

### Backend - TypeScript + Express + MongoDB
![Node.js](https://img.shields.io/badge/Node.js-%2343853D.svg?style=for-the-badge&logo=node.js&logoColor=white)
![Express](https://img.shields.io/badge/Express-%23000000.svg?style=for-the-badge&logo=express&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-%233178C6.svg?style=for-the-badge&logo=typescript&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-%2347A248.svg?style=for-the-badge&logo=mongodb&logoColor=white)

**Architecture**:
- **Runtime**: Node.js (v20.13.1+)
- **Framework**: Express 5.x
- **Langage**: TypeScript 100% type-safe
- **Database**: MongoDB Atlas (cloud database)
- **ODM**: Mongoose 8 pour modélisation
- **Auth**: JWT + bcrypt (hachage sécurisé)
- **Upload Fichiers**: Multer 2.x
- **Image Processing**: Sharp pour conversion/compression
- **Validation**: Mongoose unique validator
- **Dev Tools**: ts-node-dev pour hot reload

### Deployment
![GitHub](https://img.shields.io/badge/GitHub-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)

---

## 📋 Contexte et Enjeux

**Situation**: Créer une plateforme de partage de livres pour permettre aux lecteurs de noter, commenter et découvrir des livres intéressants selon les avis des autres utilisateurs.

**Enjeux**:
- Implémenter une architecture full-stack évolutive
- Gérer l'authentification de manière sécurisée avec JWT
- Permettre l'upload et la gestion d'images côté serveur
- Structurer une base de données MongoDB scalable
- Créer une interface React réactive et intuitive
- Assurer la communication fluide frontend/backend
- Maintenir la typesécurité en TypeScript complet

---

## 🎯 Objectifs

- ✅ Développer une API REST complète avec Express/TypeScript
- ✅ Implémenter un système d'authentification JWT sécurisé
- ✅ Modéliser les données avec MongoDB/Mongoose
- ✅ Gérer l'upload et l'optimization d'images (Sharp)
- ✅ Créer une interface React responsive et accessible
- ✅ Intégrer React Router pour navigation fluide
- ✅ Utiliser React Hook Form pour formulaires optimisés
- ✅ Connecter frontend et backend via API REST (Axios)
- ✅ Déployer sur MongoDB Atlas (base de données cloud)

---

## 💡 Compétences Développées

### Backend Avancé
- Architecture Express.js scalable (controllers, models, routes, middlewares)
- TypeScript strict mode avec types génériques
- Modélisation MongoDB avec Mongoose
- Middleware custom (authentification, erreurs, upload)
- Gestion des images avec Multer + Sharp
- Hachage sécurisé de mots de passe avec bcrypt
- JWT pour authentification stateless
- Validation de données côté serveur
- Gestion des erreurs et logging

### Frontend Modernes
- Composants React fonctionnels avec hooks
- React Router v6 pour SPA navigation
- React Hook Form pour formulaires performants
- Axios pour API communication
- Gestion d'état local avec useState
- Effects et side-effects avec useEffect
- Prop types et prop validation
- CSS organization et responsive design
- Tests avec Jest et React Testing Library

### Architecture Full-Stack
- Authentification JWT côté client et serveur
- Communication HTTP REST entre tiers
- Gestion de tokens et localStorage
- CORS configuration côté serveur
- Erreur handling côté client et serveur
- Sécurité : validation input, sanitization

### DevOps et Environnement
- Configuration .env pour secrets
- Build TypeScript (tsc)
- Development avec ts-node-dev (hot reload)
- MongoDB Atlas cloud setup
- Npm scripts et workflows

---

## ✨ Fonctionnalités Principales

### 1. **Authentification Utilisateur**
- Inscription avec validation
- Login sécurisé avec JWT
- Hachage des mots de passe (bcrypt)
- Tokens persistants (localStorage)
- Refresh tokens implicites

### 2. **Gestion des Livres**
- Création de nouvelles entrées livres
- Upload de couverture de livre
- Édition des informations
- Suppression de livres
- Récupération de liste des livres

### 3. **Système de Notation**
- Note sur 5 étoiles
- Avis texte sur les livres
- Notation moyenne calculée côté backend
- Historique des évaluations utilisateur

### 4. **Galerie d'Images**
- Upload de couverture de livre
- Optimization automatique (Sharp)
- Stockage côté serveur
- Responsive image serving
- Support formats multiples

### 5. **Interface Utilisateur**
- Pages bien structurées (Home, Books, Profile, etc.)
- Composants réutilisables
- Formulaires React Hook Form
- Navigation fluide React Router
- Design responsive CSS

### 6. **API REST**
- CRUD complet sur livres
- Endpoints d'authentification
- Pagination et filtrage
- Gestion d'erreurs robuste
- Documentation via Swagger (optionnel)

---

## 📊 Résultats et Livrables

| Aspect | Résultat |
|--------|----------|
| **API Endpoints** | 15+ endpoints CRUD |
| **Modèles MongoDB** | User, Book, Review schemas |
| **Components React** | 20+ composants réutilisables |
| **Pages** | 6+ pages (Home, Books, Login, Profile, etc.) |
| **Authentification** | JWT avec bcrypt integration |
| **Upload Images** | Multer + Sharp optimization |
| **Langage** | TypeScript 100% (backend) |
| **Type Safety** | PropTypes + Typescript |
| **Testing** | Jest + React Testing Library setup |
| **Deployment** | MongoDB Atlas production-ready |

---

## 🚀 Installation et Démarrage

### Backend (TypeScript)
```bash
cd back
npm install

# Configuration .env (MongoDB Atlas + JWT secret)
# MONGODB_URI=mongodb+srv://...
# JWT_SECRET=your_secret_key

# Développement (hot reload)
npm run dev

# Build production
npm run build

# Vérification des types
npm run typecheck

# Lancer production
npm start
```

### Frontend (React)
```bash
cd front
npm install
npm start  # Démarre sur http://localhost:3000/
```

---

## 🔧 Structure du Projet

### Backend Structure
```
back/
├── src/
│   ├── server.ts                # Entry point
│   ├── app.ts                   # Express app configuration
│   ├── config/
│   │   └── database.ts          # MongoDB connection
│   ├── controllers/
│   │   ├── authController.ts    # Auth logic
│   │   ├── bookController.ts    # Books CRUD
│   │   └── reviewController.ts  # Reviews logic
│   ├── models/
│   │   ├── User.ts             # User schema
│   │   ├── Book.ts             # Book schema
│   │   └── Review.ts           # Review schema
│   ├── routes/
│   │   ├── authRoutes.ts       # Auth endpoints
│   │   ├── bookRoutes.ts       # Book endpoints
│   │   └── reviewRoutes.ts     # Review endpoints
│   ├── middlewares/
│   │   ├── auth.ts             # JWT verification
│   │   ├── multer.ts           # File upload config
│   │   └── errorHandler.ts     # Error handling
│   ├── images/                 # Uploaded images storage
│   └── types/                  # TypeScript types
│
├── dist/                       # Compiled JavaScript (production)
├── package.json
├── tsconfig.json
└── .env                        # Secrets (not committed)
```

### Frontend Structure
```
front/
├── src/
│   ├── index.js                # React entry point
│   ├── App.jsx                 # Main app component
│   ├── App.css                 # App styles
│   ├── components/
│   │   ├── Header/             # Navigation header
│   │   ├── BookCard/           # Individual book component
│   │   ├── RatingStars/        # Rating display
│   │   ├── ReviewForm/         # Review submission
│   │   └── ...
│   ├── pages/
│   │   ├── Home.jsx            # Homepage
│   │   ├── BookList.jsx        # All books listing
│   │   ├── BookDetail.jsx      # Single book view
│   │   ├── Login.jsx           # Authentication
│   │   ├── Profile.jsx         # User profile
│   │   └── ...
│   ├── lib/                    # API utilities (Axios)
│   ├── utils/                  # Helper functions
│   ├── images/                 # Static assets
│   └── index.css               # Global styles
│
├── public/
├── package.json
└── .env                        # API URL configuration
```

---

## 🔒 Sécurité Implémentée

### Authentication
- JWT tokens pour stateless auth
- Refresh tokens (optionnel)
- Tokens stockés secure (localStorage)
- Middleware d'authentification Express

### Password Security
- Bcrypt hachage (salt rounds: 10+)
- Pas de mots de passe en plain text
- Validation password strength frontend
- Input sanitization

### API Security
- CORS configuration
- Input validation Mongoose
- Rate limiting (optionnel)
- Error messages non-révélateurs
- .env pour secrets (never committed)

### Image Upload
- Validation extension fichier
- Sharp processing (compression, format)
- Stockage serveur sécurisé
- Limite de taille fichier

---

## 🔧 Perspectives d'Amélioration

### Frontend
- **State Management**: Ajouter Redux ou Zustand
- **Tests**: Augmenter couverture Jest e2e
- **Performance**: Code splitting, lazy loading
- **Accessibility**: Améliorer a11y (ARIA labels)
- **PWA**: Transformer en Progressive Web App
- **UI/UX**: Animations Framer Motion

### Backend
- **Caching**: Redis pour performance
- **Database**: Optimiser indexes MongoDB
- **Validation**: Zod ou Joi pour validation stricte
- **Documentation**: OpenAPI/Swagger
- **Logging**: Winston ou Pino
- **Tests**: Mocha/Jest pour test coverage

### DevOps
- **CI/CD**: GitHub Actions
- **Containerization**: Docker
- **Deployment**: Render, Railway, ou Heroku
- **Monitoring**: Sentry pour error tracking
- **CDN**: Cloudinary pour images
- **Analytics**: Integrer analytics

### Features
- **Recommandations**: ML-based suggestions
- **Social**: Suivre utilisateurs, commentaires
- **Categories**: Filtres par genre/auteur
- **Wishlist**: Listes de lecture à venir
- **Reviews**: Système de critiques avancé
- **Badges**: Gamification utilisateur

---

## 📚 Ressources

### Repository et Documentation
- **[Repository GitHub](https://github.com/daddyjanno/Projet6-Mon_Vieux_Grimoire)** - Code source complet
- **[Specifications Fonctionnelles](Specifications+fonctionnelles.pdf)** - Cahier des charges
- **[API Documentation](Specifications+API.pdf)** - Endpoints spécifications

### Configuration Requise
```
Node.js:        >= v20.13.1
MongoDB Atlas:  Cluster actif
npm:            Version récente
.env:           MONGODB_URI + JWT_SECRET
```

### Commandes Utiles

**Backend**:
```bash
npm run dev        # Development avec hot reload
npm run build      # Compile TypeScript
npm run typecheck  # Vérif types sans compilation
npm start          # Run compiled JS
```

**Frontend**:
```bash
npm start          # Dev server
npm run build      # Production build
npm test           # Run tests
npm run eject      # Custom webpack (⚠️ irreversible)
```

---

## 👨‍💻 Développé par

**Jean-Noël Drugmand** - Développeur Full-Stack

### Outils Utilisés
- **IDE**: Visual Studio Code
- **VCS**: Git / GitHub
- **Database**: MongoDB Atlas
- **API Testing**: Postman
- **Image Processing**: Sharp
- **Development**: ts-node-dev avec hot reload

---

## 📝 Statut du Projet

✅ **Complété et Fonctionnel** - Tous les objectifs atteints, application en état de production.

### Checklist Complétude
- ✅ API REST complète
- ✅ Authentification JWT
- ✅ Base MongoDB structurée
- ✅ Upload et optimization images
- ✅ Interface React responsive
- ✅ Formulaires React Hook Form
- ✅ Gestion erreurs robuste
- ✅ TypeScript strict
- ✅ Tests setup
- ✅ Deployment ready

---

*Mon Vieux Grimoire - Plateforme de notation de livres - 2025*
