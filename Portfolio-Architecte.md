![Sophie Buel](../Projet3-Portfolio-architecte/FrontEnd/assets/icons/SophieBuel.png)

> **Plateforme full-stack de présentation et gestion de projets d'architecture d'intérieur avec système d'authentification et interface administrateur**

---

## 🎨 Aperçu du Projet

Ce projet est un portfolio interactif d'une architecte d'intérieur qui combine une interface client-side dynamique avec un backend robuste pour la gestion des travaux et l'authentification des utilisateurs.

**[Voir les maquettes Figma](https://www.figma.com/design/z2fwvi6PHwNooWjlv8vx82/Sophie-Bluel---Desktop--Copy-?node-id=0-1&p=f&t=iwxk4QmVSUcDrD46-0)**

---

## 📋 Contexte

Une architecte d'intérieur avait besoin d'une plateforme professionnelle pour présenter ses réalisations tout en maintenant un contrôle total sur son portfolio. L'enjeu principal était de combiner une interface attractive et responsive côté client avec un système d'administration robuste permettant la gestion dynamique des projets en temps réel.

---

## 🎯 Objectifs

Concevoir et déployer une plateforme full-stack complète :

- une interface utilisateur intuitive conforme aux maquettes Figma,
- une API REST sécurisée avec authentification JWT
- une base de données fiable pour la persistance des données.
  L'application devait permettre à l'administrateur de créer, modifier et supprimer des projets avec upload d'images, tout en restant accessible sur tous les appareils.

---

## 🛠️ Stack Technique Utilisée

**Frontend**

![HTML5](https://img.shields.io/badge/HTML5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)

**Backend**

[![Node.js](https://img.shields.io/badge/Node.js-6DA55F?logo=node.js&logoColor=white)](#)
![Express](https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white)
![SQLite](https://img.shields.io/badge/SQLite-003B57?style=for-the-badge&logo=sqlite&logoColor=white)

**Outils**
![Git](https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white)
![VS Code](https://img.shields.io/badge/VS%20Code-007ACC?style=for-the-badge&logo=visual%20studio%20code&logoColor=white)

---

## 💡 Compétences développées

- Maîtrise du développement full-stack :
  - gestion d'événements et manipulation du DOM en JavaScript
  - communication asynchrone avec une API
  - gestion de tokens JWT côté client et serveur
  - conception d'interfaces modales.
- Côté backend :
- architecture d'API REST structurée
- modélisation relationnelle avec Sequelize
- implémentation de middleware d'authentification
- gestion sécurisée des uploads.

- Compétences transverses :
  - intégration précise de maquettes Figma
  - debug complet de la chaîne frontend-backend.

---

## 📊 Résultats

**Livrables** :

- Interface complète responsive (2 pages)
- API REST avec 5+ endpoints CRUD,
- base de données relationnelle structurée,
- système d'authentification JWT intégré,
- galerie dynamique avec filtres.

**Métriques de réussite** :

- Application entièrement fonctionnelle
- authentification sécurisée validée
- upload d'images opérationnel
- déploiement réussi.

L'architecte dispose désormais d'une plateforme autonome où elle peut gérer son portfolio sans intervention technique.

---

## ✨ Fonctionnalités Principales

1. **Galerie dynamique des travaux**

   - Récupération des projets via API
   - Filtres par catégories
   - Affichage responsif des images

2. **Système d'authentification**

   - Page de login sécurisée
   - Authentification JWT
   - Gestion des sessions utilisateur

3. **Gestion administrative**

   - Modale de création de nouveaux projets
   - Modale de suppression de projets
   - Upload d'images (Multer)
   - Affichage dynamique immédiat après modification

4. **Protection des données**
   - Hachage des mots de passe (bcrypt)
   - Tokens JWT pour l'authentification
   - Validation des requêtes

---

## 🔧 Perspectives d'Amélioration

- **Frontend**:

  - Migrer vers un framework moderne (React/Vue) pour meilleure maintenabilité
  - Ajouter des tests unitaires et d'intégration
  - Optimiser les performances de chargement des images
  - Implémenter une pagination/lazy loading pour la galerie

- **Backend**:

  - Ajouter des tests automatisés (Jest, Mocha)
  - Implémenter un système de cache (Redis)
  - Améliorer la documentation API avec OpenAPI 3.0
  - Ajouter des logs centralisés

- **DevOps**:
  - Containeriser l'application (Docker)
  - Mettre en place un CI/CD (GitHub Actions)
  - Déployer sur une plateforme cloud (Heroku, Vercel, AWS)
  - Configurer un CDN pour les images

---

## 📚 Ressources

### Repository et Documentation

- **[Repository GitHub](https://github.com/daddyjanno/Projet3-Portfolio-architecte)** - Code source complet
- **[Maquettes Figma](https://www.figma.com/design/z2fwvi6PHwNooWjlv8vx82/Sophie-Bluel---Desktop--Copy-?node-id=0-1&p=f&t=iwxk4QmVSUcDrD46-0)** - Design du projet

### Structure du Projet

```
Projet3-Portfolio-architecte/
├── FrontEnd/
│   ├── index.html           # Page principale
│   ├── login.html           # Page d'authentification
│   └── src/
│       ├── js/              # Logique JavaScript
│       ├── css/             # Styles CSS
│       └── assets/          # Images et icones
│
├── Backend/
│   ├── server.js            # Serveur Express
│   ├── database.sqlite      # Base de données SQLite
│   └── src/
│       ├── controllers/     # Logique métier
│       ├── models/          # Modèles Sequelize
│       ├── routes/          # Définitions des routes
│       └── middlewares/     # Auth, upload, validation
│
└── maquettes/               # Maquettes design Figma découpées
```

---

## 👨‍💻 Développé par

**Jean-Noël Drugmand** - Développeur Full-Stack

### Outils Utilisés

- Visual Studio Code - Éditeur de code
- Git/GitHub - Gestion de versions
- Figma - Design et maquettes

---

## 📝 Statut du Projet

✅ **Complété** - Toutes les fonctionnalités ont été implémentées selon les spécifications.
