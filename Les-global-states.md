# Les état globaux

## Objectifs

Pour ce dernier cours de l'année lié à des notions présentes dans le programme du titre CDA, nous allons aborder les états globaux.  
C'est une notion avancée car elle nécessite d'avoir une bonne compréhension de react et de l'architecture de nos applications. Néanmoins, les outils actuels ont rendu cette notion plus accessible.  
Dans ce cadre là, c'est une approche par la veille et l'essai erreur qui sera privilégiée.  

## Mission

Vous découvrirez dans un premier temps une situation qui, bien que fonctionnelle, n'est pas amusante pour un développeur.  
L'objectif sera ensuite de mettre en place un état global pour améliorer cette situation via l'outil Context de React.  
Nous verrons également comment Zustand peut être utilisé pour des applications plus complexes.

Dans un second temps, vous devrez utiliser vos techniques de veille pour trouver des alternatives à Context et Zustand, les comparer et les présenter en groupe.  

- Quel serait votre outil pour votre application actuelle ?
- Sont-ils compatibles avec d'autres frameworkJS que vous utilisez ?
- Essayez au maximum de mettre en place ces frameworks dans le cas de notre application exemple

## TP - Mise en place d'un état global chez les Denledo

### Situation

La famille Denledo est une famille qui fait beaucoup d'enfants.
La règle dans la famille Denledo est que chaque premier enfant masculin doit avoir un prénom unique.
Oui, tous les adultes hommes de la famille Denledo s'appellent Geoffroy.

Gaietcho est le dernier né de la famille. A 6 ans, il est déjà un très bon développeur sur la calculatrice TI-9876543210. Il ne connait pas les état globaux et il a codé une application pour sa famille. Il a créé une page d'accueil uniquement pour l'instant.
Elle doit permettre d'afficher le nom et prénom de chaque premier enfant masculin de la famille Denledo.

### Mission

Vous devez aider Gaietcho à améliorer son application.
- Créer un Composant Frère qui reçoit en props son prénom
- Créer un Composant Pere qui reçoit en props son prénom
- Créer un Composant GrandPere qui reçoit en props son prénom
- Créer un Composant ArriereGrandPere qui reçoit en props son prénom

Par héritage, chaque Ancêtre donne son prénom à son descendant.

Le composant ArriereGrandPere doit afficher son prénom et afficher le composant GrandPere en lui passant son prénom en props.
Le composant GrandPere doit afficher son prénom et afficher le composant Pere en lui passant son prénom en props.
Le composant Pere doit afficher son prénom et afficher le composant Frere en lui passant son prénom en props.
Le composant Frere doit afficher son prénom.

### Résultat attendu

Dans le fichier App.tsx, créer un état `prenomDeLaFamille` qui contiendra le prénom de chaque premier enfant masculin de la famille Denledo.

App.tsx
```tsx
/// State prenomDeLaFamille

/// ...

<ArriereGrandPere prenom={prenomDeLaFamille} />
```

ArriereGrandPere.tsx
```tsx
<div className="ArriereGrandPere">
  <h2>ArriereGrandPere: {props.prenom}</h2>
  <GrandPere prenom={props.prenom} />
</div>
```

Dans un second temps, le frère doit pouvoir changer son prénom et celui de ses ancêtres.
Le monde a changé et les enfants sont devenus rois. Ils décident de tout, même du prénom de leur ancêtre.

Offrez un champ formulaire pour changer le prénom du frère dans le composant Frere.
Lorsque que l'on clique sur le bouton "Changer le prénom", le prénom du frère doit changer et celui de ses ancêtres également.

Utilisez vos technique de remontée de state pour changer le prénom de chaque ancêtre une fois le formulaire validé.

### C'est pas drôle...

Une fois cette mission réalisée, vous vous rendez compte que c'est pas drôle pour Gaietcho. Utilisez une ressource sur les contextes pour améliorer la situation.

https://react.dev/learn/passing-data-deeply-with-context

### C'est pas encore la joie infinie...

Oui, c'est le temps des enfants rois... Dans ce cadre là, même les futurs développeurs sont très rapidement frustrés...

Utilisez une ressource sur Zustand pour améliorer la situation.

https://grafikart.fr/tutoriels/zustand-react-2176

### Livrables

Un dépôt git par développeur, mettant en place une application Vite avec React.
L'application doit être fonctionnelle et respecter les consignes.

## Un temps de veille

### La connaissance / culture G

En binome, vous devrez trouver des alternatives à Context et Zustand.
La liste est longue...

Aidez-vous de cette liste de questions pour trouver des alternatives à Context et Zustand:
- Quels sont les outils les plus populaires ?
- Quels sont les outils les plus récents ?
- Quel serait votre outil pour votre application actuelle ?
- Sont-ils compatibles avec d'autres frameworkJS que vous utilisez ?
- Essayez au maximum de mettre en place ces frameworks dans le cas de notre application exemple

### Exemple pour un thème

Créer une petit application avec votre outil préféré.
L'application doit permettre d'afficher un thème sombre ou clair.

Pour cela, un composant Container sera créé et affichera une couleur de fond en fonction du thème choisi dans l'état global.

Une composant Card sera créé et affichera une couleur de fond en fonction du thème choisi dans l'état global (opposé à celle du Container).

Un composant Button sera créé et permettra de changer le thème.
Il aura un style différent en fonction du thème choisi également.

Créer une application avec dans le composant App :
- un état global pour le thème
- un composant Container

Dans le composant Container il y aura :
- du style en fonction du thème
- un composant Card

Dans le composant Card il y aura :
- du style en fonction du thème
- un composant Button

Dans le composant Button il y aura :
- du style en fonction du thème
- un bouton pour changer le thème
