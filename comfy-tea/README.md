# Comfy - Tea Room Website

Un site vitrine moderne et responsif pour le salon de thé **Comfy** à Genève. Construit avec React, TypeScript et Tailwind CSS.

## 🎯 Caractéristiques

✅ **Responsive** - Mobile-first, optimisé pour tous les appareils
✅ **SEO Optimisé** - Meta tags, Open Graph, Schema.org, Structured Data
✅ **Performance** - Code splitting, minification, lazy loading ready
✅ **Accessibilité** - Sémantique HTML5, ARIA labels
✅ **UX Moderne** - Animations fluides, transitions, interactions
✅ **TypeScript** - Type-safe, meilleure maintenabilité

## 🏗️ Structure du Projet

```
src/
├── components/
│   ├── Navigation.tsx      # Navbar responsive avec menu mobile
│   ├── Hero.tsx           # Section héro avec CTA
│   ├── Products.tsx       # Grille de produits avec filtres
│   ├── Drinks.tsx         # Carrousel de boissons
│   ├── About.tsx          # Section localisation & informations
│   └── Footer.tsx         # Footer avec liens & newsletter
├── hooks/
│   └── useIntersectionObserver.ts  # Hook pour animations au scroll
├── App.tsx                # Composant principal avec Helmet SEO
├── main.tsx               # Point d'entrée avec HelmetProvider
└── index.css              # Styles Tailwind + custom animations
```

## 🚀 Démarrage Rapide

### Installation

```bash
# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev

# Build pour la production
npm run build

# Prévisualiser le build production
npm run preview
```

## 📋 Stack Technique

- **React 19** - Librairie UI
- **TypeScript** - Typage statique
- **Vite** - Build tool ultra-rapide
- **Tailwind CSS** - Utility-first CSS
- **React Helmet Async** - Gestion des meta tags SEO
- **Lucide Icons** - Icônes SVG
- **PostCSS** - Transformation CSS

## 🎨 Palette de Couleurs

La palette est inspirée du design Sweet Hour fourni :

```
cream:          #FAF4F0    (Crème)
peach:          #F9D5C8    (Pêche)
peach-dark:     #E8A892    (Pêche foncée)
rose:           #E8B5C9    (Rose)
rose-dark:      #D98BA4    (Rose foncée)
orange:         #F5B895    (Orange)
orange-dark:    #E89768    (Orange foncée)
```

## ⚙️ Sections du Site

### 1. Navigation
- Logo et branding
- Menu de navigation responsive
- Menu mobile avec hamburger
- Bouton "Réservation" CTA
- Barre d'annonce au-dessus

### 2. Hero Section
- Grand titre avec gradient
- Description du salon
- Boutons CTA (découvrir / en savoir plus)
- Stats (50+ variétés, 15+ pâtisseries, 100% bio)
- Placeholder pour image hero
- Indicateur de scroll

### 3. Produits
- Grille responsive 3 colonnes (desktop) / 1 colonne (mobile)
- Filtres par catégorie (Donuts, Viennoiseries, Muffins)
- Carte produit avec image, prix, description, tags
- Bouton favori (like) avec animation
- Bouton "Ajouter au panier"
- Hover effects élégants

### 4. Boissons
- Carrousel automatique avec contrôles manuels
- Navigation par points (dots)
- Pause/Play du diaporama
- Grille de 3 boissons en bas
- Détails complets pour chaque boisson

### 5. À Propos / Localisation
- Information de magasin (adresse, horaires)
- Placeholder pour carte Google Maps
- Badge "5/5 étoiles"
- Features (Bio, Fait maison, Ambiance cozy)
- Boutons de réservation

### 6. Footer
- Section newsletter
- 5 colonnes d'informations
- Liens sociaux
- Informations légales
- Copyright
- Bouton "Retour vers le haut" flottant

## 🔍 Optimisation SEO

### Meta Tags
- Title et description personnalisées
- Keywords ciblés
- Canonical URL
- Open Graph (Facebook)
- Twitter Card

### Schema.org
Données structurées pour :
- LocalBusiness
- PostalAddress
- OpeningHoursSpecification
- AggregateRating

### Performance
- Compression CSS au build
- Code splitting (vendor chunks)
- Minification Terser
- Cache headers
- Mobile-first responsive design

## 📱 Breakpoints Responsive

- **sm**: 640px
- **md**: 768px
- **lg**: 1024px
- **xl**: 1280px
- **2xl**: 1536px

## 🎯 À Faire Avant La Production

1. **Remplacer les Placeholders d'Images**
   - Hero image du produit
   - Images des donuts/pâtisseries
   - Images des boissons
   - Map interactive Google Maps

2. **Configurer les URLs**
   - Remplacer `https://comfy-tea.ch` par votre domaine
   - Ajouter votre OG image réelle
   - Configurer favicon

3. **Intégrations**
   - Connecter base de données pour réservations
   - Intégrer Google Maps API
   - Mettre en place système de panier
   - Email de confirmation newsletter

4. **Analytics & Tracking**
   - Google Analytics 4
   - Google Search Console
   - Facebook Pixel
   - Hotjar pour UX

5. **Tester & Valider**
   - GTmetrix pour performance
   - Google PageSpeed Insights
   - Lighthouse
   - Tests de responsiveness mobile
   - Tests SEO (SEMrush, Ahrefs)

## 🎨 Personnalisation

### Modifier les Couleurs

Éditez `tailwind.config.js` :

```javascript
colors: {
  cream: '#FAF4F0',
  peach: '#F9D5C8',
  // ... vos couleurs
}
```

### Modifier les Textes

Les textes sont principalement dans les composants.

### Ajouter des Sections

1. Créez un nouveau fichier dans `src/components/`
2. Importez-le dans `App.tsx`
3. Ajoutez-le entre les autres sections

## 📊 Bonnes Pratiques Appliquées

✅ Mobile-first approach
✅ Semantic HTML5
✅ ARIA labels pour accessibilité
✅ Performance optimisée
✅ SEO best practices
✅ Type-safe avec TypeScript
✅ Fast loading times
✅ Clean, maintainable code
