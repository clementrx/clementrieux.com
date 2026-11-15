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

### Cas concret : prédire les courses hippiques

Un projet personnel que je fais tourner en production depuis 2020. Chaque matin, un système estime pour chaque cheval de chaque course française sa probabilité de gagner ou de finir dans les premiers, afin d'aider à choisir ses paris. Le terrain est exigeant : six disciplines aux règles différentes (trot attelé et monté, plat, haies, steeple, cross), des données incomplètes et un marché des paris très efficace.

- **Données** : une collecte automatique quotidienne vers PostgreSQL, environ 4,7 millions de lignes (un cheval dans une course) depuis 2019.
- **Nettoyage** : retrait des non-partants, traitement d'une trentaine de codes d'abandon et de disqualification, imputations qui ne regardent que le passé, courses étrangères utilisées pour les historiques mais pas pour l'entraînement.
- **Variables** : 722 features en treize familles (cheval, jockey, entraîneur, course, classements Elo…), toutes calculées avec l'information disponible avant le départ. Aucune cote parmi elles, pour que le modèle reste indépendant du marché.
- **Sélection** : une sélection par discipline et par cible, en deux temps : présélection par importance dans un modèle LightGBM, puis test de stabilité sur cinq rééchantillonnages par blocs. Une variable n'est gardée que si elle ressort dans au moins 60 % d'entre eux.
- **Modèles** : 28 modèles de gradient boosting (7 segments × 4 cibles : gagnant, top 2, top 3, top 4), moyennés sur plusieurs graines, avec des probabilités calibrées, des intervalles conformes et une détection des cas hors distribution.
- **Validation** : découpage temporel, au moins trois graines avant d'annoncer un gain, résultats par discipline et jamais en moyenne globale, rejeu sur une période disjointe, et des tests automatiques qui bloquent toute fuite d'information future.
- **Production** : une seule commande, chaque matin, enchaîne la synchronisation des données, les contrôles de sécurité, le calcul des variables, les prédictions et une page de résultats lisible sur mobile. Une nouvelle version n'est mise en service qu'après une comparaison automatique avec celle en place.

**Stack** : Python, Polars, NumPy, scikit-learn, LightGBM, CatBoost, PostgreSQL, Parquet, pandera, Streamlit, pytest.

**Ce que j'en retiens** : la plupart des idées séduisantes ne survivent pas à un test honnête. Sur 556 combinaisons de paris qui semblaient rentables sur l'historique, aucune n'a tenu une fois rejouée sur une autre période. Savoir le mesurer, et l'écrire, fait partie du travail.

### Cas concret : un assistant RAG en sciences du sport

Un assistant qui répond aux questions de préparation physique en s'appuyant sur une base documentaire spécialisée : cours de préparation physique, protocoles d'entraînement, publications scientifiques, fiches d'exercices et documents de formation. L'objectif : des réponses précises et sourcées, fondées sur la littérature, plutôt que les généralités d'un modèle de langage laissé à lui-même.

- **Ingestion** : extraction du texte des PDF et des articles, nettoyage, découpage sémantique (chunking), enrichissement des métadonnées et calcul des embeddings.
- **Recherche** : une recherche sémantique et hybride, qui combine la proximité des embeddings et la recherche par mots-clés, suivie d'un reranking des passages les plus pertinents.
- **Génération** : un LLM rédige la réponse à partir des passages retrouvés et cite ses sources.
- **Évaluation** : pertinence de la recherche, apport du reranking, fidélité des réponses aux documents (faithfulness) et qualité des réponses, mesurées pour guider chaque optimisation.

### Du notebook à la production

- **Pipelines de production** planifiés, testés, surveillés et reproductibles.
- **Datamarts** : conception et construction de tables d'analyse que les équipes métier interrogent en autonomie.
- **Applications** R Shiny et Python qui mettent les modèles entre les mains de personnes qui ne codent pas.
- **Conception logicielle** : un code lisible, typé et testé, qu'un collègue peut maintenir sans moi.

### Comment je valide

- Des découpages apprentissage / test qui respectent le temps : aucune information future ne fuit dans l'entraînement.
- Une référence simple d'abord ; un modèle complexe n'est gardé que s'il la bat nettement.
- Chaque chiffre que j'annonce vient avec la commande qui l'a produit, y compris quand le résultat déçoit.
