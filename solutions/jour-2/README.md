# Solution Jour 2 — Props, `children` et état local avec `useState`

## Objectifs du jour

- Comprendre le rôle des props dans la circulation de données.
- Utiliser `props.children` pour rendre un composant plus flexible.
- Mettre en place un état local dans un composant avec `useState`.
- Gérer une interaction utilisateur simple : changement de style au clic.
- Appliquer une structure de composants claire et maintenable.

## Architecture générale

L’application repose sur une structure simple mais modulaire :

- **`App.jsx`** : point d’entrée qui affiche une liste de `MemberCard`.
- **`MemberCard.jsx`** : composant représentant un membre, avec image, nom, message, et badge.
- **`Badge.jsx`** : composant enfant stylisé, affichant une technologie (React, Vue, etc.).

## `useState` : pourquoi et comment l'utiliser ici

Dans React, `useState` permet à un composant de **mémoriser une information locale** qui peut changer dans le temps.

Dans notre cas, chaque `MemberCard` peut **inverser la couleur de son badge** lorsqu'on clique dessus. Pour cela :

- On crée un état `isInverted` initialisé à `false`.
- Lors d’un clic, on inverse cette valeur (`true` ↔ `false`).
- On utilise cette valeur pour modifier dynamiquement les classes CSS du badge (via Tailwind).

👉 Cet état est **local au composant** : chaque carte a son propre comportement indépendant des autres.

## `props.children` : à quoi ça sert ?

Le mot-clé `props.children` en React permet à un composant d’**accueillir un contenu flexible** entre ses balises.

Dans le projet :

- Le composant `Badge` ne sait pas à l’avance ce qu’il va afficher.
- Il utilise `props.children` pour **afficher dynamiquement la techno** transmise par son parent.
- Cela rend `Badge` réutilisable dans d'autres contextes (on pourrait y mettre un emoji, un nom, un tag, etc.).

👉 C’est un outil essentiel pour la **composabilité** en React : on construit des briques adaptables.

## Résultat final

- L’interface est claire : chaque membre a sa carte personnalisée.
- Un clic sur une carte inverse les couleurs de son badge de manière fluide.
- Les composants sont bien séparés, lisibles, et extensibles.

## A retenir

- `props` permet de transmettre des données d’un composant parent à un composant enfant.
- `props.children` rend un composant **plus générique**.
- `useState` permet d’ajouter de **l’interactivité locale** à un composant.
- Une bonne séparation des composants favorise la lisibilité et la réutilisabilité.
- Les interactions peuvent être enrichies simplement avec React et Tailwind.
