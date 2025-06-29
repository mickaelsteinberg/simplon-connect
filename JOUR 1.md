# JOUR 1 — DÉCOUVERTE DE REACT & MISE EN PLACE DU PROJET

## Objectif de la journée

Aujourd’hui, vous posez les fondations. Le but est d’installer un projet React avec Vite, de comprendre l’organisation des fichiers générés, de créer un composant simple et de l’afficher à l’écran. Ce premier contact avec React doit vous permettre de sortir de la simple consommation de tutos, et de vous mettre directement dans une posture active de développement.

À la fin de la journée, vous devez être capables de :
- Expliquer ce qu’est une librairie comme React, et pourquoi on l’utilise.
- Installer un projet React moderne avec Vite et npm.
- Identifier et expliquer les fichiers clés dans un projet React.
- Écrire et afficher un composant React simple à l’écran.
- Travailler en binôme/trinôme, documenter votre avancée, et présenter votre code oralement.

## MISE EN SITUATION CLIENT

**Contexte :** L’équipe de Simplon vous a mandatés pour réaliser un prototype d’application de type “annuaire de promo”. Il faut commencer par mettre en place la base technique du projet. Le projet devra pouvoir évoluer dans les jours à venir, donc la structure doit être propre dès le départ.

## PLAN DE TRAVAIL

**1. Installation du projet (matin)**

Livrable attendu : _projet React fonctionnel lancé localement._
- Installer Node.js si ce n’est pas fait.
- Créer un projet React avec Vite, grâce à npm.
- Expliquer ce qu'est Vite.
- Lancer le serveur de développement.
- Nettoyer le projet : supprimer le code inutile généré par défaut.

Observer les fichiers importants :
- index.html
- main.jsx
- App.jsx

**Jalon 1 :** Le projet s’affiche dans le navigateur avec un message personnalisé.

**2. Exploration de la structure (milieu de journée)**

Livrable attendu : _compréhension orale et écrite de la structure._
- Tracer le chemin du rendu : comment un composant React se retrouve dans la page HTML ?
- Identifier le point d’entrée de l’application.
- Comprendre ce que fait ReactDOM.
- Modifier le App.jsx pour y insérer un composant de votre choix.

**Jalon 2 :** Vous êtes capables d’expliquer à quoi servent les fichiers principaux du projet.

**3. Création d’un composant statique (après-midi)**

Livrable attendu : _un composant MemberCard.jsx avec des données en dur._
- Créer un dossier components.
- Créer un fichier MemberCard.jsx.
- Écrire un composant qui affiche le prénom, le nom, une techno préférée et un petit message.
- Importer et afficher ce composant dans App.jsx.
- Ajouter du style minimal (classe CSS ou Tailwind si vous le souhaitez).
- Afficher plusieurs cartes.

```js
export const members = [
  {
    firstName: "Inès",
    lastName: "Dupont",
    tech: "React",
    message: "Toujours partante pour un nouveau challenge frontend !",
  },
  {
    firstName: "Liam",
    lastName: "Nguyen",
    tech: "Laravel",
    message: "Le back c’est ma passion, mais j’apprivoise React petit à petit.",
  },
  {
    firstName: "Amina",
    lastName: "Benali",
    tech: "Vue.js",
    message: "Pro du CSS, j’adore soigner les détails visuels.",
  },
  {
    firstName: "Noé",
    lastName: "Durand",
    tech: "Node.js",
    message: "Le JS côté serveur, c’est mon truc. Je suis ici pour monter en fullstack.",
  },
  {
    firstName: "Clara",
    lastName: "Morel",
    tech: "Python",
    message: "J’ai un faible pour les API propres et bien documentées.",
  },
];
```

**Jalon 3 :** Plusieurs MemberCard sont affichées à l’écran. Le composant est clair, bien indenté.

## ÉVALUATION INTERMÉDIAIRE

En fin de journée, vous présenterez en binôme :
- Comment vous avez installé et lancé le projet.
- Le rôle de chaque fichier dans le rendu.
- Le composant que vous avez créé, et ce qu’il affiche.
- Les éventuels blocages rencontrés et les choix faits pour les contourner.
- Cette présentation sera courte (5 à 7 min max) et se fera devant un autre binôme.

## ANALYSE RÉFLEXIVE

Pour clore la journée (avant le travail sur le projet pro), on prend 15 minutes ensemble pour se poser :

Questions de réflexion individuelle (à noter dans un carnet, Notion ou sur papier) :
- Qu’est-ce que j’ai réellement compris aujourd’hui ?
- Qu’est-ce qui me semble encore flou ou fragile ?
- Quel moment de la journée m’a apporté une vraie satisfaction ?
- Qu’est-ce que je veux absolument consolider demain ?
- Est-ce que j’ai osé chercher, tester, casser du code ?
- Comment je me suis positionné dans mon binôme ? Qu’est-ce que j’ai apporté ?

En collectif :
Chacun partage à voix haute un point de satisfaction et un point à améliorer.
L’objectif est de créer un climat de progression partagée, pas de compétition.