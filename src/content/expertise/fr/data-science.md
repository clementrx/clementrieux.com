---
title: "Data science"
summary: "Depuis 2019, je transforme des données en décisions pour de grands groupes de l'énergie et des télécoms : prévisions, classification, analyse de texte, modèles mis en production. Je travaille en Python et en R, de la première exploration au pipeline qui tourne chaque matin."
order: 1
skills:
  - label: "Langages"
    items: ["Python", "R", "SQL"]
  - label: "Bibliothèques"
    items:
      [
        "pandas",
        "Polars",
        "NumPy",
        "scikit-learn",
        "Prophet",
        "Chronos",
        "AutoGluon",
        "TimesFM",
        "R Shiny",
      ]
  - label: "Plateformes de données"
    items: ["Oracle", "Hive", "PySpark", "PostgreSQL"]
  - label: "Déploiement"
    items: ["Docker", "AWS", "GCP", "Git", "CI"]
  - label: "Fondamentaux"
    items: ["Mathématiques", "Statistiques", "Économétrie", "Informatique", "Finance"]
---

### Séries temporelles

La prévision est au cœur de mon travail. Je traite ce qui rend les séries réelles difficiles :

- **Changements de tendance**, **saisonnalité** et influence des **facteurs externes**.
- **Détection des valeurs aberrantes**, pour qu'une période anormale ne fausse pas tout le modèle.
- **Modèles et frameworks** : [Prophet](https://github.com/meta/prophet), [Chronos](https://github.com/amazon-science/chronos-forecasting), [AutoGluon](https://auto.gluon.ai/stable/index.html) et [TimesFM](https://github.com/google-research/timesfm).
- **Évaluation** : MAE, MAPE, MSE et RMSE, ainsi que des **métriques sur mesure** construites pour la problématique, car surestimer et sous-estimer coûtent rarement la même chose.

### Modélisation

- **Classification et scoring** : probabilités calibrées, métriques choisies selon le coût réel de chaque type d'erreur.
- **NLP et RAG** : classification de textes, extraction d'informations, génération augmentée par la recherche dans des documents internes.
- **Machine learning et deep learning** : gradient boosting sur données tabulaires, réseaux de neurones pour la vision par ordinateur (classification, détection d'objets, segmentation).
- **Apprentissage par renforcement** : décisions séquentielles où un agent apprend des conséquences de ses actions.
- **Économétrie et finance** : questions causales, données de panel, données de marché. Des backtests sans fuite temporelle, avec les coûts modélisés et une période hors échantillon gardée intacte jusqu'à la fin.

### Du notebook à la production

- **Pipelines de production** planifiés, testés, surveillés et reproductibles.
- **Datamarts** : conception et construction de tables d'analyse que les équipes métier interrogent en autonomie.
- **Applications** R Shiny et Python qui mettent les modèles entre les mains de personnes qui ne codent pas.
- **Conception logicielle** : un code lisible, typé et testé, qu'un collègue peut maintenir sans moi.

### Comment je valide

- Des découpages apprentissage / test qui respectent le temps : aucune information future ne fuit dans l'entraînement.
- Une référence simple d'abord ; un modèle complexe n'est gardé que s'il la bat nettement.
- Chaque chiffre que j'annonce vient avec la commande qui l'a produit, y compris quand le résultat déçoit.
