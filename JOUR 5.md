# JOUR 5 – Révisions, bonnes pratiques et gestion des listes avec React

## Objectif

Aujourd’hui, on consolide les bases de React, on termine les fonctionnalités essentielles, et on apprend à bien gérer les listes avec la prop `key`. Ce point est fondamental pour éviter des bugs subtils et des warnings dans la console.

---

## 1. Révision collective

- Reprendre ensemble l’ajout, la suppression et le filtrage des membres.
- Vérifier que le localStorage fonctionne bien.
- Corriger les bugs ou warnings restants.

---

## 2. Focus : la prop `key` dans les listes React

### Pourquoi utiliser une `key` ?

- React a besoin d’une clé unique pour chaque élément d’une liste afin de mieux gérer les mises à jour et éviter des comportements inattendus.
- Si la `key` n’est pas unique ou absente, React affiche un warning et peut mal réordonner ou réutiliser les composants.

### Exemple à corriger

```jsx
// Mauvais : pas de key
{members.map((member) => (
  <MemberCard member={member} />
))}

// Bon : key unique (par exemple member.id)
{members.map((member) => (
  <MemberCard key={member.id} member={member} />
))}
```

## 3. Exercice pratique : Comprendre l’impact des clés

Exercice : "Liste dynamique et clés"

**But :**

Vous allez créer une page qui affiche une liste de prénoms.
Un bouton permet de mélanger l’ordre des prénoms (shuffle).
Observez ce qui se passe avec et sans la prop key.

**Étapes :**

1. Créez un composant `ShuffleList` qui affiche une liste de prénoms dans des `<li>`.
2. Ajoutez un bouton "Mélanger" qui mélange l’ordre des prénoms (utilisez `sort` ou une fonction de shuffle).
3. Affichez la liste SANS la prop `key` sur les `<li>`. Regardez la console.
Ajoutez ensuite une `key` unique (par exemple, le prénom ou un id).
Comparez le comportement et les warnings.

**Exemple de point de départ :**

```js
import { useState } from "react";

const initialNames = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 3, name: "Charlie" },
  { id: 4, name: "Diana" },
];

function ShuffleList() {
  const [names, setNames] = useState(initialNames);

  const shuffle = () => {
    setNames([...names].sort(() => Math.random() - 0.5));
  };

  return (
    <div>
      <button
        onClick={shuffle}
        className="mb-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Mélanger
      </button>
      <ul>
        {names.map((person, index) => (
          <li
            className="mb-4 p-4 border rounded flex items-center gap-4 bg-gray-50"
          >
            <span className="font-semibold w-24">
              {index}. {person.name}
            </span>
            <input
              type="checkbox"
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ShuffleList;
```

**Questions :**

- Que se passe-t-il dans la console sans la prop key ?
- Pourquoi faut-il une clé unique ?
- Que se passe-t-il si deux éléments ont la même clé ?

## À retenir

- Toujours utiliser une prop key unique sur les listes générées dynamiquement.
- La clé doit être stable et unique (id, ou une valeur qui ne change pas).
- Cela évite des bugs et des comportements inattendus lors des ajouts, suppressions ou réordonnancements.

## Analyse réflexive finale

**En fin de journée :**

- Quels progrès j’ai faits cette semaine ?
- Quel outil ou concept m’a le plus challengé ?
- Est-ce que je suis capable d’expliquer mon code à quelqu’un ?
- Quelles compétences je veux continuer à développer ?

**Conseil** : le code, c’est bien, mais savoir en parler, c’est encore mieux. Prenez le temps de formuler ce que vous faites. 