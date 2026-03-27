# SRA2: Enhancements

Ce module complémentaire pour FoundryVTT est conçu pour enrichir et personnaliser l'expérience de jeu sur le système **Shadowrun Anarchy 2** (SRA2).

## Fonctionnalités Principales

* **Séparation Totale de l'Économie (XP / Cash) :**  
  Le système natif gère parfois l'équipement via le système d'expérience. Ce module permet de séparer ces concepts en gérant un portefeuille de "Cash" dédié, indépendant des points d'XP résiduels du système.
  
* **Interface "Cash" Intégrée à la Fiche V2 :**  
  Le module remplace l'affichage global des Yens par de l'XP là où c'est nécessaire, et injecte proprement un véritable champ "Cash" (Yens) dans le pied de page de la fiche de personnage V2.

* **Coût en Cash sur les Objets :**  
  Les armes, équipements, cyberwares, cyberdecks, etc. bénéficient d'un champ d'édition de Coût en Cash. Leur coût s'affiche avec une coloration dorée bien visible dans les listes de la fiche de personnage.

* **Déduction Automatique à l'Achat :**  
  Lorsqu'un objet configuré avec un coût en Cash est glissé-déposé sur la fiche d'un personnage, une fenêtre de confirmation propose de déduire automatiquement cette somme des économies du personnage.

* **Sons Personnalisés d'Interface :**  
  Ajoutez une touche d'immersion via les paramètres en configurant un fichier audio qui se jouera automatiquement à l'ouverture ou à la fermeture de la fiche de personnage.

## Compatibilité

Le module est conçu pour être totalement transparent et résilient. 
* **Système SRA2 :** Vérifié et testé pour la version **13.2.1+**.
* **Fiches :** Support complet de la fiche V2 (`actor-character-sheet-v2.hbs`).

## Notes Techniques

L'identifiant du module est `sra2-enhancements`. Vos anciennes données (flags) initialement stockées sous `sra2-xp-cash` sont automatiquement migrées au lancement du monde pour éviter toute perte de progression lors de l'installation.
