# Prompt pour Portfolio de Développeur Fullstack - Jean-Noël Drugmand

## 📋 Vue d'ensemble du projet

Créer un portfolio moderne, responsive et performant pour Jean-Noël Drugmand, Creative Developer en alternance chez PlayPlay. Le portfolio doit refléter son parcours de reconversion professionnelle (audiovisuel → développement web) et mettre en valeur ses compétences en développement fullstack et créatif.

## 🎯 Objectifs du portfolio

1. **Démontrer l'expertise technique** en JavaScript, React, TypeScript et développement web moderne
2. **Présenter un parcours professionnel solide** avec une reconversion réussie
3. **Présenter un travail de qualité** inspiré des meilleurs portfolios modernes
4. **Faciliter le contact** avec les recruteurs et clients potentiels
5. **Se démarquer** par un design soigné et une expérience utilisateur fluide

---

## 🎨 Inspiration et références de design

### Référence principale : https://www.gmanzola.fr/

**Éléments à reprendre :**
- Navigation fixe accessible et discrète
- Système de filtrage pour les projets (par technologie/type)
- Présentation visuelle des projets avec CTAs clairs
- Section compétences avec indicateurs visuels de maîtrise
- Design épuré et professionnel

**Éléments à améliorer/différencier :**
- Animations CSS simples et fluides
- Design moderne avec micro-interactions raffinées
- Performance optimale (score Lighthouse 90+)

---

## 🏗️ Structure du site

### Navigation principale

1. **Accueil/Hero** - Impact immédiat et accroche
2. **À propos** - Pitch professionnel
3. **Compétences** - Stack technique et soft skills
4. **Projets** - Portfolio détaillé avec filtres
5. **Parcours** - Timeline formation et expérience
6. **Contact** - Formulaire et liens sociaux

### Sections secondaires

- **Certifications** - Badges et diplômes OpenClassrooms, Le Wagon
- **Side-projects** - Contributions GitHub, expérimentations créatives (Phase 2)
- **Témoignages** - Recommandations LinkedIn (Phase 2)

---

## 📱 Section 1 : Hero / Accueil

### Objectif
Créer un impact immédiat avec une accroche forte qui résume l'identité professionnelle.

### Contenu

**Titre principal :**
```
Jean-Noël Drugmand
Creative Developer | Fullstack JavaScript
```

**Sous-titre / Accroche :**
```
Développeur fullstack passionné par la création d'expériences web performantes et engageantes
```

### Éléments visuels
- Photo professionnelle (celle du CV)
- Animation d'entrée subtile (fade-in + slide en CSS)
- Background avec gradient moderne
- Scroll indicator animé pour inviter à explorer

### CTA (Call-to-Action)
- Bouton principal : "Voir mes projets"
- Bouton secondaire : "Me contacter"
- Liens sociaux : GitHub, LinkedIn, Email

### Animations
- Fade-in progressif au chargement
- Effet typing sur le sous-titre (optionnel, CSS simple)
- Hover effects subtils sur les boutons
- Smooth scroll vers les sections

---

## 👨‍💻 Section 2 : À propos

### Objectif
Présenter le parcours professionnel de manière concise et professionnelle, en mettant en valeur les compétences transférables.

### Contenu

**Titre :**
```
À propos
```

**Texte :**

```
Creative Developer passionné par le développement web moderne, actuellement en alternance
chez PlayPlay où je développe des composants React et optimise l'expérience utilisateur.

Mon parcours atypique combine 7 ans d'expérience en management chez Eurosport (coordination
d'équipes de 17 personnes, gestion de 1000+ diffusions live/mois) et 9 ans en création
audiovisuelle freelance.

Cette reconversion dans le développement web me permet d'allier rigueur opérationnelle,
esprit d'équipe et créativité technique. J'applique au code les mêmes exigences de qualité
et de performance que dans mes précédentes expériences.

Formé au Wagon et chez OpenClassrooms, je maîtrise la stack JavaScript moderne (React,
TypeScript, Node.js) et applique une approche "zero bug" dans mes développements.
```

### Éléments visuels
- Layout en 2 colonnes (desktop) : texte + photo/illustration
- Timeline simplifiée : 3 étapes clés (Audiovisuel → Formations → Dev)
- Animation au scroll : apparition progressive des éléments

---

## 💪 Section 3 : Compétences

### Objectif
Présenter la stack technique complète de manière visuelle et organisée.

### Organisation par catégories

#### **Frontend**
- HTML5 / CSS3
- JavaScript (ES6+)
- TypeScript
- React
- Redux / Redux Toolkit
- SASS
- Styled-Components
- Tailwind CSS

#### **Backend**
- Node.js / Express
- Ruby on Rails
- SQL (PostgreSQL, MySQL)
- MongoDB

#### **Outils & Méthodes**
- Git / GitHub
- Jest / TDD
- ESLint / Prettier
- Vite / Webpack
- IA (Claude Code, Windsurf)

#### **Creative Tools**
- After Effects
- Photoshop
- Figma
- Premiere Pro / Final Cut / Avid

### Présentation visuelle
Grille d'icônes avec tags (épuré et moderne)

### Soft Skills (encadré séparé)
- **Rigueur** - Exigence de qualité et politique "zéro bug"
- **Autonomie** - 9 ans en freelance, gestion de projets
- **Esprit d'équipe** - Management de 17 collaborateurs chez Eurosport
- **Pilotage de projets** - Pilotage des projets de diffusions, analyse des besoins clients

---

## 🚀 Section 4 : Projets

### Objectif
Présenter les réalisations avec un système de filtrage professionnel et une exploration détaillée en modale.

### Système de filtrage
```
[ Tous ] [ React ] [ TypeScript ] [ Fullstack ] [ Optimisation ]
```

### Format de chaque carte projet
- Image/Screenshot en pleine largeur
- Titre du projet
- Description courte (1 ligne)
- Tags des technologies utilisées
- **Au clic : ouverture d'une modale**

### Modale de projet (au clic sur une carte)

**Contenu de la modale :**
- **2 photos** du projet (carousel ou côte à côte) - PLACEHOLDERS pour l'instant
- **Titre du projet**
- **Technologies** (tags colorés)
- **Description détaillée** en bullet points :
  - Contexte du projet
  - Fonctionnalités principales
  - Défis techniques résolus
  - Résultats/Impact
- **CTA :** Bouton "Visiter le site" + Bouton "Voir le code"
- **Fermeture :** Bouton X + clic en dehors de la modale

**Exemple de structure modale :**
```
[Photo 1] [Photo 2]

Titre du projet
[Tag Tech 1] [Tag Tech 2] [Tag Tech 3]

• Contexte et objectif du projet
• Fonctionnalité clé 1
• Fonctionnalité clé 2
• Défi technique résolu
• Résultat obtenu

[Bouton: Visiter le site] [Bouton: Voir le code]
```

### Liste des projets placeholders

**Projet 1 : [PLACEHOLDER - Dashboard Analytics]**
- Technologies : React, TypeScript, Redux Toolkit, SASS
- Description courte : Application de visualisation de données
- **Modale - Détails :**
  - 2 photos placeholder
  - Bullet points détaillés à définir
  - Lien vers démo + GitHub

**Projet 2 : [PLACEHOLDER - Application Fullstack E-commerce]**
- Technologies : React, Node.js, Express, MongoDB, TypeScript
- Description courte : Plateforme e-commerce complète
- **Modale - Détails :**
  - 2 photos placeholder
  - Bullet points détaillés à définir
  - Lien vers démo + GitHub

**Projet 3 : [PLACEHOLDER - Refonte et Optimisation]**
- Technologies : React, Vite, Lighthouse, SASS
- Description courte : Optimisation complète d'un site existant
- **Modale - Détails :**
  - 2 photos placeholder
  - Bullet points détaillés à définir
  - Lien vers démo + GitHub

**Projet 4 : [PLACEHOLDER - UI Component Library]**
- Technologies : React, TypeScript, Storybook, Rollup
- Description courte : Bibliothèque de composants React réutilisables
- **Modale - Détails :**
  - 2 photos placeholder
  - Bullet points détaillés à définir
  - Lien vers démo + GitHub

**Projet 5 : [PLACEHOLDER - Landing Page Interactive]**
- Technologies : React, TypeScript, SASS
- Description courte : Page d'atterrissage moderne avec animations
- **Modale - Détails :**
  - 2 photos placeholder
  - Bullet points détaillés à définir
  - Lien vers démo + GitHub

**Projet 6 : [PLACEHOLDER - API REST]**
- Technologies : Node.js, Express, MongoDB, TypeScript
- Description courte : API backend avec authentification
- **Modale - Détails :**
  - 2 photos placeholder
  - Bullet points détaillés à définir
  - Lien vers démo + GitHub

### Présentation visuelle
- Grille responsive (3 colonnes desktop, 2 tablette, 1 mobile)
- Cartes avec hover effect (élévation + border + cursor pointer)
- Animation : apparition progressive au scroll
- **Modale :** Overlay semi-transparent + carte centrée avec animation d'ouverture

### Note importante
```
⚠️ Les projets ci-dessus sont des PLACEHOLDERS.
Ils seront remplacés par les vrais projets du repository :
- Projet3-Portfolio-architecte
- Projet4-Nina-Carducci
- Projet5-Kasa
- Projet6-Mon_Vieux_Grimoire
+ projets professionnels (si autorisés)
```

---

## 🎓 Section 5 : Parcours (Timeline)

### Objectif
Visualiser le parcours professionnel et la progression de compétences de manière chronologique.

### Format
Timeline verticale avec alternance gauche/droite (desktop) et centrée (mobile)

### Contenu chronologique

#### **2024 - Présent : Creative Developer (Alternance)**
**PlayPlay - Paris**
- Développement de composants React réutilisables
- Application politique "zero bug" et tests automatisés
- Optimisation des outils de développement
- Transformation de maquettes en assets
- **Stack :** React, TypeScript, Jest

#### **2024 : Développeur d'Applications JavaScript React**
**OpenClassrooms - Diplôme niveau 6 (Bac+3/4)**
- Spécialisation JavaScript React
- Projets : Dashboard analytics, migration jQuery→React
- **Stack :** JavaScript, React, TypeScript, Redux, Jest

#### **2023 : Développeur Web**
**OpenClassrooms - Diplôme niveau 5 (Bac+2)**
- Alternance développeur web
- Apprentissage fullstack JavaScript
- **Stack :** HTML, CSS, JavaScript, React, Node.js

#### **2023 : Formation JavaScript et React**
**GRETA des Hauts de Seine - 10 semaines**
- Bases JavaScript et introduction à React

#### **2023 : Développeur Web Fullstack**
**Le Wagon - 10 semaines - Diplôme niveau 6**
- Formation intensive développement web
- **Stack :** HTML, CSS, JavaScript, Ruby on Rails, SQL

#### **2019 - 2022 : Manager Digital Playout**
**Eurosport - 3 ans**
- Management de 17 collaborateurs
- Coordination de 1000+ diffusions live/mois
- Pilotage des projets de diffusion
- Analyse des besoins pour 26 marchés européens

#### **2015 - 2019 : Senior Digital Video Coordinator**
**Eurosport - 4 ans**
- Élaboration de contenus digitaux pour 26 marchés
- Garantie qualité pour grands événements sportifs
- Formation et montée en compétences des équipes

#### **2006 - 2015 : Monteur - Cadreur - Réalisateur - Graphiste**
**Freelance - 9 ans**
- Création de contenus audiovisuels
- Gestion de projets en autonomie
- After Effects, Premiere, Photoshop

### Certifications (sous-section ou encadré)
- Développeur d'Applications JavaScript React (Niveau 6) - OpenClassrooms
- Développeur Web (Niveau 5) - OpenClassrooms
- Développeur Fullstack (Niveau 6) - Le Wagon
- Formation JavaScript React - GRETA
- **Anglais professionnel C2** - Certifié Bright et Bulats

### Éléments visuels
- Timeline verticale avec ligne centrale
- Points/nodes pour chaque étape
- Alternance gauche/droite (desktop)
- Icônes différentes : formation vs expérience pro
- Animation : révélation progressive au scroll
- Badges pour les certifications

---

## 📞 Section 6 : Contact

### Objectif
Faciliter la prise de contact avec un formulaire simple et des liens directs.

### Formulaire de contact

**Champs :**
- Nom complet (required)
- Email (required, validation format email)
- Sujet (required, select dropdown)
  - Options : "Opportunité professionnelle", "Mission freelance", "Collaboration", "Autre"
- Message (required, textarea, min 10 caractères)
- Bouton "Envoyer le message"

**Validation :**
- Validation côté client en temps réel
- Messages d'erreur clairs sous chaque champ
- Animation de succès après envoi (checkmark + message de confirmation)
- Désactivation du bouton pendant l'envoi (loading state)

**Backend :**
- Service d'envoi : EmailJS ou Formspree (simple à intégrer)
- Protection anti-spam : honeypot ou reCAPTCHA v3 (invisible)

### Informations de contact directes

**Layout : Grille ou colonnes avec icônes**

```
📧 Email : jn.drugmand@gmail.com
💼 LinkedIn : linkedin.com/in/jean-noel-drugmand
💻 GitHub : github.com/daddyjanno
📍 Localisation : Île-de-France
```

### CTA final

```
Vous avez un projet en tête ?
Discutons de la manière dont je peux vous aider à le concrétiser.
```

### Éléments visuels
- Formulaire stylé avec design cohérent
- Icônes pour chaque méthode de contact (cliquables)
- Liens sociaux avec hover effect
- Animation de succès après envoi
- Section en deux colonnes (formulaire | infos contact) sur desktop

---

## 🎨 Charte graphique et design system

### Palette de couleurs

**Mode clair (défaut) :**
- **Primary :** `#3B82F6` (Bleu vif)
- **Secondary :** `#8B5CF6` (Violet)
- **Dark :** `#1E293B` (Bleu nuit)
- **Light :** `#F8FAFC` (Blanc cassé)
- **Background :** `#FFFFFF` (Blanc)
- **Accent :** `#10B981` (Vert émeraude)
- **Text :** `#334155` (Gris foncé)
- **Text Light :** `#64748B` (Gris moyen)

**Mode sombre :**
- **Primary :** `#60A5FA` (Bleu plus clair)
- **Secondary :** `#A78BFA` (Violet plus clair)
- **Dark :** `#F8FAFC` (Blanc cassé - inversé)
- **Light :** `#1E293B` (Bleu nuit - inversé)
- **Background :** `#0F172A` (Bleu très sombre)
- **Background Secondary :** `#1E293B` (Bleu nuit)
- **Accent :** `#34D399` (Vert plus clair)
- **Text :** `#F1F5F9` (Gris très clair)
- **Text Light :** `#94A3B8` (Gris moyen clair)

### Toggle Dark Mode
- **Position :** Dans la navbar (icône soleil/lune)
- **Stockage :** localStorage pour persister le choix
- **Transition :** Smooth transition entre les deux modes (0.3s)
- **Implémentation :** CSS variables + classe sur `<body>` ou `<html>`

**Exemple d'implémentation :**
```scss
:root {
  --color-primary: #3B82F6;
  --color-bg: #FFFFFF;
  --color-text: #334155;
  // ...
}

[data-theme="dark"] {
  --color-primary: #60A5FA;
  --color-bg: #0F172A;
  --color-text: #F1F5F9;
  // ...
}
```

### Typographie

**Fonts : Inter (Google Fonts)**
- **Headings :** Inter Bold/Semibold
- **Body :** Inter Regular
- **Code :** Fira Code ou JetBrains Mono

**Hiérarchie :**
```
h1: 3rem (48px) - Bold
h2: 2.25rem (36px) - Semibold
h3: 1.875rem (30px) - Semibold
h4: 1.5rem (24px) - Medium
p: 1rem (16px) - Regular
small: 0.875rem (14px) - Regular
```

### Espacement
- Base : 8px (multiples de 8)
- Scale : 8, 16, 24, 32, 48, 64, 96px
- Container max-width : 1280px
- Section padding : 80px vertical (desktop), 48px (mobile)

### Breakpoints (Mobile-first)
```scss
$mobile: 320px;
$tablet: 768px;
$desktop: 1024px;
$wide: 1280px;
```

### Animations et transitions

**Principes :**
- Transitions CSS simples : `ease-out` ou `cubic-bezier(0.4, 0, 0.2, 1)`
- Durée : 200-300ms pour micro-interactions
- Animations au scroll avec Intersection Observer
- Pas de bibliothèque d'animation externe

**Animations clés :**
```css
/* Fade-in au scroll */
.fade-in {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.6s ease-out, transform 0.6s ease-out;
}

.fade-in.visible {
  opacity: 1;
  transform: translateY(0);
}

/* Hover effects */
.card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.15);
  transition: all 0.3s ease;
}
```

### Composants UI

**Boutons :**
- Border radius : 8px
- Padding : 12px 24px
- Primary : background bleu, texte blanc
- Secondary : outline bleu, texte bleu
- États : hover (scale 1.02), active, disabled

**Cards :**
- Border radius : 12px
- Shadow : `0 4px 6px rgba(0, 0, 0, 0.1)`
- Hover : `0 12px 24px rgba(0, 0, 0, 0.15)` + translateY
- Padding : 24px

**Inputs :**
- Border radius : 8px
- Border : 1px solid `#CBD5E1`
- Focus : border bleue + shadow subtile
- Error : border rouge + message

---

## ⚡ Stack technique du portfolio

### Frontend
- **Framework :** React 18+
- **Langage :** TypeScript
- **Build tool :** Vite
- **Styling :** SASS (modules CSS)
- **Routing :** Single Page Application avec ancres de navigation
- **Forms :** React Hook Form
- **Linting :** ESLint
- **Formatting :** Prettier
- **Icônes :** Lucide React ou React Icons

### Backend (formulaire de contact)
- **Service :** EmailJS ou Formspree
- **Anti-spam :** Honeypot field ou reCAPTCHA v3

### Déploiement
- **Phase 1 (actuelle) :** Développement en local
- **Phase 2 :** GitHub Pages
- **Domain custom :** Phase ultérieure (optionnel)
- **CI/CD :** Phase ultérieure (après déploiement GitHub Pages)

### Performance & SEO (non négociable)
- **Target Lighthouse :** 90+ sur **toutes** les métriques
- **Optimisations obligatoires :**
  - Lazy loading des images
  - Images WebP + fallback
  - Minification CSS/JS automatique (Vite)
  - Préchargement des fonts
  - Meta tags Open Graph et Twitter Cards complets
  - Sitemap.xml
  - robots.txt
  - Structured data (JSON-LD) pour SEO

### Accessibilité (non négociable)
- **Target :** WCAG 2.1 niveau AA minimum
- **Checklist obligatoire :**
  - Navigation complète au clavier
  - Alt text descriptif sur toutes les images
  - Labels explicites sur tous les inputs
  - Contrastes conformes (ratio 4.5:1 minimum)
  - Focus visible et cohérent
  - Aria attributes où nécessaire
  - Landmarks HTML5 sémantiques
  - Skip links pour navigation

---

## 📐 Structure des fichiers du projet

```
Projet8-Portfolio/
│
├── public/
│   ├── index.html
│   ├── favicon.ico
│   ├── og-image.jpg                    # Open Graph image (1200x630)
│   ├── robots.txt
│   ├── sitemap.xml
│   └── assets/
│       ├── images/
│       │   ├── photo-profile.jpg
│       │   └── projects/               # Screenshots projets (placeholders)
│       └── icons/
│
├── src/
│   ├── App.tsx
│   ├── main.tsx
│   ├── vite-env.d.ts
│   │
│   ├── components/
│   │   ├── common/
│   │   │   ├── Button/
│   │   │   │   ├── Button.tsx
│   │   │   │   └── Button.module.scss
│   │   │   ├── Card/
│   │   │   │   ├── Card.tsx
│   │   │   │   └── Card.module.scss
│   │   │   ├── Input/
│   │   │   │   ├── Input.tsx
│   │   │   │   └── Input.module.scss
│   │   │   ├── Navbar/
│   │   │   │   ├── Navbar.tsx
│   │   │   │   └── Navbar.module.scss
│   │   │   ├── Modal/
│   │   │   │   ├── Modal.tsx
│   │   │   │   └── Modal.module.scss
│   │   │   ├── DarkModeToggle/
│   │   │   │   ├── DarkModeToggle.tsx
│   │   │   │   └── DarkModeToggle.module.scss
│   │   │   └── Footer/
│   │   │       ├── Footer.tsx
│   │   │       └── Footer.module.scss
│   │   │
│   │   └── sections/
│   │       ├── Hero/
│   │       │   ├── Hero.tsx
│   │       │   └── Hero.module.scss
│   │       ├── About/
│   │       │   ├── About.tsx
│   │       │   └── About.module.scss
│   │       ├── Skills/
│   │       │   ├── Skills.tsx
│   │       │   ├── SkillCard.tsx
│   │       │   └── Skills.module.scss
│   │       ├── Projects/
│   │       │   ├── Projects.tsx
│   │       │   ├── ProjectCard.tsx
│   │       │   ├── ProjectModal.tsx
│   │       │   ├── ProjectFilter.tsx
│   │       │   └── Projects.module.scss
│   │       ├── Timeline/
│   │       │   ├── Timeline.tsx
│   │       │   ├── TimelineItem.tsx
│   │       │   └── Timeline.module.scss
│   │       └── Contact/
│   │           ├── Contact.tsx
│   │           ├── ContactForm.tsx
│   │           ├── ContactInfo.tsx
│   │           └── Contact.module.scss
│   │
│   ├── data/
│   │   ├── projects.ts                 # Données des projets (placeholders)
│   │   ├── skills.ts                   # Liste des compétences
│   │   ├── timeline.ts                 # Données du parcours
│   │   └── contact.ts                  # Infos de contact
│   │
│   ├── hooks/
│   │   ├── useIntersectionObserver.ts  # Animation au scroll
│   │   ├── useScrollProgress.ts        # Barre de progression scroll
│   │   ├── useDarkMode.ts              # Gestion dark mode
│   │   └── useWindowSize.ts            # Responsive helpers
│   │
│   ├── utils/
│   │   ├── constants.ts                # Constantes globales
│   │   └── helpers.ts                  # Fonctions utilitaires
│   │
│   ├── styles/
│   │   ├── global.scss                 # Styles globaux
│   │   ├── variables.scss              # Variables SASS (couleurs, spacing)
│   │   ├── mixins.scss                 # Mixins SASS réutilisables
│   │   └── reset.scss                  # CSS reset
│   │
│   └── types/
│       └── index.ts                    # Types TypeScript globaux
│
├── .eslintrc.json
├── .prettierrc
├── .gitignore
├── tsconfig.json
├── vite.config.ts
├── package.json
├── TODO.md                             # Suivi des tâches
├── prompt.md                           # Ce fichier (cahier des charges)
└── README.md                           # Documentation du projet
```

---

## 📋 Plan de développement (phases)

### Phase 1 : Setup et fondations ✅ Prioritaire

**1.1 Initialisation du projet**
- [ ] Créer le projet Vite + React + TypeScript
- [ ] Configurer ESLint + Prettier
- [ ] Créer la structure de fichiers
- [ ] Configurer SASS et variables CSS
- [ ] Setup Git et .gitignore

**1.2 Design system et composants de base**
- [ ] Définir les variables SASS (couleurs, spacing, typographie)
- [ ] Créer le CSS reset et styles globaux
- [ ] Implémenter le système dark mode
- [ ] Développer composant Button
- [ ] Développer composant Card
- [ ] Développer composant Input
- [ ] Développer composant Modal

**1.3 Navigation et layout**
- [ ] Développer la Navbar avec navigation par ancres
- [ ] Implémenter le toggle dark mode dans la navbar
- [ ] Créer le Footer
- [ ] Tester la navigation au clavier

---

### Phase 2 : Sections principales ✅ Prioritaire

**2.1 Section Hero**
- [ ] Implémenter le layout Hero
- [ ] Ajouter photo de profil
- [ ] Intégrer le texte d'accroche
- [ ] Créer les boutons CTA
- [ ] Ajouter liens sociaux
- [ ] Animation d'entrée (fade-in)

**2.2 Section À propos**
- [ ] Layout 2 colonnes (texte + visuel)
- [ ] Intégrer le contenu texte
- [ ] Timeline simplifiée (3 étapes)
- [ ] Animation au scroll

**2.3 Section Compétences**
- [ ] Créer les données de compétences (skills.ts)
- [ ] Grille d'icônes avec tags
- [ ] Organiser par catégories
- [ ] Section Soft Skills séparée
- [ ] Animation au scroll

**2.4 Section Projets**
- [ ] Créer les données projets placeholders (projects.ts)
- [ ] Système de filtrage par technologie
- [ ] Grille responsive de cartes projets
- [ ] Composant ProjectCard avec hover
- [ ] Modal de projet (2 photos + détails)
- [ ] Animation au scroll et stagger effect

**2.5 Section Timeline/Parcours**
- [ ] Créer les données timeline (timeline.ts)
- [ ] Layout timeline verticale
- [ ] Alternance gauche/droite (desktop)
- [ ] Points/nodes pour chaque étape
- [ ] Section certifications
- [ ] Animation progressive au scroll

**2.6 Section Contact**
- [ ] Formulaire avec React Hook Form
- [ ] Validation en temps réel
- [ ] Intégration EmailJS/Formspree
- [ ] Protection anti-spam (honeypot)
- [ ] Informations de contact directes
- [ ] Animation de succès après envoi
- [ ] Messages d'erreur clairs

---

### Phase 3 : Animations et interactivité ✅ Prioritaire

**3.1 Animations au scroll**
- [ ] Hook useIntersectionObserver
- [ ] Fade-in sur toutes les sections
- [ ] Stagger effect pour grilles/listes
- [ ] Scroll progress indicator (optionnel)

**3.2 Micro-interactions**
- [ ] Hover effects sur cartes
- [ ] Hover effects sur boutons
- [ ] Transitions smooth entre états
- [ ] Loading states (formulaire, etc.)

**3.3 Responsive design**
- [ ] Tests mobile (320px - 768px)
- [ ] Tests tablette (768px - 1024px)
- [ ] Tests desktop (1024px+)
- [ ] Tests paysage/portrait
- [ ] Menu burger mobile (si nécessaire)

---

### Phase 4 : Optimisation et qualité 🔒 Non négociable

**4.1 Performance**
- [ ] Audit Lighthouse (target 90+)
- [ ] Optimiser les images (WebP + compression)
- [ ] Lazy loading des images
- [ ] Minification automatique (Vite)
- [ ] Préchargement des fonts
- [ ] Vérifier le bundle size

**4.2 SEO**
- [ ] Meta tags (title, description)
- [ ] Open Graph tags complets
- [ ] Twitter Card tags
- [ ] Structured data JSON-LD
- [ ] Sitemap.xml
- [ ] robots.txt
- [ ] Favicon et app icons

**4.3 Accessibilité (WCAG AA)**
- [ ] Navigation complète au clavier
- [ ] Alt text sur toutes les images
- [ ] Labels sur tous les inputs
- [ ] Vérifier les contrastes (ratio 4.5:1)
- [ ] Focus visible cohérent
- [ ] Aria attributes
- [ ] Landmarks HTML5 sémantiques
- [ ] Skip links
- [ ] Test avec screen reader (NVDA/VoiceOver)

**4.4 Tests et debugging**
- [ ] Tests cross-browser (Chrome, Firefox, Safari, Edge)
- [ ] Tests sur devices réels (iOS, Android)
- [ ] Vérifier console errors (0 erreur)
- [ ] Tester le formulaire de contact
- [ ] Vérifier tous les liens

---

### Phase 5 : Contenu réel 📝 Post-MVP

**5.1 Remplacement des placeholders**
- [ ] Intégrer les vrais projets du repo
  - [ ] Projet3-Portfolio-architecte
  - [ ] Projet4-Nina-Carducci
  - [ ] Projet5-Kasa
  - [ ] Projet6-Mon_Vieux_Grimoire
- [ ] Ajouter screenshots de qualité (2 par projet)
- [ ] Rédiger descriptions détaillées
- [ ] Ajouter liens démo + GitHub
- [ ] Projets professionnels PlayPlay (si autorisés)

**5.2 Contenu additionnel**
- [ ] Side-projects GitHub
- [ ] Témoignages/recommandations (si disponibles)

---

### Phase 6 : Déploiement 🚀 Future

**6.1 Préparation déploiement**
- [ ] Build de production
- [ ] Vérifier le build localement
- [ ] Dernier audit Lighthouse en production
- [ ] Checklist finale avant déploiement

**6.2 GitHub Pages**
- [ ] Configuration GitHub Pages
- [ ] Déploiement sur GitHub Pages
- [ ] Tests en production
- [ ] Vérifier les URLs et routes

**6.3 Post-déploiement (optionnel)**
- [ ] CI/CD avec GitHub Actions
- [ ] Domain custom
- [ ] Analytics (Plausible ou Google Analytics)
- [ ] Monitoring des performances

---

## 🎯 Critères de succès (validation)

### Performance (non négociable)
- ✅ Lighthouse Performance : **90+**
- ✅ Lighthouse Accessibility : **90+**
- ✅ Lighthouse Best Practices : **90+**
- ✅ Lighthouse SEO : **90+**
- ✅ First Contentful Paint : **< 1.5s**
- ✅ Time to Interactive : **< 3s**

### Design
- ✅ Responsive parfait (320px → 1920px+)
- ✅ Animations fluides 60fps
- ✅ Dark mode fonctionnel
- ✅ Design cohérent et professionnel

### Accessibilité (non négociable)
- ✅ Navigation clavier complète
- ✅ WCAG 2.1 AA respecté
- ✅ Screen reader compatible
- ✅ Contrastes conformes

### Contenu
- ✅ 0 faute d'orthographe
- ✅ Tous les liens fonctionnels
- ✅ Formulaire de contact opérationnel
- ✅ Projets bien documentés

---

## 📚 Ressources et références

### Inspiration design portfolios
- **gmanzola.fr** - Référence principale (filtres, structure)
- **brittanychiang.com** - Excellent storytelling développeur
- **jacekjeznach.com** - Animations CSS subtiles
- **adhamdannaway.com** - Design épuré et professionnel

### Documentation technique

**React & TypeScript**
- React Documentation : https://react.dev/
- TypeScript Handbook : https://www.typescriptlang.org/docs/

**Outils de build**
- Vite Documentation : https://vitejs.dev/
- Vite React Plugin : https://github.com/vitejs/vite-plugin-react

**Styling**
- SASS Documentation : https://sass-lang.com/documentation/
- CSS Modules : https://github.com/css-modules/css-modules

**Forms**
- React Hook Form : https://react-hook-form.com/

**EmailJS/Formspree**
- EmailJS : https://www.emailjs.com/docs/
- Formspree : https://formspree.io/

### Outils utiles

**Design**
- Coolors.co - Générateur de palettes
- Adobe Color - Harmonies de couleurs
- Contrast Checker - Vérification WCAG

**Icônes**
- Lucide React : https://lucide.dev/
- React Icons : https://react-icons.github.io/react-icons/

**Fonts**
- Google Fonts : https://fonts.google.com/
- Inter : https://rsms.me/inter/

**Images**
- TinyPNG - Compression images
- Squoosh - Conversion WebP
- Remove.bg - Suppression fond (si besoin)

**Performance & SEO**
- Lighthouse : Intégré Chrome DevTools
- PageSpeed Insights : https://pagespeed.web.dev/
- Meta Tags : https://metatags.io/ (prévisualisation)

**Accessibilité**
- WAVE : https://wave.webaim.org/
- axe DevTools : Extension Chrome
- Contrast Checker : https://webaim.org/resources/contrastchecker/

---

## ✅ Checklist finale avant lancement

### Contenu
- [ ] Toutes les sections remplies avec contenu final
- [ ] Projets réels avec screenshots de qualité
- [ ] Bio relue et validée (0 faute)
- [ ] Informations de contact vérifiées et fonctionnelles
- [ ] Tous les liens externes testés (GitHub, LinkedIn)
- [ ] Textes en français corrects
- [ ] Code et commentaires en anglais

### Fonctionnalités
- [ ] Navigation par ancres fonctionnelle
- [ ] Dark mode opérationnel et persistant (localStorage)
- [ ] Filtres de projets fonctionnels
- [ ] Modales de projets s'ouvrent/ferment correctement
- [ ] Formulaire de contact testé et reçu par email
- [ ] Smooth scroll entre sections
- [ ] Animations au scroll fluides

### Technique
- [ ] 0 erreur dans la console
- [ ] 0 warning TypeScript
- [ ] Build de production réussi
- [ ] Bundle size raisonnable (< 500KB idéalement)
- [ ] Tests sur Chrome ✅
- [ ] Tests sur Firefox ✅
- [ ] Tests sur Safari ✅
- [ ] Tests sur Edge ✅
- [ ] Tests mobile iOS ✅
- [ ] Tests mobile Android ✅

### Performance (non négociable)
- [ ] Lighthouse Performance : 90+ ✅
- [ ] Lighthouse Accessibility : 90+ ✅
- [ ] Lighthouse Best Practices : 90+ ✅
- [ ] Lighthouse SEO : 90+ ✅
- [ ] Toutes les images optimisées (WebP + compression)
- [ ] Lazy loading activé
- [ ] Fonts préchargées

### SEO (non négociable)
- [ ] Meta title unique et descriptif
- [ ] Meta description optimisée (< 160 caractères)
- [ ] Open Graph tags complets (og:title, og:description, og:image, og:url)
- [ ] Twitter Card tags
- [ ] Structured data JSON-LD ajouté
- [ ] Sitemap.xml généré
- [ ] robots.txt configuré
- [ ] Favicon ajouté (16x16, 32x32, 180x180)
- [ ] Apple touch icon

### Accessibilité (non négociable)
- [ ] Navigation complète au clavier testée ✅
- [ ] Tab order logique
- [ ] Focus visible sur tous les éléments interactifs
- [ ] Alt text descriptif sur toutes les images
- [ ] Labels explicites sur tous les inputs du formulaire
- [ ] Contrastes vérifiés (ratio 4.5:1 minimum) ✅
- [ ] Aria attributes ajoutés où nécessaire
- [ ] Landmarks HTML5 corrects (header, nav, main, section, footer)
- [ ] Skip links fonctionnels
- [ ] Test screen reader NVDA ou VoiceOver ✅
- [ ] Pas de piège au clavier

### Responsive
- [ ] Mobile portrait (320px - 480px) ✅
- [ ] Mobile paysage (480px - 768px) ✅
- [ ] Tablette (768px - 1024px) ✅
- [ ] Desktop (1024px - 1440px) ✅
- [ ] Large desktop (1440px+) ✅
- [ ] Menu burger mobile (si implémenté)

### Code Quality
- [ ] Code formaté avec Prettier ✅
- [ ] Pas d'erreur ESLint ✅
- [ ] Pas de TODO dans le code
- [ ] Code commenté en anglais où nécessaire
- [ ] Composants réutilisables et bien organisés
- [ ] Types TypeScript corrects

---

## 🚀 Après le lancement

### Améliorations continues (Phase future)
1. **Analytics** - Suivre les visites (Plausible recommandé pour la vie privée)
2. **Blog/Veille** - Ajouter une section articles techniques
3. **Témoignages** - Intégrer recommandations LinkedIn
4. **Side-projects** - Documenter nouvelles expérimentations
5. **i18n** - Version anglaise (si besoin international)
6. **Animations avancées** - PixiJS/AnimeJS (si temps et pertinence)

### Promotion du portfolio
- [ ] Ajouter le lien dans la bio GitHub
- [ ] Partager sur LinkedIn avec post
- [ ] Ajouter en signature d'email
- [ ] Référencer dans le CV
- [ ] Demander feedback à des mentors/pairs

---

## 📞 Informations de contact

**Développeur :** Jean-Noël Drugmand
**Email :** jn.drugmand@gmail.com
**LinkedIn :** linkedin.com/in/jean-noel-drugmand
**GitHub :** github.com/daddyjanno
**Localisation :** Île-de-France

---

## 🎬 Conclusion

Ce portfolio doit refléter le parcours unique : **un professionnel de l'audiovisuel et manager devenu Creative Developer**.

### Les 3 piliers du portfolio :

1. **Excellence technique** : Code propre, performant, accessible, SEO optimisé
2. **Créativité visuelle** : Design moderne, animations fluides, UX soignée
3. **Storytelling professionnel** : Reconversion bien racontée, crédibilité établie

### Message clé à transmettre :
*"Développeur fullstack alliant rigueur technique, créativité visuelle et esprit d'équipe, avec une expérience unique en management et création audiovisuelle."*

---

**Prêt à coder ? Let's build something amazing! 🚀**
