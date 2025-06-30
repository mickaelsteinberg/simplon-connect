# JOUR 2 – Composants, JSX, props

## Objectifs du jour

- Comprendre le rôle du JSX dans React
- Créer des composants fonctionnels réutilisables
- Utiliser les props pour transmettre des données
- Afficher une liste dynamique à partir de données simulées

## MISE EN SITUATION CLIENT

**Contexte :** Le projet Simplon Connect est lancé, vous avez posé les bases de votre application hier (structure du projet, affichage d’un composant statique). Aujourd’hui, vous attaquez le cœur du métier : créer des composants dynamiques, modulables et réutilisables.

## Jalons techniques

1. **Création du composant `MemberCard`**
   - Le composant affiche :
     - Prénom + Nom
     - Tech préférée
     - Message personnel
   - Les données sont reçues via des `props`.

2. **Création d’un tableau de membres**
   - Données simulées (dans un fichier à part ou directement dans `App.jsx`).
   - Contient au moins 4 membres.

3. **Affichage dynamique de la liste**
   - Utilisation de `map()` pour afficher plusieurs `MemberCard`.
   - Chaque carte reçoit les données depuis les `props`.

4. **Structuration du projet**
   - Création du dossier `components/`.
   - Import propre de `MemberCard`.

---

## Attendus en fin de journée

- Code lisible, indenté, structuré.
- Capacité à expliquer oralement :
  - La différence entre un composant statique et dynamique.
  - Comment `props` permet de rendre un composant réutilisable.
  - Comment `map()` est utilisé pour afficher une liste.
- Projet fonctionnel avec affichage d’une liste de membres.

---

## ÉVALUATION INTERMÉDIAIRE

En fin de journée, vous présenterez en binôme/trinôme :
- **Code source** : propre, modulaire, bon usage des props et de la fonction `map`.
- **Présentation orale** :
  - Quelle structure de fichiers vous avez choisie et pourquoi ?
  - Quelle est la fonction de chaque composant ?
  - Comment les données sont passées et affichées ?

---

## Analyse réflexive

En fin de journée, vous prenez 10 minutes pour répondre à ces questions :
- Qu’est-ce que j’ai compris aujourd’hui ?
- Sur quoi je me suis senti·e à l’aise ? Sur quoi j’ai bloqué ?
- À quel moment j’ai appris quelque chose d’important ?
- Qu’est-ce que j’aimerais revoir demain pour mieux ancrer ce que j’ai vu aujourd’hui ?
