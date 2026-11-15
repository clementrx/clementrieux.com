---
title: "Data science"
summary: "Depuis 2019, je transforme des données en décisions pour de grands groupes de l'énergie et des télécoms : prévisions, classification, analyse de texte, modèles mis en production. Je travaille en Python et en R, de la première exploration au pipeline qui tourne chaque matin."
order: 1
skills:
  - label: "Langages"
    items: ["Python", "R", "SQL"]
  - label: "Données"
    items: ["pandas", "Polars", "NumPy"]
  - label: "Machine learning"
    items:
      ["scikit-learn", "PyTorch", "TensorFlow", "LightGBM", "CatBoost", "XGBoost", "Optuna", "SHAP"]
  - label: "Séries temporelles"
    items: ["Prophet", "Chronos", "AutoGluon", "TimesFM"]
  - label: "Plateformes de données"
    items: ["Oracle", "Hive", "PySpark", "PostgreSQL"]
  - label: "Déploiement"
    items: ["GCP", "AWS", "Docker", "Linux", "Git", "CI"]
  - label: "Applications"
    items: ["R Shiny", "Dash", "Streamlit"]
  - label: "Fondamentaux"
    items: ["Mathématiques", "Statistiques", "Économétrie", "Informatique", "Finance"]
---

### Séries temporelles

La prévision est au cœur de mon travail. Je traite ce qui rend les séries réelles difficiles :

- **Changements de tendance**, **saisonnalité** et influence des **facteurs externes**.
- **Détection des valeurs aberrantes**, pour qu'une période anormale ne fausse pas tout le modèle.
- **Modèles et frameworks** : [Prophet](https://github.com/meta/prophet), [Chronos](https://github.com/amazon-science/chronos-forecasting), [AutoGluon](https://auto.gluon.ai/stable/index.html) et [TimesFM](https://github.com/google-research/timesfm).
- **Évaluation** : MAE, MAPE, MSE et RMSE, ainsi que des **métriques sur mesure** construites pour la problématique, car surestimer et sous-estimer coûtent rarement la même chose.

### Machine learning et deep learning

Les modèles que j'utilise, choisis selon le problème plutôt que par habitude :

- **Bibliothèques** : scikit-learn, PyTorch, TensorFlow, LightGBM, CatBoost et XGBoost.
- **Classification sur données tabulaires** : régression logistique, random forest, gradient boosting (LightGBM, CatBoost, XGBoost) et NGBoost pour des prédictions probabilistes.
- **Deep learning** : réseaux denses (MLP), TabNet, réseaux récurrents (RNN, LSTM), Transformers et mécanismes d'attention, embeddings d'entités, et CNN pour la vision par ordinateur (classification, détection d'objets, segmentation).
- **Learning to rank** : LambdaRank, YetiRank et XGBRanker, quand il faut ordonner des candidats entre eux plutôt que les juger un par un.
- **Modèles de classement probabilistes** : Plackett-Luce et Harville pour passer de scores à des probabilités d'ordre d'arrivée, notations Elo et TrueSkill.
- **Probabilités fiables** : calibration (isotonique, bêta), intervalles conformes (MAPIE) et détection des cas hors distribution.
- **Réglage et interprétation** : Optuna pour les hyperparamètres, SHAP pour expliquer les prédictions.

### Autres domaines de modélisation

- **Classification et scoring** : probabilités calibrées, métriques choisies selon le coût réel de chaque type d'erreur.
- **NLP** : classification de textes, extraction d'informations, traitement automatique des e-mails.
- **Apprentissage par renforcement** : décisions séquentielles où un agent apprend des conséquences de ses actions.
- **Économétrie et finance** : questions causales, données de panel, données de marché. Des backtests sans fuite temporelle, avec les coûts modélisés et une période hors échantillon gardée intacte jusqu'à la fin.

### Exploration et préparation des données

Avant tout modèle, comprendre les données et ce qu'elles racontent :

- **Compréhension du métier** : d'où viennent les données, comment elles sont produites et ce que les équipes en attendent, en échangeant avec ceux qui les connaissent le mieux.
- **Analyse exploratoire (EDA)** : distributions, valeurs manquantes, corrélations, ruptures et anomalies, avec des visualisations qui font apparaître les problèmes avant qu'ils ne faussent un modèle.
- **Nettoyage** : données incomplètes ou hétérogènes, doublons, cas particuliers métier, valeurs manquantes imputées sans utiliser d'information future.
- **Interprétation** : relier chaque constat à son contexte et le restituer clairement, pour que l'analyse serve une décision.
- **Préparation pour la modélisation** : feature engineering à partir de l'historique et du contexte, sélection de variables stable, toujours limitée à l'information disponible au moment de la décision.

### Déploiement

- **Cloud** : mise en production sur GCP et AWS.
- **Serveurs** : déploiement sur serveur Linux, conteneurisé avec Docker.
- **Pipelines** : traitements planifiés et automatisés, intégration continue.
- **Datamarts** : tables d'analyse prêtes à l'emploi pour les équipes métier.

### Applications

Des applications web qui mettent modèles et analyses entre les mains de personnes qui ne codent pas :

- **R Shiny** en R.
- **Dash** et **Streamlit** en Python.
