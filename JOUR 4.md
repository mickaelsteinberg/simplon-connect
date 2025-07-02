# JOUR 4 – Suppression, filtrage et persistance des données

## Objectif du jour

Mettre en place des interactions plus complexes avec l'état local et assurer la **persistance des données** dans le navigateur grâce à `localStorage`.

## Mise en situation

Vous devez ajouter aujourd'hui deux fonctionnalités importantes dans l'appli Simplon Connect, et améliorer le process de sauvegarde locale des données :

1. **Pouvoir supprimer un membre**
2. **Pouvoir rechercher ou filtrer un membre par son prénom, nom ou techno**
3. **Conserver les données saisies même en cas de rafraîchissement de la page**

## Livrables attendus

- Un champ de recherche ou de filtrage fonctionnel (choisissez le critère: techno, prénom, message, etc.)
- Un bouton de suppression sur chaque carte membre
- La mise à jour immédiate de l’interface sans rechargement
- Les données doivent être **stockées et relues via `localStorage`**

## Jalon technique

1. **Stockage initial dans `localStorage`**
   - À la première exécution, les données sont stockées dans `localStorage`
   - Au rechargement, elles sont relues automatiquement (si elles existent)

2. **Suppression d’un membre**
   - Activer un **Mode suppression** qui permet de :
      - Afficher un bouton "Supprimer" (ou icône) au survol de chaque `MemberCard`
      - Demander la confirmation avant de supprimer le membre
   - Mise à jour du state local + mise à jour dans `localStorage`

3. **Filtrage / recherche**
   - Barre de recherche en haut de la page
   - Chaque lettre tapée dans la barre modifie la liste des `MemberCard` affichés
   - Si le champ est vide, tous les membres sont affichés
   - Si la recherche ne renvoie aucun membre, afficher *"Aucun membre ne correspond à votre recherche"*
   - Mise à jour du rendu des `MemberCard` en temps réel

## Modalités pédagogiques

- Travail en groupes de 2 à 3 personnes
- Présentation orale en fin de journée par groupe
- Débrief collectif à l’oral : comment on a fait, où on a bloqué, solutions trouvées

## À la fin de la journée, je suis capable de :

- Supprimer dynamiquement un élément d'une liste React
- Mettre en place un filtre basé sur un champ utilisateur
- Utiliser `localStorage` pour stocker et relire des données
- Gérer des mises à jour d’état de manière fluide avec React

## Bonus : si vous avez le temps

- Ajouter un message de confirmation avant la suppression
- Faire une recherche insensible à la casse
- Permettre de filtrer par plusieurs critères (nom + techno)

## Analyse réflexive

- Quelles étapes sont nécessaires pour garder localStorage et useState synchronisés ?
- Comment ai-je structuré mon filtre et pourrait-il être plus réutilisable ?
- Qu’est-ce qui m’a posé le plus de difficulté aujourd’hui, et pourquoi ?
- Si je devais refaire l'exercice seul demain, que changerais-je dans ma méthode ?
