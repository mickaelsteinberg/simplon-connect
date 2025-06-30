# JOUR 3 – États et interactions (useState)

## Contexte pédagogique

Maintenant que ton application peut afficher des données, il est temps de la rendre interactive. Le client souhaite pouvoir ajouter un membre via un formulaire. À toi de mettre en place un système d’état (`useState`) pour que l’interface réagisse aux actions de l’utilisateur.

---

## Objectifs du jour

- Comprendre la logique des hooks dans React (focus sur `useState`)
- Créer un formulaire contrôlé
- Mettre à jour dynamiquement une liste de données
- Structurer et nommer proprement les composants

---

## Jalons techniques

1. **Création du formulaire `MemberForm`**
   - Champs contrôlés (inputs reliés à des états).
   - Validation simple (aucun champ ne doit être vide).

2. **Ajout dynamique à la liste**
   - Clic sur le bouton "Ajouter" → le nouveau membre apparaît dans la liste sans recharger la page.
   - Le champ du formulaire est vidé après l’ajout.

3. **Organisation du code**
   - Séparer `MemberCard` et `MemberForm` dans des fichiers distincts.
   - Utiliser un state global (dans `App.jsx`) pour gérer la liste de membres.

---

## Attendus en fin de journée

- L’utilisateur peut saisir un nouveau membre via un formulaire fonctionnel.
- La liste est mise à jour immédiatement sans rechargement.
- Le formulaire est bien contrôlé : l’état reflète les champs saisis.
- Code clair et bien structuré, noms explicites.

---

## Évaluation (JOUR 3 après-midi)

- **Code source** :
  - Présence d’un formulaire contrôlé avec `useState`.
  - Ajout dynamique de nouveaux membres.
  - Composants bien nommés et organisés.

- **Présentation orale (par groupe)** :
  - Démonstration du formulaire fonctionnel.
  - Explication de `useState` : à quoi il sert, comment il fonctionne.
  - Parcours du code : où est l’état ? comment il évolue ?

---

## Analyse réflexive

À faire seul·e ou en binôme :
- Est-ce que j’ai réussi à rendre mon interface interactive ?
- Qu’est-ce que j’ai compris dans le fonctionnement de `useState` ?
- Quelles difficultés ai-je rencontrées ? Comment les ai-je contournées ?
- Est-ce que mon code est clair pour quelqu’un d’autre que moi ?

---

**Conseil :** demain, tu découvriras `useEffect` et le stockage local. Si tu veux aller plus loin, tu peux commencer à réfléchir à comment tu pourrais sauvegarder les membres pour les retrouver même après un refresh.
